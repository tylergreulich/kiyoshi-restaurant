<?php
namespace App\Http\Controllers;

use App\FoodCategory;

class FoodCategoriesController extends Controller
{
  public function allFoodCategories() {
    $food_categories = FoodCategory::All();

    return response()->json($food_categories);
  }
}