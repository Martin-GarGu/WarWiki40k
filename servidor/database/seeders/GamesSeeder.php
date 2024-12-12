<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\Game;

class GamesSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */

     private $games=[
        [
            'user1_id'=>'1',
            'user2_id'=>'2',
            'winner'=>'1',
            'points_user1'=>'27',
            'points_user2'=>'24',
        ],
        [
            'user1_id'=>'2',
            'user2_id'=>'1',
            'winner'=>'1',
            'points_user1'=>'35',
            'points_user2'=>'30',
        ],
     ];

    public function run(): void
    {
        foreach($this->games as $game){
            $g= new Game();
            $g->user1_id=$game['user1_id'];
            $g->user2_id=$game['user2_id'];
            $g->winner=$game['winner'];
            $g->points_user1=$game['points_user1'];
            $g->points_user2=$game['points_user2'];
            $g->save();
        }
        $this->command->info('Games created with data sucess!');
    }
}
