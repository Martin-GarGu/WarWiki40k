<?php

namespace Database\Seeders;

use App\Models\User;
// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        // DB::table('soldiers')->delete();
        // $this->call(SoldierSeeder::class);
        
        DB::table('factions')->delete();
        $this->call(FactionSeeder::class);
        DB::table('armies')->delete();
        $this->call(ArmySeeder::class);
        DB::table('squads')->delete();
        $this->call(SquadronSeeder::class);
        DB::table('soldiers')->delete();
        $this->call(SoldierSeeder::class);
        DB::table('specialrules')->delete();
        $this->call(SpecialRuleSeeder::class);
        DB::table('weapons')->delete();
        $this->call(WeaponSeeder::class);
        DB::table('weapon_specialrule')->delete();
        $this->call(WeaponSpecialRuleSeeder::class);
        DB::table('soldier_weapon')->delete();
        $this->call(SoldierWeaponSeeder::class);
        DB::table("keywords")->delete();
        $this->call(KeywordSeeder::class);
        DB::table("soldier_keyword")->delete();
        $this->call(SoldierKeywordSeeder::class);
        DB::table("users")->delete();
        $this->call(UserSeeder::class);
        
        // User::factory(10)->create();

        // User::factory()->create([
        //     'name' => 'Test User',
        //     'email' => 'test@example.com',
        // ]);
    }
}
