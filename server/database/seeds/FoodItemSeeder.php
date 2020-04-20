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
      'title' => 'Edamame',
      'description' =>
        'Steamed organic Soybeans with Sea Salt',
      'image_url' => '/img/Download-Salad-Transparent-PNG.png',
      'price' => 2.99,
      'category_id' => 1,
      'updated_at' => Carbon::now(),
      'created_at' => Carbon::now(),
    ]);
    DB::table('food_items')->insert([
      'title' => 'Spring Rolls',
      'description' =>
        '',
      'image_url' => '/img/Download-Salad-Transparent-PNG.png',
      'price' => 2.99,
      'category_id' => 1,
      'updated_at' => Carbon::now(),
      'created_at' => Carbon::now(),
    ]);
    DB::table('food_items')->insert([
      'title' => 'Gyoza (8)',
      'description' =>
        'Beef and Vegetable Dumplings',
      'image_url' => '/img/Download-Salad-Transparent-PNG.png',
      'price' => 5.25,
      'category_id' => 1,
      'updated_at' => Carbon::now(),
      'created_at' => Carbon::now(),
    ]);
    DB::table('food_items')->insert([
      'title' => 'Calamari',
      'description' =>
        'Lightly fried Calamari with Wasabi mayo and Spicy Teriyaki sauce',
      'image_url' => '/img/Download-Salad-Transparent-PNG.png',
      'price' => 6.69,
      'category_id' => 1,
      'updated_at' => Carbon::now(),
      'created_at' => Carbon::now(),
    ]);
    DB::table('food_items')->insert([
      'title' => 'Shrimp Tempura (5)',
      'description' =>
        'Fried Shrimp with Vegetables',
      'image_url' => '/img/Download-Salad-Transparent-PNG.png',
      'price' => 6.69,
      'category_id' => 1,
      'updated_at' => Carbon::now(),
      'created_at' => Carbon::now(),
    ]);
    DB::table('food_items')->insert([
      'title' => 'Croquette',
      'description' =>
        'Deep fried Japanese styled Mashed Potato',
      'image_url' => '/img/Download-Salad-Transparent-PNG.png',
      'price' =>  2.29,
      'category_id' => 1,
      'updated_at' => Carbon::now(),
      'created_at' => Carbon::now(),
    ]);
    DB::table('food_items')->insert([
      'title' => 'Ahi Tuna',
      'description' =>
        'Ahi Tuna with Avocado and Crabmeat',
      'image_url' => '/img/Download-Salad-Transparent-PNG.png',
      'price' => 10.99,
      'category_id' => 2,
      'updated_at' => Carbon::now(),
      'created_at' => Carbon::now(),
    ]);
    DB::table('food_items')->insert([
      'title' => 'Aka Hana',
      'description' =>
        'Shrimp Tempura with Avocado and Spicy Crabmeat',
      'image_url' => '/img/Download-Salad-Transparent-PNG.png',
      'price' => 10.99,
      'category_id' => 2,
      'updated_at' => Carbon::now(),
      'created_at' => Carbon::now(),
    ]);
    DB::table('food_items')->insert([
      'title' => 'Chicken',
      'description' =>
        'Charbroiled Chicken with Teriyaki Sauce and Rice',
      'image_url' => '/img/Download-Salad-Transparent-PNG.png',
      'price' => 6.89,
      'category_id' => 3,
      'updated_at' => Carbon::now(),
      'created_at' => Carbon::now(),
    ]);
    DB::table('food_items')->insert([
      'title' => 'Beef',
      'description' =>
        'Charbroiled Beef with Teriyaki Sauce and Rice',
      'image_url' => '/img/Download-Salad-Transparent-PNG.png',
      'price' => 7.29,
      'category_id' => 3,
      'updated_at' => Carbon::now(),
      'created_at' => Carbon::now(),
    ]);
    DB::table('food_items')->insert([
      'title' => 'Chicken & Beef',
      'description' =>
        'Chambroiled Beef and Chicken with Teriyaki Sauce and Rice',
      'image_url' => '/img/Download-Salad-Transparent-PNG.png',
      'price' => 7.49,
      'category_id' => 3,
      'updated_at' => Carbon::now(),
      'created_at' => Carbon::now(),
    ]);
    DB::table('food_items')->insert([
      'title' => 'Kiyoshi Bowl',
      'description' =>
        'Cucumber, Avocado with Crabmeat over Rice',
      'image_url' => '/img/Download-Salad-Transparent-PNG.png',
      'price' => 7.39,
      'category_id' => 3,
      'updated_at' => Carbon::now(),
      'created_at' => Carbon::now(),
    ]);
    DB::table('food_items')->insert([
      'title' => 'Chicken Katsu',
      'description' =>
        'Deep fried Chicken Breast over Rice',
      'image_url' => '/img/Download-Salad-Transparent-PNG.png',
      'price' => 9.79,
      'category_id' => 3,
      'updated_at' => Carbon::now(),
      'created_at' => Carbon::now(),
    ]);
    DB::table('food_items')->insert([
      'title' => 'Veggie Bowl',
      'description' =>
        'Rice and steamed Vegetables',
      'image_url' => '/img/Download-Salad-Transparent-PNG.png',
      'price' => 4.49,
      'category_id' => 4,
      'updated_at' => Carbon::now(),
      'created_at' => Carbon::now(),
    ]);
    DB::table('food_items')->insert([
      'title' => 'Chicken Veggie',
      'description' =>
        'Veggie Bowl with Chicken',
      'image_url' => '/img/Download-Salad-Transparent-PNG.png',
      'price' => 7.89,
      'category_id' => 4,
      'updated_at' => Carbon::now(),
      'created_at' => Carbon::now(),
    ]);
    DB::table('food_items')->insert([
      'title' => 'Beef Veggie',
      'description' =>
        'Veggie Bowl with Beef',
      'image_url' => '/img/Download-Salad-Transparent-PNG.png',
      'price' => 8.29,
      'category_id' => 4,
      'updated_at' => Carbon::now(),
      'created_at' => Carbon::now(),
    ]);
    DB::table('food_items')->insert([
      'title' => 'Chicken & Beef Veggie',
      'description' =>
        'Veggie Bowl with Chicken and Beef',
      'image_url' => '/img/Download-Salad-Transparent-PNG.png',
      'price' => 8.49,
      'category_id' => 4,
      'updated_at' => Carbon::now(),
      'created_at' => Carbon::now(),
    ]);
    DB::table('food_items')->insert([
      'title' => 'Tofu Cutlet',
      'description' =>
        'Fried Tofu with Vegetables',
      'price' => 8.49,
      'category_id' => 4,
      'updated_at' => Carbon::now(),
      'created_at' => Carbon::now(),
    ]);
    DB::table('food_items')->insert([
      'title' => 'California Roll',
      'description' =>
        'Avocado and Crabmeat inside',
      'image_url' => '/img/Download-Salad-Transparent-PNG.png',
      'price' => 3.69,
      'category_id' => 5,
      'updated_at' => Carbon::now(),
      'created_at' => Carbon::now(),
    ]);
    DB::table('food_items')->insert([
      'title' => 'Spicy California Roll',
      'description' =>
        'Avocado and Spicy Crabmeat inside',
      'image_url' => '/img/Download-Salad-Transparent-PNG.png',
      'price' => 3.99,
      'category_id' => 5,
      'updated_at' => Carbon::now(),
      'created_at' => Carbon::now(),
    ]);
    DB::table('food_items')->insert([
      'title' => 'Sumo Crunch Roll',
      'description' =>
        'Avocado, Crabmeat, and Shrimp Tempura inside',
      'image_url' => '/img/Download-Salad-Transparent-PNG.png',
      'price' => 4.79,
      'category_id' => 5,
      'updated_at' => Carbon::now(),
      'created_at' => Carbon::now(),
    ]);
    DB::table('food_items')->insert([
      'title' => 'Avocado Roll',
      'description' =>
        'California Roll with Avocado on top with Eel sauce',
      'image_url' => '/img/Download-Salad-Transparent-PNG.png',
      'price' => 4.69,
      'category_id' => 5,
      'updated_at' => Carbon::now(),
      'created_at' => Carbon::now(),
    ]);
    DB::table('food_items')->insert([
      'title' => 'Dragon Roll',
      'description' =>
        'California Roll inside, Eel and Avocado on top with Eel sauce',
      'image_url' => '/img/Download-Salad-Transparent-PNG.png',
      'price' => 9.49,
      'category_id' => 5,
      'updated_at' => Carbon::now(),
      'created_at' => Carbon::now(),
    ]);
    DB::table('food_items')->insert([
      'title' => 'Vegas Roll',
      'description' =>
        'Cream cheese, Avocado, and Crabmeat inside. Deep fried with Spicy Mayo and Eel sauce',
      'image_url' => '/img/Download-Salad-Transparent-PNG.png',
      'price' => 9.49,
      'category_id' => 5,
      'updated_at' => Carbon::now(),
      'created_at' => Carbon::now(),
    ]);
    DB::table('food_items')->insert([
      'title' => 'Philly Roll',
      'description' =>
        'Cream cheese, Avocado, and Crabmeat inside with Salmon on top',
      'image_url' => '/img/Download-Salad-Transparent-PNG.png',
      'price' => 10.49,
      'category_id' => 5,
      'updated_at' => Carbon::now(),
      'created_at' => Carbon::now(),
    ]);
    DB::table('food_items')->insert([
      'title' => 'Lani Roll',
      'description' =>
        'California Roll inside with Yellow Fin Tuna on top',
      'image_url' => '/img/Download-Salad-Transparent-PNG.png',
      'price' => 9.89,
      'category_id' => 5,
      'updated_at' => Carbon::now(),
      'created_at' => Carbon::now(),
    ]);
    DB::table('food_items')->insert([
      'title' => 'Udon',
      'description' => '',
      'image_url' => '/img/Download-Salad-Transparent-PNG.png',
      'price' => 6.79,
      'category_id' => 6,
      'updated_at' => Carbon::now(),
      'created_at' => Carbon::now(),
    ]);
    DB::table('food_items')->insert([
      'title' => 'Chiken Udon',
      'description' => 'Japanese Udon with Chicken',
      'image_url' => '/img/Download-Salad-Transparent-PNG.png',
      'price' => 7.79,
      'category_id' => 6,
      'updated_at' => Carbon::now(),
      'created_at' => Carbon::now(),
    ]);
    DB::table('food_items')->insert([
      'title' => 'Beef Udon',
      'description' => '',
      'image_url' => '/img/Download-Salad-Transparent-PNG.png',
      'price' => 7.79,
      'category_id' => 6,
      'updated_at' => Carbon::now(),
      'created_at' => Carbon::now(),
    ]);
    DB::table('food_items')->insert([
      'title' => 'Shrimp Tempura Udon',
      'description' => 'Japanese Udon with Shrimp Tempura',
      'image_url' => '/img/Download-Salad-Transparent-PNG.png',
      'price' => 8.29,
      'category_id' => 6,
      'updated_at' => Carbon::now(),
      'created_at' => Carbon::now(),
    ]);
    DB::table('food_items')->insert([
      'title' => 'Chicken Yakisoba',
      'description' => 'Thinly sliced Chicken with cabbage, onions, and bean sprouts',
      'image_url' => '/img/Download-Salad-Transparent-PNG.png',
      'price' => 8.69,
      'category_id' => 6,
      'updated_at' => Carbon::now(),
      'created_at' => Carbon::now(),
    ]);
    DB::table('food_items')->insert([
      'title' => 'Beef Yakisoba',
      'description' => '',
      'image_url' => '/img/Download-Salad-Transparent-PNG.png',
      'price' => 9.29,
      'category_id' => 6,
      'updated_at' => Carbon::now(),
      'created_at' => Carbon::now(),
    ]);
    DB::table('food_items')->insert([
      'title' => 'Shrimp Yakisoba',
      'description' => '',
      'image_url' => '/img/Download-Salad-Transparent-PNG.png',
      'price' => 9.79,
      'category_id' => 6,
      'updated_at' => Carbon::now(),
      'created_at' => Carbon::now(),
    ]);
  }
}
