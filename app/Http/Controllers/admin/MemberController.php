<?php

namespace App\Http\Controllers\admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class MemberController extends Controller
{
  public function __construct() 
  {
    $this->middleware('auth');
  }

  public function index()
  {
    return view('admin/members/all');
  }

  public function delete()
  {
    return view('admin/members/delete');
  }
}
