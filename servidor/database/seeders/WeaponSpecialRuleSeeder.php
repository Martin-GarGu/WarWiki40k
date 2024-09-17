<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class WeaponSpecialRuleSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */

     private $weaponspecialrules=[
        [
            'weapon_id' => '2',
            'specialrule_id' => '21',
            'type' => 'pentagon',
        ],
        [
            'weapon_id' => '4',
            'specialrule_id' => '3',
            'type' => '',
        ],
        [
            'weapon_id' => '5',
            'specialrule_id' => '21',
            'type' => 'pentagon',
        ],
        [
            'weapon_id' => '7',
            'specialrule_id' => '21',
            'type' => 'pentagon',
        ],
        [
            'weapon_id' => '7',
            'specialrule_id' => '1',
            'type' => '1',
        ],
        [
            'weapon_id' => '8',
            'specialrule_id' => '21',
            'type' => 'pentagon',
        ],
        [
            'weapon_id' => '8',
            'specialrule_id' => '1',
            'type' => '2',
        ],
        [
            'weapon_id' => '8',
            'specialrule_id' => '9',
            'type' => '',
        ],
        [
            'weapon_id' => '9',
            'specialrule_id' => '12',
            'type' => '5+',
        ],
        [
            'weapon_id' => '10',
            'specialrule_id' => '5',
            'type' => '',
        ],
        [
            'weapon_id' => '11',
            'specialrule_id' => '21',
            'type' => 'pentagon',
        ],
        [
            'weapon_id' => '11',
            'specialrule_id' => '25',
            'type' => 'circle',
        ],
        [
            'weapon_id' => '12',
            'specialrule_id' => '21',
            'type' => 'square',
        ],
        [
            'weapon_id' => '12',
            'specialrule_id' => '12',
            'type' => '5+',
        ],
        [
            'weapon_id' => '13',
            'specialrule_id' => '12',
            'type' => '5+',
        ],
        [
            'weapon_id' => '14',
            'specialrule_id' => '12',
            'type' => '5+',
        ],
        [
            'weapon_id' => '17',
            'specialrule_id' => '12',
            'type' => '5+',
        ],
        [
            'weapon_id' => '18',
            'specialrule_id' => '22',
            'type' => '',
        ],
     ];

    public function run(): void
    {
        //
    }
}
