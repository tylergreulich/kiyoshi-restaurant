<?php

namespace App\Http\Controllers;

use App\FoodItem;
use App\FoodCategory;
use Illuminate\Http\Request;

class StaticPagesController extends Controller
{
  public function home()
  {
    $categories = FoodCategory::All();

    return view('home', [
      'categories' => $categories,
    ]);
  }

  public function about()
  {
    return view('pages/about');
  }

  public function reservations()
  {
    return view('pages/reservations');
  }

  public function contact()
  {
    return view('pages/contact');
  }

  public function offers()
  {
    return view('pages/offers');
  }

  public function menu()
  {
    return view('menu/index');
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
