<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\Army;
use Illuminate\Support\Str;

class ArmySeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    private $armies=[
        #region imperium
        [
            'name'=>'Adepta Sororitas',
            // 'slug'=>'adepta-sororitas',
            'description'=>'Las Adepta Sororitas, coloquialmente llamadas "Hermandad", cuyo brazo militar también se conoce como Hermanas de Batalla y anteriormente como Hijas del Emperador, son una división exclusivamente femenina de la iglesia estatal del Imperio del Hombre conocida como Eclesiarquía o, más formalmente, como Adeptus Ministorum.',
            'image'=>'adeptaSororitasLogo.jpg',
            // https://64.media.tumblr.com/013b51645110f4b781d5e1ba5c376e64/tumblr_nbple5VhN01teiu7jo1_1280.pnj
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
            'name'=>'Astra Militarum',
            // 'slug'=>'astra-militarum',
            'description'=>'La mayor fuerza de combate coherente en la galaxia que sirve como la fuerza militar primaria del Imperio del Hombre y la primera línea de defensa de las innumerables amenazas que ponen en peligro la existencia de la raza humana en el Milenio 41.',
            'image'=>'astraMilitarumLogo.jpg',
            // https://drawshield.net/catalog/charges/warhammer//astra-militarum-symbol.png
            'faction_id'=>'1'
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
            'name'=>'Space Marines',
            // 'slug'=>'space-marines',
            'description'=>'Los Marines Espaciales o Astartes de Aeptus son los principales defensores de la Humanidad, el más grande del Emperador de los guerreros de la Humanidad. Apenas son humanos, pero sobrehumanos; habiendo sido hechos superiores en todos los aspectos a un hombre normal por un duro régimen de modificación genética, psico-acondicionamiento y entrenamiento riguroso.',
            'image'=>'spaceMarinesLogo.jpg',
            // https://drawshield.net/catalog/charges/warhammer//adeptus-astartes-symbol.png
            'faction_id'=>'1'
        ],
        #endregion
        #region chaos
        [
            'name'=>'Chaos Daemons',
            // 'slug'=>'chaos-daemons',
            'description'=>'Los Demonios del Caos, o simplemente Demonios (pronunciado en ingles DEE-mahns), también conocidos como "Nunca nacidos" entre las fuerzas del Caos, son entidades inteligentes y generalmente malévolas de la Disformidad compuestas de energía puramente psíquica.',
            'image'=>'chaosDaemonsLogo.jpg',
            // https://p7.hiclipart.com/preview/274/317/230/warhammer-40-000-symbol-of-chaos-chaos-magic-symbol-thumbnail.jpg
            'faction_id'=>'2'
        ],
        [
            'name'=>'Chaos Space Marines',
            // 'slug'=>'chaos-space-marines',
            'description'=>'Los Marines Espaciales del Caos, también llamados a veces Marines Traidores, Marines Renegados o Astartes Herejes, son antiguos Marines Espaciales del Imperio de la Humanidad que han elegido abandonar el servicio del Emperador de la Humanidad y dedicarse al Caos para lograr sus propios fines.',
            'image'=>'chaosSpaceMarinesLogo.jpg',
            // https://static.wikia.nocookie.net/warhammer40k/images/d/da/ChaosSpaceMarinesIcon.jpg/revision/latest/scale-to-width-down/1200?cb=20220727154127
            'faction_id'=>'2'
        ],
        [
            'name'=>'Cultists',
            // 'slug'=>'cultists',
            'description'=>'Un Culto del Caos es la más peligrosa de todas aquellas organizaciones que conspiran para derrocar el gobierno del Imperio del Hombre desde dentro. Todos los planetas y civilizaciones que pertenecen al Imperio pueden albergar organizaciones contaminadas por el Caos, que son tan diversas en prácticas y miembros como sea imaginable.',
            'image'=>'cultistsLogo.jpg',
            // https://p7.hiclipart.com/preview/934/248/963/warhammer-40-000-warhammer-online-age-of-reckoning-symbol-of-chaos-chaos-space-marines-symbol.jpg
            'faction_id'=>'2'
        ],
        [
            'name'=>'Death Guard',
            // 'slug'=>'death-guard',
            'description'=>'La Guardia de la Muerte es la Legión Traidora más favorecida por Nurgle, el Dios del Caos de la plaga y la desesperación. Dedicados a propagar las espantosas infecciones del Padre de la Plaga por los mundos del Imperium, estos mórbidos Marines Espaciales son vectores de plaga vivos dotados de una resistencia grotesca.',
            'image'=>'guardiaDeLaMuerteLogo.jpg',
            // https://ih1.redbubble.net/image.4968566957.5087/raf,360x360,075,t,fafafa:ca443f4786.jpg
            'faction_id'=>'2'
        ], 
        [
            'name'=>'Thousand Sons',
            // 'slug'=>'thousand-sons',
            'description'=>'Los Mil Hijos son una Legión Traidora de hechiceros locos que juraron lealtad a Tzeentch, el Dios del Caos de la magia y el cambio. Estos sobrenaturales Marines Espaciales gobiernan sobre séquitos de mutantes retorcidos y autómatas arcanos, lanzando complots laberínticos para provocar la destrucción del Imperium.',
            'image'=>'milHijosLogo.jpg',
            // https://warhammer40000.com/wp-content/uploads/2023/07/00lsq1k5mr0DF8Iy.png
            'faction_id'=>'2'
        ],
        
        #endregion
        #region aeldari
         
         [
            'name'=>'Corsairs',
            // 'slug'=>'corsairs',
            'description'=>'Los Aeldari Corsairs son aquellos Asuryani Outcasts que deliberadamente han elegido ganarse la vida asaltando el comercio de otras especies inteligentes de la Vía Láctea que viajan por las estrellas, particularmente los barcos del Imperio de la Humanidad.',
            'image'=>'corsairsLogo.jpg',
            // https://bolterandchainsword.com/uploads/gallery/album_15844/gallery_26_15844_1900.gif
            'faction_id'=>'3'
         ],
         [
            'name'=>'Craftworlds',
            // 'slug'=>'craftworlds',
            'description'=>'De todos los Aeldari, los Craftworlds son los más flexibles tácticamente, y sus Guerreros Aspectos les permiten especializarse en cualquier estilo de guerra.',
            'image'=>'craftworldsLogo.jpg',
            // https://static.wikia.nocookie.net/warhammer40k/images/d/de/Asuryani.jpg/revision/latest?cb=20230501133347
            'faction_id'=>'3'
         ],
         [
            'name'=>'Drukhari',
            // 'slug'=>'drukhari',
            'description'=>'Los Drukhari (Aeldarix malum) (pronunciado en ingles Druh-KAR-ee) u "Oscuros" en el Léxico Aeldari, también conocidos por los forasteros como los Eldar Oscuros, son una estirpe Aeldari abandonada y corrupta, las contrapartes sádicas y maliciosas de los Asuryani.',
            'image'=>'drukhariLogo.jpg',
            // https://static.wikia.nocookie.net/warhammer40k/images/3/35/DrukhariRune.jpg/revision/latest/scale-to-width-down/250?cb=20200730184358
            'faction_id'=>'3'
         ],
         [
            'name'=>'Harlequins',
            // 'slug'=>'harlequins',
            'description'=>'Subgrupo muy distinto de la especie Aeldari que no pertenece a ninguna de las facciones Aeldari existentes. Ellos son los guardianes de la Biblioteca Negra y sirven a la enigmática deidad Aeldari llamada Dios Riendo.',
            'image'=>'harlequinsLogo.jpg',
            // https://drawshield.net/catalog/charges/warhammer//harlequins-symbol.png
            'faction_id'=>'3'
         ],
       
        #endregion
        #region xenos
        [
            'name'=>'Genestealer Cults',
            // 'slug'=>'genestealer-cults',
            'description'=>'Un Culto Genestealer es una sociedad secreta adoradora de xenos formada y controlada por Tyranid Genestealers que prospera en los rincones oscuros del inframundo imperial en toda la galaxia. Secretos, sigilosos y absolutamente malignos, los Genestealer Cults son cánceres que crecen invisibles en los espacios ocultos del reino de la Humanidad.',
            'image'=>'genestealerCultsLogo.jpg',
            // https://i.pinimg.com/474x/fd/db/2d/fddb2d06b0cd5ac3b14293e82410dcc5.jpg
            'faction_id'=>'4'
        ],
        [
            'name'=>'Kroot',
            // 'slug'=>'kroot',
            'description'=>'Los Kroot (Krootis aviana), también designados por el Imperio como Kroot Carnivore, son una especie xenos de humanoides salvajes que son miembros del Imperio T’au. Los Kroot evolucionaron a partir de criaturas aviares en su mundo natal de Pech.',
            'image'=>'kroot.jpg',
            // https://static.wikia.nocookie.net/warhammer40k/images/1/1f/Kroot2.jpg/revision/latest?cb=20100706070107
            'faction_id'=>'4'
        ],
        [
            'name'=>'Leagues of Votann',
            // 'slug'=>'leagues-of-votann',
            'description'=>'Las Ligas de los Votann las forman mineros expertos, comerciantes pragmáticos y guerreros resistentes, que manejan tecnologías avanzadas perdidas por el Imperio. Los clones que integran la Familia pueblan las Ligas y son duros de cuerpo y mente, sus ejércitos salen del núcleo galáctico para reclamar recursos y saldar deudas por cualquier medio necesario.',
            'image'=>'votannLogo.jpg',
            // https://warhammer40000.com/wp-content/uploads/2023/07/VNXJWXxmg0WcqzRv.png
            'faction_id'=>'4'
        ],
        [
            'name'=>'Necrons',
            // 'slug'=>'necrons',
            'description'=>'Los Necrons son una misteriosa especie xenos de guerreros esqueléticos robóticos humanoides que han permanecido inactivos en sus tumbas de estasis durante más de 60 millones de años terrestres, aunque por fin han comenzado a despertar.',
            'image'=>'necronsLogo.jpg',
            // https://wh40k.lexicanum.com/mediawiki/images/c/c8/Ankh_triarch.png
            'faction_id'=>'4'
        ],
        [
            'name'=>'Orks',
            // 'slug'=>'orks',
            'description'=>'Los Orkos, también llamados Pieles Verdes, son una especie de humanoides bestiales y asexuales, salvajes, guerreros y de piel verde que se encuentran repartidos por toda la galaxia. Son únicos entre las especies xenos inteligentes conocidas por la humanidad porque poseen las características fisiológicas tanto de animales como de hongos.',
            'image'=>'orksLogo.jpg',
            // https://preview.redd.it/what-is-the-orks-icon-v0-ciqyrljvhjkb1.jpg?width=250&format=pjpg&auto=webp&s=a13353914d7587d443a899204b28f2c94165a891
            'faction_id'=>'4'
        ],
        [
            'name'=>'T’au Empire',
            // 'slug'=>'tau-empire',
            'description'=>'El Imperio T’au (pronunciado "TOW" como en "WOW"), también escrito Imperio Tau en registros imperiales más antiguos, es un imperio estelar xenos multiespecie en rápida expansión situado dentro del Imperio del Ultima Segmentum del Hombre, cerca de la Franja Oriental del Via Láctea. Está al alcance del Astronomican.',
            'image'=>'tauEmpireLogo.jpg',
            // https://static.wikia.nocookie.net/warhammer40k/images/f/f0/T%27au_Empire_Icon.png/revision/latest?cb=20230512074501
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
        foreach ($this->armies as $army) {
            $a = new Army();
            $a->name = $army['name'];
            $a->slug = Str::slug($army["name"]);
            $a->description = $army['description'];
            $a->image = $army['image'];
            $a->faction_id = $army['faction_id'];
            $a->save();
        }
        $this->command->info('Armies created with data success!');
    }
}
