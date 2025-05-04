import distances from "../../assets/images/distances.jpg"
import toolsOfWar from "../../assets/images/toolsOfWar.jpg"
import initiativeToken from "../../assets/images/initiativeToken.jpg"
import orderToken from "../../assets/images/orderToken.jpg"
import actionPointsToken from "../../assets/images/actionPointsToken.jpg"
import injuredToken from "../../assets/images/injuredToken.jpg"
import backToTop from "../../assets/images/backToTop.png"
import { useNavigate } from "react-router-dom"

const Rules = () => {

    const navigate = useNavigate();

    const handleRules = () => {
        navigate('/specialRules');
    };

    return (
        <div>
            {/* Índice de reglas */}
            <div
                className="sidebar"
                style={{
                    backgroundColor: "#2e2e2e",
                    color: "#d4af37",
                    border: "2px solid #d4af37",
                    width: "15%",
                    padding: "20px",
                    marginTop: "120px",
                    height: "fit-content",
                    position: "fixed",
                    top: "20px",
                    zIndex: 100
                }}
            >
                <h5 style={{ borderBottom: "1px solid #d4af37", paddingBottom: "10px" }}>Índice</h5>
                <ul style={{ listStyle: "none", padding: 0 }}>
                    <li style={{ marginBottom: "10px" }}>
                        <a href="#herramientas" style={{ textDecoration: "none", color: "#d4af37", cursor: "pointer" }}>
                            Herramientas de guerra
                        </a>
                    </li>
                    <li style={{ marginBottom: "10px" }}>
                        <a href="#operativos" style={{ textDecoration: "none", color: "#d4af37", cursor: "pointer" }}>
                            Operativos y Kill Teams
                        </a>
                    </li>
                    <li style={{ marginBottom: "10px" }}>
                        <a href="#distancias" style={{ textDecoration: "none", color: "#d4af37", cursor: "pointer" }}>
                            Distancias
                        </a>
                    </li>
                    <li style={{ marginBottom: "10px" }}>
                        <a href="#killzones" style={{ textDecoration: "none", color: "#d4af37", cursor: "pointer" }}>
                            KillZones
                        </a>
                    </li>
                    <li style={{ marginBottom: "10px" }}>
                        <a href="#dados" style={{ textDecoration: "none", color: "#d4af37", cursor: "pointer" }}>
                            Dados
                        </a>
                    </li>
                    <li style={{ marginBottom: "10px" }}>
                        <a href="#datacards" style={{ textDecoration: "none", color: "#d4af37", cursor: "pointer" }}>
                            Datacards
                        </a>
                    </li>
                    <li style={{ marginBottom: "10px" }}>
                        <a href="#estructuras" style={{ textDecoration: "none", color: "#d4af37", cursor: "pointer" }}>
                            Estructuras de batalla
                        </a>
                    </li>
                    <li style={{ marginBottom: "10px" }}>
                        <a href="#iniciacion" style={{ textDecoration: "none", color: "#d4af37", cursor: "pointer" }}>
                            Fase de iniciación
                        </a>
                    </li>
                    <li style={{ marginBottom: "10px" }}>
                        <a href="#estrategia" style={{ textDecoration: "none", color: "#d4af37", cursor: "pointer" }}>
                            Fase de estrategia
                        </a>
                    </li>
                    <li style={{ marginBottom: "10px" }}>
                        <a href="#tiroteo" style={{ textDecoration: "none", color: "#d4af37", cursor: "pointer" }}>
                            Fase de tiroteo
                        </a>
                    </li>
                    <li style={{ marginBottom: "10px" }}>
                        <a href="#heridas" style={{ textDecoration: "none", color: "#d4af37", cursor: "pointer" }}>
                            Heridas y Daño
                        </a>
                    </li>
                </ul>
            </div>

            {/* Para el contenido principal, necesitas ajustar los márgenes para compensar el espacio del índice */}
            <div style={{ marginLeft: "25%", maxWidth: "70%" }}>
                {/* Aquí van todas tus secciones rule-section existentes, pero con IDs añadidos */}
            </div>
            <div className="rules-container">
                <div className="rule-section" id="herramientas">
                    <h4 className="rules-title">Herramientas de guerra</h4>
                    <p className="rules-text">
                        Para poder jugar una batalla de Warhammer 40.000: Kill team, cada jugador debera tener una coleccion de miniaturas Citadel.
                        A su vez necesitaran las reglas acompañantes a las miniaturas , conocidas como la lista de ejercitos de faccion,
                        que le serviran para encontrar las diversas publicaciones de Warhammer 40.000:Kill team.
                    </p>
                </div>
                <div className="rule-section" id="operativos" style={{ display: "flex", alignItems: "center", gap: "20px" }}>
                    <div style={{ flex: 1 }}>
                        <h4 className="rules-title">Operativos y Kill Teams</h4>
                        <p className="rules-text">
                            Las miniaturas Citadel que el jugador use son conocidas como agentes.
                            Tus agentes son conocidos como agentes 'amigables' y los de tu oponente son conocidos como agentes 'enemigos'.
                        </p>
                        <p className="rules-text">
                            Cuando selecciones tus agentes de batalla, no estás seleccionando individuos, más bien un escuadrón especialista que trabajarán juntos.
                            Esto es conocido como tu Kill Team. Una lista de Kill Teams disponibles para ti la puedes encontrar en la lista del ejército de facción.
                            En batalla, todos tus operativos amigables son referidos como tu Kill Team.
                        </p>
                        <p className="rules-text">
                            Una vez seleccionada tu forma de jugar, su secuencia de misión te dirá cuándo debes seleccionar un Kill Team para la batalla.
                            Cuando lo hagas, debes seleccionar uno de los Kill Teams de tu lista del ejército de facción,
                            tras ello selecciona los agentes como especifica el Kill Team. Algunos Kill Teams especifican el número de agentes en los que consiste.
                            Otros te permiten seleccionar tu propia configuración de agentes (con restricciones). En cualquier caso,
                            la configuración final de agentes debe conformar los requerimientos puestos por tu Kill Team.
                        </p>
                    </div>
                    <div style={{ flexShrink: 0 }}>
                        <img src={toolsOfWar} alt="toolsOfWarImage" style={{ maxWidth: "300px", height: "auto", borderRadius: "10px" }} />
                    </div>
                </div>

                <div className="rule-section" id="distancias">
                    <h4 className="rules-title">Distancias</h4>
                    <p className="rules-text">
                        Warhammer 40.000: Kill Team utiliza las tacticas de enfrentamiento de los agentes élite usando una coleccion de indicadores de combate
                        listados debajo para medir las distancias. Similarmente, las tensas y oportunas acciones de los agentes son amenudo mostradas en incremento.
                        Los jugadores pueden usar una cinta de medir y otro tipo de instrumento de medida si ellos desean cambiando las medidas de abajo en pies,
                        aunque el juego esta diseñado y explicado para distancias graduadas.
                    </p>
                    <img
                        className="rules-image"
                        src={distances}
                        alt="distancesImage"
                    />
                    <ul className="rules-list " style={{listStyle: "none"}}>
                        <li><strong>Triangle o triángulo:</strong> distancia 1 pulgada.</li>
                        <li><strong>Circle o círculo:</strong> distancia 2 pulgadas.</li>
                        <li><strong>Square o cuadrado:</strong> distancia 3 pulgadas.</li>
                        <li><strong>Pentagon o pentágono:</strong> distancia 6 pulgadas.</li>
                    </ul>
                    <p className="rules-text">
                        Cualqueir distancia representada sin ningun valor numerico corresponde a un indicador de distancia.
                        Multiples indicadores de distancia seran representados con valores numericos, ej, 2Circle.
                    </p>
                    <p className="rules-text">
                        Las distancias pueden medirse en cualquier momento y con cualquier medida en diferentes incrementos siempre y cunado no supere la distancia especificada.
                        Por ejemplo si un agente se va a mover a una distancia de 3Circle, esta se puede medir como pentagono, 6Triangle o incluso Triangle Circle Square.
                    </p>
                    <p className="rules-text">
                        Muchas reglas, como un movimiento o abilidad normal, tendra requerimiento de distancia.
                        Cuando se mide la distancia hasta un agente, se mide desde el punto mas proximo de la base del agente, en vez de la miniatura.
                    </p>
                    <p className="rules-text">
                        Si una regla dicta que algo debe estar 'en' un estimado rango, esta dentro del alcance si la parte más proxima de la base no está a más de la distancia especificada.
                        Si una regla dice que algo debe estar 'completamente en' un rango especifico, está dentro del rango si cada aprte de la base no se encuantra a más de la distancia especificada.
                        Un agente siempre esta 'en' y 'completamente en' rango de si mismo.
                    </p>
                </div>
                <div className="rule-section" id="killzones">
                    <h4 className="rules-title">KillZones</h4>
                    <p className="rules-text">
                        Una killzone es el area de juego donde tus agentes hacen la guerra. Las partidas de Warhammer 40.000:Kill Team esta diseñado para jugarse sobre areas de 30 pulgadas por 22 pulgadas,
                        que es el tamaño de un tablero de kill team. Una killzone contendra varias caracteristicas de terreno que añaden emoción y profuncidad táctica a la partida.
                    </p>
                </div>
                <div className="rule-section" id="dados">
                    <h4 className="rules-title">Dados</h4>
                    <p className="rules-text">
                        Warhammer 40.000:Kill Team usa dados de 6 caras (D6). Tirar un dado te dara un valor, conocido como el resultado, que derminara si acierta o falla una accion del agente.
                        Algunas reglas refieren a D3. Ene sos casos, lanza un D6 y divide el valor a la mitad (redondeando las fracciones hacia arriba) para determinar el resultado.
                    </p>
                    <p className="rules-text">
                        Muchas reglas requieren de cierto resultado para tener exito, como el ataque. Por ejemplo, para hacer una tirada exitosa, necesitaras 3+.
                        Esto quiere decir que el resultado debe ser tres o mayor para ser un exito, asique los resultados 3,4,5 o 6 serian aciertos, mientras que 1 o 2 serian fallos.
                    </p>
                    <p className="rules-text">
                        Algunas reglas te permiten tirar de nuevo un dado. Nunca se puede tirar de nuevo más de una vez un dado, y no se puede seleccionar de nuevo el resultado anterior aunque el actual sea peor.
                    </p>
                    <p className="rules-text">
                        Algunas reglas indican a los jugadores  que deben tirar. Para ello, ambos jugadores tiran un D6 y quien saque mayor puntuacion  gana la tirada.
                        En caso de haber empate se tira de nuevo. Si ambos jugadores usan una regla que permite tirar de nuevo cuando han de tirar,
                        ambos deben delcarar el uso de la regla antes de que ningun dado sea tirado de nuevo, empezando con el jugador que haya perdido la tirada anterior.
                    </p>
                    <p className="rules-text">
                        Algunas reglas raras modifican el resultado de la tirada añadiendo o quitando del resultado. Todos los modificadores se acumulan.
                        Un resultado puede ser modificado por arriba o por debajo del maximo o minimo posible de valores de tirada.
                        Por ejemplo, si se tira un D6 y sale un 6 este puede llegar a ser 7 si se le añade 1 al resultado.
                    </p>
                </div>
                <div className="rule-section" id="datacards">
                    <h4 className="rules-title">Datacards</h4>
                    <p className="rules-text">
                        Cada agente de tu Kill Team tiene su propio set re reglas conocido como datacard.
                        Esta contiene todas las caracteristicas del agente y las armas que este puede usar.Encontraras a continuación un ejemplo de los datos que muestra una datacard.
                    </p>
                    <h6 className="rules-title">Tipo de agente</h6>
                    <p className="rules-text">El tipo de agente que es</p>
                    <h6 className="rules-title">Perfil fisico</h6>
                    <p className="rules-text">
                        <strong>Movimiento (M)</strong>: La velocidad a la que el agente se mueve por la killzone, representado por un valor de distancia.
                    </p>
                    <p className="rules-text">
                        <strong>Puntos de accion por turno (APL)</strong>: El numero de acciones que un agente puede realizar cuando esta activo, los cuales se utilizan para hacer acciones
                    </p>
                    <p className="rules-text">
                        <strong>Acciones grupales (GA)</strong>: Muchos agentes son activados individualmente, pero otro deben ser activados en grupo. Este numero dicta cuantas acciones tiene en grupo el agente.
                    </p>
                    <p className="rules-text">
                        <strong>Defensa (Df)</strong>: Cuantos ataques el agente puede defender cada vez que otro agente le ataque con un arma a distancia.
                    </p>
                    <p className="rules-text">
                        <strong>Save (Sv)</strong>: Como de probable el agente puede prevenir un golpe cada vez que un operativo le ataque con un arma a distancia, representado por el resultado requerido tras tirar un D6.
                    </p>
                    <p className="rules-text">
                        <strong>Heridas (W)</strong>: Cuantas heridas puede tener un agente antes de ser incapacitado
                    </p>
                    <h6 className="rules-title">Perfil de arma</h6>
                    <p className="rules-text">
                        <strong>Nombre</strong>: El nombre del arma
                    </p>
                    <p className="rules-text">
                        <strong>Ataque (A)</strong>: El numero de dados que se tira cuando un agente ataca con dicho arma.
                    </p>
                    <p className="rules-text">
                        <strong>Habilidad Balistica (BS) o Habilidad de arma (WS)</strong>: Que tan preciso y habilidoso es el agente cunado ataca con el arma, representado con el resultado requerido tras una tirada de D6.
                    </p>
                    <p className="rules-text">
                        <strong>Daño (Dmg)</strong>: La cantidad de daño que cada ataque hace coin el arma. El primer valor es el daño normal. El segundo valor es el golpe crítico.
                    </p>
                    <p className="rules-text">
                        <strong>Reglas Especiales (SR)</strong>: Cualquier regla especial aplicada a cada ataque del agente con el arma.
                    </p>
                    <p className="rules-text">
                        <strong>Tipo</strong>: Tipo de daño que hace, a distancia (ranged) o a cuerpo a cuerpo (melee).
                    </p>
                    <h6 className="rules-title">KeyWords</h6>
                    <p className="rules-text">
                        Un set de palabras que ayuda a identificar al agente.
                    </p>
                </div>
                <div className="rule-section" id="estructuras">
                    <h4 className="rules-title">Estructuras de batalla</h4>
                    <p className="rules-text">
                        Una batalla de Warhammer 40.000: Kill Team consiste en cuatro turnos. Un punto incluye tres fases, cada una debe de completarse en orden y completa.
                        Cuando se hayan completado las tres fases el siguiente turno comienza, el proceso se repite hasta que se acaba la partida al final del cuarto turno. Las tres fases estan listadas y explicadas debajo.
                    </p>
                    <h6 className="rules-title">Fase de iniciación</h6>
                    <p className="rules-text">
                        En esta fase el jugador coloca su kill team y determina quién tiene la iniciativa para los puntos de turno.
                    </p>
                    <h6 className="rules-title">Fase de estrategia</h6>
                    <p className="rules-text">
                        En la fase de estrategia el jugador genera un importante pero limitado recurso conocido como Puntos de comando (CPs) y los usa para poder utilizar las estrategias de despliegue.
                        Alternativamente, los jugadores pueden guardar CPs para gastar tacticas de despliege mas adelante en la batalla. A su vez el jugador debe revelar sus Tac Ops en esta fase para su kill team las intente.
                    </p>
                    <h6 className="rules-title">Fase de tiroteo</h6>
                    <p className="rules-text">
                        En esta ultima fase los jugadores activas alternativamente los agentes o grupos de agentes para realizar acciones como movimiento en la killzone,
                        disparar al enemigo con el arma, pelear en combate utilizando usando acciones unicas como colocar explosivos o manifestar un poderoso poder psyquico.
                    </p>
                </div>
                <div className="rule-section" id="iniciacion">
                    <h4 className="rules-title">Fase de iniciación</h4>
                    <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: "20px" }}>
                        <div style={{ flex: 1 }}>
                            <h6 className="rules-title">Agentes preparados</h6>
                            <p className="rules-text">
                                Cada jugador prepara todos sus agentes de la killzone dándole la vuelta al token para así mostrar qué agentes están listos.
                            </p>
                            <h6 className="rules-title">Determinar iniciativa</h6>
                            <p className="rules-text">
                                El jugador determina quién tiene la iniciativa para el turno. Durante el primer turno, la iniciativa es determinada en secuencia de misiones de su tipo de juego.
                                En los sucesivos turnos, los jugadores tirarán un dado y el ganador decidirá quién tiene la iniciativa, pero si el resultado de la tirada resulta en un empate,
                                el jugador que no tuvo la iniciativa en el turno anterior empieza en este con la iniciativa. Para saber quién tiene la iniciativa, se usa el token de iniciativa.
                            </p>
                            <p className="rules-text">
                                Tener la iniciativa le permite al jugador tener influencia sobre ciertos aspectos de la batalla, como decidir qué operativo activar primero durante el turno.
                                Si más de una regla ocurre a la vez, el jugador con iniciativa determina el orden en el que afectan.
                            </p>
                        </div>
                        <div style={{ flexShrink: 0, display: "flex", alignItems: "center", justifyContent: "center" }}>
                            <img src={initiativeToken} alt="Initiative Token" style={{ maxWidth: "auto", height: "auto", borderRadius: "10px", marginLeft: "20px" }} />
                        </div>
                    </div>
                </div>
                <div className="rule-section" id="estrategia">
                    <h4 className="rules-title">Fase de estrategia</h4>
                    <h6 className="rules-title">Generar command points</h6>
                    <p className="rules-text">
                        Cada jugador genera 1 punto de comando (CP) y lo añade a su numero de CPs. Estos puntos permanecen guardados hasta que son usados.
                    </p>
                    <p className="rules-text">
                        Los CPs pueden ser gastados en estratagemas estrategicas. Pueden ser usados en la fase de Estrategia como se comenta debajo, y son reglas unicas que generalmente se usan para ayudar a su killteam.
                    </p>
                    <p className="rules-text">
                        Tambien los CPs pueden ser gastados en estratagemos tacticas.
                        Esto especificara cuando deben ser usadas. Estratagemas tacticas son menos beneficiosas que pueden dar efectos significativos si se usan en el mometo oportuno.
                        Menos Command Re-roll, cada jugador puede usar cada estratagema tactica una vez por turno. Si una estratagema tactica no es usada durante el turno, es solo limitada por el numero de CPs que uno tiene.
                        Además , la estratagma tactica Command Re-roll esta permitida en todas las facciones.
                    </p>
                    <hr />
                    <h6 className="rules-title">Command Re-roll</h6>
                    <p className="rules-text">Usa esta estratagema tactica despues de tirar un dado para defensa o ataque. Puedes tirar de nuevo ese dado</p>
                    <hr />
                    <h6 className="rules-title">Usar estratagemas estrategicas</h6>
                    <p className="rules-text">
                        Comenzando con el jugador que tiene la iniciativa, cada jugador alterna entre usar una Estratagema Estratégica o elegir pasar.
                        Los jugadores repiten este proceso hasta que ambos hayan pasado de manera consecutiva.
                    </p>
                    <p className="rules-text">
                        Si un jugador declara que va a usar una Estratagema Estratégica, primero debe pagar su costo de CP eliminando los CP especificados de su reserva.
                        Si un jugador no tiene suficientes CP para pagar el costo, no puede usar esa Estratagema Estratégica.
                        Cuando se usa una Estratagema Estratégica, se resuelven sus efectos de inmediato antes de alternar al otro jugador.
                        Cada jugador no puede usar la misma Estratagema Estratégica más de una vez durante cada fase de Estrategia.
                    </p>
                    <h6 className="rules-title">Revelación de Objetivo</h6>
                    <p className="rules-text">
                        Comenzando con el jugador que tiene la iniciativa,
                        los jugadores alternan revelando Operaciones Tácticas que pueden revelarse en el paso de Revelación de Objetivo de este Punto de Giro, o eligen pasar.
                        Cabe señalar que los jugadores no están obligados a revelar una Operación Táctica, pero algunas deben revelarse en ciertos Puntos de Giro para poder lograrse.
                        Los jugadores repiten este proceso hasta que ambos hayan pasado de manera consecutiva.
                    </p>
                </div>
                <div className="rule-section" id="tiroteo">
                    <h4 className="rules-title">Fase de tiroteo</h4>
                    <div className="rule-section" style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: "20px" }}>
                        <div style={{ flex: 1 }}>
                            <h6 className="rules-title">Realizar Acciones</h6>
                            <p className="rules-text">
                                El jugador que tiene la iniciativa activa primero. Selecciona una de sus miniaturas amigas listas y la activa.
                                Una vez que haya completado la activación de esa miniatura, su oponente selecciona una de sus miniaturas listas y hace lo mismo.
                                Los jugadores repiten este proceso hasta que todas las miniaturas en la zona de combate hayan sido activadas.
                            </p>
                            <hr />
                            <p className="rules-text">
                                Si una miniatura tiene una Activación en Grupo de más de 1, debe ser activada en grupo, en lugar de individualmente.
                                En tales casos, el jugador selecciona una miniatura amiga lista y la activa. Cuando finalice la activación de esa miniatura,
                                selecciona otra miniatura amiga lista del mismo tipo para ser activada.
                                Repiten este proceso hasta que hayan activado el número de miniaturas especificado por la característica de Activación en Grupo de esa miniatura,
                                o no haya más miniaturas amigas de ese tipo para activar. Luego, su oponente activa una de sus miniaturas como de costumbre.
                            </p>
                            <hr />
                            <p className="rules-text">
                                Cada vez que un jugador activa una de sus miniaturas listas, debe determinar si tiene la orden de Enfrentarse o de Ocultar.
                                Si es el primer Punto de Giro, tiene la orden que se le dio cuando se desplegó antes de la batalla.
                                En todos los Puntos de Giro posteriores, puede elegir qué orden darle.
                            </p>
                            <hr />
                            <p className="rules-text">
                                En las circunstancias adecuadas, una miniatura con la orden de Ocultar
                                no es un objetivo válido para los ataques a distancia de una miniatura enemiga (como se explica aquí),
                                pero no puede realizar diversas acciones. Una miniatura con la orden de Enfrentarse puede realizar más acciones,
                                pero es más vulnerable a los ataques a distancia de las miniaturas enemigas. Cada vez que le des una orden a una miniatura,
                                coloca el token de orden relevante junto a ella.
                            </p>
                            <hr />
                            <p className="rules-text">
                                La miniatura luego genera una cantidad de puntos de acción igual a su Límite de Puntos de Acción (LPA),
                                que se utilizan para realizar acciones. Una vez que todos sus puntos de acción hayan sido usados y no tenga otras acciones que realizar,
                                su activación termina y ya no está lista.
                            </p>
                            <hr />
                            <p>Cuando la activación de una miniatura termina, voltea su token de orden al lado activado para señalar que ya no está lista.</p>
                            <hr />
                        </div>
                        <div style={{ flexShrink: 0, display: "flex", alignItems: "center", justifyContent: "center", height: "100%" }}>
                            <img src={orderToken} alt="Order Token" style={{ maxWidth: "auto", height: "auto", borderRadius: "10px", alignSelf: "center" }} />
                        </div>
                    </div>
                    <p className="rules-text">
                        Cada acción tiene un costo asociado en puntos de acción, por ejemplo, 1PA.
                        Cada vez que un jugador desee realizar una acción con una miniatura,
                        debe restar los puntos de acción especificados del número de puntos de acción que esa miniatura generó durante esa activación.
                        Si no tiene suficientes puntos de acción para realizar esa acción, debe seleccionar una acción diferente.
                        Luego, realiza esa acción según lo especificado. Mientras una miniatura está realizando una acción, se la conoce como la miniatura activa.
                    </p>
                    <p className="rules-text">
                        El jugador controlador no necesita declarar todas las acciones de su miniatura cuando esta es activada.
                        En su lugar, puede realizar una acción y luego decidir la siguiente acción después de ver sus efectos.
                        A menos que se especifique lo contrario, una miniatura no puede realizar la misma acción más de una vez durante su activación.
                    </p>
                    <img src={actionPointsToken} style={{ maxWidth: "auto", height: "auto", borderRadius: "10px", alignSelf: "center" }} />
                    <h6 className="rules-title">Fuego Preventivo (Overwatch)</h6>
                    <p className="rules-text">
                        Cuando te toque activar una miniatura, si no tienes ninguna miniatura lista para activar,
                        pero tu oponente aún no ha activado todas sus miniaturas,
                        puedes seleccionar una miniatura amiga que tenga la orden de Enfrentarse y que ya haya sido activada en esta fase para realizar una acción de Fuego Preventivo.
                        Cada miniatura puede realizar una acción de Fuego Preventivo por Punto de Giro,
                        y solo puedes seleccionar una miniatura para hacerlo si tu oponente aún tiene miniaturas por activar. Esto significa que, una vez que tu oponente haya activado todas sus miniaturas,
                        la fase de Combate Finaliza.
                    </p>
                    <h6 className="rules-title">Acciones</h6>
                    <p className="rules-text">Las acciones se clasifican de la siguiente manera:</p>
                    <ul className="rules-list text-start" style={{listStyle: "none"}}>
                        <li><strong>Acciones Universales:</strong> Pueden ser realizadas por todas las miniaturas. Se detallan a continuación.</li>
                        <li>
                            <strong>Acciones Únicas:</strong> Son acciones detalladas en la tarjeta de datos de una miniatura que solo ella puede realizar,
                            como la acción Dakka Dash encontrada en la tarjeta de datos de ejemplo.
                        </li>
                        <li>
                            <strong>Acciones de Misión:</strong> Son específicas para la misión que estás jugando y se detallarán en el resumen de la misión.
                            Las misiones pueden encontrarse aquí (misión de Juego Abierto) y aquí (misiones Narrativas de Operaciones Especiales).
                        </li>
                        <li>
                            <strong>Acciones Libres:</strong> Solo pueden realizarse cuando otra regla lo especifique.
                            Cada vez que una miniatura realice una acción libre, se aplican las siguientes reglas:
                            <ul className="rules-list text-start" style={{listStyle: "none"}}>
                                <li>La miniatura puede realizar la acción, siempre que se cumplan los requisitos de la acción.</li>
                                <li>El jugador no debe restar ningún PA adicional para realizar la acción.</li>
                                <li>
                                    La miniatura seguirá contando como si hubiera realizado la acción para todos los efectos de las reglas.
                                    Por ejemplo, si la realizó durante su activación, no podría realizarla nuevamente durante esa misma activación.
                                </li>
                            </ul>
                        </li>
                    </ul>
                    <p className="rules-text">
                        Por ejemplo, cuando un KOMMANDO DAKKA BOY realiza una acción de Dakka Dash (ver acciones únicas, más arriba),
                        puede realizar una acción de Dash libre y una acción de Disparo libre sin restar PA adicionales (aparte de los PA gastados en la acción de Dakka Dash).
                        Sin embargo, está sujeto a los requisitos de esas acciones,
                        por lo que no puede realizar la acción de Dash libre si está dentro del Rango de Enfrentamiento de las miniaturas enemigas,
                        ni puede realizar la acción de Disparo libre si está dentro del Rango de Enfrentamiento de las miniaturas enemigas o tiene una orden de Ocultar.
                        Además, por cada una de las acciones libres que realice, no podrá realizarlas nuevamente durante su activación.
                    </p>
                </div>
                <div className="rule-section" id="heridas">
                    <h4 className="rules-title">Heridas y Daño</h4>
                    <p className="rules-text">
                        Todas las miniaturas tienen un número inicial de heridas que se utiliza para medir cuánto daño pueden soportar antes de perder efectividad y quedar incapacitados.
                        Cada vez que se inflige daño a una miniatura, esta pierde un número de heridas igual al valor de ese daño.
                    </p>
                    <p className="rules-text">
                        Si las heridas de una miniatura se reducen a 0 o menos, queda incapacitada.
                        Cuando una miniatura queda incapacitada, se retira de la zona de combate y ya no se pueden utilizar sus habilidades.
                        Si una miniatura queda incapacitada durante una secuencia de disparo, se retira después de que se hayan realizado todos los ataques a disparo de esa acción,
                        como se especifica en la secuencia de disparo. Si una miniatura queda incapacitada durante una secuencia de combate,
                        cualquier golpe restante se descarta y no se resuelve.
                    </p>
                    <hr />
                    <p className="rules-text">
                        Ciertos objetivos y Operaciones Tácticas requerirán que las miniaturas amigas incapaciten a miniaturas enemigas,
                        e incluso pueden especificar la forma en que debe hacerse (por ejemplo, un ataque a disparo).
                        Esto se logra cuando una miniatura amiga realiza una acción o habilidad (o, cuando sea necesario, la acción o habilidad especificada),
                        y como resultado de hacerlo, una miniatura enemiga queda incapacitada.
                    </p>
                    <p className="rules-text">
                        Algunas reglas infligen heridas mortales. Las heridas mortales son una fuente poderosa de daño,
                        de modo que lanzar dados de defensa no ayudará a la miniatura a defenderse de ellas.
                        Cada vez que una miniatura sufra una herida mortal, se le aplicará un punto de daño.
                    </p>
                    <p className="rules-text">
                        Si una miniatura tiene menos de la mitad de sus heridas restantes, está herida. Mientras una miniatura esté herida,
                        se le resta de su característica de Movimiento y se empeoran las características de Habilidad Balística y Habilidad de Armas de los equipos de disparo y combate cuerpo a cuerpo en 1 respectivamente.
                    </p>
                    <hr />
                    <p className="rules-text">
                        Es una buena idea marcar las heridas perdidas para que ambos jugadores puedan llevar un control del daño infligido.
                        Algunos jugadores colocan dados o tokens junto a la miniatura o en su tarjeta de datos, mientras que otros prefieren escribirlo en un papel.
                    </p>
                    <img src={injuredToken} style={{ maxWidth: "auto", height: "auto", borderRadius: "10px", alignSelf: "center", marginBottom: "10px" }} />
                </div>
                {/* Div para contener ambos botones uno encima del otro */}
                <div style={{ position: "fixed", bottom: "20px", right: "20px", display: "flex", flexDirection: "column", gap: "10px", zIndex: 1000 }}>
                    {/* Botón de Reglas Especiales */}
                    <button
                        onClick={handleRules}
                        style={{
                            width: "120px",
                            padding: "10px",
                            backgroundColor: "#d4af37",
                            color: "black",
                            border: "none",
                            borderRadius: "5px",
                            cursor: "pointer",
                            boxShadow: "0 0 10px rgba(0,0,0,0.3)",
                            transition: "transform 0.3s ease"
                        }}
                        onMouseOver={(e) => e.target.style.transform = "scale(1.1)"}
                        onMouseOut={(e) => e.target.style.transform = "scale(1)"}
                    >
                        Reglas Especiales
                    </button>

                    {/* Botón Back to Top */}
                    <a href="#scroll-container">
                        <button
                            style={{
                                width: "60px",
                                height: "60px",
                                backgroundColor: "#d4af37",
                                backgroundImage: `url(${backToTop})`,
                                backgroundSize: "cover",
                                backgroundPosition: "center",
                                border: "none",
                                borderRadius: "50%",
                                cursor: "pointer",
                                boxShadow: "0 0 10px rgba(0,0,0,0.3)",
                                transition: "transform 0.3s ease"
                            }}
                            onMouseOver={(e) => e.target.style.transform = "scale(1.1)"}
                            onMouseOut={(e) => e.target.style.transform = "scale(1)"}
                            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                        >
                        </button>
                    </a>
                </div>

                {/* Elimina el botón original de reglas especiales que está al final del código */}
            </div>
        </div>
    );

};
export default Rules