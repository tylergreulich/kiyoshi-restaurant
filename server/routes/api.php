<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\FoodCategory;
use App\FoodItem;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});

Route::get('/menu', function() {
    $food_items = FoodItem::All();

    $food_categories = FoodCategory::All();

		foreach ($food_items as $food_item) {
			foreach ($food_categories as $food_category) {
				if ($food_item->category_id === $food_category->id) {
					$food_item->category_title = $food_category->title;
				}
			}
		}

		return $food_items;
});

Route::get('/menu-preview', function() {
	echo("Hello there");
});

// Food Categories
Route::get(
  '/food-categories/all',
  'admin\FoodCategoriesController@index'
);

Route::post(
  '/food-categories/create/',
  'admin\FoodCategoriesController@create'
);

Route::put(
  '/food-categories/update/',
  'admin\FoodCategoriesController@update'
);

Route::delete(
  '/food-categories/{id}/delete',
  'admin\FoodCategoriesController@delete'
);

// Food Items
Route::get(
  '/food-items/all',
  'admin\FoodItemsController@index'
);

Route::post(
  '/food-items/create/',
  'admin\FoodItemsController@create'
);

Route::put(
  '/food-items/update/',
  'admin\FoodItemsController@update'
);

Route::delete(
  '/food-items/{id}/delete',
  'admin\FoodItemsController@delete'
);


Route::post('/login/{loginPayload}', function(Request $request) {
	$request->validate([
		'loginPayload.email' => 'required',
		'loginPayload.password' => 'required'
	]);
});

Route::group([

    'middleware' => 'api',
    // 'namespace' => 'App\Http\Controllers',
    'prefix' => 'auth'

], function ($router) {

    Route::post('login', 'AuthController@login');
    Route::post('logout', 'AuthController@logout');
    Route::post('refresh', 'AuthController@refresh');
    Route::post('me', 'AuthController@me');

});
