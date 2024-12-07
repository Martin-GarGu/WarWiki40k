<?php

namespace Database\Seeders;

use App\Models\Faction;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Str;

class FactionSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */

    private $factions = [
        [
            'name' => 'Ejercitos del Imperium',
            // 'slug' => 'imperium',
            'image' => 'imperiumLogo.png',
            // https://static.wikia.nocookie.net/warhammer40k/images/3/3f/IoMhighres.png/revision/latest?cb=20190630130844
            'description' => 'El Ejército Imperial fue la mayor fuerza militar del Imperio durante sus primeras fases, y fue fundado durante los inicios de la Gran Cruzada para cubrir la necesidad de tropas de refuerzo para las Legiones Astartes.'
        ],
        [
            'name' => 'Fuerzas del Caos',
            // 'slug' => 'caos',
            'image' => 'fuerzaCaosLogo.png',
            // https://pm1.aminoapps.com/6858/5f163dfa4bb0cb56395218afe1d58651754d9fb4v2_hq.jpg
            'description' => 'El Caos es casi un sinónimo de la Disformidad, pues son inseparables: el Caos es el océano sin límites de energía espiritual y emocional que define a la Disformidad. Es una enorme y terrible fuerza de cambio y poder, y es corruptora tanto para el cuerpo como para el espíritu.'
        ],
        [
            'name' => 'Aeldari',
            // 'slug' => 'aeldari',
            'image' => 'aeldariLogo.png',
            // https://static.wikia.nocookie.net/warhammer40k/images/f/f7/Eldar.png/revision/latest/scale-to-width-down/250?cb=20100601083426
            'description' => 'Los Aeldari, o los Eldar como fueron conocidos durante mucho tiempo por los forasteros, son una especie antigua y altamente avanzada de xenos humanoides cuyo vasto imperio alguna vez se extendió a lo largo y ancho de la galaxia conocida.'
        ],
        [
            'name' => 'La amenaza de los xenos',
            // 'slug' => 'xenos',
            'image' => 'xenosLogo.png',
            // https://64.media.tumblr.com/c59a06dec388f37e21f1dc1b2b21b1cc/tumblr_plwjq5Kerf1tdqkuno1_1280.pnj
            'description' => 'Toda especie inteligente, ya sea aliada o enemiga, no humana, alienígena o extraplanetaria.',
            
        ]
    ];

    public function run(): void
    {
        foreach($this->factions as $faction){
            $f = new Faction();
            $f->name = $faction['name'];
            $f->slug = Str::slug($faction['name']);
            $f->image = 'images/factionsImage/' . $faction['image'];
            $f->description = $faction['description'];
            $f->save();
        }
        $this->command->info('Factions created with data success!');
    }
}
