<?php

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Carbon\Carbon;

class FoodItemSeeder extends Seeder
{
  /**
   * Run the database seeds.
   *
   * @return void
   */
  public function run()
  {
    DB::table('food_items')->insert([
      'title' => 'Texas Burger',
      'description' =>
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas consectetur vitae quam sed facilisis. Maecenas ut lectus pellentesque, dictum purus nec, facilisis elit. Nulla dictum mi sit amet placerat dictum. Nam dui lorem, congue a urna in, euismod lobortis ipsum. In tincidunt tempus neque vitae molestie. Mauris vel posuere lorem, eu feugiat massa. Duis euismod id leo id finibus. Pellentesque egestas odio ut efficitur aliquet.',
      'image_url' => '/img/CHIPS.png',
      'price' => 9.99,
      'category' => 2,
      'updated_at' => Carbon::now(),
      'created_at' => Carbon::now(),
    ]);
  }
}
