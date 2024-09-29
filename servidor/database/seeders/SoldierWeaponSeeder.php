<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\Weapon;
use App\Models\Soldier;

class SoldierWeaponSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */

     private $soldierweapons=[
        [
            'soldier_id' => 1,
            'weapon_id' => 1,
        ],
        [
            'soldier_id' => 1,
            'weapon_id' => 2,
        ],
        [
            'soldier_id' => 1,
            'weapon_id' => 3,
        ],
        [
            'soldier_id' => 1,
            'weapon_id' => 4,
        ],
        [
            'soldier_id' => 2,
            'weapon_id' => 5,
        ],
        [
            'soldier_id' => 2,
            'weapon_id' => 6,
        ],
        [
            'soldier_id' => 2,
            'weapon_id' => 7,
        ],
        [
            'soldier_id' => 2,
            'weapon_id' => 8,
        ],
        [
            'soldier_id' => 2,
            'weapon_id' => 3,
        ],
        [
            'soldier_id' => 2,
            'weapon_id' => 9,
        ],
        [
            'soldier_id' => 3,
            'weapon_id' => 2,
        ],
        [
            'soldier_id' => 3,
            'weapon_id' => 10,
        ],
        [
            'soldier_id' => 4,
            'weapon_id' => 11,
        ],
        [
            'soldier_id' => 4,
            'weapon_id' => 3,
        ],
        [
            'soldier_id' => 5,
            'weapon_id' => 2,
        ],
        [
            'soldier_id' => 5,
            'weapon_id' => 3,
        ],
        [
            'soldier_id' => 6,
            'weapon_id' => 12,
        ],
        [
            'soldier_id' => 6,
            'weapon_id' => 13,
        ],
        [
            'soldier_id' => 7,
            'weapon_id' => 2,
        ],
        [
            'soldier_id' => 7,
            'weapon_id' => 3,
        ],
        [
            'soldier_id' => 8,
            'weapon_id' => 2,
        ],
        [
            'soldier_id' => 8,
            'weapon_id' => 14,
        ],
        [
            'soldier_id' => 9,
            'weapon_id' => 15,
        ],
        [
            'soldier_id' => 10,
            'weapon_id' => 2,
        ],
        [
            'soldier_id' => 10,
            'weapon_id' => 16,
        ],
        [
            'soldier_id' => 11,
            'weapon_id' => 2,
        ],
        [
            'soldier_id' => 11,
            'weapon_id' => 17,
        ],
        [
            'soldier_id' => 12,
            'weapon_id' => 18,
        ],
        [
            'soldier_id' => 12,
            'weapon_id' => 19,
        ],
        [
            'soldier_id' => 13,
            'weapon_id' => 20,
        ],
        [
            'soldier_id' => 13,
            'weapon_id' => 21,
        ],
        [
            'soldier_id' => 13,
            'weapon_id' => 22,
        ],
        [
            'soldier_id' => 14,
            'weapon_id' => 23,
        ],
        [
            'soldier_id' => 15,
            'weapon_id' => 24,
        ],
        [
            'soldier_id' => 15,
            'weapon_id' => 25,
        ],
        [
            'soldier_id' => 16,
            'weapon_id' => 28,
        ],
        [
            'soldier_id' => 16,
            'weapon_id' => 3,
        ],
        [
            'soldier_id' => 17,
            'weapon_id' => 27,
        ],
        [
            'soldier_id' => 17,
            'weapon_id' => 28,
        ],
        [
            'soldier_id' => 18,
            'weapon_id' => 29,
        ],
        [
            'soldier_id' => 18,
            'weapon_id' => 30,
        ],
        [
            'soldier_id' => 18,
            'weapon_id' => 27,
        ],
        [
            'soldier_id' => 18,
            'weapon_id' => 3,
        ],
        [
            'soldier_id' => 19,
            'weapon_id' => 31,
        ],
        [
            'soldier_id' => 19,
            'weapon_id' => 32,
        ],
        [
            'soldier_id' => 19,
            'weapon_id' => 3,
        ],
        [
            'soldier_id' => 20,
            'weapon_id' => 33,
        ],
        [
            'soldier_id' => 20,
            'weapon_id' => 34,
        ],
        [
            'soldier_id' => 20,
            'weapon_id' => 35,
        ],
        [
            'soldier_id' => 20,
            'weapon_id' => 36,
        ],
        [
            'soldier_id' => 21,
            'weapon_id' => 33,
        ],
        [
            'soldier_id' => 21,
            'weapon_id' => 34,
        ],
        [
            'soldier_id' => 21,
            'weapon_id' => 37,
        ],
        [
            'soldier_id' => 22,
            'weapon_id' => 33,
        ],
        [
            'soldier_id' => 22,
            'weapon_id' => 34,
        ],
        [
            'soldier_id' => 22,
            'weapon_id' => 35,
        ],
        [
            'soldier_id' => 23,
            'weapon_id' => 38,
        ],
        [
            'soldier_id' => 23,
            'weapon_id' => 39,
        ],
        [
            'soldier_id' => 23,
            'weapon_id' => 40,
        ],
        [
            'soldier_id' => 23,
            'weapon_id' => 35,
        ],
        [
            'soldier_id' => 24,
            'weapon_id' => 33,
        ],
        [
            'soldier_id' => 24,
            'weapon_id' => 34,
        ],
        [
            'soldier_id' => 24,
            'weapon_id' => 35,
        ],
        [
            'soldier_id' => 25,
            'weapon_id' => 41,
        ],
        [
            'soldier_id' => 26,
            'weapon_id' => 33,
        ],
        [
            'soldier_id' => 26,
            'weapon_id' => 34,
        ],
        [
            'soldier_id' => 26,
            'weapon_id' => 35,
        ],
        [
            'soldier_id' => 27,
            'weapon_id' => 42,
        ],
        [
            'soldier_id' => 27,
            'weapon_id' => 35,
        ],
        [
            'soldier_id' => 28,
            'weapon_id' => 43,
        ],
        [
            'soldier_id' => 28,
            'weapon_id' => 35,
        ],
        [
            'soldier_id' => 29,
            'weapon_id' => 44,
        ],
        [
            'soldier_id' => 30,
            'weapon_id' => 33,
        ],
        [
            'soldier_id' => 30,
            'weapon_id' => 34,
        ],
        [
            'soldier_id' => 30,
            'weapon_id' => 35,
        ],
        [
            'soldier_id' => 31,
            'weapon_id' => 33,
        ],
        [
            'soldier_id' => 31,
            'weapon_id' => 34,
        ],
        [
            'soldier_id' => 31,
            'weapon_id' => 35,
        ],
        // Siguiente imperial navy breacher
        [
            'soldier_id' => 32,
            'weapon_id' => 5,
        ],
        [
            'soldier_id' => 32,
            'weapon_id' => 46,
        ],
        [
            'soldier_id' => 32,
            'weapon_id' => 47,
        ],
        [
            'soldier_id' => 32,
            'weapon_id' => 48,
        ],
        [
            'soldier_id' => 32,
            'weapon_id' => 49,
        ],
        [
            'soldier_id' => 32,
            'weapon_id' => 50,
        ],
        [
            'soldier_id' => 32,
            'weapon_id' => 51,
        ],
        [
            'soldier_id' => 33,
            'weapon_id' => 47,
        ],
        [
            'soldier_id' => 33,
            'weapon_id' => 48,
        ],
        [
            'soldier_id' => 33,
            'weapon_id' => 50,
        ],
        [
            'soldier_id' => 34,
            'weapon_id' => 2,
        ],
        [
            'soldier_id' => 34,
            'weapon_id' => 51,
        ],
        [
            'soldier_id' => 36,
            'weapon_id' => 52,
        ],
        [
            'soldier_id' => 36,
            'weapon_id' => 53,
        ],
        [
            'soldier_id' => 36,
            'weapon_id' => 54,
        ],
        [
            'soldier_id' => 38,
            'weapon_id' => 55,
        ],
        [
            'soldier_id' => 38,
            'weapon_id' => 47,
        ],
        [
            'soldier_id' => 38,
            'weapon_id' => 48,
        ],
        [
            'soldier_id' => 38,
            'weapon_id' => 50,
        ],
        [
            'soldier_id' => 39,
            'weapon_id' => 56,
        ],
        [
            'soldier_id' => 39,
            'weapon_id' => 57,
        ],
        [
            'soldier_id' => 39,
            'weapon_id' => 58,
        ],
        [
            'soldier_id' => 39,
            'weapon_id' => 59,
        ],
        [
            'soldier_id' => 39,
            'weapon_id' => 3,
        ],
        [
            'soldier_id' => 40,
            'weapon_id' => 2,
        ],
        [
            'soldier_id' => 40,
            'weapon_id' => 60,
        ],
        [
            'soldier_id' => 41,
            'weapon_id' => 47,
        ],
        [
            'soldier_id' => 41,
            'weapon_id' => 48,
        ],
        [
            'soldier_id' => 41,
            'weapon_id' => 50,
        ],
        [
            'soldier_id' => 42,
            'weapon_id' => 61,
        ],
        [
            'soldier_id' => 42,
            'weapon_id' => 47,
        ],
        [
            'soldier_id' => 42,
            'weapon_id' => 48,
        ],
        [
            'soldier_id' => 42,
            'weapon_id' => 50,
        ],
        [
            'soldier_id' => 43,
            'weapon_id' => 62,
        ],
        [
            'soldier_id' => 43,
            'weapon_id' => 63,
        ],
        [
            'soldier_id' => 43,
            'weapon_id' => 64,
        ],
        [
            'soldier_id' => 45,
            'weapon_id' => 65,
        ],
        [
            'soldier_id' => 46,
            'weapon_id' => 2,
        ],
        [
            'soldier_id' => 46,
            'weapon_id' => 66,
        ],
        [
            'soldier_id' => 47,
            'weapon_id' => 2,
        ],
        [
            'soldier_id' => 47,
            'weapon_id' => 67,
        ],
        [
            'soldier_id' => 47,
            'weapon_id' => 68,
        ],
        [
            'soldier_id' => 48,
            'weapon_id' => 2,
        ],
        [
            'soldier_id' => 48,
            'weapon_id' => 69,
        ],
        [
            'soldier_id' => 49,
            'weapon_id' => 70,
        ],
        [
            'soldier_id' => 49,
            'weapon_id' => 71,
        ],
        [
            'soldier_id' => 49,
            'weapon_id' => 72,
        ],
        [
            'soldier_id' => 49,
            'weapon_id' => 73,
        ],
        [
            'soldier_id' => 49,
            'weapon_id' => 74,
        ],
        [
            'soldier_id' => 50,
            'weapon_id' => 75,
        ],
        [
            'soldier_id' => 50,
            'weapon_id' => 64,
        ],
        [
            'soldier_id' => 51,
            'weapon_id' => 64,
        ],
        [
            'soldier_id' => 52,
            'weapon_id' => 76,
        ],
        [
            'soldier_id' => 52,
            'weapon_id' => 77,
        ],
        [
            'soldier_id' => 53,
            'weapon_id' => 78,
        ],
        [
            'soldier_id' => 53,
            'weapon_id' => 79,
        ],
        [
            'soldier_id' => 53,
            'weapon_id' => 80,
        ],
        [
            'soldier_id' => 53,
            'weapon_id' => 81,
        ],
        [
            'soldier_id' => 53,
            'weapon_id' => 64,
        ],
        [
            'soldier_id' => 54,
            'weapon_id' => 82,
        ],
        [
            'soldier_id' => 54,
            'weapon_id' => 3,
        ],
        [
            'soldier_id' => 55,
            'weapon_id' => 83,
        ],
        [
            'soldier_id' => 56,
            'weapon_id' => 84,
        ],
        [
            'soldier_id' => 56,
            'weapon_id' => 3,
        ],
        [
            'soldier_id' => 57,
            'weapon_id' => 85,
        ],
        [
            'soldier_id' => 57,
            'weapon_id' => 3,
        ],
        [
            'soldier_id' => 58,
            'weapon_id' => 84,
        ],
        [
            'soldier_id' => 58,
            'weapon_id' => 86,
        ],
        [
            'soldier_id' => 58,
            'weapon_id' => 87,
        ],
        [
            'soldier_id' => 58,
            'weapon_id' => 88,
        ],
        [
            'soldier_id' => 58,
            'weapon_id' => 58,
        ],
        [
            'soldier_id' => 58,
            'weapon_id' => 59,
        ],
        [
            'soldier_id' => 58,
            'weapon_id' => 3,
        ],
        [
            'soldier_id' => 59,
            'weapon_id' => 85,
        ],
        [
            'soldier_id' => 59,
            'weapon_id' => 3,
        ],
        [
            'soldier_id' => 60,
            'weapon_id' => 85,
        ],
        [
            'soldier_id' => 60,
            'weapon_id' => 3,
        ],
        [
            'soldier_id' => 61,
            'weapon_id' => 5,
        ],
        [
            'soldier_id' => 61,
            'weapon_id' => 85,
        ],
        [
            'soldier_id' => 61,
            'weapon_id' => 89,
        ],
        [
            'soldier_id' => 61,
            'weapon_id' => 7,
        ],
        [
            'soldier_id' => 61,
            'weapon_id' => 8,
        ],
        [
            'soldier_id' => 61,
            'weapon_id' => 77,
        ],
        [
            'soldier_id' => 61,
            'weapon_id' => 3,
        ],
        [
            'soldier_id' => 61,
            'weapon_id' => 51,
        ],
        [
            'soldier_id' => 62,
            'weapon_id' => 85,
        ],
        [
            'soldier_id' => 62,
            'weapon_id' => 3,
        ],
        [
            'soldier_id' => 63,
            'weapon_id' => 89,
        ],
        [
            'soldier_id' => 63,
            'weapon_id' => 90,
        ],
        [
            'soldier_id' => 63,
            'weapon_id' => 3,
        ],
        [
            'soldier_id' => 64,
            'weapon_id' => 84,
        ],
        [
            'soldier_id' => 64,
            'weapon_id' => 86,
        ],
        [
            'soldier_id' => 64,
            'weapon_id' => 87,
        ],
        [
            'soldier_id' => 64,
            'weapon_id' => 88,
        ],
        [
            'soldier_id' => 64,
            'weapon_id' => 57,
        ],
        [
            'soldier_id' => 64,
            'weapon_id' => 58,
        ],
        [
            'soldier_id' => 64,
            'weapon_id' => 59,
        ],
        [
            'soldier_id' => 64,
            'weapon_id' => 3,
        ],
        [
            'soldier_id' => 65,
            'weapon_id' => 85,
        ],
        [
            'soldier_id' => 65,
            'weapon_id' => 3,
        ],
        [
            'soldier_id' => 66,
            'weapon_id' => 91,
        ],
        [
            'soldier_id' => 66,
            'weapon_id' => 92,
        ],
        [
            'soldier_id' => 66,
            'weapon_id' => 3,
        ],
        [
            'soldier_id' => 67,
            'weapon_id' => 85,
        ],
        [
            'soldier_id' => 67,
            'weapon_id' => 3,
        ],
        [
            'soldier_id' => 68,
            'weapon_id' => 85,
        ],
        [
            'soldier_id' => 68,
            'weapon_id' => 3,
        ],
        [
            'soldier_id' => 69,
            'weapon_id' => 31,
        ],
        [
            'soldier_id' => 69,
            'weapon_id' => 93,
        ],
        [
            'soldier_id' => 70,
            'weapon_id' => 5,
        ],
        [
            'soldier_id' => 70,
            'weapon_id' => 96,
        ],
        [
            'soldier_id' => 70,
            'weapon_id' => 95,
        ],
        [
            'soldier_id' => 70,
            'weapon_id' => 7,
        ],
        [
            'soldier_id' => 70,
            'weapon_id' => 8,
        ],
        [
            'soldier_id' => 70,
            'weapon_id' => 93,
        ],
        [
            'soldier_id' => 70,
            'weapon_id' => 77,
        ],
        [
            'soldier_id' => 70,
            'weapon_id' => 51,
        ],
        [
            'soldier_id' => 71,
            'weapon_id' => 94,
        ],
        [
            'soldier_id' => 71,
            'weapon_id' => 93,
        ],
        [
            'soldier_id' => 72,
            'weapon_id' => 84,
        ],
        [
            'soldier_id' => 72,
            'weapon_id' => 86,
        ],
        [
            'soldier_id' => 72,
            'weapon_id' => 87,
        ],
        [
            'soldier_id' => 72,
            'weapon_id' => 57,
        ],
        [
            'soldier_id' => 72,
            'weapon_id' => 58,
        ],
        [
            'soldier_id' => 72,
            'weapon_id' => 59,
        ],
        [
            'soldier_id' => 72,
            'weapon_id' => 93,
        ],
        [
            'soldier_id' => 73,
            'weapon_id' => 5,
        ],
        [
            'soldier_id' => 73,
            'weapon_id' => 96,
        ],
        [
            'soldier_id' => 73,
            'weapon_id' => 95,
        ],
        [
            'soldier_id' => 73,
            'weapon_id' => 31,
        ],
        [
            'soldier_id' => 73,
            'weapon_id' => 93,
        ],
        [
            'soldier_id' => 73,
            'weapon_id' => 77,
        ],
        [
            'soldier_id' => 74,
            'weapon_id' => 31,
        ],
        [
            'soldier_id' => 74,
            'weapon_id' => 97,
        ],
        [
            'soldier_id' => 74,
            'weapon_id' => 93,
        ],
        [
            'soldier_id' => 75,
            'weapon_id' => 31,
        ],
        [
            'soldier_id' => 75,
            'weapon_id' => 93,
        ],
        [
            'soldier_id' => 76,
            'weapon_id' => 31,
        ],
        [
            'soldier_id' => 76,
            'weapon_id' => 93,
        ],
        [
            'soldier_id' => 77,
            'weapon_id' => 31,
        ],
        [
            'soldier_id' => 77,
            'weapon_id' => 93,
        ],
        [
            'soldier_id' => 78,
            'weapon_id' => 31,
        ],
        [
            'soldier_id' => 78,
            'weapon_id' => 93,
        ],
        [
            'soldier_id' => 78,
            'weapon_id' => 98,
        ],
        [
            'soldier_id' => 79,
            'weapon_id' => 31,
        ],
        [
            'soldier_id' => 79,
            'weapon_id' => 93,
        ],
        [
            'soldier_id' => 79,
            'weapon_id' => 99,
        ],
        [
            'soldier_id' => 80,
            'weapon_id' => 31,
        ],
        [
            'soldier_id' => 80,
            'weapon_id' => 100,
        ],
        [
            'soldier_id' => 80,
            'weapon_id' => 93,
        ],
        [
            'soldier_id' => 81,
            'weapon_id' => 101,
        ],
        [
            'soldier_id' => 81,
            'weapon_id' => 64,
        ],
        [
            'soldier_id' => 82,
            'weapon_id' => 101,
        ],
        [
            'soldier_id' => 82,
            'weapon_id' => 64,
        ],
        [
            'soldier_id' => 83,
            'weapon_id' => 101,
        ],
        [
            'soldier_id' => 83,
            'weapon_id' => 102,
        ],
        [
            'soldier_id' => 83,
            'weapon_id' => 64,
        ],
        [
            'soldier_id' => 84,
            'weapon_id' => 103,
        ],
        [
            'soldier_id' => 84,
            'weapon_id' => 104,
        ],
        [
            'soldier_id' => 85,
            'weapon_id' => 101,
        ],
        [
            'soldier_id' => 85,
            'weapon_id' => 64,
        ],
        [
            'soldier_id' => 86,
            'weapon_id' => 101,
        ],
        [
            'soldier_id' => 86,
            'weapon_id' => 64,
        ],
        [
            'soldier_id' => 87,
            'weapon_id' => 101,
        ],
        [
            'soldier_id' => 87,
            'weapon_id' => 64,
        ],
        [
            'soldier_id' => 88,
            'weapon_id' => 105,
        ],
        [
            'soldier_id' => 88,
            'weapon_id' => 64,
        ],
        [
            'soldier_id' => 89,
            'weapon_id' => 106,
        ],
        [
            'soldier_id' => 89,
            'weapon_id' => 108,
        ],
        [
            'soldier_id' => 89,
            'weapon_id' => 104,
        ],
        [
            'soldier_id' => 90,
            'weapon_id' => 108,
        ],
        [
            'soldier_id' => 90,
            'weapon_id' => 104,
        ],
        [
            'soldier_id' => 91,
            'weapon_id' => 108,
        ],
        [
            'soldier_id' => 91,
            'weapon_id' => 104,
        ],
        [
            'soldier_id' => 92,
            'weapon_id' => 107,
        ],
        [
            'soldier_id' => 92,
            'weapon_id' => 109,
        ],
        [
            'soldier_id' => 92,
            'weapon_id' => 104,
        ],
        [
            'soldier_id' => 92,
            'weapon_id' => 64,
        ],
        [
            'soldier_id' => 93,
            'weapon_id' => 107,
        ],
        [
            'soldier_id' => 93,
            'weapon_id' => 109,
        ],
        [
            'soldier_id' => 93,
            'weapon_id' => 104,
        ],
        [
            'soldier_id' => 93,
            'weapon_id' => 64,
        ],
        [
            'soldier_id' => 94,
            'weapon_id' => 110,
        ],
        [
            'soldier_id' => 94,
            'weapon_id' => 5,
        ],
        [
            'soldier_id' => 94,
            'weapon_id' => 96,
        ],
        [
            'soldier_id' => 94,
            'weapon_id' => 77,
        ],
        [
            'soldier_id' => 94,
            'weapon_id' => 64,
        ],
        [
            'soldier_id' => 95,
            'weapon_id' => 5,
        ],
        [
            'soldier_id' => 95,
            'weapon_id' => 70,
        ],
        [
            'soldier_id' => 95,
            'weapon_id' => 111,
        ],
        [
            'soldier_id' => 95,
            'weapon_id' => 112,
        ],
        [
            'soldier_id' => 95,
            'weapon_id' => 64,
        ],
        [
            'soldier_id' => 96,
            'weapon_id' => 5,
        ],
        [
            'soldier_id' => 96,
            'weapon_id' => 104,
        ],
        [
            'soldier_id' => 97,
            'weapon_id' => 5,
        ],
        [
            'soldier_id' => 97,
            'weapon_id' => 113,
        ],
        [
            'soldier_id' => 97,
            'weapon_id' => 64,
        ],
        [
            'soldier_id' => 98,
            'weapon_id' => 96,
        ],
        [
            'soldier_id' => 98,
            'weapon_id' => 64,
        ],
        [
            'soldier_id' => 99,
            'weapon_id' => 110,
        ],
        [
            'soldier_id' => 99,
            'weapon_id' => 5,
        ],
        [
            'soldier_id' => 99,
            'weapon_id' => 96,
        ],
        [
            'soldier_id' => 99,
            'weapon_id' => 104,
        ],
        [
            'soldier_id' => 99,
            'weapon_id' => 64,
        ],
        [
            'soldier_id' => 100,
            'weapon_id' => 114,
        ],
        [
            'soldier_id' => 101,
            'weapon_id' => 115,
        ],
        [
            'soldier_id' => 101,
            'weapon_id' => 116,
        ],
        [
            'soldier_id' => 102,
            'weapon_id' => 117,
        ],
        [
            'soldier_id' => 102,
            'weapon_id' => 118,
        ],
        [
            'soldier_id' => 103,
            'weapon_id' => 119,
        ],
        [
            'soldier_id' => 103,
            'weapon_id' => 120,
        ],
        [
            'soldier_id' => 104,
            'weapon_id' => 121,
        ],
        [
            'soldier_id' => 104,
            'weapon_id' => 122,
        ],
        [
            'soldier_id' => 104,
            'weapon_id' => 123,
        ],
        [
            'soldier_id' => 105,
            'weapon_id' => 124,
        ],
        [
            'soldier_id' => 105,
            'weapon_id' => 125,
        ],
        [
            'soldier_id' => 106,
            'weapon_id' => 126,
        ],
        [
            'soldier_id' => 107,
            'weapon_id' => 127,
        ],
        [
            'soldier_id' => 107,
            'weapon_id' => 128,
        ],
        [
            'soldier_id' => 107,
            'weapon_id' => 129,
        ],
        [
            'soldier_id' => 108,
            'weapon_id' => 130,
        ],
        [
            'soldier_id' => 108,
            'weapon_id' => 131,
        ],
        [
            'soldier_id' => 109,
            'weapon_id' => 5,
        ],
        [
            'soldier_id' => 109,
            'weapon_id' => 96,
        ],
        [
            'soldier_id' => 109,
            'weapon_id' => 77,
        ],
        [
            'soldier_id' => 109,
            'weapon_id' => 64,
        ],
        [
            'soldier_id' => 110,
            'weapon_id' => 84,
        ],
        [
            'soldier_id' => 110,
            'weapon_id' => 57,
        ],
        [
            'soldier_id' => 110,
            'weapon_id' => 58,
        ],
        [
            'soldier_id' => 110,
            'weapon_id' => 59,
        ],
        [
            'soldier_id' => 110,
            'weapon_id' => 64,
        ],
        [
            'soldier_id' => 111,
            'weapon_id' => 70,
        ],
        [
            'soldier_id' => 111,
            'weapon_id' => 111,
        ],
        [
            'soldier_id' => 111,
            'weapon_id' => 112,
        ],
        [
            'soldier_id' => 111,
            'weapon_id' => 132,
        ],
        [
            'soldier_id' => 111,
            'weapon_id' => 64,
        ],
        [
            'soldier_id' => 112,
            'weapon_id' => 45,
        ],
        [
            'soldier_id' => 112,
            'weapon_id' => 133,
        ],
        [
            'soldier_id' => 113,
            'weapon_id' => 45,
        ],
        [
            'soldier_id' => 113,
            'weapon_id' => 134,
        ],
        [
            'soldier_id' => 114,
            'weapon_id' => 45,
        ],
        [
            'soldier_id' => 114,
            'weapon_id' => 135,
        ],
        [
            'soldier_id' => 115,
            'weapon_id' => 45,
        ],
        [
            'soldier_id' => 115,
            'weapon_id' => 96,
        ],
        [
            'soldier_id' => 115,
            'weapon_id' => 77,
        ],
        [
            'soldier_id' => 115,
            'weapon_id' => 64,
        ],
        [
            'soldier_id' => 116,
            'weapon_id' => 137,
        ],
        [
            'soldier_id' => 116,
            'weapon_id' => 138,
        ],
        [
            'soldier_id' => 117,
            'weapon_id' => 7,
        ],
        [
            'soldier_id' => 117,
            'weapon_id' => 8,
        ],
        [
            'soldier_id' => 117,
            'weapon_id' => 137,
        ],
        [
            'soldier_id' => 117,
            'weapon_id' => 139,
        ],
        [
            'soldier_id' => 118,
            'weapon_id' => 7,
        ],
        [
            'soldier_id' => 118,
            'weapon_id' => 8,
        ],
        [
            'soldier_id' => 118,
            'weapon_id' => 137,
        ],
        [
            'soldier_id' => 118,
            'weapon_id' => 145,
        ],
        [
            'soldier_id' => 118,
            'weapon_id' => 140,
        ],
        [
            'soldier_id' => 118,
            'weapon_id' => 25,
        ],
        [
            'soldier_id' => 118,
            'weapon_id' => 141,
        ],
        [
            'soldier_id' => 119,
            'weapon_id' => 31,
        ],
        [
            'soldier_id' => 119,
            'weapon_id' => 93,
        ],
        [
            'soldier_id' => 119,
            'weapon_id' => 142,
        ],
        [
            'soldier_id' => 120,
            'weapon_id' => 143,
        ],
        [
            'soldier_id' => 121,
            'weapon_id' => 31,
        ],
        [
            'soldier_id' => 121,
            'weapon_id' => 93,
        ],
        [
            'soldier_id' => 122,
            'weapon_id' => 31,
        ],
        [
            'soldier_id' => 122,
            'weapon_id' => 93,
        ],
        [
            'soldier_id' => 122,
            'weapon_id' => 144,
        ],
        [
            'soldier_id' => 123,
            'weapon_id' => 45,
        ],
        [
            'soldier_id' => 123,
            'weapon_id' => 145,
        ],
        [
            'soldier_id' => 124,
            'weapon_id' => 146,
        ],
        [
            'soldier_id' => 125,
            'weapon_id' => 84,
        ],
        [
            'soldier_id' => 125,
            'weapon_id' => 86,
        ],
        [
            'soldier_id' => 125,
            'weapon_id' => 87,
        ],
        [
            'soldier_id' => 125,
            'weapon_id' => 57,
        ],
        [
            'soldier_id' => 125,
            'weapon_id' => 58,
        ],
        [
            'soldier_id' => 125,
            'weapon_id' => 59,
        ],
        [
            'soldier_id' => 125,
            'weapon_id' => 93,
        ],
        [
            'soldier_id' => 126,
            'weapon_id' => 147,
        ],
        [
            'soldier_id' => 127,
            'weapon_id' => 148,
        ],
        [
            'soldier_id' => 127,
            'weapon_id' => 93,
        ],
        [
            'soldier_id' => 128,
            'weapon_id' => 149,
        ],
        [
            'soldier_id' => 129,
            'weapon_id' => 75,
        ],
        [
            'soldier_id' => 129,
            'weapon_id' => 150,
        ],
        [
            'soldier_id' => 130,
            'weapon_id' => 31,
        ],
        [
            'soldier_id' => 130,
            'weapon_id' => 93,
        ],
        [
            'soldier_id' => 131,
            'weapon_id' => 2,
        ],
        [
            'soldier_id' => 131,
            'weapon_id' => 45,
        ],
        [
            'soldier_id' => 131,
            'weapon_id' => 96,
        ],
        [
            'soldier_id' => 131,
            'weapon_id' => 27,
        ],
        [
            'soldier_id' => 131,
            'weapon_id' => 7,
        ],
        [
            'soldier_id' => 131,
            'weapon_id' => 8,
        ],
        [
            'soldier_id' => 131,
            'weapon_id' => 93,
        ],
        [
            'soldier_id' => 131,
            'weapon_id' => 136,
        ],
        [
            'soldier_id' => 131,
            'weapon_id' => 151,
        ],
        [
            'soldier_id' => 131,
            'weapon_id' => 51,
        ],
        [
            'soldier_id' => 132,
            'weapon_id' => 152,
        ],
        [
            'soldier_id' => 132,
            'weapon_id' => 7,
        ],
        [
            'soldier_id' => 132,
            'weapon_id' => 8,
        ],
        [
            'soldier_id' => 132,
            'weapon_id' => 153,
        ],
        [
            'soldier_id' => 132,
            'weapon_id' => 154,
        ],
        [
            'soldier_id' => 133,
            'weapon_id' => 2,
        ],
        [
            'soldier_id' => 133,
            'weapon_id' => 153,
        ],
        [
            'soldier_id' => 134,
            'weapon_id' => 155,
        ],
        [
            'soldier_id' => 134,
            'weapon_id' => 156,
        ],
        [
            'soldier_id' => 135,
            'weapon_id' => 2,
        ],
        [
            'soldier_id' => 135,
            'weapon_id' => 157,
        ],
        [
            'soldier_id' => 136,
            'weapon_id' => 2,
        ],
        [
            'soldier_id' => 136,
            'weapon_id' => 158,
        ],
        [
            'soldier_id' => 137,
            'weapon_id' => 2,
        ],
        [
            'soldier_id' => 137,
            'weapon_id' => 159,
        ],
        [
            'soldier_id' => 137,
            'weapon_id' => 160,
        ],
        [
            'soldier_id' => 138,
            'weapon_id' => 161,
        ],
        [
            'soldier_id' => 139,
            'weapon_id' => 2,
        ],
        [
            'soldier_id' => 139,
            'weapon_id' => 162,
        ],
        [
            'soldier_id' => 140,
            'weapon_id' => 2,
        ],
        [
            'soldier_id' => 140,
            'weapon_id' => 163,
        ],
        [
            'soldier_id' => 141,
            'weapon_id' => 164,
        ],
        [
            'soldier_id' => 142,
            'weapon_id' => 2,
        ],
        [
            'soldier_id' => 142,
            'weapon_id' => 153,
        ],
        [
            'soldier_id' => 142,
            'weapon_id' => 163,
        ],
        [
            'soldier_id' => 143,
            'weapon_id' => 165,
        ],
        [
            'soldier_id' => 143,
            'weapon_id' => 166,
        ],
        [
            'soldier_id' => 143,
            'weapon_id' => 51,
        ],
        [
            'soldier_id' => 143,
            'weapon_id' => 64,
        ],
        [
            'soldier_id' => 144,
            'weapon_id' => 167,
        ],
        [
            'soldier_id' => 144,
            'weapon_id' => 168,
        ],
        [
            'soldier_id' => 144,
            'weapon_id' => 165,
        ],
        [
            'soldier_id' => 144,
            'weapon_id' => 64,
        ],
        [
            'soldier_id' => 145,
            'weapon_id' => 169,
        ],
        [
            'soldier_id' => 145,
            'weapon_id' => 165,
        ],
        [
            'soldier_id' => 145,
            'weapon_id' => 170,
        ],
        [
            'soldier_id' => 145,
            'weapon_id' => 64,
        ],
        [
            'soldier_id' => 146,
            'weapon_id' => 171,
        ],
        [
            'soldier_id' => 146,
            'weapon_id' => 165,
        ],
        [
            'soldier_id' => 146,
            'weapon_id' => 64,
        ],
        [
            'soldier_id' => 147,
            'weapon_id' => 165,
        ],
        [
            'soldier_id' => 147,
            'weapon_id' => 51,
        ],
        [
            'soldier_id' => 148,
            'weapon_id' => 165,
        ],
        [
            'soldier_id' => 148,
            'weapon_id' => 172,
        ],
        [
            'soldier_id' => 148,
            'weapon_id' => 173,
        ],
        [
            'soldier_id' => 149,
            'weapon_id' => 165,
        ],
        [
            'soldier_id' => 149,
            'weapon_id' => 174,
        ],
        [
            'soldier_id' => 150,
            'weapon_id' => 175,
        ],
        [
            'soldier_id' => 150,
            'weapon_id' => 165,
        ],
        [
            'soldier_id' => 150,
            'weapon_id' => 64,
        ],
        [
            'soldier_id' => 151,
            'weapon_id' => 165,
        ],
        [
            'soldier_id' => 151,
            'weapon_id' => 176,
        ],
        [
            'soldier_id' => 152,
            'weapon_id' => 165,
        ],
        [
            'soldier_id' => 152,
            'weapon_id' => 51,
        ],
        [
            'soldier_id' => 153,
            'weapon_id' => 177,
        ],
        [
            'soldier_id' => 153,
            'weapon_id' => 165,
        ],
        [
            'soldier_id' => 153,
            'weapon_id' => 166,
        ],
        [
            'soldier_id' => 153,
            'weapon_id' => 51,
        ],
        [
            'soldier_id' => 154,
            'weapon_id' => 178,
        ],
        [
            'soldier_id' => 154,
            'weapon_id' => 165,
        ],
        [
            'soldier_id' => 154,
            'weapon_id' => 179,
        ],
        [
            'soldier_id' => 154,
            'weapon_id' => 180,
        ],
        [
            'soldier_id' => 154,
            'weapon_id' => 64,
        ],
        [
            'soldier_id' => 154,
            'weapon_id' => 3,
        ],
        [
            'soldier_id' => 154,
            'weapon_id' => 25,
        ],
        [
            'soldier_id' => 155,
            'weapon_id' => 178,
        ],
        [
            'soldier_id' => 155,
            'weapon_id' => 64,
        ],
        [
            'soldier_id' => 156,
            'weapon_id' => 165,
        ],
        [
            'soldier_id' => 156,
            'weapon_id' => 181,
        ],
        [
            'soldier_id' => 156,
            'weapon_id' => 182,
        ],
        [
            'soldier_id' => 156,
            'weapon_id' => 183,
        ],
        [
            'soldier_id' => 156,
            'weapon_id' => 25,
        ],
        [
            'soldier_id' => 156,
            'weapon_id' => 184,
        ],
        [
            'soldier_id' => 157,
            'weapon_id' => 165,
        ],
        [
            'soldier_id' => 157,
            'weapon_id' => 51,
        ],
        [
            'soldier_id' => 158,
            'weapon_id' => 165,
        ],
        [
            'soldier_id' => 158,
            'weapon_id' => 185,
        ],
        [
            'soldier_id' => 158,
            'weapon_id' => 186,
        ],
        [
            'soldier_id' => 158,
            'weapon_id' => 187,
        ],
        [
            'soldier_id' => 158,
            'weapon_id' => 188,
        ],
        [
            'soldier_id' => 159,
            'weapon_id' => 165,
        ],
        [
            'soldier_id' => 159,
            'weapon_id' => 77,
        ],
        [
            'soldier_id' => 160,
            'weapon_id' => 189,
        ],
        [
            'soldier_id' => 160,
            'weapon_id' => 190,
        ],
        [
            'soldier_id' => 160,
            'weapon_id' => 191,
        ],
        [
            'soldier_id' => 160,
            'weapon_id' => 192,
        ],
        [
            'soldier_id' => 160,
            'weapon_id' => 193,
        ],
        [
            'soldier_id' => 160,
            'weapon_id' => 51,
        ],
        [
            'soldier_id' => 160,
            'weapon_id' => 194,
        ],
        [
            'soldier_id' => 161,
            'weapon_id' => 191,
        ],
        [
            'soldier_id' => 161,
            'weapon_id' => 193,
        ],
        [
            'soldier_id' => 162,
            'weapon_id' => 190,
        ],
        [
            'soldier_id' => 162,
            'weapon_id' => 195,
        ],
        [
            'soldier_id' => 163,
            'weapon_id' => 196,
        ],
        [
            'soldier_id' => 163,
            'weapon_id' => 193,
        ],
        [
            'soldier_id' => 164,
            'weapon_id' => 191,
        ],
        [
            'soldier_id' => 164,
            'weapon_id' => 197,
        ],
        [
            'soldier_id' => 164,
            'weapon_id' => 193,
        ],
        [
            'soldier_id' => 165,
            'weapon_id' => 198,
        ],
        [
            'soldier_id' => 166,
            'weapon_id' => 167,
        ],
        [
            'soldier_id' => 166,
            'weapon_id' => 168,
        ],
        [
            'soldier_id' => 166,
            'weapon_id' => 193,
        ],
        [
            'soldier_id' => 167,
            'weapon_id' => 199,
        ],
        [
            'soldier_id' => 167,
            'weapon_id' => 201,
        ],
        [
            'soldier_id' => 167,
            'weapon_id' => 193,
        ],
        [
            'soldier_id' => 168,
            'weapon_id' => 200,
        ],
        [
            'soldier_id' => 168,
            'weapon_id' => 202,
        ],
        [
            'soldier_id' => 168,
            'weapon_id' => 193,
        ],
        [
            'soldier_id' => 169,
            'weapon_id' => 203,
        ],
        [
            'soldier_id' => 169,
            'weapon_id' => 204,
        ],
        [
            'soldier_id' => 169,
            'weapon_id' => 205,
        ],
        [
            'soldier_id' => 169,
            'weapon_id' => 206,
        ],
        [
            'soldier_id' => 170,
            'weapon_id' => 207,
        ],
        [
            'soldier_id' => 170,
            'weapon_id' => 208,
        ],
        [
            'soldier_id' => 170,
            'weapon_id' => 209,
        ],
        [
            'soldier_id' => 170,
            'weapon_id' => 206,
        ],
        [
            'soldier_id' => 171,
            'weapon_id' => 203,
        ],
        [
            'soldier_id' => 171,
            'weapon_id' => 206,
        ],
        [
            'soldier_id' => 172,
            'weapon_id' => 210,
        ],
        [
            'soldier_id' => 173,
            'weapon_id' => 211,
        ],
        [
            'soldier_id' => 173,
            'weapon_id' => 212,
        ],
        [
            'soldier_id' => 173,
            'weapon_id' => 206,
        ],
        [
            'soldier_id' => 174,
            'weapon_id' => 213,
        ],
        [
            'soldier_id' => 175,
            'weapon_id' => 214,
        ],
        [
            'soldier_id' => 175,
            'weapon_id' => 206,
        ],
        [
            'soldier_id' => 176,
            'weapon_id' => 216,
        ],
        [
            'soldier_id' => 176,
            'weapon_id' => 206,
        ],
        [
            'soldier_id' => 177,
            'weapon_id' => 216,
        ],
        [
            'soldier_id' => 177,
            'weapon_id' => 217,
        ],
        [
            'soldier_id' => 178,
            'weapon_id' => 203,
        ],
        [
            'soldier_id' => 178,
            'weapon_id' => 206,
        ],
        [
            'soldier_id' => 179,
            'weapon_id' => 203,
        ],
        [
            'soldier_id' => 179,
            'weapon_id' => 216,
        ],
        [
            'soldier_id' => 179,
            'weapon_id' => 206,
        ],
        [
            'soldier_id' => 180,
            'weapon_id' => 218,
        ],
        [
            'soldier_id' => 180,
            'weapon_id' => 219,
        ],
        [
            'soldier_id' => 180,
            'weapon_id' => 220,
        ],
        [
            'soldier_id' => 180,
            'weapon_id' => 221,
        ],
        [
            'soldier_id' => 180,
            'weapon_id' => 222,
        ],
        [
            'soldier_id' => 180,
            'weapon_id' => 223,
        ],
        [
            'soldier_id' => 180,
            'weapon_id' => 224,
        ],
        [
            'soldier_id' => 180,
            'weapon_id' => 225,
        ],
        [
            'soldier_id' => 180,
            'weapon_id' => 226,
        ],
        [
            'soldier_id' => 181,
            'weapon_id' => 218,
        ],
        [
            'soldier_id' => 181,
            'weapon_id' => 227,
        ],
        [
            'soldier_id' => 182,
            'weapon_id' => 220,
        ],
        [
            'soldier_id' => 182,
            'weapon_id' => 228,
        ],
        [
            'soldier_id' => 183,
            'weapon_id' => 218,
        ],
        [
            'soldier_id' => 183,
            'weapon_id' => 229,
        ],
        [
            'soldier_id' => 183,
            'weapon_id' => 64,
        ],
        [
            'soldier_id' => 184,
            'weapon_id' => 230,
        ],
        [
            'soldier_id' => 184,
            'weapon_id' => 231,
        ],
        [
            'soldier_id' => 184,
            'weapon_id' => 232,
        ],
        [
            'soldier_id' => 184,
            'weapon_id' => 233,
        ],
        [
            'soldier_id' => 184,
            'weapon_id' => 234,
        ],
        [
            'soldier_id' => 184,
            'weapon_id' => 235,
        ],
        [
            'soldier_id' => 184,
            'weapon_id' => 64,
        ],
        [
            'soldier_id' => 185,
            'weapon_id' => 218,
        ],
        [
            'soldier_id' => 185,
            'weapon_id' => 225,
        ],
        [
            'soldier_id' => 186,
            'weapon_id' => 219,
        ],
        [
            'soldier_id' => 186,
            'weapon_id' => 222,
        ],
        [
            'soldier_id' => 186,
            'weapon_id' => 64,
        ],
        [
            'soldier_id' => 187,
            'weapon_id' => 219,
        ],
        [
            'soldier_id' => 187,
            'weapon_id' => 222,
        ],
        [
            'soldier_id' => 187,
            'weapon_id' => 64,
        ],
        [
            'soldier_id' => 188,
            'weapon_id' => 219,
        ],
        [
            'soldier_id' => 188,
            'weapon_id' => 222,
        ],
        [
            'soldier_id' => 188,
            'weapon_id' => 64,
        ],
        [
            'soldier_id' => 189,
            'weapon_id' => 219,
        ],
        [
            'soldier_id' => 189,
            'weapon_id' => 222,
        ],
        [
            'soldier_id' => 189,
            'weapon_id' => 64,
        ],
        [
            'soldier_id' => 190,
            'weapon_id' => 219,
        ],
        [
            'soldier_id' => 190,
            'weapon_id' => 222,
        ],
        [
            'soldier_id' => 190,
            'weapon_id' => 64,
        ],
        [
            'soldier_id' => 191,
            'weapon_id' => 236,
        ],
        [
            'soldier_id' => 191,
            'weapon_id' => 237,
        ],
        [
            'soldier_id' => 191,
            'weapon_id' => 238,
        ],
        [
            'soldier_id' => 191,
            'weapon_id' => 239,
        ],
        [
            'soldier_id' => 192,
            'weapon_id' => 240,
        ],
        [
            'soldier_id' => 192,
            'weapon_id' => 241,
        ],
        [
            'soldier_id' => 193,
            'weapon_id' => 242,
        ],
        [
            'soldier_id' => 193,
            'weapon_id' => 243,
        ],
        [
            'soldier_id' => 194,
            'weapon_id' => 244,
        ],
        [
            'soldier_id' => 194,
            'weapon_id' => 245,
        ],
        [
            'soldier_id' => 195,
            'weapon_id' => 244,
        ],
        [
            'soldier_id' => 195,
            'weapon_id' => 245,
        ],
        [
            'soldier_id' => 196,
            'weapon_id' => 246,
        ],
        [
            'soldier_id' => 196,
            'weapon_id' => 247,
        ],
        [
            'soldier_id' => 197,
            'weapon_id' => 248,
        ],
        [
            'soldier_id' => 197,
            'weapon_id' => 64,
        ],
        [
            'soldier_id' => 198,
            'weapon_id' => 249,
        ],
        [
            'soldier_id' => 198,
            'weapon_id' => 250,
        ],
        [
            'soldier_id' => 198,
            'weapon_id' => 251,
        ],
        [
            'soldier_id' => 199,
            'weapon_id' => 249,
        ],
        [
            'soldier_id' => 199,
            'weapon_id' => 250,
        ],
        [
            'soldier_id' => 199,
            'weapon_id' => 251,
        ],
        [
            'soldier_id' => 200,
            'weapon_id' => 255,
        ],
        [
            'soldier_id' => 200,
            'weapon_id' => 256,
        ],
        [
            'soldier_id' => 201,
            'weapon_id' => 257,
        ],
        [
            'soldier_id' => 201,
            'weapon_id' => 258,
        ],
        [
            'soldier_id' => 202,
            'weapon_id' => 255,
        ],
        [
            'soldier_id' => 202,
            'weapon_id' => 259,
        ],
        [
            'soldier_id' => 203,
            'weapon_id' => 260,
        ],
        [
            'soldier_id' => 203,
            'weapon_id' => 261,
        ],
        [
            'soldier_id' => 204,
            'weapon_id' => 262,
        ],
        [
            'soldier_id' => 204,
            'weapon_id' => 261,
        ],
        [
            'soldier_id' => 205,
            'weapon_id' => 263,
        ],
        [
            'soldier_id' => 205,
            'weapon_id' => 261,
        ],
        [
            'soldier_id' => 206,
            'weapon_id' => 264,
        ],
        [
            'soldier_id' => 206,
            'weapon_id' => 261,
        ],
        [
            'soldier_id' => 207,
            'weapon_id' => 265,
        ],
        [
            'soldier_id' => 207,
            'weapon_id' => 261,
        ],
        [
            'soldier_id' => 208,
            'weapon_id' => 266,
        ],
        [
            'soldier_id' => 209,
            'weapon_id' => 255,
        ],
        [
            'soldier_id' => 209,
            'weapon_id' => 267,
        ],
        [
            'soldier_id' => 209,
            'weapon_id' => 268,
        ],
        [
            'soldier_id' => 210,
            'weapon_id' => 269,
        ],
        [
            'soldier_id' => 210,
            'weapon_id' => 270,
        ],
        [
            'soldier_id' => 211,
            'weapon_id' => 271,
        ],
        [
            'soldier_id' => 211,
            'weapon_id' => 272,
        ],
        [
            'soldier_id' => 212,
            'weapon_id' => 271,
        ],
        [
            'soldier_id' => 212,
            'weapon_id' => 273,
        ],
        [
            'soldier_id' => 213,
            'weapon_id' => 274,
        ],
        [
            'soldier_id' => 213,
            'weapon_id' => 275,
        ],
        [
            'soldier_id' => 214,
            'weapon_id' => 271,
        ],
        [
            'soldier_id' => 214,
            'weapon_id' => 273,
        ],
        [
            'soldier_id' => 215,
            'weapon_id' => 271,
        ],
        [
            'soldier_id' => 215,
            'weapon_id' => 273,
        ],
        [
            'soldier_id' => 216,
            'weapon_id' => 271,
        ],
        [
            'soldier_id' => 216,
            'weapon_id' => 273,
        ],
        [
            'soldier_id' => 217,
            'weapon_id' => 271,
        ],
        [
            'soldier_id' => 217,
            'weapon_id' => 273,
        ],
        [
            'soldier_id' => 218,
            'weapon_id' => 271,
        ],
        [
            'soldier_id' => 218,
            'weapon_id' => 273,
        ],
        [
            'soldier_id' => 219,
            'weapon_id' => 276,
        ],
        [
            'soldier_id' => 219,
            'weapon_id' => 277,
        ],
        [
            'soldier_id' => 219,
            'weapon_id' => 278,
        ],
        [
            'soldier_id' => 219,
            'weapon_id' => 273,
        ],
        [
            'soldier_id' => 220,
            'weapon_id' => 279,
        ],
        [
            'soldier_id' => 220,
            'weapon_id' => 280,
        ],
        [
            'soldier_id' => 220,
            'weapon_id' => 273,
        ],
        [
            'soldier_id' => 221,
            'weapon_id' => 281,
        ],
        [
            'soldier_id' => 221,
            'weapon_id' => 282,
        ],
        [
            'soldier_id' => 222,
            'weapon_id' => 283,
        ],
        [
            'soldier_id' => 222,
            'weapon_id' => 282,
        ],
        [
            'soldier_id' => 223,
            'weapon_id' => 282,
        ],
        [
            'soldier_id' => 224,
            'weapon_id' => 282,
        ],
        [
            'soldier_id' => 225,
            'weapon_id' => 282,
        ],
        [
            'soldier_id' => 226,
            'weapon_id' => 282,
        ],
     ];

    public function run(): void
    {
        foreach ($this->soldierweapons as $soldierweapon) {
            // Buscar el soldado por ID
            $soldier = Soldier::find($soldierweapon['soldier_id']);
            // Añadir la relación con el arma usando attach
            $soldier->weapons()->attach($soldierweapon['weapon_id']);
        }
    }
}
