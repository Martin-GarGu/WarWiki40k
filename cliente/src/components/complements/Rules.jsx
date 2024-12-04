
const Rules = () => {

    return (
        <div>
            <div>
                <h4>Herramientas de guerra</h4>
                <p>
                    Para poder jugar una batalla de Warhammer 40.000: Kill team, cada jugador debera tener una coleccion de miniaturas Citadel.
                    A su vez necesitaran las reglas acompañantes a las miniaturas , conocidas como la lista de ejercitos de faccion,
                    que le serviran para encontrar las diversas publicaciones de Warhammer 40.000:Kill team.
                </p>
            </div>
            <div>
                <h4>Operativos y Kill Teams</h4>
                <p>
                    Las miniaturas Citadel que el jugador use son conocidas como agentes.
                    Tus agentes son conocidos como agentes 'amigables' y los de tu oponente son conocidos como agentes 'enemigos'
                </p>
                <p>
                    Cuando selecciones tus agentes de batalla, no estas seleccionando individuos, más bien un escuadron especialista que trabajaran juntos.
                    Esto es conocido como tu Kill Team. Una lista de Kill Teams disponibles para ti la puedes encontrar en la lista del ejercitos de faccion.
                    En batalla, todos tus operativos amigables son referidos como tu Kill Team.
                </p>
                <p>
                    Una vez seleccionada tu forma de jugar, su secuencia de mision te dira cuando debes seleccionar un Kill Team para la batalla.
                    Cuando lo hagas, debes seleccionar uno de los Kill Teams de tu lista de del ejercito de faccion,
                    tras ello selecciona los agentes como especifica el Kill Team. Algunos Kill Teams especifican el número de agentes en los que consiste.
                    Otros te permiten seleccionar tu propia configuracion de agentes (con restricciones). En cualquier caso,
                    la configuracion final de agentes debe conformar los requerimientos puestos por tu Kill Team.
                </p>
            </div>
            <div>
                <h4>Distancias</h4>
                <p>
                    Warhammer 40.000: Kill Team utiliza las tacticas de enfrentamiento de los agentes élite usando una coleccion de indicadores de combate
                    listados debajo para medir las distancias. Similarmente, las tensas y oportunas acciones de los agentes son amenudo mostradas en incremento.
                    Los jugadores pueden usar una cinta de medir y otro tipo de instrumento de medida si ellos desean cambiando las medidas de abajo en pies,
                    aunque el juego esta diseñado y explicado para distancias graduadas.
                </p>
                <img src="../../assets/distances.jpg" alt="distancesImage" />
                <p>
                    1. Triangle o triangulo: distancia 1 pulgada.
                    2. Circle o circulo: distancia 2 pulgadas.
                    3. Square o cuadrado: distancia 3 pulgadas.
                    4. Pentagon o pentágono: distancia 6 pulgadas.
                </p>
                <p>
                    Cualqueir distancia representada sin ningun valor numerico corresponde a un indicador de distancia.
                    Multiples indicadores de distancia seran representados con valores numericos, ej, 2Circle.
                </p>
                <p>
                    Las distancias pueden medirse en cualquier momento y con cualquier medida en diferentes incrementos siempre y cunado no supere la distancia especificada.
                    Por ejemplo si un agente se va a mover a una distancia de 3Circle, esta se puede medir como pentagono, 6Triangle o incluso Triangle Circle Square.
                </p>
                <p>
                    Muchas reglas, como un movimiento o abilidad normal, tendra requerimiento de distancia.
                    Cuando se mide la distancia hasta un agente, se mide desde el punto mas proximo de la base del agente, en vez de la miniatura.
                </p>
                <p>
                    Si una regla dicta que algo debe estar 'en' un estimado rango, esta dentro del alcance si la parte más proxima de la base no está a más de la distancia especificada.
                    Si una regla dice que algo debe estar 'completamente en' un rango especifico, está dentro del rango si cada aprte de la base no se encuantra a más de la distancia especificada.
                    Un agente siempre esta 'en' y 'completamente en' rango de si mismo.
                </p>
            </div>
            <div>
                <h4>KillZones</h4>
                <p>
                    Una killzone es el area de juego donde tus agentes hacen la guerra. Las partidas de Warhammer 40.000:Kill Team esta diseñado para jugarse sobre areas de 30 pulgadas por 22 pulgadas,
                    que es el tamaño de un tablero de kill team. Una killzone contendra varias caracteristicas de terreno que añaden emoción y profuncidad táctica a la partida.
                </p>
            </div>
            <div>
                <h4>Dados</h4>
                <p>
                    Warhammer 40.000:Kill Team usa dados de 6 caras (D6). Tirar un dado te dara un valor, conocido como el resultado, que derminara si acierta o falla una accion del agente.
                    Algunas reglas refieren a D3. Ene sos casos, lanza un D6 y divide el valor a la mitad (redondeando las fracciones hacia arriba) para determinar el resultado.
                </p>
                <p>
                    Muchas reglas requieren de cierto resultado para tener exito, como el ataque. Por ejemplo, para hacer una tirada exitosa, necesitaras 3+.
                    Esto quiere decir que el resultado debe ser tres o mayor para ser un exito, asique los resultados 3,4,5 o 6 serian aciertos, mientras que 1 o 2 serian fallos.
                </p>
                <p>
                    Algunas reglas te permiten tirar de nuevo un dado. Nunca se puede tirar de nuevo más de una vez un dado, y no se puede seleccionar de nuevo el resultado anterior aunque el actual sea peor.
                </p>
                <p>
                    Algunas reglas indican a los jugadores  que deben tirar. Para ello, ambos jugadores tiran un D6 y quien saque mayor puntuacion  gana la tirada.
                    En caso de haber empate se tira de nuevo. Si ambos jugadores usan una regla que permite tirar de nuevo cuando han de tirar,
                    ambos deben delcarar el uso de la regla antes de que ningun dado sea tirado de nuevo, empezando con el jugador que haya perdido la tirada anterior.
                </p>
                <p>
                    Algunas reglas raras modifican el resultado de la tirada añadiendo o quitando del resultado. Todos los modificadores se acumulan.
                    Un resultado puede ser modificado por arriba o por debajo del maximo o minimo posible de valores de tirada.
                    Por ejemplo, si se tira un D6 y sale un 6 este puede llegar a ser 7 si se le añade 1 al resultado.
                </p>
            </div>
            <div>
                <h4>Datacards</h4>
                <p>
                    Cada agente de tu Kill Team tiene su propio set re reglas conocido como datacard.
                    Esta contiene todas las caracteristicas del agente y las armas que este puede usar.Encontraras a continuación un ejemplo de los datos que muestra una datacard.
                </p>
                <h6>Tipo de agente</h6>
                <p>El tipo de agente que es</p>
                <h6>Perfil fisico</h6>
                <p>
                    <strong>Movimiento (M)</strong>: La velocidad a la que el agente se mueve por la killzone, representado por un valor de distancia.
                </p>
                <p>
                    <strong>Puntos de accion por turno (APL)</strong>: El numero de acciones que un agente puede realizar cuando esta activo, los cuales se utilizan para hacer acciones
                </p>
                <p>
                    <strong>Acciones grupales (GA)</strong>: Muchos agentes son activados individualmente, pero otro deben ser activados en grupo. Este numero dicta cuantas acciones tiene en grupo el agente.
                </p>
                <p>
                    <strong>Defensa (Df)</strong>: Cuantos ataques el agente puede defender cada vez que otro agente le ataque con un arma a distancia.
                </p>
                <p>
                    <strong>Save (Sv)</strong>: Como de probable el agente puede prevenir un golpe cada vez que un operativo le ataque con un arma a distancia, representado por el resultado requerido tras tirar un D6.
                </p>
                <p>
                    <strong>Heridas (W)</strong>: Cuantas heridas puede tener un agente antes de ser incapacitado
                </p>
                <h6>Perfil de arma</h6>
                <p>
                    <strong>Nombre</strong>: El nombre del arma
                </p>
                <p>
                    <strong>Ataque (A)</strong>: El numero de dados que se tira cuando un agente ataca con dicho arma.
                </p>
                <p>
                    <strong>Habilidad Balistica (BS) o Habilidad de arma (WS)</strong>: Que tan preciso y habilidoso es el agente cunado ataca con el arma, representado con el resultado requerido tras una tirada de D6.
                </p>
                <p>
                    <strong>Daño (Dmg)</strong>: La cantidad de daño que cada ataque hace coin el arma. El primer valor es el daño normal. El segundo valor es el golpe crítico.
                </p>
                <p>
                    <strong>Reglas Especiales (SR)</strong>: Cualquier regla especial aplicada a cada ataque del agente con el arma.
                </p>
                <p>
                    <strong>Tipo</strong>: Tipo de daño que hace, a distancia (ranged) o a cuerpo a cuerpo (melee).
                </p>
                <h6>KeyWords</h6>
                <p>
                    Un set de palabras que ayuda a identificar al agente.
                </p>
            </div>
            <div>
                <h4>Estructuras de batalla</h4>
                <p>
                    Una batalla de Warhammer 40.000: Kill Team consiste en cuatro turnos. Un punto incluye tres fases, cada una debe de completarse en orden y completa.
                    Cuando se hayan completado las tres fases el siguiente turno comienza, el proceso se repite hasta que se acaba la partida al final del cuarto turno. Las tres fases estan listadas y explicadas debajo.
                </p>
                <h6>Fase de iniciación</h6>
                <p>
                    En esta fase el jugador coloca su kill team y determina quien iene la iniciativa para los puntos de turno.
                </p>
                <h6>Fase de estrategia</h6>
                <p>
                    En la fase de estrategia el jugador genera un importante pero limitado recurso conocido como Puntos de comando (CPs) y los usa para poder utilizar las estrategias de despliegue.
                    Alternativamente, los jugadores pueden guardar CPs para gastar tacticas de despliege mas adelante en la batalla. A su vez el jugador debe revelar sus Tac Ops en esta fase para su kill team las intente.
                </p>
                <h6>Fase de tiroteo</h6>
                <p>
                    En esta ultima fase los jugadores activas alternativamente los agentes o grupos de agentes para realizar acciones como movimiento en la killzone,
                    disparar al enemigo con el arma, pelear en combate utilizando usando acciones unicas como colocar explosivos o manifestar un poderoso poder psyquico.
                </p>
            </div>
            <div>
                <h4>Fase de iniciación</h4>
                <h6>Agentes preparados</h6>
                <p>
                    Cada jugador prepara todos los sus agentes de la killzone dandole la vuelta al token para asi mostrar que agentes estan listos.
                </p>
                <h6>Determinar iniciativa</h6>
                <p>
                    El jugador determina quien tiene la inciativa para el turno. Durante el primer turno, la iniciativa es determinada en secuancia de misiones de su tipo de juego.
                    En los sucesivos turnos, los jugadores tiraran un dado y el ganador decidira quien tiene la inciativa, pero si el resultado de la tirada resulta en un empate,
                    el jugador que no tuvo la iniciatiba en el anterior turno empieza en este con la inciativa. Para saber quien tiene la iniciativa se usa el token de iniciativa.
                </p>
                <p>
                    Tener la iniciativa le permita al jugador tener la influencia sobre ciertos aspectos de la batalla, como decidir que operativo activar primero durate el turno.
                    Si mas de una regla ocurren a la vez, el jugador con iniciativa determina el orden en el que afectan.
                </p>
            </div>
            <div>
                <h4>Fase de estrategia</h4>
                <h6>Generar command points</h6>
                <p>
                    Cada jugador genera 1 punto de comando (CP) y lo añade a su numero de CPs. Estos puntos permanecen guardados hasta que son usados.
                </p>
                <p>
                    Los CPs pueden ser gastados en estratagemas estrategicas. Pueden ser usados en la fase de Estrategia como se comenta debajo, y son reglas unicas que generalmente se usan para ayudar a su killteam.
                </p>
                <p>
                    Tambien los CPs pueden ser gastados en estratagemos tacticas.
                    Esto especificara cuando deben ser usadas. Estratagemas tacticas son menos beneficiosas que pueden dar efectos significativos si se usan en el mometo oportuno.
                    Menos Command Re-roll, cada jugador puede usar cada estratagema tactica una vez por turno. Si una estratagema tactica no es usada durante el turno, es solo limitada por el numero de CPs que uno tiene.
                    Además , la estratagma tactica Command Re-roll esta permitida en todas las facciones.
                </p>
                <hr />
                <h6>Command Re-roll</h6>
                <p>Usa esta estratagema tactica despues de tirar un dado para defensa o ataque. Puedes tirar de nuevo ese dado</p>
                <hr />
                <h6>Usar estratagemas estrategicas</h6>
                
            </div>
        </div>
    );

};
export default Rules