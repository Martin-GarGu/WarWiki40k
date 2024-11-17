import { useParams } from 'react-router-dom';
import { useEffect, useState } from "react";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export default function Squad() {
    const { slug } = useParams();  // Obtener el slug directamente desde la URL
    const [squad, setSquad] = useState(null);
    const [soldiers, setSoldiers] = useState([]);
    const [errorMessage, setErrorMessage] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

    // Función para agregar el escuadrón a favoritos
    const createFavoriteSquad = async () => {
        const user = JSON.parse(localStorage.getItem('user')); // Obtén el usuario desde el localStorage
        const squadId = squad.id; // Asumiendo que tienes el ID del escuadrón
    
        try {
            const response = await fetch(`http://${import.meta.env.VITE_APP_PETICION_IP}/api/favorites/create`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    user_id: user.id,      // ID del usuario
                    favorites_id: squadId, // ID del escuadrón
                    favorites_type: 'Squadron', // Tipo de favorito
                }),
            });
    
            const data = await response.json(); // Convierte la respuesta en JSON
    
            if (response.ok) {
                // Si la respuesta fue exitosa, puedes mostrar un mensaje en la UI o en consola
                console.log(data.message); // Esto es solo un ejemplo
            } else {
                // Si la respuesta no fue exitosa, puedes manejarlo aquí, pero sin usar un dialog de error
                console.error("Error al crear el favorito:", data.message);
            }
        } catch (error) {
            // Aquí ya no es necesario el `dialog` de error ni mostrarlo en la UI
            console.error('Error al crear el favorito:', error);
        }
    };
    
    

    useEffect(() => {
        const fetchSquadData = async () => {
            if (!slug) {
                setErrorMessage("No se pudo obtener el slug del escuadrón.");
                setIsLoading(false);
                return;
            }

            try {
                // Obtener los datos del escuadrón
                const squadResponse = await fetch(`http://${import.meta.env.VITE_APP_PETICION_IP}/api/squads/${slug}`);
                if (!squadResponse.ok) {
                    throw new Error(`Error HTTP al obtener datos del escuadrón: ${squadResponse.status}`);
                }
                const squadData = await squadResponse.json();
                setSquad(squadData);  // Datos del escuadrón

                // Obtener los soldados del escuadrón
                const soldiersResponse = await fetch(`http://${import.meta.env.VITE_APP_PETICION_IP}/api/soldiersSquadron/${slug}`);
                if (!soldiersResponse.ok) {
                    throw new Error(`Error HTTP al obtener soldados: ${soldiersResponse.status}`);
                }
                const soldiersData = await soldiersResponse.json();
                setSoldiers(soldiersData.data || []);  // Datos de los soldados
                setErrorMessage(null);
            } catch (error) {
                console.error("Error al cargar los datos:", error);
                setErrorMessage("Error al cargar los datos. Inténtalo nuevamente.");
            } finally {
                setIsLoading(false);
            }
        };

        fetchSquadData();
    }, [slug]);

    // Mostrar un mensaje de carga mientras se obtienen los datos
    if (isLoading) return <p>Cargando...</p>;

    // Mostrar mensaje de error si ocurre algún problema
    if (errorMessage) return <p>{errorMessage}</p>;

    return (
        <div className="container">
            {squad && (
                <>
                    <img src={squad.image} alt={squad.name} />
                    <h1>{squad.name}</h1>
                    <p>{squad.description}</p>

                    {/* Botón para agregar el escuadrón a favoritos */}
                    <button onClick={createFavoriteSquad} className="btn btn-primary">
                        Agregar a favoritos
                    </button>
                </>
            )}

            <h2>Soldados</h2>

            {soldiers.length === 0 ? (
                <p>No hay soldados disponibles para este escuadrón.</p>
            ) : (
                <div>
                    {soldiers.map((soldier, index) => (
                        <Card key={`${soldier.id}-${index}-soldier`} className="squad-card">
                            <div className="squad-card-content">
                                <Row className="g-2">
                                    <Col lg={4} md={12} className="d-flex justify-content-center">
                                        <img src={soldier.imagen} alt={soldier.name} className="squad-card-image" />
                                    </Col>
                                    <Col lg={8} md={12}>
                                        <Card.Body>
                                            <Card.Title className="squad-card-title">
                                                <strong>{soldier.name}</strong>
                                            </Card.Title>
                                            <p>{soldier.description}</p>
                                        </Card.Body>
                                        <div className="squad-card-weapons">
                                            <h5>Weapons:</h5>
                                            <table className="squad-card-table">
                                                <thead>
                                                    <tr>
                                                        <th>Weapon Name</th>
                                                        <th>A</th>
                                                        <th>BS/WS</th>
                                                        <th>D</th>
                                                        <th>Type</th>
                                                        <th>Special Rule</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    {soldier.weapons.map((weapon, index) => (
                                                        <tr key={`${weapon.id}-${index}-weapon`}>
                                                            <td>{weapon.name}</td>
                                                            <td>{weapon.a}</td>
                                                            <td>{weapon.bs_ws}</td>
                                                            <td>{weapon.d}</td>
                                                            <td>{weapon.type}</td>
                                                            <td>{weapon.special_rule_description}</td>
                                                        </tr>
                                                    ))}
                                                </tbody>
                                            </table>
                                        </div>
                                        <div className="squad-card-footer">
                                            <strong>Keywords:</strong>
                                            <p className="squad-keywords">
                                                {soldier.keywords.map((keyword, index) => (
                                                    <span key={`${soldier.id}-${keyword.name}`}>
                                                        {keyword.name}{index < soldier.keywords.length - 1 ? ', ' : ''}
                                                    </span>
                                                ))}
                                            </p>
                                        </div>
                                    </Col>
                                </Row>
                            </div>
                        </Card>
                    ))}
                </div>
            )}
        </div>
    );
}
