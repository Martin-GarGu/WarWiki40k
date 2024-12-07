<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\Squadron;
use Illuminate\Support\Str;

class SquadronSeeder extends Seeder
{
    private $squadrons=[
        #region Adepta Sororitas
        [
            'name' => 'Novitiates',
            'description'=> 'Las Novitiate son las Adepta Sororitas de menor rango, recién introducidas en la Orden y aún en entrenamiento, por lo que aún no son consideradas Hermanas de Batalla en pleno derecho.',
            'image' => 'novitiates.jpg',
            // https://www.warhammer.com/app/resources/catalog/product/920x950/60010199040_CalanathGroup1.jpg?fm=webp&w=1200&h=1237
            'army_id' => 1
        ],
        #endregion
        #region Agents of the Imperium
        [
            'name' => 'Elucidian Starstriders',
            'description'=>"Los Elucidian Starstriders fueron contactados por el Lord Comandante Guilliman en algún momento después de la creación de la Gran Grieta y se les asignó la tarea de encontrar nuevos mundos incorruptos para que el Imperio los colonizara.",
            'image' => 'elucidian-starstriders.jpg',
            // https://www.warhammer.com/app/resources/catalog/product/920x950/99120108083_KT2ElucidianStarstridersLead.jpg?fm=webp&w=920&h=948
            'army_id' => 4
        ],
        [
            'name' => 'Exaction Squad',
            'description'=>"Operados por árbitros, los escuadrones de exacción tienen la tarea de cazar y capturar a los transgresores individuales sin matarlos, para permitir su encarcelamiento, interrogatorio o algún otro destino terrible.",
            'image' => 'exaction-squad.jpg',
            // https://www.warhammer.com/app/resources/catalog/product/920x950/60010199050_EngKTSoulshackle05.jpg?fm=webp&w=920&h=948
            'army_id' => 4
        ],
        [
            'name' => 'Imperial Navy Breachers',
            'description'=>"Los Imperial Navy Breachers son cuerpos de élite de la Armada Imperial, dedicados al abordaje de naves enemigas y pecios espaciales y a la protección de los propios navíos de la Armada. Se tratan de comandos de élite entrenados para combatir en situaciones de escasa o nula gravedad y ambientes inhóspitos.",
            'image' => 'imperial-navy-breachers.jpg',
            // https://www.warhammer.com/app/resources/catalog/product/920x950/60010199046_ENGIntoDarkGroup1.jpg?fm=webp&w=920&h=948
            'army_id' => 4
        ],
        [
            'name' => 'Inquisitorial Agents',
            'description'=>"La Inquisition, formalmente llamada las Holy Orders de la Inquisición del Emperador, es una organización secreta que existe fuera de la jerarquía administrativa estándar del Imperio de la Humanidad.",
            'image' => 'inquisitorial-agents.jpg',
            // https://www.warhammer.com/app/resources/catalog/product/920x950/60010199056_KT2AshesOfFaith02.jpg?fm=webp&w=920&h=948
            'army_id' => 4
        ],
        #endregion
        #region Astra Militarum
        [
            'name' => 'Kasrkin',
            'description' => "Los Kasrkin (pronunciado 'KAH-sir-kin') son tropas de élite del Astra Militarum y estaban dedicadas a la seguridad del Mundo Fortaleza de Cadia del que alguna vez procedieron.",
            'image' => 'kasrkin.jpg',
            // https://www.warhammer.com/app/resources/catalog/product/920x950/60010199049_EngKTShadowvaultGroup1.jpg?fm=webp&w=920&h=948
            'army_id' => 5
        ],
        [
            'name' => "Veteran Guardsman",
            'description' => "Los Veteran Guardsman son soldados del Astra Militarum que han sobrevivido a múltiples batallas y se han convertido en guerreros hábiles y eficientes para el Emperador de la Humanidad.",
            'image' => 'veteran-guardsmen.jpg',
            // https://www.warhammer.com/app/resources/catalog/product/920x950/60010199037_KT2Group1.jpg?fm=webp&w=920&h=948
            'army_id' => 5
        ],
        #endregion
        #region Space Marines
        [
            'name' => "Phobos Strike Team",
            'description' => "Los Phobos Strike son Comandos Especialistas formados por Marines Espaciales Vanguardia, concretamente Saboteadores, Infiltradores y Saqueadores. Sus Servoarmadura Mk. X tipo Phobos, que da nombre al equipo, les permite llevar a cabo acciones de infiltración, sigilo y asesinato, y todos sus miembros son expertos de la guerra de guerrillas y de ataques rápidos, desapareciendo en las sombras tras golpear a sus enemigos.",
            'image' => 'phobos-strike-team.jpg',
            // https://www.warhammer.com/app/resources/catalog/product/920x950/60010199045_EngKTMorochGroup01.jpg?fm=webp&w=920&h=948
            'army_id' => 7
        ],
        [
            'name' =>"Scout Squad",
            'description' =>"Los Scout Squad son los reclutas más nuevos de un Capítulo de Marines Espaciales. Sus deberes son infiltrarse en las posiciones enemigas o luchar como escaramuzadores ligeramente armados delante del resto del Capítulo. Operando detrás de las líneas enemigas, los Scouts de los Marines Espaciales tienden emboscadas a sus enemigos, espían sus movimientos y recopilan toda la información que pueden sobre los planes de sus oponentes.",
            'image' => 'scout-squad.jpg',
            // https://www.warhammer.com/app/resources/catalog/product/920x950/60010199064_KTSalvation3.jpg?fm=webp&w=920&h=948
            'army_id' => 7
        ],
        #endregion
        #region Chaos Daemons
        [
            'name' => 'Gellerpox Infected',
            'description' => "Los Gellerpox Infected son monstruosidades parte máquina, parte mortal y parte criatura de la Disformidad. Se trata de tecno-mutantes, monstruos nacidos por las enfermedades de Nurgle.",
            'image' => 'gellerpox-infected.jpg',
            // https://www.warhammer.com/app/resources/catalog/product/920x950/99120102162_KT2GellerpoxInfectedLead.jpg?fm=webp&w=920&h=948
            'army_id' => 8
        ],
        #endregion
        #region Chaos Space Marines
        [
            'name' => 'Legionaries',
            'description' => "Los Legionaries están formados por Marines Espaciales del Caos veteranos. Además de sus ya inhumanas capacidades como Marines Espaciales, y de las oscuras bendiciones que les conceden los Dioses del Caos, los Legionarios poseen capacidades especiales, que les hacen destacar y cumplir roles concretos en el campo de batalla.",
            'image' => 'legionaries.jpg',
            // https://www.warhammer.com/app/resources/catalog/product/920x950/60010199044_NachmundGroup2.jpg?fm=webp&w=920&h=948
            'army_id' => 9
        ],
        #endregion
        #region Cultists
        [
            'name' => 'Blooded',
            'description' => "Los Blooded son grupos de élite formados por Guardias Imperiales Traidores, que han renegado de su lealtad al Imperio, y ahora buscan nuevos patrones en los Dioses del Caos.",
            'image' => 'blooded.jpg',
            // https://www.warhammer.com/app/resources/catalog/product/920x950/60010199045_EngKTMorochGroup02.jpg?fm=webp&w=920&h=948
            'army_id' => 10
        ],
        [
            'name' => 'Fellgor Ravagers',
            'description' => "Los Fellgor Ravagers son la élite de las tribus de Hombres Bestia del Caos, muy por encima del resto de su manada, y actuan como sus Comandos especialistas gracias a sus habilidades superiores, mayor fuerza y resistencia formidable.",
            'image' => 'fellgor-ravagers.jpg',
            // https://www.warhammer.com/app/resources/catalog/product/920x950/60010199055_GallowfallCoreGame4.jpg?fm=webp&w=920&h=948
            'army_id' => 10
        ],
        #endregion
        #region Corsairs
        [
            'name' => 'Corsair Voidscarred',
            'description' => "Los Corsair Voidscarred son agrupaciones de Corsarios Aeldari de élite, altamente especializados y que son capaces de llevar a cabo acciones más complicadas y temerarias que el resto de sus congéneres.",
            'image' => 'corsair-voidscarred.jpg',
            // https://www.warhammer.com/app/resources/catalog/product/920x950/60010199044_NachmundGroup1.jpg?fm=webp&w=920&h=948
            'army_id' => 13
        ],
        #endregion
        #region Craftwords
        [
            'name' => 'Blades of Khaine',
            'description' => "Los Blades of Khaine son Comandos especialistas formados por Guerreros de la Senda eldar, individuos dedicados por completo al entrenamiento y combate según los preceptos de la Senda del Guerrero asuryani.",
            'image' => 'blades-of-khaine.jpg',
            // https://www.warhammer.com/app/resources/catalog/product/920x950/60010199064_KTSalvation4.jpg?fm=webp&w=920&h=948
            'army_id' => 14
        ],
        #endregion
        #region Drukhari
        [
            'name' => 'Hand of the Archon',
            'description' => "Los Hand of the Archon son Comandos especialistas de los Drukhari, formados por los guerreros más sádicos, inteligentes o manipuladores de entre sus pares. ",
            'image' => 'hand-of-the-archon.jpg',
            // https://www.warhammer.com/app/resources/catalog/product/920x950/60010199050_EngKTSoulshackle04.jpg?fm=webp&w=920&h=948
            'army_id' => 15
        ],
        #endregion
        #region Kroot
        [
            'name' => "Farstalker Kindband",
            'description' => "Los Farstalker Kinbands son bandas de guerra Kroot que se extienden a lo largo y ancho de la Galaxia, buscando nuevas cepas de material genético beneficioso para llevárselas a los Shapers de sus especies.",
            'image' => 'farstalker-kindband.jpg',
            // https://www.warhammer.com/app/resources/catalog/product/920x950/60010199046_ENGIntoDarkGroup2.jpg?fm=webp&w=920&h=948
            'army_id' => 18
        ],
        #endregion
        #region Leagues of Votann
        [
            'name' =>"Hearthkyn Savagers",
            'description' =>"Los Hearthkyn Salvagers son equipos de élite de Leagues of Votann Hearthkyn Warriors que sirven como exploradores, exploradores y recuperadores de tecnología. Han sido especialmente entrenados para extraer artefactos preciados y localizar valiosos recursos estratégicos en las profundidades de los cascos espaciales y otros restos de naves espaciales.",
            'image' => 'hearthkyn-savagers.jpg',
            // https://www.warhammer.com/app/resources/catalog/product/920x950/60010199055_GallowfallCoreGame3.jpg?fm=webp&w=920&h=948
            'army_id' => 19
        ],
        #endregion
        #region Necrons
        [
            'name' =>"Hierotek Circle",
            'description' =>"Estas unidades encubiertas están comandadas por Crypteks y enviadas silenciosamente por toda la galaxia. Su misión principal es conocer a los enemigos de sus señores, que a menudo son dinastías rivales y otras razas.",
            'image' => 'hierotek-circle.jpg',
            // https://www.warhammer.com/app/resources/catalog/product/920x950/60010199049_EngKTShadowvaultGroup2.jpg?fm=webp&w=920&h=948
            'army_id' => 20
        ],
        #endregion
        #region Orks
        [
            'name'=>"Kommandos",
            'description' =>"Los Ork Kommandos son Comandos Especialistas de Orkos que, a diferencia de muchos de sus congéneres, prefieren utilizar la astucia y el sigilo para desempeñar sus misiones, utilizando la violencia sólo cuando se han acercado lo suficiente al enemigo.",
            'image' => 'kommandos.jpg',
            // https://www.warhammer.com/app/resources/catalog/product/920x950/60010199037_KT2Group2.jpg?fm=webp&w=920&h=948
            'army_id' => 21
        ],
        #endregion
        #region T'au Empire
        [
            'name'=>"Pathfinders",
            'description' =>"Los Tau Pathfinders son equipos de infantería Tau con capacidades de reconocimiento de largo alcance, que utilizan vehículos de transporte de tropas Devilfish antigravedad especialmente adaptados.",
            'image' => 'pathfinders.jpg',
            // https://www.warhammer.com/app/resources/catalog/product/920x950/60010199040_CalanathGroup2.jpg?fm=webp&w=920&h=948
            'army_id' => 22
        ],
        #endregion
        #region Tyranids
        // [
        //     'name' =>"Hive Fleet",
        //     'description' =>"Una Hive Fleet es una gran armada de naves estelares biomecánicas vivientes creadas por los Tiránidos con el propósito de recolectar las materias primas y la biomasa necesarias para la reproducción, evolución y expansión de su especie.",
        //     'image' => 'hive-fleet.jpg',
        //     // 
        //     'army_id' => 23
        // ],
        #endregion
    ];  
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        foreach ($this->squadrons as $squadron) {
            $s = new Squadron();
            $s->name = $squadron['name'];
            $s->slug = Str::slug($squadron['name']);
            $s->description = $squadron['description'];
            $s->image = 'images/squadsImage/' . $squadron['image'];
            $s->army_id = $squadron['army_id'];
            $s->save();
        }
        $this->command->info('Squadrons created with data success!');
    }
}
