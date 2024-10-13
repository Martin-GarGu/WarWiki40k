<?php

namespace Database\Seeders;

use App\Models\Soldier;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\SoldierKeyword;

class SoldierKeywordSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    private $soldierKeywords=[
        [
            'soldier_id' => 1,
            'keyword_id' => 1,
        ],
        [
            'soldier_id' => 1,
            'keyword_id' => 2,
        ],
        [
            'soldier_id' => 1,
            'keyword_id' => 3,
        ],
        [
            'soldier_id' => 1,
            'keyword_id' => 4,
        ],
        [
            'soldier_id' => 1,
            'keyword_id' => 5,
        ],
        [
            'soldier_id' => 2,
            'keyword_id' => 1,
        ],
        [
            'soldier_id' => 2,
            'keyword_id' => 2,
        ],
        [
            'soldier_id' => 2,
            'keyword_id' => 3,
        ],
        [
            'soldier_id' => 2,
            'keyword_id' => 4,
        ],
        [
            'soldier_id' => 2,
            'keyword_id' => 6,
        ],
        [
            'soldier_id' => 2,
            'keyword_id' => 7,
        ],
        [
            'soldier_id' => 3,
            'keyword_id' => 1,
        ],
        [
            'soldier_id' => 3,
            'keyword_id' => 2,
        ],
        [
            'soldier_id' => 3,
            'keyword_id' => 3,
        ],
        [
            'soldier_id' => 3,
            'keyword_id' => 4,
        ],
        [
            'soldier_id' => 3,
            'keyword_id' => 8,
        ],
        [
            'soldier_id' => 4,
            'keyword_id' => 1,
        ],
        [
            'soldier_id' => 4,
            'keyword_id' => 2,
        ],
        [
            'soldier_id' => 4,
            'keyword_id' => 3,
        ],
        [
            'soldier_id' => 4,
            'keyword_id' => 4,
        ],
        [
            'soldier_id' => 4,
            'keyword_id' => 9,
        ],
        [
            'soldier_id' => 5,
            'keyword_id' => 1,
        ],
        [
            'soldier_id' => 5,
            'keyword_id' => 2,
        ],
        [
            'soldier_id' => 5,
            'keyword_id' => 3,
        ],
        [
            'soldier_id' => 5,
            'keyword_id' => 4,
        ],
        [
            'soldier_id' => 5,
            'keyword_id' => 10,
        ],
        [
            'soldier_id' => 6,
            'keyword_id' => 1,
        ],
        [
            'soldier_id' => 6,
            'keyword_id' => 2,
        ],
        [
            'soldier_id' => 6,
            'keyword_id' => 3,
        ],
        [
            'soldier_id' => 6,
            'keyword_id' => 4,
        ],
        [
            'soldier_id' => 6,
            'keyword_id' => 11,
        ],
        [
            'soldier_id' => 7,
            'keyword_id' => 1,
        ],
        [
            'soldier_id' => 7,
            'keyword_id' => 2,
        ],
        [
            'soldier_id' => 7,
            'keyword_id' => 3,
        ],
        [
            'soldier_id' => 7,
            'keyword_id' => 4,
        ],
        [
            'soldier_id' => 7,
            'keyword_id' => 12,
        ],
        [
            'soldier_id' => 8,
            'keyword_id' => 1,
        ],
        [
            'soldier_id' => 8,
            'keyword_id' => 2,
        ],
        [
            'soldier_id' => 8,
            'keyword_id' => 3,
        ],
        [
            'soldier_id' => 8,
            'keyword_id' => 4,
        ],
        [
            'soldier_id' => 8,
            'keyword_id' => 13,
        ],
        [
            'soldier_id' => 8,
            'keyword_id' => 14,
        ],
        [
            'soldier_id' => 9,
            'keyword_id' => 1,
        ],
        [
            'soldier_id' => 9,
            'keyword_id' => 2,
        ],
        [
            'soldier_id' => 9,
            'keyword_id' => 3,
        ],
        [
            'soldier_id' => 9,
            'keyword_id' => 4,
        ],
        [
            'soldier_id' => 9,
            'keyword_id' => 15,
        ],
        [
            'soldier_id' => 10,
            'keyword_id' => 1,
        ],
        [
            'soldier_id' => 10,
            'keyword_id' => 2,
        ],
        [
            'soldier_id' => 10,
            'keyword_id' => 3,
        ],
        [
            'soldier_id' => 10,
            'keyword_id' => 4,
        ],
        [
            'soldier_id' => 10,
            'keyword_id' => 16,
        ],
        [
            'soldier_id' => 11,
            'keyword_id' => 1,
        ],
        [
            'soldier_id' => 11,
            'keyword_id' => 2,
        ],
        [
            'soldier_id' => 11,
            'keyword_id' => 3,
        ],
        [
            'soldier_id' => 11,
            'keyword_id' => 4,
        ],
        [
            'soldier_id' => 11,
            'keyword_id' => 17,
        ],
        [
            'soldier_id' => 12,
            'keyword_id' => 1,
        ],
        [
            'soldier_id' => 12,
            'keyword_id' => 2,
        ],
        [
            'soldier_id' => 12,
            'keyword_id' => 3,
        ],
        [
            'soldier_id' => 12,
            'keyword_id' => 4,
        ],
        [
            'soldier_id' => 12,
            'keyword_id' => 18,
        ],
        [
            'soldier_id' => 13,
            'keyword_id' => 19,
        ],
        [
            'soldier_id' => 13,
            'keyword_id' => 2,
        ],
        [
            'soldier_id' => 13,
            'keyword_id' => 20,
        ],
        [
            'soldier_id' => 13,
            'keyword_id' => 6,
        ],
        [
            'soldier_id' => 13,
            'keyword_id' => 21,
        ],
        [
            'soldier_id' => 14,
            'keyword_id' => 19,
        ],
        [
            'soldier_id' => 14,
            'keyword_id' => 2,
        ],
        [
            'soldier_id' => 14,
            'keyword_id' => 22,
        ],
        [
            'soldier_id' => 14,
            'keyword_id' => 23,
        ],
        [
            'soldier_id' => 15,
            'keyword_id' => 19,
        ],
        [
            'soldier_id' => 15,
            'keyword_id' => 2,
        ],
        [
            'soldier_id' => 15,
            'keyword_id' => 24,
        ],
        [
            'soldier_id' => 16,
            'keyword_id' => 19,
        ],
        [
            'soldier_id' => 16,
            'keyword_id' => 2,
        ],
        [
            'soldier_id' => 16,
            'keyword_id' => 25,
        ],
        [
            'soldier_id' => 16,
            'keyword_id' => 26,
        ],
        [
            'soldier_id' => 17,
            'keyword_id' => 19,
        ],
        [
            'soldier_id' => 17,
            'keyword_id' => 2,
        ],
        [
            'soldier_id' => 17,
            'keyword_id' => 13,
        ],
        [
            'soldier_id' => 17,
            'keyword_id' => 27,
        ],
        [
            'soldier_id' => 18,
            'keyword_id' => 19,
        ],
        [
            'soldier_id' => 18,
            'keyword_id' => 2,
        ],
        [
            'soldier_id' => 18,
            'keyword_id' => 22,
        ],
        [
            'soldier_id' => 18,
            'keyword_id' => 28,
        ],
        [
            'soldier_id' => 19,
            'keyword_id' => 19,
        ],
        [
            'soldier_id' => 19,
            'keyword_id' => 2,
        ],
        [
            'soldier_id' => 19,
            'keyword_id' => 22,
        ],
        [
            'soldier_id' => 19,
            'keyword_id' => 29,
        ],
        [
            'soldier_id' => 20,
            'keyword_id' => 30,
        ],
        [
            'soldier_id' => 20,
            'keyword_id' => 2,
        ],
        [
            'soldier_id' => 20,
            'keyword_id' => 31,
        ],
        [
            'soldier_id' => 20,
            'keyword_id' => 6,
        ],
        [
            'soldier_id' => 20,
            'keyword_id' => 32,
        ],
        [
            'soldier_id' => 20,
            'keyword_id' => 33,
        ],
        [
            'soldier_id' => 21,
            'keyword_id' => 30,
        ],
        [
            'soldier_id' => 21,
            'keyword_id' => 2,
        ],
        [
            'soldier_id' => 21,
            'keyword_id' => 31,
        ],
        [
            'soldier_id' => 21,
            'keyword_id' => 32,
        ],
        [
            'soldier_id' => 21,
            'keyword_id' => 34,
        ],
        [
            'soldier_id' => 22,
            'keyword_id' => 30,
        ],
        [
            'soldier_id' => 22,
            'keyword_id' => 2,
        ],
        [
            'soldier_id' => 22,
            'keyword_id' => 31,
        ],
        [
            'soldier_id' => 22,
            'keyword_id' => 32,
        ],
        [
            'soldier_id' => 22,
            'keyword_id' => 13,
        ],
        [
            'soldier_id' => 22,
            'keyword_id' => 35,
        ],
        [
            'soldier_id' => 23,
            'keyword_id' => 30,
        ],
        [
            'soldier_id' => 23,
            'keyword_id' => 2,
        ],
        [
            'soldier_id' => 23,
            'keyword_id' => 31,
        ],
        [
            'soldier_id' => 23,
            'keyword_id' => 32,
        ],
        [
            'soldier_id' => 23,
            'keyword_id' => 36,
        ],
        [
            'soldier_id' => 24,
            'keyword_id' => 30,
        ],
        [
            'soldier_id' => 24,
            'keyword_id' => 2,
        ],
        [
            'soldier_id' => 24,
            'keyword_id' => 31,
        ],
        [
            'soldier_id' => 24,
            'keyword_id' => 32,
        ],
        [
            'soldier_id' => 24,
            'keyword_id' => 37,
        ],
        [
            'soldier_id' => 25,
            'keyword_id' => 30,
        ],
        [
            'soldier_id' => 25,
            'keyword_id' => 2,
        ],
        [
            'soldier_id' => 25,
            'keyword_id' => 31,
        ],
        [
            'soldier_id' => 25,
            'keyword_id' => 32,
        ],
        [
            'soldier_id' => 25,
            'keyword_id' => 38,
        ],
        [
            'soldier_id' => 26,
            'keyword_id' => 30,
        ],
        [
            'soldier_id' => 26,
            'keyword_id' => 2,
        ],
        [
            'soldier_id' => 26,
            'keyword_id' => 31,
        ],
        [
            'soldier_id' => 26,
            'keyword_id' => 32,
        ],
        [
            'soldier_id' => 26,
            'keyword_id' => 39,
        ],
        [
            'soldier_id' => 27,
            'keyword_id' => 30,
        ],
        [
            'soldier_id' => 27,
            'keyword_id' => 2,
        ],
        [
            'soldier_id' => 27,
            'keyword_id' => 31,
        ],
        [
            'soldier_id' => 27,
            'keyword_id' => 32,
        ],
        [
            'soldier_id' => 27,
            'keyword_id' => 40,
        ],
        [
            'soldier_id' => 28,
            'keyword_id' => 30,
        ],
        [
            'soldier_id' => 28,
            'keyword_id' => 2,
        ],
        [
            'soldier_id' => 28,
            'keyword_id' => 31,
        ],
        [
            'soldier_id' => 28,
            'keyword_id' => 32,
        ],
        [
            'soldier_id' => 28,
            'keyword_id' => 41,
        ],
        [
            'soldier_id' => 29,
            'keyword_id' => 30,
        ],
        [
            'soldier_id' => 29,
            'keyword_id' => 2,
        ],
        [
            'soldier_id' => 29,
            'keyword_id' => 31,
        ],
        [
            'soldier_id' => 29,
            'keyword_id' => 32,
        ],
        [
            'soldier_id' => 29,
            'keyword_id' => 42,
        ],
        [
            'soldier_id' => 30,
            'keyword_id' => 30,
        ],
        [
            'soldier_id' => 30,
            'keyword_id' => 2,
        ],
        [
            'soldier_id' => 30,
            'keyword_id' => 31,
        ],
        [
            'soldier_id' => 30,
            'keyword_id' => 32,
        ],
        [
            'soldier_id' => 30,
            'keyword_id' => 43,
        ],
        [
            'soldier_id' => 31,
            'keyword_id' => 30,
        ],
        [
            'soldier_id' => 31,
            'keyword_id' => 2,
        ],
        [
            'soldier_id' => 31,
            'keyword_id' => 31,
        ],
        [
            'soldier_id' => 31,
            'keyword_id' => 32,
        ],
        [
            'soldier_id' => 31,
            'keyword_id' => 44,
        ],
        [
            'soldier_id' => 32,
            'keyword_id' => 45,
        ],
        [
            'soldier_id' => 32,
            'keyword_id' => 2,
        ],
        [
            'soldier_id' => 32,
            'keyword_id' => 6,
        ],
        [
            'soldier_id' => 32,
            'keyword_id' => 22,
        ],
        [
            'soldier_id' => 32,
            'keyword_id' => 46,
        ],
        [
            'soldier_id' => 33,
            'keyword_id' => 45,
        ],
        [
            'soldier_id' => 33,
            'keyword_id' => 2,
        ],
        [
            'soldier_id' => 33,
            'keyword_id' => 22,
        ],
        [
            'soldier_id' => 33,
            'keyword_id' => 47,
        ],
        [
            'soldier_id' => 34,
            'keyword_id' => 45,
        ],
        [
            'soldier_id' => 34,
            'keyword_id' => 2,
        ],
        [
            'soldier_id' => 34,
            'keyword_id' => 22,
        ],
        [
            'soldier_id' => 34,
            'keyword_id' => 48,
        ],
        [
            'soldier_id' => 35,
            'keyword_id' => 45,
        ],
        [
            'soldier_id' => 35,
            'keyword_id' => 2,
        ],
        [
            'soldier_id' => 35,
            'keyword_id' => 22,
        ],
        [
            'soldier_id' => 35,
            'keyword_id' => 49,
        ],
        [
            'soldier_id' => 36,
            'keyword_id' => 45,
        ],
        [
            'soldier_id' => 36,
            'keyword_id' => 2,
        ],
        [
            'soldier_id' => 36,
            'keyword_id' => 22,
        ],
        [
            'soldier_id' => 36,
            'keyword_id' => 50,
        ],
        [
            'soldier_id' => 37,
            'keyword_id' => 2,
        ],
        [
            'soldier_id' => 37,
            'keyword_id' => 51,
        ],
        [
            'soldier_id' => 37,
            'keyword_id' => 22,
        ],
        [
            'soldier_id' => 37,
            'keyword_id' => 52,
        ],
        [
            'soldier_id' => 38,
            'keyword_id' => 45,
        ],
        [
            'soldier_id' => 38,
            'keyword_id' => 2,
        ],
        [
            'soldier_id' => 38,
            'keyword_id' => 22,
        ],
        [
            'soldier_id' => 38,
            'keyword_id' => 54,
        ],
        [
            'soldier_id' => 39,
            'keyword_id' => 45,
        ],
        [
            'soldier_id' => 39,
            'keyword_id' => 2,
        ],
        [
            'soldier_id' => 39,
            'keyword_id' => 22,
        ],
        [
            'soldier_id' => 39,
            'keyword_id' => 36,
        ],
        [
            'soldier_id' => 40,
            'keyword_id' => 45,
        ],
        [
            'soldier_id' => 40,
            'keyword_id' => 2,
        ],
        [
            'soldier_id' => 40,
            'keyword_id' => 22,
        ],
        [
            'soldier_id' => 40,
            'keyword_id' => 53,
        ],
        [
            'soldier_id' => 41,
            'keyword_id' => 45,
        ],
        [
            'soldier_id' => 41,
            'keyword_id' => 2,
        ],
        [
            'soldier_id' => 41,
            'keyword_id' => 22,
        ],
        [
            'soldier_id' => 41,
            'keyword_id' => 55,
        ],
        [
            'soldier_id' => 42,
            'keyword_id' => 45,
        ],
        [
            'soldier_id' => 42,
            'keyword_id' => 2,
        ],
        [
            'soldier_id' => 42,
            'keyword_id' => 22,
        ],
        [
            'soldier_id' => 42,
            'keyword_id' => 56,
        ],
        [
            'soldier_id' => 43,
            'keyword_id' => 57,
        ],
        [
            'soldier_id' => 43,
            'keyword_id' => 2,
        ],
        [
            'soldier_id' => 43,
            'keyword_id' => 58,
        ],
        [
            'soldier_id' => 43,
            'keyword_id' => 6,
        ],
        [
            'soldier_id' => 43,
            'keyword_id' => 59,
        ],
        [
            'soldier_id' => 44,
            'keyword_id' => 57,
        ],
        [
            'soldier_id' => 44,
            'keyword_id' => 2,
        ],
        [
            'soldier_id' => 44,
            'keyword_id' => 58,
        ],
        [
            'soldier_id' => 44,
            'keyword_id' => 51,
        ],
        [
            'soldier_id' => 44,
            'keyword_id' => 60,
        ],
        [
            'soldier_id' => 45,
            'keyword_id' => 2,
        ],
        [
            'soldier_id' => 45,
            'keyword_id' => 57,
        ],
        [
            'soldier_id' => 45,
            'keyword_id' => 61,
        ],
        [
            'soldier_id' => 46,
            'keyword_id' => 57,
        ],
        [
            'soldier_id' => 46,
            'keyword_id' => 2,
        ],
        [
            'soldier_id' => 46,
            'keyword_id' => 58,
        ],
        [
            'soldier_id' => 46,
            'keyword_id' => 62,
        ],
        [
            'soldier_id' => 47,
            'keyword_id' => 57,
        ],
        [
            'soldier_id' => 47,
            'keyword_id' => 2,
        ],
        [
            'soldier_id' => 47,
            'keyword_id' => 58,
        ],
        [
            'soldier_id' => 47,
            'keyword_id' => 63,
        ],
        [
            'soldier_id' => 48,
            'keyword_id' => 57,
        ],
        [
            'soldier_id' => 48,
            'keyword_id' => 2,
        ],
        [
            'soldier_id' => 48,
            'keyword_id' => 58,
        ],
        [
            'soldier_id' => 48,
            'keyword_id' => 64,
        ],
        [
            'soldier_id' => 49,
            'keyword_id' => 57,
        ],
        [
            'soldier_id' => 49,
            'keyword_id' => 2,
        ],
        [
            'soldier_id' => 49,
            'keyword_id' => 58,
        ],
        [
            'soldier_id' => 49,
            'keyword_id' => 65,
        ],
        [
            'soldier_id' => 50,
            'keyword_id' => 57,
        ],
        [
            'soldier_id' => 50,
            'keyword_id' => 2,
        ],
        [
            'soldier_id' => 50,
            'keyword_id' => 58,
        ],
        [
            'soldier_id' => 50,
            'keyword_id' => 66,
        ],
        [
            'soldier_id' => 51,
            'keyword_id' => 57,
        ],
        [
            'soldier_id' => 51,
            'keyword_id' => 2,
        ],
        [
            'soldier_id' => 51,
            'keyword_id' => 58,
        ],
        [
            'soldier_id' => 51,
            'keyword_id' => 67,
        ],
        [
            'soldier_id' => 51,
            'keyword_id' => 68,
        ],
        [
            'soldier_id' => 52,
            'keyword_id' => 57,
        ],
        [
            'soldier_id' => 52,
            'keyword_id' => 2,
        ],
        [
            'soldier_id' => 52,
            'keyword_id' => 58,
        ],
        [
            'soldier_id' => 52,
            'keyword_id' => 69,
        ],
        [
            'soldier_id' => 53,
            'keyword_id' => 57,
        ],
        [
            'soldier_id' => 53,
            'keyword_id' => 2,
        ],
        [
            'soldier_id' => 53,
            'keyword_id' => 58,
        ],
        [
            'soldier_id' => 53,
            'keyword_id' => 214,
        ],
        [
            'soldier_id' => 54,
            'keyword_id' => 57,
        ],
        [
            'soldier_id' => 54,
            'keyword_id' => 2,
        ],
        [
            'soldier_id' => 54,
            'keyword_id' => 70,
        ],
        [
            'soldier_id' => 54,
            'keyword_id' => 71,
        ],
        [
            'soldier_id' => 54,
            'keyword_id' => 72,
        ],
        [
            'soldier_id' => 55,
            'keyword_id' => 57,
        ],
        [
            'soldier_id' => 55,
            'keyword_id' => 2,
        ],
        [
            'soldier_id' => 55,
            'keyword_id' => 70,
        ],
        [
            'soldier_id' => 55,
            'keyword_id' => 71,
        ],
        [
            'soldier_id' => 55,
            'keyword_id' => 73,
        ],
        [
            'soldier_id' => 56,
            'keyword_id' => 57,
        ],
        [
            'soldier_id' => 56,
            'keyword_id' => 2,
        ],
        [
            'soldier_id' => 56,
            'keyword_id' => 70,
        ],
        [
            'soldier_id' => 56,
            'keyword_id' => 71,
        ],
        [
            'soldier_id' => 56,
            'keyword_id' => 74,
        ],
        [
            'soldier_id' => 57,
            'keyword_id' => 57,
        ],
        [
            'soldier_id' => 57,
            'keyword_id' => 2,
        ],
        [
            'soldier_id' => 57,
            'keyword_id' => 75,
        ],
        [
            'soldier_id' => 57,
            'keyword_id' => 76,
        ],
        [
            'soldier_id' => 57,
            'keyword_id' => 77,
        ],
        [
            'soldier_id' => 58,
            'keyword_id' => 57,
        ],
        [
            'soldier_id' => 58,
            'keyword_id' => 2,
        ],
        [
            'soldier_id' => 58,
            'keyword_id' => 75,
        ],
        [
            'soldier_id' => 58,
            'keyword_id' => 76,
        ],
        [
            'soldier_id' => 58,
            'keyword_id' => 36,
        ],
        [
            'soldier_id' => 59,
            'keyword_id' => 57,
        ],
        [
            'soldier_id' => 59,
            'keyword_id' => 2,
        ],
        [
            'soldier_id' => 59,
            'keyword_id' => 75,
        ],
        [
            'soldier_id' => 59,
            'keyword_id' => 76,
        ],
        [
            'soldier_id' => 59,
            'keyword_id' => 13,
        ],
        [
            'soldier_id' => 60,
            'keyword_id' => 57,
        ],
        [
            'soldier_id' => 60,
            'keyword_id' => 2,
        ],
        [
            'soldier_id' => 60,
            'keyword_id' => 75,
        ],
        [
            'soldier_id' => 60,
            'keyword_id' => 76,
        ],
        [
            'soldier_id' => 60,
            'keyword_id' => 78,
        ],
        [
            'soldier_id' => 61,
            'keyword_id' => 2,
        ],
        [
            'soldier_id' => 61,
            'keyword_id' => 75,
        ],
        [
            'soldier_id' => 61,
            'keyword_id' => 6,
        ],
        [
            'soldier_id' => 61,
            'keyword_id' => 80,
        ],
        [
            'soldier_id' => 62,
            'keyword_id' => 79,
        ],
        [
            'soldier_id' => 62,
            'keyword_id' => 2,
        ],
        [
            'soldier_id' => 62,
            'keyword_id' => 75,
        ],
        [
            'soldier_id' => 62,
            'keyword_id' => 13,
        ],
        [
            'soldier_id' => 62,
            'keyword_id' => 81,
        ],
        [
            'soldier_id' => 63,
            'keyword_id' => 79,
        ],
        [
            'soldier_id' => 63,
            'keyword_id' => 2,
        ],
        [
            'soldier_id' => 63,
            'keyword_id' => 75,
        ],
        [
            'soldier_id' => 63,
            'keyword_id' => 82,
        ],
        [
            'soldier_id' => 64,
            'keyword_id' => 79,
        ],
        [
            'soldier_id' => 64,
            'keyword_id' => 75,
        ],
        [
            'soldier_id' => 64,
            'keyword_id' => 2,
        ],
        [
            'soldier_id' => 64,
            'keyword_id' => 83,
        ],
        [
            'soldier_id' => 65,
            'keyword_id' => 79,
        ],
        [
            'soldier_id' => 65,
            'keyword_id' => 2,
        ],
        [
            'soldier_id' => 65,
            'keyword_id' => 75,
        ],
        [
            'soldier_id' => 65,
            'keyword_id' => 84,
        ],
        [
            'soldier_id' => 66,
            'keyword_id' => 79,
        ],
        [
            'soldier_id' => 66,
            'keyword_id' => 2,
        ],
        [
            'soldier_id' => 66,
            'keyword_id' => 75,
        ],
        [
            'soldier_id' => 66,
            'keyword_id' => 85,
        ],
        [
            'soldier_id' => 67,
            'keyword_id' => 79,
        ],
        [
            'soldier_id' => 67,
            'keyword_id' => 2,
        ],
        [
            'soldier_id' => 67,
            'keyword_id' => 75,
        ],
        [
            'soldier_id' => 67,
            'keyword_id' => 86,
        ],
        [
            'soldier_id' => 68,
            'keyword_id' => 79,
        ],
        [
            'soldier_id' => 68,
            'keyword_id' => 2,
        ],
        [
            'soldier_id' => 68,
            'keyword_id' => 75,
        ],
        [
            'soldier_id' => 68,
            'keyword_id' => 87,
        ],
        [
            'soldier_id' => 69,
            'keyword_id' => 88,
        ],
        [
            'soldier_id' => 69,
            'keyword_id' => 2,
        ],
        [
            'soldier_id' => 69,
            'keyword_id' => 75,
        ],
        [
            'soldier_id' => 69,
            'keyword_id' => 89,
        ],
        [
            'soldier_id' => 69,
            'keyword_id' => 90,
        ],
        [
            'soldier_id' => 70,
            'keyword_id' => 88,
        ],
        [
            'soldier_id' => 70,
            'keyword_id' => 2,
        ],
        [
            'soldier_id' => 70,
            'keyword_id' => 75,
        ],
        [
            'soldier_id' => 70,
            'keyword_id' => 89,
        ],
        [
            'soldier_id' => 70,
            'keyword_id' => 6,
        ],
        [
            'soldier_id' => 70,
            'keyword_id' => 91,
        ],
        [
            'soldier_id' => 71,
            'keyword_id' => 88,
        ],
        [
            'soldier_id' => 71,
            'keyword_id' => 2,
        ],
        [
            'soldier_id' => 71,
            'keyword_id' => 75,
        ],
        [
            'soldier_id' => 71,
            'keyword_id' => 89,
        ],
        [
            'soldier_id' => 71,
            'keyword_id' => 92,
        ],
        [
            'soldier_id' => 72,
            'keyword_id' => 88,
        ],
        [
            'soldier_id' => 72,
            'keyword_id' => 2,
        ],
        [
            'soldier_id' => 72,
            'keyword_id' => 75,
        ],
        [
            'soldier_id' => 72,
            'keyword_id' => 89,
        ],
        [
            'soldier_id' => 72,
            'keyword_id' => 93,
        ],
        [
            'soldier_id' => 73,
            'keyword_id' => 88,
        ],
        [
            'soldier_id' => 73,
            'keyword_id' => 2,
        ],
        [
            'soldier_id' => 73,
            'keyword_id' => 75,
        ],
        [
            'soldier_id' => 73,
            'keyword_id' => 89,
        ],
        [
            'soldier_id' => 73,
            'keyword_id' => 94,
        ],
        [
            'soldier_id' => 74,
            'keyword_id' => 88,
        ],
        [
            'soldier_id' => 74,
            'keyword_id' => 2,
        ],
        [
            'soldier_id' => 74,
            'keyword_id' => 75,
        ],
        [
            'soldier_id' => 74,
            'keyword_id' => 89,
        ],
        [
            'soldier_id' => 74,
            'keyword_id' => 95,
        ],
        [
            'soldier_id' => 75,
            'keyword_id' => 88,
        ],
        [
            'soldier_id' => 75,
            'keyword_id' => 2,
        ],
        [
            'soldier_id' => 75,
            'keyword_id' => 75,
        ],
        [
            'soldier_id' => 75,
            'keyword_id' => 89,
        ],
        [
            'soldier_id' => 75,
            'keyword_id' => 96,
        ],
        [
            'soldier_id' => 76,
            'keyword_id' => 88,
        ],
        [
            'soldier_id' => 76,
            'keyword_id' => 2,
        ],
        [
            'soldier_id' => 76,
            'keyword_id' => 75,
        ],
        [
            'soldier_id' => 76,
            'keyword_id' => 13,
        ],
        [
            'soldier_id' => 76,
            'keyword_id' => 97,
        ],
        [
            'soldier_id' => 77,
            'keyword_id' => 88,
        ],
        [
            'soldier_id' => 77,
            'keyword_id' => 2,
        ],
        [
            'soldier_id' => 77,
            'keyword_id' => 75,
        ],
        [
            'soldier_id' => 77,
            'keyword_id' => 89,
        ],
        [
            'soldier_id' => 77,
            'keyword_id' => 98,
        ],
        [
            'soldier_id' => 78,
            'keyword_id' => 88,
        ],
        [
            'soldier_id' => 78,
            'keyword_id' => 2,
        ],
        [
            'soldier_id' => 78,
            'keyword_id' => 75,
        ],
        [
            'soldier_id' => 78,
            'keyword_id' => 89,
        ],
        [
            'soldier_id' => 78,
            'keyword_id' => 99,
        ],
        [
            'soldier_id' => 79,
            'keyword_id' => 88,
        ],
        [
            'soldier_id' => 79,
            'keyword_id' => 2,
        ],
        [
            'soldier_id' => 79,
            'keyword_id' => 75,
        ],
        [
            'soldier_id' => 79,
            'keyword_id' => 89,
        ],
        [
            'soldier_id' => 79,
            'keyword_id' => 100,
        ],
        [
            'soldier_id' => 80,
            'keyword_id' => 88,
        ],
        [
            'soldier_id' => 80,
            'keyword_id' => 2,
        ],
        [
            'soldier_id' => 80,
            'keyword_id' => 75,
        ],
        [
            'soldier_id' => 80,
            'keyword_id' => 89,
        ],
        [
            'soldier_id' => 80,
            'keyword_id' => 101,
        ],
        [
            'soldier_id' => 81,
            'keyword_id' => 102,
        ],
        [
            'soldier_id' => 81,
            'keyword_id' => 2,
        ],
        [
            'soldier_id' => 81,
            'keyword_id' => 116,
        ],
        [
            'soldier_id' => 81,
            'keyword_id' => 103,
        ],
        [
            'soldier_id' => 81,
            'keyword_id' => 104,
        ],
        [
            'soldier_id' => 81,
            'keyword_id' => 105,
        ],
        [
            'soldier_id' => 81,
            'keyword_id' => 106,
        ],
        [
            'soldier_id' => 82,
            'keyword_id' => 102,
        ],
        [
            'soldier_id' => 82,
            'keyword_id' => 2,
        ],
        [
            'soldier_id' => 82,
            'keyword_id' => 116,
        ],
        [
            'soldier_id' => 82,
            'keyword_id' => 103,
        ],
        [
            'soldier_id' => 82,
            'keyword_id' => 104,
        ],
        [
            'soldier_id' => 82,
            'keyword_id' => 13,
        ],
        [
            'soldier_id' => 82,
            'keyword_id' => 105,
        ],
        [
            'soldier_id' => 82,
            'keyword_id' => 107,
        ],
        [
            'soldier_id' => 83,
            'keyword_id' => 102,
        ],
        [
            'soldier_id' => 83,
            'keyword_id' => 2,
        ],
        [
            'soldier_id' => 83,
            'keyword_id' => 116,
        ],
        [
            'soldier_id' => 83,
            'keyword_id' => 103,
        ],
        [
            'soldier_id' => 83,
            'keyword_id' => 104,
        ],
        [
            'soldier_id' => 83,
            'keyword_id' => 105,
        ],
        [
            'soldier_id' => 83,
            'keyword_id' => 108,
        ],
        [
            'soldier_id' => 84,
            'keyword_id' => 102,
        ],
        [
            'soldier_id' => 84,
            'keyword_id' => 2,
        ],
        [
            'soldier_id' => 84,
            'keyword_id' => 116,
        ],
        [
            'soldier_id' => 84,
            'keyword_id' => 103,
        ],
        [
            'soldier_id' => 84,
            'keyword_id' => 104,
        ],
        [
            'soldier_id' => 84,
            'keyword_id' => 105,
        ],
        [
            'soldier_id' => 84,
            'keyword_id' => 109,
        ],
        [
            'soldier_id' => 85,
            'keyword_id' => 102,
        ],
        [
            'soldier_id' => 85,
            'keyword_id' => 2,
        ],
        [
            'soldier_id' => 85,
            'keyword_id' => 116,
        ],
        [
            'soldier_id' => 85,
            'keyword_id' => 103,
        ],
        [
            'soldier_id' => 85,
            'keyword_id' => 104,
        ],
        [
            'soldier_id' => 85,
            'keyword_id' => 105,
        ],
        [
            'soldier_id' => 85,
            'keyword_id' => 110,
        ],
        [
            'soldier_id' => 86,
            'keyword_id' => 102,
        ],
        [
            'soldier_id' => 86,
            'keyword_id' => 2,
        ],
        [
            'soldier_id' => 86,
            'keyword_id' => 116,
        ],
        [
            'soldier_id' => 86,
            'keyword_id' => 103,
        ],
        [
            'soldier_id' => 86,
            'keyword_id' => 104,
        ],
        [
            'soldier_id' => 86,
            'keyword_id' => 105,
        ],
        [
            'soldier_id' => 86,
            'keyword_id' => 111,
        ],
        [
            'soldier_id' => 87,
            'keyword_id' => 102,
        ],
        [
            'soldier_id' => 87,
            'keyword_id' => 2,
        ],
        [
            'soldier_id' => 87,
            'keyword_id' => 116,
        ],
        [
            'soldier_id' => 87,
            'keyword_id' => 103,
        ],
        [
            'soldier_id' => 87,
            'keyword_id' => 6,
        ],
        [
            'soldier_id' => 87,
            'keyword_id' => 105,
        ],
        [
            'soldier_id' => 87,
            'keyword_id' => 112,
        ],
        [
            'soldier_id' => 88,
            'keyword_id' => 102,
        ],
        [
            'soldier_id' => 88,
            'keyword_id' => 2,
        ],
        [
            'soldier_id' => 88,
            'keyword_id' => 116,
        ],
        [
            'soldier_id' => 88,
            'keyword_id' => 103,
        ],
        [
            'soldier_id' => 88,
            'keyword_id' => 104,
        ],
        [
            'soldier_id' => 88,
            'keyword_id' => 117,
        ],
        [
            'soldier_id' => 88,
            'keyword_id' => 40,
        ],
        [
            'soldier_id' => 89,
            'keyword_id' => 102,
        ],
        [
            'soldier_id' => 89,
            'keyword_id' => 2,
        ],
        [
            'soldier_id' => 89,
            'keyword_id' => 116,
        ],
        [
            'soldier_id' => 89,
            'keyword_id' => 103,
        ],
        [
            'soldier_id' => 89,
            'keyword_id' => 104,
        ],
        [
            'soldier_id' => 89,
            'keyword_id' => 117,
        ],
        [
            'soldier_id' => 89,
            'keyword_id' => 113,
        ],
        [
            'soldier_id' => 90,
            'keyword_id' => 102,
        ],
        [
            'soldier_id' => 90,
            'keyword_id' => 2,
        ],
        [
            'soldier_id' => 90,
            'keyword_id' => 116,
        ],
        [
            'soldier_id' => 90,
            'keyword_id' => 103,
        ],
        [
            'soldier_id' => 90,
            'keyword_id' => 104,
        ],
        [
            'soldier_id' => 90,
            'keyword_id' => 117,
        ],
        [
            'soldier_id' => 90,
            'keyword_id' => 111,
        ],
        [
            'soldier_id' => 91,
            'keyword_id' => 102,
        ],
        [
            'soldier_id' => 91,
            'keyword_id' => 2,
        ],
        [
            'soldier_id' => 91,
            'keyword_id' => 116,
        ],
        [
            'soldier_id' => 91,
            'keyword_id' => 103,
        ],
        [
            'soldier_id' => 91,
            'keyword_id' => 104,
        ],
        [
            'soldier_id' => 91,
            'keyword_id' => 6,
        ],
        [
            'soldier_id' => 91,
            'keyword_id' => 117,
        ],
        [
            'soldier_id' => 91,
            'keyword_id' => 112,
        ],
        [
            'soldier_id' => 92,
            'keyword_id' => 102,
        ],
        [
            'soldier_id' => 92,
            'keyword_id' => 2,
        ],
        [
            'soldier_id' => 92,
            'keyword_id' => 116,
        ],
        [
            'soldier_id' => 92,
            'keyword_id' => 103,
        ],
        [
            'soldier_id' => 92,
            'keyword_id' => 104,
        ],
        [
            'soldier_id' => 92,
            'keyword_id' => 114,
        ],
        [
            'soldier_id' => 92,
            'keyword_id' => 111,
        ],
        [
            'soldier_id' => 93,
            'keyword_id' => 102,
        ],
        [
            'soldier_id' => 93,
            'keyword_id' => 2,
        ],
        [
            'soldier_id' => 93,
            'keyword_id' => 116,
        ],
        [
            'soldier_id' => 93,
            'keyword_id' => 103,
        ],
        [
            'soldier_id' => 93,
            'keyword_id' => 104,
        ],
        [
            'soldier_id' => 93,
            'keyword_id' => 6,
        ],
        [
            'soldier_id' => 93,
            'keyword_id' => 114,
        ],
        [
            'soldier_id' => 93,
            'keyword_id' => 112,
        ],
        [
            'soldier_id' => 94,
            'keyword_id' => 115,
        ],
        [
            'soldier_id' => 94,
            'keyword_id' => 2,
        ],
        [
            'soldier_id' => 94,
            'keyword_id' => 116,
        ],
        [
            'soldier_id' => 94,
            'keyword_id' => 6,
        ],
        [
            'soldier_id' => 94,
            'keyword_id' => 120,
        ],
        [
            'soldier_id' => 94,
            'keyword_id' => 112,
        ],
        [
            'soldier_id' => 95,
            'keyword_id' => 115,
        ],
        [
            'soldier_id' => 95,
            'keyword_id' => 2,
        ],
        [
            'soldier_id' => 95,
            'keyword_id' => 116,
        ],
        [
            'soldier_id' => 95,
            'keyword_id' => 120,
        ],
        [
            'soldier_id' => 95,
            'keyword_id' => 118,
        ],
        [
            'soldier_id' => 96,
            'keyword_id' => 115,
        ],
        [
            'soldier_id' => 96,
            'keyword_id' => 2,
        ],
        [
            'soldier_id' => 96,
            'keyword_id' => 116,
        ],
        [
            'soldier_id' => 96,
            'keyword_id' => 120,
        ],
        [
            'soldier_id' => 96,
            'keyword_id' => 119,
        ],
        [
            'soldier_id' => 97,
            'keyword_id' => 115,
        ],
        [
            'soldier_id' => 97,
            'keyword_id' => 2,
        ],
        [
            'soldier_id' => 97,
            'keyword_id' => 116,
        ],
        [
            'soldier_id' => 97,
            'keyword_id' => 120,
        ],
        [
            'soldier_id' => 97,
            'keyword_id' => 121,
        ],
        [
            'soldier_id' => 98,
            'keyword_id' => 115,
        ],
        [
            'soldier_id' => 98,
            'keyword_id' => 2,
        ],
        [
            'soldier_id' => 98,
            'keyword_id' => 116,
        ],
        [
            'soldier_id' => 98,
            'keyword_id' => 120,
        ],
        [
            'soldier_id' => 98,
            'keyword_id' => 122,
        ],
        [
            'soldier_id' => 99,
            'keyword_id' => 115,
        ],
        [
            'soldier_id' => 99,
            'keyword_id' => 2,
        ],
        [
            'soldier_id' => 99,
            'keyword_id' => 116,
        ],
        [
            'soldier_id' => 99,
            'keyword_id' => 120,
        ],
        [
            'soldier_id' => 99,
            'keyword_id' => 111,
        ],
        [
            'soldier_id' => 100,
            'keyword_id' => 123,
        ],
        [
            'soldier_id' => 100,
            'keyword_id' => 124,
        ],
        [
            'soldier_id' => 100,
            'keyword_id' => 125,
        ],
        [
            'soldier_id' => 100,
            'keyword_id' => 126,
        ],
        [
            'soldier_id' => 100,
            'keyword_id' => 51,
        ],
        [
            'soldier_id' => 100,
            'keyword_id' => 127,
        ],
        [
            'soldier_id' => 101,
            'keyword_id' => 123,
        ],
        [
            'soldier_id' => 101,
            'keyword_id' => 124,
        ],
        [
            'soldier_id' => 101,
            'keyword_id' => 125,
        ],
        [
            'soldier_id' => 101,
            'keyword_id' => 126,
        ],
        [
            'soldier_id' => 101,
            'keyword_id' => 51,
        ],
        [
            'soldier_id' => 101,
            'keyword_id' => 127,
        ],
        [
            'soldier_id' => 102,
            'keyword_id' => 123,
        ],
        [
            'soldier_id' => 102,
            'keyword_id' => 124,
        ],
        [
            'soldier_id' => 102,
            'keyword_id' => 125,
        ],
        [
            'soldier_id' => 102,
            'keyword_id' => 126,
        ],
        [
            'soldier_id' => 102,
            'keyword_id' => 129,
        ],
        [
            'soldier_id' => 103,
            'keyword_id' => 123,
        ],
        [
            'soldier_id' => 103,
            'keyword_id' => 124,
        ],
        [
            'soldier_id' => 103,
            'keyword_id' => 125,
        ],
        [
            'soldier_id' => 103,
            'keyword_id' => 130,
        ],
        [
            'soldier_id' => 103,
            'keyword_id' => 6,
        ],
        [
            'soldier_id' => 103,
            'keyword_id' => 131,
        ],
        [
            'soldier_id' => 104,
            'keyword_id' => 123,
        ],
        [
            'soldier_id' => 104,
            'keyword_id' => 124,
        ],
        [
            'soldier_id' => 104,
            'keyword_id' => 125,
        ],
        [
            'soldier_id' => 104,
            'keyword_id' => 130,
        ],
        [
            'soldier_id' => 104,
            'keyword_id' => 132,
        ],
        [
            'soldier_id' => 105,
            'keyword_id' => 123,
        ],
        [
            'soldier_id' => 105,
            'keyword_id' => 124,
        ],
        [
            'soldier_id' => 105,
            'keyword_id' => 125,
        ],
        [
            'soldier_id' => 105,
            'keyword_id' => 130,
        ],
        [
            'soldier_id' => 105,
            'keyword_id' => 133,
        ],
        [
            'soldier_id' => 106,
            'keyword_id' => 123,
        ],
        [
            'soldier_id' => 106,
            'keyword_id' => 124,
        ],
        [
            'soldier_id' => 106,
            'keyword_id' => 125,
        ],
        [
            'soldier_id' => 106,
            'keyword_id' => 130,
        ],
        [
            'soldier_id' => 106,
            'keyword_id' => 134,
        ],
        [
            'soldier_id' => 107,
            'keyword_id' => 123,
        ],
        [
            'soldier_id' => 107,
            'keyword_id' => 124,
        ],
        [
            'soldier_id' => 107,
            'keyword_id' => 125,
        ],
        [
            'soldier_id' => 107,
            'keyword_id' => 135,
        ],
        [
            'soldier_id' => 108,
            'keyword_id' => 123,
        ],
        [
            'soldier_id' => 108,
            'keyword_id' => 124,
        ],
        [
            'soldier_id' => 108,
            'keyword_id' => 125,
        ],
        [
            'soldier_id' => 108,
            'keyword_id' => 136,
        ],
        [
            'soldier_id' => 109,
            'keyword_id' => 137,
        ],
        [
            'soldier_id' => 109,
            'keyword_id' => 124,
        ],
        [
            'soldier_id' => 109,
            'keyword_id' => 138,
        ],
        [
            'soldier_id' => 109,
            'keyword_id' => 139,
        ],
        [
            'soldier_id' => 109,
            'keyword_id' => 140,
        ],
        [
            'soldier_id' => 109,
            'keyword_id' => 141,
        ],
        [
            'soldier_id' => 110,
            'keyword_id' => 137,
        ],
        [
            'soldier_id' => 110,
            'keyword_id' => 124,
        ],
        [
            'soldier_id' => 110,
            'keyword_id' => 138,
        ],
        [
            'soldier_id' => 110,
            'keyword_id' => 139,
        ],
        [
            'soldier_id' => 110,
            'keyword_id' => 140,
        ],
        [
            'soldier_id' => 110,
            'keyword_id' => 142,
        ],
        [
            'soldier_id' => 111,
            'keyword_id' => 137,
        ],
        [
            'soldier_id' => 111,
            'keyword_id' => 124,
        ],
        [
            'soldier_id' => 111,
            'keyword_id' => 138,
        ],
        [
            'soldier_id' => 111,
            'keyword_id' => 139,
        ],
        [
            'soldier_id' => 111,
            'keyword_id' => 140,
        ],
        [
            'soldier_id' => 111,
            'keyword_id' => 143,
        ],
        [
            'soldier_id' => 112,
            'keyword_id' => 137,
        ],
        [
            'soldier_id' => 112,
            'keyword_id' => 124,
        ],
        [
            'soldier_id' => 112,
            'keyword_id' => 138,
        ],
        [
            'soldier_id' => 112,
            'keyword_id' => 139,
        ],
        [
            'soldier_id' => 112,
            'keyword_id' => 140,
        ],
        [
            'soldier_id' => 112,
            'keyword_id' => 144,
        ],
        [
            'soldier_id' => 113,
            'keyword_id' => 137,
        ],
        [
            'soldier_id' => 113,
            'keyword_id' => 124,
        ],
        [
            'soldier_id' => 113,
            'keyword_id' => 138,
        ],
        [
            'soldier_id' => 113,
            'keyword_id' => 139,
        ],
        [
            'soldier_id' => 113,
            'keyword_id' => 140,
        ],
        [
            'soldier_id' => 113,
            'keyword_id' => 145,
        ],
        [
            'soldier_id' => 114,
            'keyword_id' => 137,
        ],
        [
            'soldier_id' => 114,
            'keyword_id' => 124,
        ],
        [
            'soldier_id' => 114,
            'keyword_id' => 138,
        ],
        [
            'soldier_id' => 114,
            'keyword_id' => 139,
        ],
        [
            'soldier_id' => 114,
            'keyword_id' => 140,
        ],
        [
            'soldier_id' => 114,
            'keyword_id' => 146,
        ],
        [
            'soldier_id' => 115,
            'keyword_id' => 137,
        ],
        [
            'soldier_id' => 115,
            'keyword_id' => 124,
        ],
        [
            'soldier_id' => 115,
            'keyword_id' => 138,
        ],
        [
            'soldier_id' => 115,
            'keyword_id' => 139,
        ],
        [
            'soldier_id' => 115,
            'keyword_id' => 140,
        ],
        [
            'soldier_id' => 115,
            'keyword_id' => 147,
        ],
        [
            'soldier_id' => 116,
            'keyword_id' => 137,
        ],
        [
            'soldier_id' => 116,
            'keyword_id' => 124,
        ],
        [
            'soldier_id' => 116,
            'keyword_id' => 138,
        ],
        [
            'soldier_id' => 116,
            'keyword_id' => 139,
        ],
        [
            'soldier_id' => 116,
            'keyword_id' => 140,
        ],
        [
            'soldier_id' => 116,
            'keyword_id' => 67,
        ],
        [
            'soldier_id' => 116,
            'keyword_id' => 148,
        ],
        [
            'soldier_id' => 117,
            'keyword_id' => 137,
        ],
        [
            'soldier_id' => 117,
            'keyword_id' => 124,
        ],
        [
            'soldier_id' => 117,
            'keyword_id' => 138,
        ],
        [
            'soldier_id' => 117,
            'keyword_id' => 139,
        ],
        [
            'soldier_id' => 117,
            'keyword_id' => 140,
        ],
        [
            'soldier_id' => 117,
            'keyword_id' => 6,
        ],
        [
            'soldier_id' => 117,
            'keyword_id' => 149,
        ],
        [
            'soldier_id' => 118,
            'keyword_id' => 137,
        ],
        [
            'soldier_id' => 118,
            'keyword_id' => 124,
        ],
        [
            'soldier_id' => 118,
            'keyword_id' => 138,
        ],
        [
            'soldier_id' => 118,
            'keyword_id' => 139,
        ],
        [
            'soldier_id' => 118,
            'keyword_id' => 140,
        ],
        [
            'soldier_id' => 118,
            'keyword_id' => 6,
        ],
        [
            'soldier_id' => 118,
            'keyword_id' => 150,
        ],
        [
            'soldier_id' => 119,
            'keyword_id' => 151,
        ],
        [
            'soldier_id' => 119,
            'keyword_id' => 124,
        ],
        [
            'soldier_id' => 119,
            'keyword_id' => 152,
        ],
        [
            'soldier_id' => 119,
            'keyword_id' => 153,
        ],
        [
            'soldier_id' => 119,
            'keyword_id' => 154,
        ],
        [
            'soldier_id' => 120,
            'keyword_id' => 151,
        ],
        [
            'soldier_id' => 120,
            'keyword_id' => 124,
        ],
        [
            'soldier_id' => 120,
            'keyword_id' => 152,
        ],
        [
            'soldier_id' => 120,
            'keyword_id' => 153,
        ],
        [
            'soldier_id' => 120,
            'keyword_id' => 155,
        ],
        [
            'soldier_id' => 121,
            'keyword_id' => 151,
        ],
        [
            'soldier_id' => 121,
            'keyword_id' => 124,
        ],
        [
            'soldier_id' => 121,
            'keyword_id' => 152,
        ],
        [
            'soldier_id' => 121,
            'keyword_id' => 153,
        ],
        [
            'soldier_id' => 121,
            'keyword_id' => 156,
        ],
        [
            'soldier_id' => 122,
            'keyword_id' => 151,
        ],
        [
            'soldier_id' => 122,
            'keyword_id' => 124,
        ],
        [
            'soldier_id' => 122,
            'keyword_id' => 152,
        ],
        [
            'soldier_id' => 122,
            'keyword_id' => 153,
        ],
        [
            'soldier_id' => 122,
            'keyword_id' => 13,
        ],
        [
            'soldier_id' => 122,
            'keyword_id' => 157,
        ],
        [
            'soldier_id' => 123,
            'keyword_id' => 151,
        ],
        [
            'soldier_id' => 123,
            'keyword_id' => 124,
        ],
        [
            'soldier_id' => 123,
            'keyword_id' => 152,
        ],
        [
            'soldier_id' => 123,
            'keyword_id' => 153,
        ],
        [
            'soldier_id' => 123,
            'keyword_id' => 158,
        ],
        [
            'soldier_id' => 124,
            'keyword_id' => 151,
        ],
        [
            'soldier_id' => 124,
            'keyword_id' => 124,
        ],
        [
            'soldier_id' => 124,
            'keyword_id' => 152,
        ],
        [
            'soldier_id' => 124,
            'keyword_id' => 153,
        ],
        [
            'soldier_id' => 124,
            'keyword_id' => 159,
        ],
        [
            'soldier_id' => 125,
            'keyword_id' => 151,
        ],
        [
            'soldier_id' => 125,
            'keyword_id' => 124,
        ],
        [
            'soldier_id' => 125,
            'keyword_id' => 152,
        ],
        [
            'soldier_id' => 125,
            'keyword_id' => 153,
        ],
        [
            'soldier_id' => 125,
            'keyword_id' => 160,
        ],
        [
            'soldier_id' => 126,
            'keyword_id' => 151,
        ],
        [
            'soldier_id' => 126,
            'keyword_id' => 124,
        ],
        [
            'soldier_id' => 126,
            'keyword_id' => 152,
        ],
        [
            'soldier_id' => 126,
            'keyword_id' => 153,
        ],
        [
            'soldier_id' => 126,
            'keyword_id' => 161,
        ],
        [
            'soldier_id' => 127,
            'keyword_id' => 151,
        ],
        [
            'soldier_id' => 127,
            'keyword_id' => 124,
        ],
        [
            'soldier_id' => 127,
            'keyword_id' => 152,
        ],
        [
            'soldier_id' => 127,
            'keyword_id' => 153,
        ],
        [
            'soldier_id' => 127,
            'keyword_id' => 162,
        ],
        [
            'soldier_id' => 128,
            'keyword_id' => 151,
        ],
        [
            'soldier_id' => 128,
            'keyword_id' => 124,
        ],
        [
            'soldier_id' => 128,
            'keyword_id' => 152,
        ],
        [
            'soldier_id' => 128,
            'keyword_id' => 153,
        ],
        [
            'soldier_id' => 128,
            'keyword_id' => 163,
        ],
        [
            'soldier_id' => 129,
            'keyword_id' => 151,
        ],
        [
            'soldier_id' => 129,
            'keyword_id' => 124,
        ],
        [
            'soldier_id' => 129,
            'keyword_id' => 152,
        ],
        [
            'soldier_id' => 129,
            'keyword_id' => 153,
        ],
        [
            'soldier_id' => 129,
            'keyword_id' => 164,
        ],
        [
            'soldier_id' => 130,
            'keyword_id' => 151,
        ],
        [
            'soldier_id' => 130,
            'keyword_id' => 124,
        ],
        [
            'soldier_id' => 130,
            'keyword_id' => 152,
        ],
        [
            'soldier_id' => 130,
            'keyword_id' => 153,
        ],
        [
            'soldier_id' => 130,
            'keyword_id' => 165,
        ],
        [
            'soldier_id' => 131,
            'keyword_id' => 151,
        ],
        [
            'soldier_id' => 131,
            'keyword_id' => 124,
        ],
        [
            'soldier_id' => 131,
            'keyword_id' => 152,
        ],
        [
            'soldier_id' => 131,
            'keyword_id' => 153,
        ],
        [
            'soldier_id' => 131,
            'keyword_id' => 6,
        ],
        [
            'soldier_id' => 131,
            'keyword_id' => 166,
        ],
        [
            'soldier_id' => 132,
            'keyword_id' => 167,
        ],
        [
            'soldier_id' => 132,
            'keyword_id' => 124,
        ],
        [
            'soldier_id' => 132,
            'keyword_id' => 6,
        ],
        [
            'soldier_id' => 132,
            'keyword_id' => 168,
        ],
        [
            'soldier_id' => 133,
            'keyword_id' => 167,
        ],
        [
            'soldier_id' => 133,
            'keyword_id' => 124,
        ],
        [
            'soldier_id' => 133,
            'keyword_id' => 169,
        ],
        [
            'soldier_id' => 134,
            'keyword_id' => 167,
        ],
        [
            'soldier_id' => 134,
            'keyword_id' => 124,
        ],
        [
            'soldier_id' => 134,
            'keyword_id' => 170,
        ],
        [
            'soldier_id' => 135,
            'keyword_id' => 167,
        ],
        [
            'soldier_id' => 135,
            'keyword_id' => 124,
        ],
        [
            'soldier_id' => 135,
            'keyword_id' => 171,
        ],
        [
            'soldier_id' => 136,
            'keyword_id' => 167,
        ],
        [
            'soldier_id' => 136,
            'keyword_id' => 124,
        ],
        [
            'soldier_id' => 136,
            'keyword_id' => 172,
        ],
        [
            'soldier_id' => 137,
            'keyword_id' => 167,
        ],
        [
            'soldier_id' => 137,
            'keyword_id' => 124,
        ],
        [
            'soldier_id' => 137,
            'keyword_id' => 173,
        ],
        [
            'soldier_id' => 138,
            'keyword_id' => 167,
        ],
        [
            'soldier_id' => 138,
            'keyword_id' => 124,
        ],
        [
            'soldier_id' => 138,
            'keyword_id' => 174,
        ],
        [
            'soldier_id' => 139,
            'keyword_id' => 167,
        ],
        [
            'soldier_id' => 139,
            'keyword_id' => 124,
        ],
        [
            'soldier_id' => 139,
            'keyword_id' => 175,
        ],
        [
            'soldier_id' => 140,
            'keyword_id' => 167,
        ],
        [
            'soldier_id' => 140,
            'keyword_id' => 124,
        ],
        [
            'soldier_id' => 140,
            'keyword_id' => 176,
        ],
        [
            'soldier_id' => 141,
            'keyword_id' => 167,
        ],
        [
            'soldier_id' => 141,
            'keyword_id' => 124,
        ],
        [
            'soldier_id' => 141,
            'keyword_id' => 177,
        ],
        [
            'soldier_id' => 142,
            'keyword_id' => 167,
        ],
        [
            'soldier_id' => 142,
            'keyword_id' => 124,
        ],
        [
            'soldier_id' => 142,
            'keyword_id' => 111,
        ],
        [
            'soldier_id' => 143,
            'keyword_id' => 178,
        ],
        [
            'soldier_id' => 143,
            'keyword_id' => 179,
        ],
        [
            'soldier_id' => 143,
            'keyword_id' => 180,
        ],
        [
            'soldier_id' => 143,
            'keyword_id' => 181,
        ],
        [
            'soldier_id' => 144,
            'keyword_id' => 178,
        ],
        [
            'soldier_id' => 144,
            'keyword_id' => 179,
        ],
        [
            'soldier_id' => 144,
            'keyword_id' => 180,
        ],
        [
            'soldier_id' => 144,
            'keyword_id' => 182,
        ],
        [
            'soldier_id' => 145,
            'keyword_id' => 178,
        ],
        [
            'soldier_id' => 145,
            'keyword_id' => 179,
        ],
        [
            'soldier_id' => 145,
            'keyword_id' => 180,
        ],
        [
            'soldier_id' => 145,
            'keyword_id' => 183,
        ],
        [
            'soldier_id' => 146,
            'keyword_id' => 178,
        ],
        [
            'soldier_id' => 146,
            'keyword_id' => 179,
        ],
        [
            'soldier_id' => 146,
            'keyword_id' => 180,
        ],
        [
            'soldier_id' => 146,
            'keyword_id' => 184,
        ],
        [
            'soldier_id' => 147,
            'keyword_id' => 178,
        ],
        [
            'soldier_id' => 147,
            'keyword_id' => 179,
        ],
        [
            'soldier_id' => 147,
            'keyword_id' => 180,
        ],
        [
            'soldier_id' => 147,
            'keyword_id' => 185,
        ],
        [
            'soldier_id' => 148,
            'keyword_id' => 178,
        ],
        [
            'soldier_id' => 148,
            'keyword_id' => 179,
        ],
        [
            'soldier_id' => 148,
            'keyword_id' => 180,
        ],
        [
            'soldier_id' => 148,
            'keyword_id' => 186,
        ],
        [
            'soldier_id' => 149,
            'keyword_id' => 178,
        ],
        [
            'soldier_id' => 149,
            'keyword_id' => 179,
        ],
        [
            'soldier_id' => 149,
            'keyword_id' => 180,
        ],
        [
            'soldier_id' => 149,
            'keyword_id' => 187,
        ],
        [
            'soldier_id' => 150,
            'keyword_id' => 178,
        ],
        [
            'soldier_id' => 150,
            'keyword_id' => 179,
        ],
        [
            'soldier_id' => 150,
            'keyword_id' => 180,
        ],
        [
            'soldier_id' => 150,
            'keyword_id' => 188,
        ],
        [
            'soldier_id' => 151,
            'keyword_id' => 178,
        ],
        [
            'soldier_id' => 151,
            'keyword_id' => 179,
        ],
        [
            'soldier_id' => 151,
            'keyword_id' => 180,
        ],
        [
            'soldier_id' => 151,
            'keyword_id' => 67,
        ],
        [
            'soldier_id' => 151,
            'keyword_id' => 189,
        ],
        [
            'soldier_id' => 152,
            'keyword_id' => 178,
        ],
        [
            'soldier_id' => 152,
            'keyword_id' => 179,
        ],
        [
            'soldier_id' => 152,
            'keyword_id' => 180,
        ],
        [
            'soldier_id' => 152,
            'keyword_id' => 67,
        ],
        [
            'soldier_id' => 152,
            'keyword_id' => 13,
        ],
        [
            'soldier_id' => 152,
            'keyword_id' => 190,
        ],
        [
            'soldier_id' => 153,
            'keyword_id' => 178,
        ],
        [
            'soldier_id' => 153,
            'keyword_id' => 179,
        ],
        [
            'soldier_id' => 153,
            'keyword_id' => 180,
        ],
        [
            'soldier_id' => 153,
            'keyword_id' => 6,
        ],
        [
            'soldier_id' => 153,
            'keyword_id' => 191,
        ],
        [
            'soldier_id' => 154,
            'keyword_id' => 192,
        ],
        [
            'soldier_id' => 154,
            'keyword_id' => 179,
        ],
        [
            'soldier_id' => 154,
            'keyword_id' => 193,
        ],
        [
            'soldier_id' => 154,
            'keyword_id' => 6,
        ],
        [
            'soldier_id' => 154,
            'keyword_id' => 194,
        ],
        [
            'soldier_id' => 154,
            'keyword_id' => 195,
        ],
        [
            'soldier_id' => 155,
            'keyword_id' => 192,
        ],
        [
            'soldier_id' => 155,
            'keyword_id' => 179,
        ],
        [
            'soldier_id' => 155,
            'keyword_id' => 193,
        ],
        [
            'soldier_id' => 155,
            'keyword_id' => 194,
        ],
        [
            'soldier_id' => 155,
            'keyword_id' => 111,
        ],
        [
            'soldier_id' => 156,
            'keyword_id' => 192,
        ],
        [
            'soldier_id' => 156,
            'keyword_id' => 179,
        ],
        [
            'soldier_id' => 156,
            'keyword_id' => 193,
        ],
        [
            'soldier_id' => 156,
            'keyword_id' => 6,
        ],
        [
            'soldier_id' => 156,
            'keyword_id' => 196,
        ],
        [
            'soldier_id' => 156,
            'keyword_id' => 195,
        ],
        [
            'soldier_id' => 157,
            'keyword_id' => 192,
        ],
        [
            'soldier_id' => 157,
            'keyword_id' => 179,
        ],
        [
            'soldier_id' => 157,
            'keyword_id' => 193,
        ],
        [
            'soldier_id' => 157,
            'keyword_id' => 196,
        ],
        [
            'soldier_id' => 157,
            'keyword_id' => 111,
        ],
        [
            'soldier_id' => 158,
            'keyword_id' => 192,
        ],
        [
            'soldier_id' => 158,
            'keyword_id' => 179,
        ],
        [
            'soldier_id' => 158,
            'keyword_id' => 197,
        ],
        [
            'soldier_id' => 158,
            'keyword_id' => 195,
        ],
        [
            'soldier_id' => 158,
            'keyword_id' => 6,
        ],
        [
            'soldier_id' => 158,
            'keyword_id' => 193,
        ],
        [
            'soldier_id' => 159,
            'keyword_id' => 192,
        ],
        [
            'soldier_id' => 159,
            'keyword_id' => 179,
        ],
        [
            'soldier_id' => 159,
            'keyword_id' => 193,
        ],
        [
            'soldier_id' => 159,
            'keyword_id' => 197,
        ],
        [
            'soldier_id' => 159,
            'keyword_id' => 111,
        ],
        [
            'soldier_id' => 160,
            'keyword_id' => 198,
        ],
        [
            'soldier_id' => 160,
            'keyword_id' => 179,
        ],
        [
            'soldier_id' => 160,
            'keyword_id' => 199,
        ],
        [
            'soldier_id' => 160,
            'keyword_id' => 6,
        ],
        [
            'soldier_id' => 160,
            'keyword_id' => 200,
        ],
        [
            'soldier_id' => 160,
            'keyword_id' => 201,
        ],
        [
            'soldier_id' => 161,
            'keyword_id' => 198,
        ],
        [
            'soldier_id' => 161,
            'keyword_id' => 179,
        ],
        [
            'soldier_id' => 161,
            'keyword_id' => 199,
        ],
        [
            'soldier_id' => 161,
            'keyword_id' => 200,
        ],
        [
            'soldier_id' => 161,
            'keyword_id' => 202,
        ],
        [
            'soldier_id' => 162,
            'keyword_id' => 198,
        ],
        [
            'soldier_id' => 162,
            'keyword_id' => 179,
        ],
        [
            'soldier_id' => 162,
            'keyword_id' => 199,
        ],
        [
            'soldier_id' => 162,
            'keyword_id' => 200,
        ],
        [
            'soldier_id' => 162,
            'keyword_id' => 203,
        ],
        [
            'soldier_id' => 163,
            'keyword_id' => 198,
        ],
        [
            'soldier_id' => 163,
            'keyword_id' => 179,
        ],
        [
            'soldier_id' => 163,
            'keyword_id' => 199,
        ],
        [
            'soldier_id' => 163,
            'keyword_id' => 200,
        ],
        [
            'soldier_id' => 163,
            'keyword_id' => 204,
        ],
        [
            'soldier_id' => 164,
            'keyword_id' => 198,
        ],
        [
            'soldier_id' => 164,
            'keyword_id' => 179,
        ],
        [
            'soldier_id' => 164,
            'keyword_id' => 199,
        ],
        [
            'soldier_id' => 164,
            'keyword_id' => 200,
        ],
        [
            'soldier_id' => 164,
            'keyword_id' => 205,
        ],
        [
            'soldier_id' => 165,
            'keyword_id' => 198,
        ],
        [
            'soldier_id' => 165,
            'keyword_id' => 179,
        ],
        [
            'soldier_id' => 165,
            'keyword_id' => 199,
        ],
        [
            'soldier_id' => 165,
            'keyword_id' => 200,
        ],
        [
            'soldier_id' => 165,
            'keyword_id' => 206,
        ],
        [
            'soldier_id' => 166,
            'keyword_id' => 198,
        ],
        [
            'soldier_id' => 166,
            'keyword_id' => 179,
        ],
        [
            'soldier_id' => 166,
            'keyword_id' => 199,
        ],
        [
            'soldier_id' => 166,
            'keyword_id' => 200,
        ],
        [
            'soldier_id' => 166,
            'keyword_id' => 36,
        ],
        [
            'soldier_id' => 167,
            'keyword_id' => 198,
        ],
        [
            'soldier_id' => 167,
            'keyword_id' => 179,
        ],
        [
            'soldier_id' => 167,
            'keyword_id' => 199,
        ],
        [
            'soldier_id' => 167,
            'keyword_id' => 200,
        ],
        [
            'soldier_id' => 167,
            'keyword_id' => 118,
        ],
        [
            'soldier_id' => 168,
            'keyword_id' => 198,
        ],
        [
            'soldier_id' => 168,
            'keyword_id' => 179,
        ],
        [
            'soldier_id' => 168,
            'keyword_id' => 199,
        ],
        [
            'soldier_id' => 168,
            'keyword_id' => 200,
        ],
        [
            'soldier_id' => 168,
            'keyword_id' => 207,
        ],
        [
            'soldier_id' => 169,
            'keyword_id' => 208,
        ],
        [
            'soldier_id' => 169,
            'keyword_id' => 6,
        ],
        [
            'soldier_id' => 169,
            'keyword_id' => 209,
        ],
        [
            'soldier_id' => 169,
            'keyword_id' => 210,
        ],
        [
            'soldier_id' => 170,
            'keyword_id' => 208,
        ],
        [
            'soldier_id' => 170,
            'keyword_id' => 209,
        ],
        [
            'soldier_id' => 170,
            'keyword_id' => 211,
        ],
        [
            'soldier_id' => 171,
            'keyword_id' => 208,
        ],
        [
            'soldier_id' => 171,
            'keyword_id' => 209,
        ],
        [
            'soldier_id' => 171,
            'keyword_id' => 212,
        ],
        [
            'soldier_id' => 172,
            'keyword_id' => 208,
        ],
        [
            'soldier_id' => 172,
            'keyword_id' => 209,
        ],
        [
            'soldier_id' => 172,
            'keyword_id' => 213,
        ],
        [
            'soldier_id' => 173,
            'keyword_id' => 208,
        ],
        [
            'soldier_id' => 173,
            'keyword_id' => 209,
        ],
        [
            'soldier_id' => 173,
            'keyword_id' => 118,
        ],
        [
            'soldier_id' => 174,
            'keyword_id' => 208,
        ],
        [
            'soldier_id' => 174,
            'keyword_id' => 209,
        ],
        [
            'soldier_id' => 174,
            'keyword_id' => 214,
        ],
        [
            'soldier_id' => 175,
            'keyword_id' => 208,
        ],
        [
            'soldier_id' => 175,
            'keyword_id' => 209,
        ],
        [
            'soldier_id' => 175,
            'keyword_id' => 215,
        ],
        [
            'soldier_id' => 176,
            'keyword_id' => 208,
        ],
        [
            'soldier_id' => 176,
            'keyword_id' => 209,
        ],
        [
            'soldier_id' => 176,
            'keyword_id' => 216,
        ],
        [
            'soldier_id' => 177,
            'keyword_id' => 208,
        ],
        [
            'soldier_id' => 177,
            'keyword_id' => 209,
        ],
        [
            'soldier_id' => 177,
            'keyword_id' => 217,
        ],
        [
            'soldier_id' => 178,
            'keyword_id' => 208,
        ],
        [
            'soldier_id' => 178,
            'keyword_id' => 209,
        ],
        [
            'soldier_id' => 178,
            'keyword_id' => 122,
        ],
        [
            'soldier_id' => 179,
            'keyword_id' => 208,
        ],
        [
            'soldier_id' => 179,
            'keyword_id' => 209,
        ],
        [
            'soldier_id' => 179,
            'keyword_id' => 111,
        ],
        [
            'soldier_id' => 180,
            'keyword_id' => 218,
        ],
        [
            'soldier_id' => 180,
            'keyword_id' => 219,
        ],
        [
            'soldier_id' => 180,
            'keyword_id' => 6,
        ],
        [
            'soldier_id' => 180,
            'keyword_id' => 220,
        ],
        [
            'soldier_id' => 181,
            'keyword_id' => 218,
        ],
        [
            'soldier_id' => 181,
            'keyword_id' => 219,
        ],
        [
            'soldier_id' => 181,
            'keyword_id' => 221,
        ],
        [
            'soldier_id' => 182,
            'keyword_id' => 218,
        ],
        [
            'soldier_id' => 182,
            'keyword_id' => 219,
        ],
        [
            'soldier_id' => 182,
            'keyword_id' => 13,
        ],
        [
            'soldier_id' => 182,
            'keyword_id' => 222,
        ],
        [
            'soldier_id' => 183,
            'keyword_id' => 218,
        ],
        [
            'soldier_id' => 183,
            'keyword_id' => 219,
        ],
        [
            'soldier_id' => 183,
            'keyword_id' => 54,
        ],
        [
            'soldier_id' => 184,
            'keyword_id' => 218,
        ],
        [
            'soldier_id' => 184,
            'keyword_id' => 219,
        ],
        [
            'soldier_id' => 184,
            'keyword_id' => 36,
        ],
        [
            'soldier_id' => 185,
            'keyword_id' => 218,
        ],
        [
            'soldier_id' => 185,
            'keyword_id' => 219,
        ],
        [
            'soldier_id' => 185,
            'keyword_id' => 51,
        ],
        [
            'soldier_id' => 185,
            'keyword_id' => 223,
        ],
        [
            'soldier_id' => 186,
            'keyword_id' => 218,
        ],
        [
            'soldier_id' => 186,
            'keyword_id' => 219,
        ],
        [
            'soldier_id' => 186,
            'keyword_id' => 224,
        ],
        [
            'soldier_id' => 187,
            'keyword_id' => 218,
        ],
        [
            'soldier_id' => 187,
            'keyword_id' => 219,
        ],
        [
            'soldier_id' => 187,
            'keyword_id' => 226,
        ],
        [
            'soldier_id' => 188,
            'keyword_id' => 218,
        ],
        [
            'soldier_id' => 188,
            'keyword_id' => 219,
        ],
        [
            'soldier_id' => 188,
            'keyword_id' => 225,
        ],
        [
            'soldier_id' => 189,
            'keyword_id' => 218,
        ],
        [
            'soldier_id' => 189,
            'keyword_id' => 219,
        ],
        [
            'soldier_id' => 189,
            'keyword_id' => 227,
        ],
        [
            'soldier_id' => 190,
            'keyword_id' => 218,
        ],
        [
            'soldier_id' => 190,
            'keyword_id' => 219,
        ],
        [
            'soldier_id' => 190,
            'keyword_id' => 111,
        ],
        [
            'soldier_id' => 191,
            'keyword_id' => 228,
        ],
        [
            'soldier_id' => 191,
            'keyword_id' => 229,
        ],
        [
            'soldier_id' => 191,
            'keyword_id' => 230,
        ],
        [
            'soldier_id' => 191,
            'keyword_id' => 51,
        ],
        [
            'soldier_id' => 191,
            'keyword_id' => 6,
        ],
        [
            'soldier_id' => 191,
            'keyword_id' => 231,
        ],
        [
            'soldier_id' => 191,
            'keyword_id' => 232,
        ],
        [
            'soldier_id' => 192,
            'keyword_id' => 228,
        ],
        [
            'soldier_id' => 192,
            'keyword_id' => 229,
        ],
        [
            'soldier_id' => 192,
            'keyword_id' => 230,
        ],
        [
            'soldier_id' => 192,
            'keyword_id' => 51,
        ],
        [
            'soldier_id' => 192,
            'keyword_id' => 6,
        ],
        [
            'soldier_id' => 192,
            'keyword_id' => 231,
        ],
        [
            'soldier_id' => 192,
            'keyword_id' => 233,
        ],
        [
            'soldier_id' => 193,
            'keyword_id' => 228,
        ],
        [
            'soldier_id' => 193,
            'keyword_id' => 229,
        ],
        [
            'soldier_id' => 193,
            'keyword_id' => 230,
        ],
        [
            'soldier_id' => 193,
            'keyword_id' => 231,
        ],
        [
            'soldier_id' => 193,
            'keyword_id' => 51,
        ],
        [
            'soldier_id' => 193,
            'keyword_id' => 13,
        ],
        [
            'soldier_id' => 193,
            'keyword_id' => 6,
        ],
        [
            'soldier_id' => 193,
            'keyword_id' => 234,
        ],
        [
            'soldier_id' => 194,
            'keyword_id' => 228,
        ],
        [
            'soldier_id' => 194,
            'keyword_id' => 229,
        ],
        [
            'soldier_id' => 194,
            'keyword_id' => 230,
        ],
        [
            'soldier_id' => 194,
            'keyword_id' => 51,
        ],
        [
            'soldier_id' => 194,
            'keyword_id' => 235,
        ],
        [
            'soldier_id' => 194,
            'keyword_id' => 236,
        ],
        [
            'soldier_id' => 195,
            'keyword_id' => 228,
        ],
        [
            'soldier_id' => 195,
            'keyword_id' => 229,
        ],
        [
            'soldier_id' => 195,
            'keyword_id' => 230,
        ],
        [
            'soldier_id' => 195,
            'keyword_id' => 51,
        ],
        [
            'soldier_id' => 195,
            'keyword_id' => 13,
        ],
        [
            'soldier_id' => 195,
            'keyword_id' => 235,
        ],
        [
            'soldier_id' => 195,
            'keyword_id' => 237,
        ],
        [
            'soldier_id' => 196,
            'keyword_id' => 228,
        ],
        [
            'soldier_id' => 196,
            'keyword_id' => 229,
        ],
        [
            'soldier_id' => 196,
            'keyword_id' => 230,
        ],
        [
            'soldier_id' => 196,
            'keyword_id' => 238,
        ],
        [
            'soldier_id' => 197,
            'keyword_id' => 228,
        ],
        [
            'soldier_id' => 197,
            'keyword_id' => 229,
        ],
        [
            'soldier_id' => 197,
            'keyword_id' => 230,
        ],
        [
            'soldier_id' => 197,
            'keyword_id' => 239,
        ],
        [
            'soldier_id' => 198,
            'keyword_id' => 228,
        ],
        [
            'soldier_id' => 198,
            'keyword_id' => 229,
        ],
        [
            'soldier_id' => 198,
            'keyword_id' => 230,
        ],
        [
            'soldier_id' => 198,
            'keyword_id' => 241,
        ],
        [
            'soldier_id' => 198,
            'keyword_id' => 240,
        ],
        [
            'soldier_id' => 199,
            'keyword_id' => 228,
        ],
        [
            'soldier_id' => 199,
            'keyword_id' => 229,
        ],
        [
            'soldier_id' => 199,
            'keyword_id' => 230,
        ],
        [
            'soldier_id' => 199,
            'keyword_id' => 241,
        ],
        [
            'soldier_id' => 199,
            'keyword_id' => 242,
        ],
        [
            'soldier_id' => 200,
            'keyword_id' => 243,
        ],
        [
            'soldier_id' => 200,
            'keyword_id' => 244,
        ],
        [
            'soldier_id' => 200,
            'keyword_id' => 245,
        ],
        [
            'soldier_id' => 200,
            'keyword_id' => 246,
        ],
        [
            'soldier_id' => 201,
            'keyword_id' => 243,
        ],
        [
            'soldier_id' => 201,
            'keyword_id' => 244,
        ],
        [
            'soldier_id' => 201,
            'keyword_id' => 245,
        ],
        [
            'soldier_id' => 201,
            'keyword_id' => 247,
        ],
        [
            'soldier_id' => 202,
            'keyword_id' => 243,
        ],
        [
            'soldier_id' => 202,
            'keyword_id' => 244,
        ],
        [
            'soldier_id' => 202,
            'keyword_id' => 245,
        ],
        [
            'soldier_id' => 202,
            'keyword_id' => 248,
        ],
        [
            'soldier_id' => 203,
            'keyword_id' => 243,
        ],
        [
            'soldier_id' => 203,
            'keyword_id' => 244,
        ],
        [
            'soldier_id' => 203,
            'keyword_id' => 245,
        ],
        [
            'soldier_id' => 203,
            'keyword_id' => 249,
        ],
        [
            'soldier_id' => 204,
            'keyword_id' => 243,
        ],
        [
            'soldier_id' => 204,
            'keyword_id' => 244,
        ],
        [
            'soldier_id' => 204,
            'keyword_id' => 245,
        ],
        [
            'soldier_id' => 204,
            'keyword_id' => 250,
        ],
        [
            'soldier_id' => 205,
            'keyword_id' => 243,
        ],
        [
            'soldier_id' => 205,
            'keyword_id' => 244,
        ],
        [
            'soldier_id' => 205,
            'keyword_id' => 245,
        ],
        [
            'soldier_id' => 205,
            'keyword_id' => 251,
        ],
        [
            'soldier_id' => 206,
            'keyword_id' => 243,
        ],
        [
            'soldier_id' => 206,
            'keyword_id' => 244,
        ],
        [
            'soldier_id' => 206,
            'keyword_id' => 245,
        ],
        [
            'soldier_id' => 206,
            'keyword_id' => 252,
        ],
        [
            'soldier_id' => 207,
            'keyword_id' => 243,
        ],
        [
            'soldier_id' => 207,
            'keyword_id' => 244,
        ],
        [
            'soldier_id' => 207,
            'keyword_id' => 245,
        ],
        [
            'soldier_id' => 207,
            'keyword_id' => 253,
        ],
        [
            'soldier_id' => 208,
            'keyword_id' => 243,
        ],
        [
            'soldier_id' => 208,
            'keyword_id' => 244,
        ],
        [
            'soldier_id' => 208,
            'keyword_id' => 245,
        ],
        [
            'soldier_id' => 208,
            'keyword_id' => 254,
        ],
        [
            'soldier_id' => 209,
            'keyword_id' => 243,
        ],
        [
            'soldier_id' => 209,
            'keyword_id' => 244,
        ],
        [
            'soldier_id' => 209,
            'keyword_id' => 245,
        ],
        [
            'soldier_id' => 209,
            'keyword_id' => 6,
        ],
        [
            'soldier_id' => 209,
            'keyword_id' => 255,
        ],
        [
            'soldier_id' => 210,
            'keyword_id' => 243,
        ],
        [
            'soldier_id' => 210,
            'keyword_id' => 244,
        ],
        [
            'soldier_id' => 210,
            'keyword_id' => 245,
        ],
        [
            'soldier_id' => 210,
            'keyword_id' => 256,
        ],
        [
            'soldier_id' => 211,
            'keyword_id' => 257,
        ],
        [
            'soldier_id' => 211,
            'keyword_id' => 258,
        ],
        [
            'soldier_id' => 211,
            'keyword_id' => 259,
        ],
        [
            'soldier_id' => 211,
            'keyword_id' => 6,
        ],
        [
            'soldier_id' => 211,
            'keyword_id' => 260,
        ],
        [
            'soldier_id' => 212,
            'keyword_id' => 257,
        ],
        [
            'soldier_id' => 212,
            'keyword_id' => 258,
        ],
        [
            'soldier_id' => 212,
            'keyword_id' => 259,
        ],
        [
            'soldier_id' => 212,
            'keyword_id' => 261,
        ],
        [
            'soldier_id' => 213,
            'keyword_id' => 257,
        ],
        [
            'soldier_id' => 213,
            'keyword_id' => 258,
        ],
        [
            'soldier_id' => 213,
            'keyword_id' => 259,
        ],
        [
            'soldier_id' => 213,
            'keyword_id' => 262,
        ],
        [
            'soldier_id' => 214,
            'keyword_id' => 257,
        ],
        [
            'soldier_id' => 214,
            'keyword_id' => 258,
        ],
        [
            'soldier_id' => 214,
            'keyword_id' => 259,
        ],
        [
            'soldier_id' => 214,
            'keyword_id' => 263,
        ],
        [
            'soldier_id' => 215,
            'keyword_id' => 257,
        ],
        [
            'soldier_id' => 215,
            'keyword_id' => 258,
        ],
        [
            'soldier_id' => 215,
            'keyword_id' => 259,
        ],
        [
            'soldier_id' => 215,
            'keyword_id' => 264,
        ],
        [
            'soldier_id' => 216,
            'keyword_id' => 257,
        ],
        [
            'soldier_id' => 216,
            'keyword_id' => 258,
        ],
        [
            'soldier_id' => 216,
            'keyword_id' => 259,
        ],
        [
            'soldier_id' => 216,
            'keyword_id' => 265,
        ],
        [
            'soldier_id' => 217,
            'keyword_id' => 257,
        ],
        [
            'soldier_id' => 217,
            'keyword_id' => 258,
        ],
        [
            'soldier_id' => 217,
            'keyword_id' => 259,
        ],
        [
            'soldier_id' => 217,
            'keyword_id' => 266,
        ],
        [
            'soldier_id' => 218,
            'keyword_id' => 257,
        ],
        [
            'soldier_id' => 218,
            'keyword_id' => 258,
        ],
        [
            'soldier_id' => 218,
            'keyword_id' => 259,
        ],
        [
            'soldier_id' => 218,
            'keyword_id' => 13,
        ],
        [
            'soldier_id' => 218,
            'keyword_id' => 267,
        ],
        [
            'soldier_id' => 219,
            'keyword_id' => 257,
        ],
        [
            'soldier_id' => 219,
            'keyword_id' => 258,
        ],
        [
            'soldier_id' => 219,
            'keyword_id' => 259,
        ],
        [
            'soldier_id' => 219,
            'keyword_id' => 268,
        ],
        [
            'soldier_id' => 220,
            'keyword_id' => 257,
        ],
        [
            'soldier_id' => 220,
            'keyword_id' => 258,
        ],
        [
            'soldier_id' => 220,
            'keyword_id' => 259,
        ],
        [
            'soldier_id' => 220,
            'keyword_id' => 269,
        ],
        [
            'soldier_id' => 221,
            'keyword_id' => 257,
        ],
        [
            'soldier_id' => 221,
            'keyword_id' => 258,
        ],
        [
            'soldier_id' => 221,
            'keyword_id' => 259,
        ],
        [
            'soldier_id' => 221,
            'keyword_id' => 270,
        ],
        [
            'soldier_id' => 221,
            'keyword_id' => 51,
        ],
        [
            'soldier_id' => 221,
            'keyword_id' => 271,
        ],
        [
            'soldier_id' => 222,
            'keyword_id' => 257,
        ],
        [
            'soldier_id' => 222,
            'keyword_id' => 258,
        ],
        [
            'soldier_id' => 222,
            'keyword_id' => 259,
        ],
        [
            'soldier_id' => 222,
            'keyword_id' => 270,
        ],
        [
            'soldier_id' => 222,
            'keyword_id' => 51,
        ],
        [
            'soldier_id' => 222,
            'keyword_id' => 272,
        ],
        [
            'soldier_id' => 223,
            'keyword_id' => 257,
        ],
        [
            'soldier_id' => 223,
            'keyword_id' => 258,
        ],
        [
            'soldier_id' => 223,
            'keyword_id' => 259,
        ],
        [
            'soldier_id' => 223,
            'keyword_id' => 270,
        ],
        [
            'soldier_id' => 223,
            'keyword_id' => 51,
        ],
        [
            'soldier_id' => 223,
            'keyword_id' => 273,
        ],
        [
            'soldier_id' => 224,
            'keyword_id' => 257,
        ],
        [
            'soldier_id' => 224,
            'keyword_id' => 258,
        ],
        [
            'soldier_id' => 224,
            'keyword_id' => 259,
        ],
        [
            'soldier_id' => 224,
            'keyword_id' => 270,
        ],
        [
            'soldier_id' => 224,
            'keyword_id' => 51,
        ],
        [
            'soldier_id' => 224,
            'keyword_id' => 274,
        ],
        [
            'soldier_id' => 225,
            'keyword_id' => 257,
        ],
        [
            'soldier_id' => 225,
            'keyword_id' => 258,
        ],
        [
            'soldier_id' => 225,
            'keyword_id' => 259,
        ],
        [
            'soldier_id' => 225,
            'keyword_id' => 270,
        ],
        [
            'soldier_id' => 225,
            'keyword_id' => 51,
        ],
        [
            'soldier_id' => 225,
            'keyword_id' => 275,
        ],
        [
            'soldier_id' => 226,
            'keyword_id' => 257,
        ],
        [
            'soldier_id' => 226,
            'keyword_id' => 258,
        ],
        [
            'soldier_id' => 226,
            'keyword_id' => 259,
        ],
        [
            'soldier_id' => 226,
            'keyword_id' => 270,
        ],
        [
            'soldier_id' => 226,
            'keyword_id' => 51,
        ],
        [
            'soldier_id' => 226,
            'keyword_id' => 276,
        ]
    ];

    public function run(): void
    {
        foreach($this->soldierKeywords as $soldierKeyword) {
            $soldier = Soldier::find($soldierKeyword['soldier_id']);
            $soldier->keywords()->attach($soldierKeyword['keyword_id']);
        }
    }
}
