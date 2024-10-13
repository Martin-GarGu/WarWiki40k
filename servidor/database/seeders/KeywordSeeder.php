<?php

namespace Database\Seeders;

use App\Models\KeyWord;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Str;

class KeywordSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    private $keywords=[
        [
            'name' => 'Novitiate',
        ],
        [
            'name' => 'Imperium',
        ],
        [
            'name' => 'Adepta Sororitas',
        ],
        [
            'name' => '<Order>',
        ],
        [
            'name' => 'Novitiate Militant',
        ],
        [
            'name' => 'Leader',
        ],
        [
            'name' => 'Novitiate Superior',
        ],
        [
            'name' => 'Novitiate Penitent',
        ],
        [
            'name' => 'Novitiate Purgatus',
        ],
        [
            'name' => 'Novitiate Pronatus',
        ],
        [
            'name' => 'Novitiate Exactor',
        ],
        [
            'name' => 'Novitiate Reliquarius',
        ],
        [
            'name' => 'Medic',
        ],
        [
            'name' => 'Novitiate Hospitaller',
        ],
        [
            'name' => 'Novitiate Preceptor',
        ],
        [
            'name' => 'Novitiate Dialogus',
        ],
        [
            'name' => 'Novitiate Duellist',
        ],
        [
            'name' => 'Novitiate Condemnor',
        ],
        [
            'name' => 'Elucidian Starstrider',
        ],
        [
            'name' => 'Astra Cartographica',
        ],
        [
            'name' => 'Elucia Vhane',
        ],
        [
            'name' => 'Navis',
        ],
        [
            'name' => 'Canid',
        ],
        [
            'name' => 'Death Cult Executioner',
        ],
        [
            'name' => 'Adeptus Mechanicus',
        ],
        [
            'name' => 'Lectro-Maester',
        ],
        [
            'name' => 'Rejuvenat Adept',
        ],
        [
            'name' => 'Voidmaster',
        ],
        [
            'name' => 'Voidsman',
        ],
        [
            'name' => 'Exaction Squad',
        ],
        [
            'name' => 'Adeptus Arbites',
        ],
        [
            'name' => 'Arbites',
        ],
        [
            'name' => 'Proctor-Exactant',
        ],
        [
            'name' => 'Castigator',
        ],
        [
            'name' => 'Chirurgant',
        ],
        [
            'name' => 'Gunner',
        ],
        [
            'name' => 'Leashmaster',
        ],
        [
            'name' => 'R-VC Cuber-Mastiff',
        ],
        [
            'name' => 'Malocator',
        ],
        [
            'name' => 'Marksman',
        ],
        [
            'name' => 'Revelatum',
        ],
        [
            'name' => 'Subductor',
        ],
        [
            'name' => 'Vigilant',
        ],
        [
            'name' => 'Vox-Signifier',
        ],
        [
            'name' => 'Imperial Navy Breacher',
        ],
        [
            'name' => 'Sargeant-At-Arms',
        ],
        [
            'name' => 'Armsman',
        ],
        [
            'name' => 'Axejack',
        ],
        [
            'name' => 'C.A.T. Unit',
        ],
        [
            'name' => 'Endurant',
        ],
        [
            'name' => 'Fly',
        ],
        [
            'name' => 'Gheistskull',
        ],
        [
            'name' => 'Hatchcutter',
        ],
        [
            'name' => 'Grenadier',
        ],
        [
            'name' => 'Surveyor',
        ],
        [
            'name' => 'Void-Jammer',
        ],
        [
            'name' => 'Inquisitorial Agent',
        ],
        [
            'name' => 'Inquisition',
        ],
        [
            'name' => 'Interrogator',
        ],
        [
            'name' => 'Tome-Skull',
        ],
        [
            'name' => 'Autosavant',
        ],
        [
            'name' => 'Questkeeper',
        ],
        [
            'name' => 'Death World Veteran',
        ],
        [
            'name' => 'Enlightener',
        ],
        [
            'name' => 'Gun Servitor',
        ],
        [
            'name' => 'Hexorcist',
        ],
        [
            'name' => 'Psyker',
        ],
        [
            'name' => 'Mystic',
        ],
        [
            'name' => 'Penal Legionnaire',
        ],
        [
            'name' => 'Anathema Psykana',
        ],
        [
            'name' => 'Sister of Silence',
        ],
        [
            'name' => 'Prosecutor',
        ],
        [
            'name' => 'Vigilator',
        ],
        [
            'name' => 'Witchseeker',
        ],
        [
            'name' => 'Astra Militarum',
        ],
        [
            'name' => 'Tempestus Scion',
        ],
        [
            'name' => 'Comms',
        ],
        [
            'name' => 'Trooper',
        ],
        [
            'name' => 'Kasrkin',
        ],
        [
            'name' => 'Kasrkin Sergeant',
        ],
        [
            'name' => 'Kasrkin Combat Medic',
        ],
        [
            'name' => 'Kasrkin Demo-Trooper',
        ],
        [
            'name' => 'Kasrkin Gunner',
        ],
        [
            'name' => 'Kasrkin Recon-Trooper',
        ],
        [
            'name' => 'Kasrkin Sharpshooter',
        ],
        [
            'name' => 'Kasrkin Trooper',
        ],
        [
            'name' => 'Kasrkin Vox-Operator',
        ],
        [
            'name' => 'Veteran Guardsman',
        ],
        [
            'name' => '<Regiment>',
        ],
        [
            'name' => 'Trooper Veteran',
        ],
        [
            'name' => 'Sergeant Veteran',
        ],
        [
            'name' => 'Sniper Veteran',
        ],
        [
            'name' => 'Gunner Veteran',
        ],
        [
            'name' => 'Confidant Veteran',
        ],
        [
            'name' => 'Demolition Veteran',
        ],
        [
            'name' => 'Zealot Veteran',
        ],
        [
            'name' => 'Medic Veteran',
        ],
        [
            'name' => 'Comms Veteran',
        ],
        [
            'name' => 'Bruiser Veteran',
        ],
        [
            'name' => 'Hardened Veteran',
        ],
        [
            'name' => 'Spotter Veteran',
        ],
        [
            'name' => 'Phobos Strike Team',
        ],
        [
            'name' => '<Chapter>',
        ],
        [
            'name' => 'Primaris',
        ],
        [
            'name' => 'Infiltrator',
        ],
        [
            'name' => 'Commsman',
        ],
        [
            'name' => 'Helix Adept',
        ],
        [
            'name' => 'Saboteur',
        ],
        [
            'name' => 'Veteran',
        ],
        [
            'name' => 'Voxbreaker',
        ],
        [
            'name' => 'Warrior',
        ],
        [
            'name' => 'Sergeant',
        ],
        [
            'name' => 'Minelayer',
        ],
        [
            'name' => 'Reiver',
        ],
        [
            'name' => 'Scout Squad',
        ],
        [
            'name' => 'Adeptus Astartes',
        ],
        [
            'name' => 'Incursor',
        ],
        [
            'name' => 'Heavy Gunner',
        ],
        [
            'name' => 'Hunter',
        ],
        [
            'name' => 'Scout',
        ],
        [
            'name' => 'Sniper',
        ],
        [
            'name' => 'Tracker',
        ],
        [
            'name' => 'Gellerpox Infected',
        ],
        [
            'name' => 'Chaos',
        ],
        [
            'name' => 'Nurgle',
        ],
        [
            'name' => 'Mutoid Vermin',
        ],
        [
            'name' => 'Cursemite',
        ],
        [
            'name' => 'Eyestinger Swarm',
        ],
        [
            'name' => 'Sludge-Grub',
        ],
        [
            'name' => 'Nightmare Hulk',
        ],
        [
            'name' => 'Vulgar Thrice-Cursed',
        ],
        [
            'name' => 'Bloatspawn',
        ],
        [
            'name' => 'Fleshscreamer',
        ],
        [
            'name' => 'LumberGhast',
        ],
        [
            'name' => 'Gellerpox Mutant',
        ],
        [
            'name' => 'Glitchling',
        ],
        [
            'name' => 'Legionary',
        ],
        [
            'name' => 'Heretic Astartes',
        ],
        [
            'name' => '<Legion>',
        ],
        [
            'name' => '<Mark if Chaos>',
        ],
        [
            'name' => 'Legionary Warrior',
        ],
        [
            'name' => 'Legionary Gunner',
        ],
        [
            'name' => 'Legionary Heavy Gunner',
        ],
        [
            'name' => 'Legionary Anointed',
        ],
        [
            'name' => 'Legionary Butcher',
        ],
        [
            'name' => 'legionary Shrivetalon',
        ],
        [
            'name' => 'Legionary Icon Bearer',
        ],
        [
            'name' => 'Legionary Balefire Acolyte',
        ],
        [
            'name' => 'Legionary Chosen',
        ],
        [
            'name' => 'Legionary Aspiring Champion',
        ],
        [
            'name' => 'Blooded',
        ],
        [
            'name' => 'Militarum Traitoris',
        ],
        [
            'name' => '<Warband>',
        ],
        [
            'name' => 'Traitor Brimstone Grenadier',
        ],
        [
            'name' => 'Traitor Butcher',
        ],
        [
            'name' => 'Traitor Commsman',
        ],
        [
            'name' => 'Traitor Corpseman',
        ],
        [
            'name' => 'Traitor Enforcer',
        ],
        [
            'name' => 'Traitor Flenser',
        ],
        [
            'name' => 'Traitor Gunner',
        ],
        [
            'name' => 'Traitor Ogryn',
        ],
        [
            'name' => 'Traitor Sharpshooter',
        ],
        [
            'name' => 'Traitor Thug',
        ],
        [
            'name' => 'Traitor Trench Sweeper',
        ],
        [
            'name' => 'Traitor Trooper',
        ],
        [
            'name' => 'Traitor Chieftain',
        ],
        [
            'name' => 'Fellgor Ravager',
        ],
        [
            'name' => 'Ironhorn',
        ],
        [
            'name' => 'Deathknell',
        ],
        [
            'name' => 'Fluxbray',
        ],
        [
            'name' => 'Gnarlscar',
        ],
        [
            'name' => 'GoreHorn',
        ],
        [
            'name' => 'Herd-Goad',
        ],
        [
            'name' => 'Mangler',
        ],
        [
            'name' => 'Shaman',
        ],
        [
            'name' => 'Toxhorn',
        ],
        [
            'name' => 'Vandal',
        ],
        [
            'name' => 'Corsair Voidscarred',
        ],
        [
            'name' => 'Aeldari',
        ],
        [
            'name' => 'Anhrathe',
        ],
        [
            'name' => 'Voidscarred Warrior',
        ],
        [
            'name' => 'Voidscarred Gunner',
        ],
        [
            'name' => 'Voidscarred Heavy Gunner',
        ],
        [
            'name' => 'Voidscarred Starstorm Duellist',
        ],
        [
            'name' => 'Voidscarred Kurnite Hunter',
        ],
        [
            'name' => 'Voidscarred Shade Runner',
        ],
        [
            'name' => 'Voidscarred Kurnathi',
        ],
        [
            'name' => 'Voidscarred Fate Dealer',
        ],
        [
            'name' => 'Voidscarred Way Seeker',
        ],
        [
            'name' => 'Voidscarred Soul Weaver',
        ],
        [
            'name' => 'Voidscarred Felarch',
        ],
        [
            'name' => 'Blades of Khaine',
        ],
        [
            'name' => 'Asuryani',
        ],
        [
            'name' => 'Dire Avenger',
        ],
        [
            'name' => 'Exarch',
        ],
        [
            'name' => 'Howling Banshee',
        ],
        [
            'name' => 'Striking Scorpion',
        ],
        [
            'name' => 'Hads of the Archon',
        ],
        [
            'name' => 'Drukhari',
        ],
        [
            'name' => 'Kabalite',
        ],
        [
            'name' => 'Archsybarite',
        ],
        [
            'name' => 'Agent',
        ],
        [
            'name' => 'Crimson Duellist',
        ],
        [
            'name' => 'Disciple of Yaelindra',
        ],
        [
            'name' => 'Elixicant',
        ],
        [
            'name' => 'Flayer',
        ],
        [
            'name' => 'Skysplinter Assassin',
        ],
        [
            'name' => 'Farstalker Kindband',
        ],
        [
            'name' => 'Kroot',
        ],
        [
            'name' => 'Kill-Broker',
        ],
        [
            'name' => 'Bow-Hunter',
        ],
        [
            'name' => 'Cold-Blood',
        ],
        [
            'name' => 'Cut-Skin',
        ],
        [
            'name' => 'Hound',
        ],
        [
            'name' => 'Long-Sight',
        ],
        [
            'name' => 'Pistolier',
        ],
        [
            'name' => 'Stalker',
        ],
        [
            'name' => 'Hearthkyn Salvager',
        ],
        [
            'name' => 'Votann',
        ],
        [
            'name' => 'Theyn',
        ],
        [
            'name' => 'Dôzr',
        ],
        [
            'name' => 'Field Medic',
        ],
        [
            'name' => 'Jump Pack Warrior',
        ],
        [
            'name' => 'Kinlynk',
        ],
        [
            'name' => 'Lokâtr',
        ],
        [
            'name' => 'Kognitâar',
        ],
        [
            'name' => 'Lugger',
        ],
        [
            'name' => 'Hierotek Circle',
        ],
        [
            'name' => 'Necron',
        ],
        [
            'name' => '<Dynasty>',
        ],
        [
            'name' => 'Cryptek',
        ],
        [
            'name' => 'Chronomancer',
        ],
        [
            'name' => 'Psychomancer',
        ],
        [
            'name' => 'Technomancer',
        ],
        [
            'name' => 'Plasmacyte',
        ],
        [
            'name' => 'Accelerator',
        ],
        [
            'name' => 'Reanimator',
        ],
        [
            'name' => 'Apprentek',
        ],
        [
            'name' => 'Deathmark',
        ],
        [
            'name' => 'Despotek',
        ],
        [
            'name' => 'Immortal',
        ],
        [
            'name' => 'Guardian',
        ],
        [
            'name' => 'Kommando',
        ],
        [
            'name' => 'Ork',
        ],
        [
            'name' => '<Clan>',
        ],
        [
            'name' => 'Kommando Boy',
        ],
        [
            'name' => 'Kommando Slasha Boy',
        ],
        [
            'name' => 'Kommando Breacha Boy',
        ],
        [
            'name' => 'Kommando Snipa Boy',
        ],
        [
            'name' => 'Kommando Dakka Boy',
        ],
        [
            'name' => 'Kommando Comms Boy',
        ],
        [
            'name' => 'Kommando Burna Boy',
        ],
        [
            'name' => 'Kommando Rokkit Boy',
        ],
        [
            'name' => 'Kommando Grot',
        ],
        [
            'name' => 'Kommando Nob',
        ],
        [
            'name' => 'Bomb Squig',
        ],
        [
            'name' => 'Pathfinder',
        ],
        [
            'name' => "T'au",
        ],
        [
            'name' => '<Sept>',
        ],
        [
            'name' => "Shas'ui Pathfinder",
        ],
        [
            'name' => "Shas'la Pathfinder",
        ],
        [
            'name' => "Blooded Pathfinder",
        ],
        [
            'name' => "Drone Controller Pathfinder",
        ],
        [
            'name' => "Transpectral Interference Pathfinder",
        ],
        [
            'name' => "Assault Grenadier Pathfinder",
        ],
        [
            'name' => "Communications Specialist Pathfinder",
        ],
        [
            'name' => "Medical Technician Pathfinder",
        ],
        [
            'name' => "Weapon's Expert Pathfinder",
        ],
        [
            'name' => "Marksman Pathfinder",
        ],
        [
            'name' => "Drone",
        ],
        [
            'name' => "MB3 Recon Drone",
        ],
        [
            'name' => "MV1 Gun Drone",
        ],
        [
            'name' => "MV4 Shield Drone",
        ],
        [
            'name' => "MV7 Marker Drone",
        ],
        [
            'name' => "MV31 Pulse Accelerator Drone",
        ],
        [
            'name' => "MV33 Grav-Inhibitor Drone",
        ],
    ];
    public function run(): void
    {
        foreach ($this->keywords as $keyword){
            $k = new KeyWord();
            $k->name = $keyword['name'];
            $k->slug= Str::slug($keyword['name']);
            $k->save();
        }
        $this->command->info('Keywords inserted');
    }
}
