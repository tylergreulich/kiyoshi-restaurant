<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class FoodItem extends Model
{
  protected $table = 'food_items';

  protected $fillable = [
    'title',
    'description',
    'price',
    'category_id',
    'id',
  ];

  public function categories()
  {
    return $this->belongsTo('App\FoodCategory');
  }
}
