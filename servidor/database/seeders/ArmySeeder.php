<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class ArmySeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    private $armies=[
        #region imperium
        [
            'name'=>'Astra Militarum',
            'slug'=>'astra-militarum',
            'description'=>'La mayor fuerza de combate coherente en la galaxia que sirve como la fuerza militar primaria del Imperio del Hombre y la primera línea de defensa de las innumerables amenazas que ponen en peligro la existencia de la raza humana en el Milenio 41.',
            'image'=>'astraMilitarumLogo.jpg',
            // https://drawshield.net/catalog/charges/warhammer//astra-militarum-symbol.png
            'faction_id'=>'1'
        ],
        [
            'name'=>'Grey Knights',
            'slug'=>'grey-knights',
            'description'=>'Son un Capítulo secreto y misterioso de Marines Espaciales encargado específicamente de combatir las peligrosas entidades demoníacas de la Disformidad y todos aquellos mortales que ejercen el poder corrupto de los Dioses del Caos.',
            'image'=>'greyKnigthsLogo.jpg',
            // https://drawshield.net/catalog/charges/warhammer//grey-knights-symbol.png
            'faction_id'=>'1'
        ],
        [
            'name'=>'Adeptus Mechanicus',
            'slug'=>'adeptus-mechanicus',
            'description'=>'El Adeptus Mechanicus valora el conocimiento por encima de todas las cosas y derramará océanos de sangre y aceite en su interminable cruzada para adquirir conocimientos perdidos y reliquias antiguas. Los ejércitos de cíborgs del Culto a la Máquina manejan armas tecnológicas extrañas y arcanas de un gran poder, fabricadas y administradas por los extraños tecnosacerdotes del Omnissiah.',
            'image'=>'adeptusMechanicusLogo.jpg',
            // https://i.etsystatic.com/10425020/r/il/cc05e7/1420451695/il_fullxfull.1420451695_mjws.jpg
            'faction_id'=>'1'
        ],
        [
            'name'=>'Adeptus Custodes',
            'slug'=>'adeptus-custodes',
            'description'=>'Los Adeptus Custodes fueron los primeros y más grandes de los supersoldados diseñados por el Emperador. Cada uno es un guerrero de poder superlativo y resistencia sobrehumana, un estratega y táctico que rivaliza con los más grandes generales y muchas tropas más. Son ejemplares de leyenda casi inmortales, que no se detienen ante nada para defender al Emperador y su mundo trono.',
            'image'=>'adeptusCustodesLogo.jpg',
            // https://static.wikia.nocookie.net/eswarhammer40k/images/6/61/Emblema_Adeptus_Custodes_7%C2%AA_Edici%C3%B3n.jpg/revision/latest?cb=20170324185133
            'faction_id'=>'1'
        ],
        [
            'name'=>'Ángeles Sangrientos',
            'slug'=>'angeles-sangrientos',
            'description'=>'Los Ángeles Sangrientos se cuentan entre los Marines Espaciales más nobles y honorables, con una historia de lealtad inquebrantable al Imperium que se remonta a la Gran Cruzada. Se esfuerzan sin vacilar por proteger a los inocentes, pero su heroica reputación oculta una espantosa maldición. Cada hermano de batalla lucha día y noche para resistir esta aflicción y mantenerla oculta a los extraños.',
            'image'=>'angelesSangrientosLogo.jpg',
            // https://warhammer40000.com/wp-content/uploads/2023/07/58BjlT974guAVcSm.png
            'faccion_id'=>'1'
        ],
        #endregion
        #region chaos
        [
            'name'=>'Guardia de la Muerte',
            'slug'=>'guardia-de-la-muerte',
            'description'=>'La Guardia de la Muerte es la Legión Traidora más favorecida por Nurgle, el Dios del Caos de la plaga y la desesperación. Dedicados a propagar las espantosas infecciones del Padre de la Plaga por los mundos del Imperium, estos mórbidos Marines Espaciales son vectores de plaga vivos dotados de una resistencia grotesca.',
            'image'=>'guardiaDeLaMuerteLogo.jpg',
            // https://ih1.redbubble.net/image.4968566957.5087/raf,360x360,075,t,fafafa:ca443f4786.jpg
            'faccion_id'=>'2'
        ], 
        [
            'name'=>'Mil Hijos',
            'slug'=>'mil-hijos',
            'description'=>'Los Mil Hijos son una Legión Traidora de hechiceros locos que juraron lealtad a Tzeentch, el Dios del Caos de la magia y el cambio. Estos sobrenaturales Marines Espaciales gobiernan sobre séquitos de mutantes retorcidos y autómatas arcanos, lanzando complots laberínticos para provocar la destrucción del Imperium.',
            'image'=>'milHijosLogo.jpg',
            // https://warhammer40000.com/wp-content/uploads/2023/07/00lsq1k5mr0DF8Iy.png
            'faction_id'=>'2'
        ],
        #endregion
        #region aeldari
         [
            'name'=>'Arlequines',
            'slug'=>'arlequines',
            'description'=>'Subgrupo muy distinto de la especie Aeldari que no pertenece a ninguna de las facciones Aeldari existentes. Ellos son los guardianes de la Biblioteca Negra y sirven a la enigmática deidad Aeldari llamada Dios Riendo.',
            'image'=>'arlequines.jpg',
            // https://drawshield.net/catalog/charges/warhammer//harlequins-symbol.png
            'faction_id'=>'3'
         ],
       
        #endregion
        #region xenos
        [
            'name'=>'Ligas de los Votann',
            'slug'=>'ligas-de-los-votann',
            'description'=>'Las Ligas de los Votann las forman mineros expertos, comerciantes pragmáticos y guerreros resistentes, que manejan tecnologías avanzadas perdidas por el Imperio. Los clones que integran la Familia pueblan las Ligas y son duros de cuerpo y mente, sus ejércitos salen del núcleo galáctico para reclamar recursos y saldar deudas por cualquier medio necesario.',
            'image'=>'votannLogo.jpg',
            // https://warhammer40000.com/wp-content/uploads/2023/07/VNXJWXxmg0WcqzRv.png
            'faction_id'=>'4'
        ],
        [
            'name'=>'Tiránidos',
            'slug'=>'tiranidos',
            'description'=>'Los Tiránidos han invadido la galaxia desde más allá del vacío intergaláctico, sus flotas colmena se deslizan como zarcillos en cada sector y sistema. Impulsados por los imperativos de la todopoderosa Mente Colmena, sus enjambres barren mundo tras mundo en una marea viva de máquinas biológicas de matar, devorando hasta la última pizca de biomasa a su paso.',
            'image'=>'tiranidosLogo.jpg',
            // https://warhammer40000.com/wp-content/uploads/2023/07/02kwomwcxx6IxqW9.png
            'faction_id'=>'4'
        ],
        #endregion
        ];
    public function run(): void
    {
        //
    }
}
