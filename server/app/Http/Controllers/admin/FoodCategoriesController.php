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

    $title = $input["title"];
    $description = $input["description"];
    $image_url = $input["image_url"];

    $category = new FoodCategory();

    $category->title = $title;
    $category->description = $description;
    $category->image_url = $image_url;
    $category->save();

    return $category;
  }

  public function edit(string $id)
  {
    $category = FoodCategory::find($id);

    return view('admin/food-categories/edit', [
      'category' => $category,
    ]);
  }
  public function update($id)
  {
    request()->validate([
      'title' => ['required', 'string', 'max:255'],
      'description' => ['required', 'string'],
      'image_url' => ['required', 'string'],
    ]);

    $category = FoodCategory::find($id);
    $category->title = request('title');
    $category->description = request('description');
    $category->image_url = request('image_url');
    $category->save();

    return redirect('/admin/food-categories/all');
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
