<?php

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class RolesTableSeeder extends Seeder
{
  /**
   * Run the database seeds.
   *
   * @return void
   */
  public function run()
  {
    DB::table('roles')->insert([
      'title' => 'ADMIN',
    ]);

    DB::table('role_user')->insert([
      'role_id' => 1,
      'user_id' => 1,
    ]);
  }
}
