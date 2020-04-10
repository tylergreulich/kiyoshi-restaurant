<?php

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\DB;

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
    ]);
  }
}
