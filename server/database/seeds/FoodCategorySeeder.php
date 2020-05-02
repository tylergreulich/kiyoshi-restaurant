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
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi omnis iste ab deleniti cupiditate architecto officia aspernatur nulla iusto delectus doloremque possimus recusandae, reiciendis aliquam vel voluptas repellendus natus nihil?',
      'image_url' => '/img/spring-rolls.png',
      'updated_at' => Carbon::now(),
      'created_at' => Carbon::now()->toDateString(),
    ]);
    DB::table('food_categories')->insert([
      'title' => 'Sushi Burritos',
      'description' =>
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi omnis iste ab deleniti cupiditate architecto officia aspernatur nulla iusto delectus doloremque possimus recusandae, reiciendis aliquam vel voluptas repellendus natus nihil?',
      'image_url' => '/img/sushi-burrito.png',
      'updated_at' => Carbon::now(),
      'created_at' => Carbon::now()->toDateString(),
    ]);
    DB::table('food_categories')->insert([
      'title' => 'Teriyaki Bowls',
      'description' =>
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi omnis iste ab deleniti cupiditate architecto officia aspernatur nulla iusto delectus doloremque possimus recusandae, reiciendis aliquam vel voluptas repellendus natus nihil?',
      'image_url' => '/img/Chicken-Rice-Bowl-800x475.png',
      'updated_at' => Carbon::now(),
      'created_at' => Carbon::now()->toDateString(),
    ]);
    DB::table('food_categories')->insert([
      'title' => 'Teriyaki Veggie Bowls',
      'description' =>
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi omnis iste ab deleniti cupiditate architecto officia aspernatur nulla iusto delectus doloremque possimus recusandae, reiciendis aliquam vel voluptas repellendus natus nihil?',
      'image_url' => '/img/Vegetable-Teriyaki-Bowl.png',
      'updated_at' => Carbon::now(),
      'created_at' => Carbon::now()->toDateString(),
    ]);
    DB::table('food_categories')->insert([
      'title' => 'Sushi Rolls',
      'description' =>
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi omnis iste ab deleniti cupiditate architecto officia aspernatur nulla iusto delectus doloremque possimus recusandae, reiciendis aliquam vel voluptas repellendus natus nihil?',
      'image_url' => '/img/sushi-rolls.png',
      'updated_at' => Carbon::now(),
      'created_at' => Carbon::now()->toDateString(),
    ]);
    DB::table('food_categories')->insert([
      'title' => 'Noodles',
      'description' =>
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi omnis iste ab deleniti cupiditate architecto officia aspernatur nulla iusto delectus doloremque possimus recusandae, reiciendis aliquam vel voluptas repellendus natus nihil?',
      'image_url' => '/img/Noodles-PNG-Picture.png',
      'updated_at' => Carbon::now(),
      'created_at' => Carbon::now()->toDateString(),
    ]);
  }
}
