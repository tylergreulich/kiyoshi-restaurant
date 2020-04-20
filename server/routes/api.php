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
	return FoodCategory::All();
});
