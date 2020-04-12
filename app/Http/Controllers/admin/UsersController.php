<?php

namespace App\Http\Controllers\admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\User;
use App\Role;
use Illuminate\Support\Facades\Hash;

class UsersController extends Controller
{
  public function __construct()
  {
    $this->middleware('auth');
  }

  public function all()
  {
    $users = User::paginate(10);
    return view('admin/users/all', [
      'users' => $users,
    ]);
  }

  public function create()
  {
    $roles = Role::All();
    return view('admin/users/create', [
      'roles' => $roles,
    ]);
  }

  public function edit($id)
  {
    $user = User::find($id);
    $roles = Role::All();

    return view('admin/users/edit', [
      'user' => $user,
      'roles' => $roles,
    ]);
  }

  public function update($id)
  {
    request()->validate([
      'fname' => ['required', 'string', 'max:255'],
      'lname' => ['required', 'string', 'max:255'],
      'email' => ['required', 'string', 'email', 'max:255', 'unique:users'],
      'password' => ['required', 'string', 'min:8', 'confirmed'],
      'role_id' => ['required'],
    ]);

    $user = User::find($id);
    $user->fname = request('fname');
    $user->lname = request('lname');
    $user->email = request('email');

    $newPassword = request('password');

    if ($newPassword) {
      $user->password = Hash::make($newPassword);
    }

    $user->save();
    $user->roles()->sync([request('role_id')]);

    return redirect('/admin/users');
  }

  public function store()
  {
    $user = new User();
    $user->fname = request('fname');
    $user->lname = request('lname');
    $user->email = request('email');
    $user->password = Hash::make(request('password'));
    $user->save();
    $user->roles()->attach(request('role_id'));

    return redirect('/admin/users/edit');
  }

  public function delete($id)
  {
    $user = User::find($id);

    $user->delete();

    return redirect('/admin/users');
  }
}
