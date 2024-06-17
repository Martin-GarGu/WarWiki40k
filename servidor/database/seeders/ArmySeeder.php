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
            // 'slug'=>'astra-militarum',
            'description'=>'La mayor fuerza de combate coherente en la galaxia que sirve como la fuerza militar primaria del Imperio del Hombre y la primera línea de defensa de las innumerables amenazas que ponen en peligro la existencia de la raza humana en el Milenio 41.',
            'image'=>'astraMilitarumLogo.jpg',
            // https://drawshield.net/catalog/charges/warhammer//astra-militarum-symbol.png
            'faction_id'=>'1'
        ],
        [
            'name'=>'Adepta Sororitas',
            // 'slug'=>'adepta-sororitas',
            'description'=>'Las Adepta Sororitas, coloquialmente llamadas "Hermandad", cuyo brazo militar también se conoce como Hermanas de Batalla y anteriormente como Hijas del Emperador, son una división exclusivamente femenina de la iglesia estatal del Imperio del Hombre conocida como Eclesiarquía o, más formalmente, como Adeptus Ministorum.',
            'image'=>'adeptaSororitasLogo.jpg',
            // https://64.media.tumblr.com/013b51645110f4b781d5e1ba5c376e64/tumblr_nbple5VhN01teiu7jo1_1280.pnj
            'faccion_id'=>'1'
        ],
        [
            'name'=>'Grey Knights',
            // 'slug'=>'grey-knights',
            'description'=>'Son un Capítulo secreto y misterioso de Marines Espaciales encargado específicamente de combatir las peligrosas entidades demoníacas de la Disformidad y todos aquellos mortales que ejercen el poder corrupto de los Dioses del Caos.',
            'image'=>'greyKnigthsLogo.jpg',
            // https://drawshield.net/catalog/charges/warhammer//grey-knights-symbol.png
            'faction_id'=>'1'
        ],
        [
            'name'=>'Adeptus Mechanicus',
            // 'slug'=>'adeptus-mechanicus',
            'description'=>'El Adeptus Mechanicus valora el conocimiento por encima de todas las cosas y derramará océanos de sangre y aceite en su interminable cruzada para adquirir conocimientos perdidos y reliquias antiguas. Los ejércitos de cíborgs del Culto a la Máquina manejan armas tecnológicas extrañas y arcanas de un gran poder, fabricadas y administradas por los extraños tecnosacerdotes del Omnissiah.',
            'image'=>'adeptusMechanicusLogo.jpg',
            // https://i.etsystatic.com/10425020/r/il/cc05e7/1420451695/il_fullxfull.1420451695_mjws.jpg
            'faction_id'=>'1'
        ],
        [
            'name'=>'Agents of the Imperium',
            // 'slug'=>'agents-of-the-imperium',
            'description'=>'Agentes del Imperio son una colección de organizaciones y facciones que trabajan en secreto para proteger y mantener el Imperio del Hombre. Estas organizaciones incluyen la Inquisición, el Officio Assassinorum, el Adeptus Arbites y el Adeptus Custodes, entre otros.',
            'image'=>'AgentsOfTheImperiumLogo.jpg',
            // https://static.wikia.nocookie.net/warhammer40k/images/3/3f/IoMhighres.png/revision/latest?cb=20190630130844
            'faction_id'=>'1'
        ],
        [
            'name'=>'Adeptus Custodes',
            // 'slug'=>'adeptus-custodes',
            'description'=>'Los Adeptus Custodes fueron los primeros y más grandes de los supersoldados diseñados por el Emperador. Cada uno es un guerrero de poder superlativo y resistencia sobrehumana, un estratega y táctico que rivaliza con los más grandes generales y muchas tropas más. Son ejemplares de leyenda casi inmortales, que no se detienen ante nada para defender al Emperador y su mundo trono.',
            'image'=>'adeptusCustodesLogo.jpg',
            // https://static.wikia.nocookie.net/eswarhammer40k/images/6/61/Emblema_Adeptus_Custodes_7%C2%AA_Edici%C3%B3n.jpg/revision/latest?cb=20170324185133
            'faction_id'=>'1'
        ],
        [
            'name'=>'Space Marines',
            // 'slug'=>'space-marines',
            'description'=>'Los Marines Espaciales o Astartes de Aeptus son los principales defensores de la Humanidad, el más grande del Emperador de los guerreros de la Humanidad. Apenas son humanos, pero sobrehumanos; habiendo sido hechos superiores en todos los aspectos a un hombre normal por un duro régimen de modificación genética, psico-acondicionamiento y entrenamiento riguroso.',
            'image'=>'spaceMarinesLogo.jpg',
            // https://drawshield.net/catalog/charges/warhammer//adeptus-astartes-symbol.png
            'faccion_id'=>'1'
        ],
        #endregion
        #region chaos
        [
            'name'=>'Death Guard',
            // 'slug'=>'death-guard',
            'description'=>'La Guardia de la Muerte es la Legión Traidora más favorecida por Nurgle, el Dios del Caos de la plaga y la desesperación. Dedicados a propagar las espantosas infecciones del Padre de la Plaga por los mundos del Imperium, estos mórbidos Marines Espaciales son vectores de plaga vivos dotados de una resistencia grotesca.',
            'image'=>'guardiaDeLaMuerteLogo.jpg',
            // https://ih1.redbubble.net/image.4968566957.5087/raf,360x360,075,t,fafafa:ca443f4786.jpg
            'faccion_id'=>'2'
        ], 
        [
            'name'=>'Thousand Sons',
            // 'slug'=>'thousand-sons',
            'description'=>'Los Mil Hijos son una Legión Traidora de hechiceros locos que juraron lealtad a Tzeentch, el Dios del Caos de la magia y el cambio. Estos sobrenaturales Marines Espaciales gobiernan sobre séquitos de mutantes retorcidos y autómatas arcanos, lanzando complots laberínticos para provocar la destrucción del Imperium.',
            'image'=>'milHijosLogo.jpg',
            // https://warhammer40000.com/wp-content/uploads/2023/07/00lsq1k5mr0DF8Iy.png
            'faction_id'=>'2'
        ],
        [
            'name'=>'Chaos Daemons',
            // 'slug'=>'chaos-daemons',
            'description'=>'Los Demonios del Caos, o simplemente Demonios (pronunciado en ingles DEE-mahns), también conocidos como "Nunca nacidos" entre las fuerzas del Caos, son entidades inteligentes y generalmente malévolas de la Disformidad compuestas de energía puramente psíquica.',
            // https://p7.hiclipart.com/preview/274/317/230/warhammer-40-000-symbol-of-chaos-chaos-magic-symbol-thumbnail.jpg
            'faction_id'=>'2'
        ],
        [
            'name'=>'Chaos Space Marines',
            // 'slug'=>'chaos-space-marines',
            'description'=>'Los Marines Espaciales del Caos, también llamados a veces Marines Traidores, Marines Renegados o Astartes Herejes, son antiguos Marines Espaciales del Imperio de la Humanidad que han elegido abandonar el servicio del Emperador de la Humanidad y dedicarse al Caos para lograr sus propios fines.',
            // https://static.wikia.nocookie.net/warhammer40k/images/d/da/ChaosSpaceMarinesIcon.jpg/revision/latest/scale-to-width-down/1200?cb=20220727154127
            'faction_id'=>'2'
        ],
        [
            'name'=>'Cultists',
            // 'slug'=>'cultists',
            'description'=>'Un Culto del Caos es la más peligrosa de todas aquellas organizaciones que conspiran para derrocar el gobierno del Imperio del Hombre desde dentro. Todos los planetas y civilizaciones que pertenecen al Imperio pueden albergar organizaciones contaminadas por el Caos, que son tan diversas en prácticas y miembros como sea imaginable.',
            // https://p7.hiclipart.com/preview/934/248/963/warhammer-40-000-warhammer-online-age-of-reckoning-symbol-of-chaos-chaos-space-marines-symbol.jpg
            'faction_id'=>'2'
        ],
        #endregion
        #region aeldari
         [
            'name'=>'Arlequines',
            // 'slug'=>'arlequines',
            'description'=>'Subgrupo muy distinto de la especie Aeldari que no pertenece a ninguna de las facciones Aeldari existentes. Ellos son los guardianes de la Biblioteca Negra y sirven a la enigmática deidad Aeldari llamada Dios Riendo.',
            'image'=>'arlequines.jpg',
            // https://drawshield.net/catalog/charges/warhammer//harlequins-symbol.png
            'faction_id'=>'3'
         ],
       
        #endregion
        #region xenos
        [
            'name'=>'Ligas de los Votann',
            // 'slug'=>'ligas-de-los-votann',
            'description'=>'Las Ligas de los Votann las forman mineros expertos, comerciantes pragmáticos y guerreros resistentes, que manejan tecnologías avanzadas perdidas por el Imperio. Los clones que integran la Familia pueblan las Ligas y son duros de cuerpo y mente, sus ejércitos salen del núcleo galáctico para reclamar recursos y saldar deudas por cualquier medio necesario.',
            'image'=>'votannLogo.jpg',
            // https://warhammer40000.com/wp-content/uploads/2023/07/VNXJWXxmg0WcqzRv.png
            'faction_id'=>'4'
        ],
        [
            'name'=>'Tiránidos',
            // 'slug'=>'tiranidos',
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
