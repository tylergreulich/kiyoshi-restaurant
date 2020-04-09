<?php

namespace App\Http\Controllers\admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class ReservationsController extends Controller
{
  public function index()
  {
    return view('admin/reservations/all');
  }

  public function delete()
  {
    return view('admin/reservations/delete');
  }
}
