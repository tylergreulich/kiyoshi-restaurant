<?php

use Illuminate\Support\Facades\Route;
use Illuminate\Support\Facades\Auth;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

// Static Pages
Route::get('/', 'StaticPagesController@home');
Route::get('/about', 'StaticPagesController@about');
Route::get('/contact', 'StaticPagesController@contact');
Route::get('/reservations', 'StaticPagesController@reservations');
Route::get('/offers', 'StaticPagesController@offers');
Route::get('/menu', 'StaticPagesController@menu');
Route::get('/menu/{slug}', 'StaticPagesController@singleMenu');

// Admin Dashboard
Route::get('/admin', 'admin\AdminController@dashboard');

Route::get('/admin/users', function () {
  return view('admin/users');
});

// Admin Food Categories
Route::get('/admin/food-categories', 'admin\FoodCategoriesController@index');
Route::get(
  '/admin/food-categories/create',
  'admin\FoodCategoriesController@create'
);
Route::get(
  '/admin/food-categories/{id}/edit',
  'admin\FoodCategoriesController@edit'
);

// Admin Food Items
Route::get('/admin/food-items', 'admin\FoodItemsController@index');
Route::get('/admin/food-items/create', 'admin\FoodItemsController@create');
Route::get('/admin/food-items/edit', 'admin\FoodItemsController@edit');

// Admin Members
Route::get('/admin/members', 'admin\MemberController@index');
Route::get('admin/members/{id}/delete', 'admin\MemberController@delete');

// Admin Reservations
Route::get('admin/reservations', 'admin\ReservationsController@index');
Route::delete(
  'admin/reservations/{id}/delete',
  'admin\ReservationsController@delete'
);

// Admin users
Route::get('admin/users', 'admin\UsersController@all');
Route::get('admin/users/create', 'admin\UsersController@create');
Route::get('admin/users/{id}/edit', 'admin\UsersController@edit');
Route::put('admin/users/{id}', 'admin\UsersController@update');
Route::delete('admin/users/{id}/delete', 'admin\UsersController@delete');

// Admin Authentication
Route::get('/register', function () {
  return view('/auth/register');
});

Route::get('/login', function () {
  return view('/auth/login');
});

Auth::routes();

Route::get('/home', 'HomeController@index')->name('home');
