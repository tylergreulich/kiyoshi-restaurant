<?php

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Carbon\Carbon;

class FoodCategorySeeder extends Seeder
{
  /**
   * Run the database seeds.
   *
   * @return void
   */
  public function run()
  {
    DB::table('food_categories')->insert([
      'title' => 'Starters',
      'description' =>
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas consectetur vitae quam sed facilisis. Maecenas ut lectus pellentesque, dictum purus nec, facilisis elit. Nulla dictum mi sit amet placerat dictum. Nam dui lorem, congue a urna in, euismod lobortis ipsum. In tincidunt tempus neque vitae molestie. Mauris vel posuere lorem, eu feugiat massa. Duis euismod id leo id finibus. Pellentesque egestas odio ut efficitur aliquet.',
      'image_url' => '/img/CHIPS.png',
      'updated_at' => Carbon::now(),
      'created_at' => Carbon::now(),
    ]);
    DB::table('food_categories')->insert([
      'title' => 'burgers',
      'description' =>
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas consectetur vitae quam sed facilisis. Maecenas ut lectus pellentesque, dictum purus nec, facilisis elit. Nulla dictum mi sit amet placerat dictum. Nam dui lorem, congue a urna in, euismod lobortis ipsum. In tincidunt tempus neque vitae molestie. Mauris vel posuere lorem, eu feugiat massa. Duis euismod id leo id finibus. Pellentesque egestas odio ut efficitur aliquet.',
      'image_url' => '/img/hamburger-and-fries-png-4.png',
      'updated_at' => Carbon::now(),
      'created_at' => Carbon::now(),
    ]);
    DB::table('food_categories')->insert([
      'title' => 'entrees',
      'description' =>
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas consectetur vitae quam sed facilisis. Maecenas ut lectus pellentesque, dictum purus nec, facilisis elit. Nulla dictum mi sit amet placerat dictum. Nam dui lorem, congue a urna in, euismod lobortis ipsum. In tincidunt tempus neque vitae molestie. Mauris vel posuere lorem, eu feugiat massa. Duis euismod id leo id finibus. Pellentesque egestas odio ut efficitur aliquet.',
      'image_url' => '342-3422633_pork-entrees-steak-pork-png.png',
      'updated_at' => Carbon::now(),
      'created_at' => Carbon::now(),
    ]);
    DB::table('food_categories')->insert([
      'title' => 'sides',
      'description' =>
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas consectetur vitae quam sed facilisis. Maecenas ut lectus pellentesque, dictum purus nec, facilisis elit. Nulla dictum mi sit amet placerat dictum. Nam dui lorem, congue a urna in, euismod lobortis ipsum. In tincidunt tempus neque vitae molestie. Mauris vel posuere lorem, eu feugiat massa. Duis euismod id leo id finibus. Pellentesque egestas odio ut efficitur aliquet.',
      'image_url' => 'Download-Salad-Transparent-PNG.png',
      'updated_at' => Carbon::now(),
      'created_at' => Carbon::now(),
    ]);
    DB::table('food_categories')->insert([
      'title' => 'deserts',
      'description' =>
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas consectetur vitae quam sed facilisis. Maecenas ut lectus pellentesque, dictum purus nec, facilisis elit. Nulla dictum mi sit amet placerat dictum. Nam dui lorem, congue a urna in, euismod lobortis ipsum. In tincidunt tempus neque vitae molestie. Mauris vel posuere lorem, eu feugiat massa. Duis euismod id leo id finibus. Pellentesque egestas odio ut efficitur aliquet.',
      'image_url' => 'Download-Cupcake-PNG-Transparent-Image-420x190.png',
      'updated_at' => Carbon::now(),
      'created_at' => Carbon::now(),
    ]);
  }
}
