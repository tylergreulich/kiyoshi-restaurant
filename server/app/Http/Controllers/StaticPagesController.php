<?php

namespace App\Http\Controllers;

use App\FoodItem;
use App\FoodCategory;
use Illuminate\Http\Request;

class StaticPagesController extends Controller
{
  public function index()
  {
    return view('index');
  }

  // public function home()
  // {
  //   $food_categories = FoodCategory::All();

  //   return response()->json($food_categories);
  // }

  public function about()
  {
    return view('pages/about');
  }

  public function contact()
  {
    return view('pages/contact');
  }

  public function offers()
  {
    return view('pages/offers');
  }

  public function singleMenu($id)
  {
    $food_items = FoodItem::where('category_id', $id)->get();
    $food_category = FoodCategory::find($id);

    return view('menu/single-menu', [
      'food_items' => $food_items,
      'food_category' => $food_category,
    ]);
  }
}
