<?php

namespace Database\Seeders;

use App\Models\SpecialRule;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Str;

class SpecialRuleSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    private $specialRules = [
        [
            'name' => 'APx',
            'description' => 'Penetración de Armadura. Cada vez que un operativo aliado realiza un ataque de disparo con esta arma, resta x de la Defensa del objetivo para ese ataque de disparo, donde x es el número después del AP del arma, por ejemplo, AP1. Si dos reglas especiales diferentes de APx están en efecto para un ataque de disparo, no son acumulativas: el atacante selecciona cuál usar.'
        ],
        [
            'name' => 'Barrage',
            'description' => 'Cada vez que un operativo aliado realiza un ataque de disparo con esta arma, para ese ataque de disparo, la retención automática de dados de defensa como resultado de la cobertura se determina de manera diferente. En su lugar, si alguna parte de la base del operativo está oculta por un elemento de terreno desde arriba, el defensor puede retener dados de defensa como si estuviera en cobertura.'
        ],
        [
            'name' => 'Balanced',
            'description' => 'Cada vez que un operativo aliado lucha en combate o realiza un ataque de disparo con esta arma, en el paso de Tirar Dados de Ataque de ese combate o ataque de disparo, puedes volver a tirar uno de tus dados de ataque.'
        ],
        [
            'name' => 'Blast x',
            'description' => 'Cada vez que un operativo aliado realiza una acción de Disparar y selecciona esta arma (o, en el caso de perfiles, el perfil de esta arma), después de hacer el ataque de disparo contra el objetivo, realiza un ataque de disparo con esta arma (usando el mismo perfil) contra cada otro operativo visible y a x del objetivo original; cada uno de ellos es un objetivo válido y no puede estar en cobertura. X es la distancia después del Blast del arma, por ejemplo, Blast 2. Un operativo no puede realizar un ataque de disparo con esta arma al realizar una acción de Vigilancia.'
        ],
        [
            'name' => 'Brutal',
            'description' => 'Cada vez que un operativo aliado lucha en combate con esta arma, en el paso de Resolver Impactos Exitosos de ese combate, tu oponente solo puede parar con impactos críticos.'
        ],
        [
            'name' => 'Ceaseless',
            'description' => 'Cada vez que un operativo aliado lucha en combate o realiza un ataque de disparo con esta arma, en el paso de Tirar Dados de Ataque de ese combate o ataque de disparo, puedes volver a tirar cualquiera o todos los resultados de 1 en tus dados de ataque.'
        ],
        [
            'name' => 'Fusillade',
            'description' => 'Cada vez que un operativo aliado realiza una acción de Disparar y selecciona esta arma, después de seleccionar un objetivo válido, puedes seleccionar cualquier número de otros objetivos válidos a distancia del objetivo original. Distribuye tus dados de ataque entre los objetivos que hayas seleccionado. Realiza un ataque de disparo con esta arma (usando el mismo perfil) contra cada uno de los objetivos que hayas seleccionado utilizando los dados de ataque que hayas distribuido a cada uno de ellos.'
        ],
        [
            'name' => 'Heavy',
            'description' => 'Un operativo no puede realizar una acción de Cargar, Retirada o Movimiento Normal en la misma activación en la que realiza una acción de Disparar con esta arma a distancia.'
        ],
        [
            'name' => 'Hot',
            'description' => 'Cada vez que un operativo aliado realiza un ataque de disparo con esta arma, en el paso de Tirar Dados de Ataque de ese ataque de disparo, por cada resultado de 1 en los dados de ataque que se descarte, ese operativo sufre tres heridas mortales.'
        ],
        [
            'name' => 'Indirect',
            'description' => 'Cada vez que un operativo aliado realiza un ataque de disparo con esta arma, en el paso de seleccionar objetivo válido de ese ataque de disparo, los operativos enemigos no están en cobertura.'
        ],
        [
            'name' => 'Invulnerable Save x+',
            'description' => 'Cada vez que se realiza un ataque de disparo contra un operativo, el defensor puede usar su salvación invulnerable en lugar de su característica de Salvación normal. Una salvación invulnerable se usa como una característica de Salvación normal, excepto que no puede modificarse de ninguna manera y no se ve afectada por ninguna regla especial de APx (lo que significa que el defensor usaría su característica de Defensa normal). x de la salvación invulnerable es la tirada de dados requerida para que los dados de defensa tengan éxito, por ejemplo, 4+.'
        ],
        [
            'name' => 'Lethal x',
            'description' => 'Cada vez que un operativo aliado lucha en combate o realiza un ataque de disparo con esta arma, en el paso de Tirar Dados de Ataque de ese combate o ataque de disparo, los resultados de tus dados de ataque iguales o mayores que x que sean impactos exitosos se consideran impactos críticos, donde x es el número después de la Letalidad del arma, por ejemplo, Lethal 5+.'
        ],
        [
            'name' => 'Limited',
            'description' => 'Esta arma solo puede seleccionarse para su uso una vez por batalla. Si el arma tiene una regla especial que le permitiría realizar más de un ataque de disparo por acción (por ejemplo, Blast), realiza cada uno de esos ataques normalmente.'
        ],
        [
            'name' => 'MWx',
            'description' => 'Heridas mortales. Cada vez que un operativo aliado realiza un ataque de disparo con esta arma, en el paso de Tirar Dados de Ataque de ese ataque de disparo, por cada impacto crítico retenido, inflige x heridas mortales al objetivo, donde x es el número después del MW del arma, por ejemplo, MW3.'
        ],
        [
            'name' => 'No Cover',
            'description' => 'Cada vez que un operativo aliado realiza un ataque de disparo con esta arma, para ese ataque de disparo, los dados de defensa no se pueden retener automáticamente como resultado de la cobertura (deben ser tirados en su lugar).'
        ],
        [
            'name' => 'Psychic Action',
            'description' => 'Este es un término para un cierto tipo de acción. Este término no proporciona reglas adicionales por sí solo, pero otras reglas pueden interactuar con acciones que tienen este término.'
        ],
        [
            'name' => 'Px',
            'description' => 'Perforante. Cada vez que un operativo aliado realiza un ataque de disparo con esta arma, en el paso de Tirar Dados de Ataque de ese ataque de disparo, si retienes algún impacto crítico, el arma gana la regla especial APx para ese ataque de disparo, donde x es el número después de la P del arma, por ejemplo, P1.'
        ],
        [
            'name' => 'Reap x',
            'description' => 'Cada vez que un operativo aliado lucha en combate con esta arma, en el paso de Resolver Impactos Exitosos de ese combate, si realizas un golpe con un impacto crítico, inflige x heridas mortales a cada otro operativo enemigo visible para el operativo aliado y dentro de su alcance o el del objetivo, donde x es el número después del Reap del arma, por ejemplo, Reap 1.'
        ],
        [
            'name' => 'Relentless',
            'description' => 'Cada vez que un operativo aliado lucha en combate o realiza un ataque de disparo con esta arma, en el paso de Tirar Dados de Ataque de ese combate o ataque de disparo, puedes volver a tirar cualquiera o todos tus dados de ataque.'
        ],
        [
            'name' => 'Rending',
            'description' => 'Cada vez que un operativo aliado lucha en combate o realiza un ataque de disparo con esta arma, en el paso de Tirar Dados de Ataque de ese combate o ataque de disparo, si retienes algún impacto crítico, puedes retener un impacto normal como un impacto crítico.'
        ],
        [
            'name' => 'Rng x',
            'description' => 'Alcance. Cada vez que un operativo aliado realiza un ataque de disparo con esta arma, solo los operativos dentro de x son un objetivo válido, donde x es la distancia después del Alcance del arma, por ejemplo, Rng 3. Todas las demás reglas para seleccionar un objetivo válido siguen aplicándose.'
        ],
        [
            'name' => 'Silent',
            'description' => 'Mientras un operativo tenga una orden de Ocultación, puede realizar acciones de Disparar si esta es el arma a distancia (o perfil de arma) que se selecciona para el o los ataques de disparo.'
        ],
        [
            'name' => 'Splash x',
            'description' => 'Cada vez que un operativo aliado realiza un ataque de disparo con esta arma, en el paso de Tirar Dados de Ataque de ese ataque de disparo, por cada impacto crítico retenido, inflige x heridas mortales al objetivo y a cada otro operativo visible y dentro de su alcance. x es el número después del Splash del arma, por ejemplo, Splash 1.'
        ],
        [
            'name' => 'Stun',
            'description' => 'Cada vez que un operativo aliado realiza un ataque de disparo con esta arma, en el paso de Tirar Dados de Ataque de ese ataque de disparo, si retienes algún impacto crítico, resta 1 del APL del objetivo. Cada vez que un operativo aliado lucha en combate con esta arma, en el paso de Resolver Impactos Exitosos de ese combate: La primera vez que golpeas con un impacto crítico, selecciona uno de los impactos normales de tu oponente en ese combate para ser descartado. La segunda vez que golpeas con un impacto crítico, resta 1 del APL del objetivo.'
        ],
        [
            'name' => 'Torrent x',
            'description' => 'Cada vez que un operativo aliado realiza una acción de Disparar o de Vigilancia y selecciona esta arma, después de hacer el ataque de disparo contra el objetivo, puede hacer un ataque de disparo con esta arma contra cada otro objetivo válido dentro de x del objetivo original y de cada uno, donde x es la distancia después del Torrent del arma, por ejemplo, Torrent 2.'
        ],
        [
            'name' => 'Unwieldy',
            'description' => 'Un operativo solo puede realizar un ataque de disparo con esta arma si se resta un AP extra para realizar una acción de Disparar. No puede realizar un ataque de disparo con esta arma al realizar una acción de Vigilancia.'
        ]
    ];

    public function run(): void
    {
        foreach ($this->specialRules as $specialRule) {
            $s = new SpecialRule();
            $s->name = $specialRule['name'];
            $s->slug = Str::slug($specialRule['name']);
            $s->description = $specialRule['description'];
            $s->save();
        }
        $this->command->info('Special Rules created with data success!');
    
    }
}
