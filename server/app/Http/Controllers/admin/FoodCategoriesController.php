<?php

namespace App\Http\Controllers\admin;

use App\FoodCategory;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class FoodCategoriesController extends Controller
{
  public function index()
  {
    $food_categories = FoodCategory::All();

    return response()->json($food_categories);
  }

  public function create(Request $request)
  {
    $input = $request->json()->all();

    $category = new FoodCategory();

    $category->title = $input["title"];
    $category->description = $input["description"];
    $category->image_url = $input["image_url"];
    $category->save();

    return $category;
  }

  public function update(Request $request)
  {
    $input = $request->json()->all();

    $category_id = $input["id"];

    $category = FoodCategory::find($category_id);

    $category->title = $input['title'];
    $category->description = $input['description'];
    $category->image_url = $input['image_url'];

    $category->save();

    return $category;
  }
  public function delete(string $id)
  {
    $category = FoodCategory::find($id);

    if (!$category) {
      abort(404, "Category not found");
    }

    $category->delete();

    return $category;
  }
}
