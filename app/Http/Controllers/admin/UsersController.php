<?php

namespace App\Http\Controllers\admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class UsersController extends Controller
{
  public function all()
  {
    return view('admin/users/all');
  }

  public function create()
  {
    return view('admin/users/create');
  }

  public function delete()
  {
    return view('admin/users/delete');
  }
}
