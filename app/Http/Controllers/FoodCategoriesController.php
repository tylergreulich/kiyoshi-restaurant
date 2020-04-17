<?php
namespace App\Http\Controllers;

use App\FoodCategory;

class FoodCategoriesController extends Controller
{
  public function allFoodCategories() {
    $food_categories = FoodCategory::All();

    return $food_categories;

    return response()->json($food_categories);
  }
}