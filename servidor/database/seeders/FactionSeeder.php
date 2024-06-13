<?php

namespace Database\Seeders;

use App\Models\Faction;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class FactionSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */

    private $factions = [
        [
            'name' => 'Marines Espaciales',
            'slug' => 'marines-espaciales',
            'image' => 'marinesEspacialesLogo.jpg',
            // https://warhammer40000.com/wp-content/uploads/2023/07/sPTkCEkJZwCBxpWw.png
            'description' => 'Los Marines Espaciales o Astartes son los mejores guerreros del Imperio, dedicados por completo a defender al Emperador y al Imperio de la Humanidad.'
        ],
        [
            'name' => 'Ejercitos del Imperium',
            'slug' => 'imperium',
            'image' => 'imperiumLogo.jpg',
            // https://static.wikia.nocookie.net/warhammer40k/images/3/3f/IoMhighres.png/revision/latest?cb=20190630130844
            'description' => 'El Ejército Imperial fue la mayor fuerza militar del Imperio durante sus primeras fases, y fue fundado durante los inicios de la Gran Cruzada para cubrir la necesidad de tropas de refuerzo para las Legiones Astartes.'
        ],
        [
            'name' => 'Fuerzas del Caos',
            'slug' => 'caos',
            'image' => 'fuerzaCaosLogo.jpg',
            // https://pm1.aminoapps.com/6858/5f163dfa4bb0cb56395218afe1d58651754d9fb4v2_hq.jpg
            'description' => 'El Caos es casi un sinónimo de la Disformidad, pues son inseparables: el Caos es el océano sin límites de energía espiritual y emocional que define a la Disformidad. Es una enorme y terrible fuerza de cambio y poder, y es corruptora tanto para el cuerpo como para el espíritu.'
        ],
        [
            'name' => 'La amenaza de los xenos',
            'slug' => 'xenos',
            'image' => 'xenosLogo.jpg',
            // https://64.media.tumblr.com/c59a06dec388f37e21f1dc1b2b21b1cc/tumblr_plwjq5Kerf1tdqkuno1_1280.pnj
            'description' => 'Toda especie inteligente, ya sea aliada o enemiga, no humana, alienígena o extraplanetaria.',
            
        ]
    ];

    public function run(): void
    {
        foreach($this->factions as $faction){
            $f = new Faction();
            $f->name = $faction['name'];
            $f->slug = $faction['slug'];
            $f->image = $faction['image'];
            $f->description = $faction['description'];
            $f->save();
        }
        $this->command->info('Factions created with data success!');
    }
}
