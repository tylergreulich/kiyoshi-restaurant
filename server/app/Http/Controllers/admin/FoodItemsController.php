<?php

namespace App\Http\Controllers\admin;

use App\FoodItem;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class FoodItemsController extends Controller
{
  public function index()
  {
    $food_categories = FoodItem::All();

    return response()->json($food_categories);
  }

  public function create(Request $request)
  {
    $input = $request->json()->all();

    $food_item = new FoodItem();

    $food_item->title = $input["title"];
    $food_item->description = $input["description"];
    $food_item->price = $input["price"];
    $food_item->save();

    return $food_item;
  }

  public function update(Request $request)
  {
    $input = $request->json()->all();

    $food_item_id = $input["id"];

    $food_item = FoodItem::find($food_item_id);

    $food_item->title = $input['title'];
    $food_item->description = $input['description'];
    $food_item->price = $input['price'];

    $food_item->save();

    return $food_item;
  }
  public function delete(string $id)
  {
    $food_item = FoodItem::find($id);

    if (!$food_item) {
      abort(404, "Category not found");
    }

    $food_item->delete();

    return $food_item;
  }
}
