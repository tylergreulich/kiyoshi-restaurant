<?php

use Illuminate\Support\Facades\Route;

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
Route::get('/waitlist', 'StaticPagesController@waitlist');
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

// Admin Authentication
Route::get('/register', function () {
  return view('admin/register');
});

Route::get('/login', function () {
  return view('admin/login');
});
