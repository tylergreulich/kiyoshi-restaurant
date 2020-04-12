<?php

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\DB;
use Carbon\Carbon;

class UsersTableSeeder extends Seeder
{
  /**
   * Run the database seeds.
   *
   * @return void
   */
  public function run()
  {
    DB::table('users')->insert([
      'fname' => 'Austin',
      'lname' => 'Davis',
      'email' => 'austindavis@gmail.com',
      'password' => Hash::make('12345678'),
      'updated_at' => Carbon::now(),
      'created_at' => Carbon::now(),
    ]);

    DB::table('users')->insert([
      'fname' => 'Kai',
      'lname' => 'Schussler',
      'email' => 'kaischussler@gmail.com',
      'password' => Hash::make('12345678'),
      'updated_at' => Carbon::now(),
      'created_at' => Carbon::now(),
    ]);
  }
}
