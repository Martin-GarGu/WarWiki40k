import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export default function Army() {
    const { slug } = useParams(); // Obtener el slug del ejército desde la URL
    const [army, setArmy] = useState(null); // Estado para almacenar los datos del ejército
    const [squads, setSquads] = useState([]);
    const [errorMessage, setErrorMessage] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [isFavorite, setIsFavorite] = useState(false); // Estado para comprobar favoritos
    const navigate = useNavigate();

    // Función para agregar el ejército a favoritos
    const addToFavorites = async () => {
        const user = JSON.parse(localStorage.getItem("user")); // Obtener el usuario desde el localStorage

        try {
            const response = await fetch(`http://${import.meta.env.VITE_APP_PETICION_IP}/api/favorites/create`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    user_id: user.id, // ID del usuario
                    favorites_id: army.id, // ID del ejército
                    favorites_type: "Army", // Tipo de favorito
                }),
            });

            const data = await response.json();
            if (response.ok) {
                // console.log("Ejército añadido a favoritos");
                setIsFavorite(true); // Actualizar estado a "ya en favoritos"
            } else {
                console.error("Error al añadir a favoritos:", data.message);
            }
        } catch (error) {
            console.error("Error al añadir a favoritos:", error);
        }
    };

    // Función para verificar si el ejército ya está en favoritos
    const checkFavorite = async () => {
        const user = JSON.parse(localStorage.getItem("user")); // Obtener el usuario desde el localStorage

        try {
            const response = await fetch(`http://${import.meta.env.VITE_APP_PETICION_IP}/api/favorites/check`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    user_id: user.id, // ID del usuario
                    favorites_id: army.id, // ID del ejército
                    favorites_type: "Army", // Tipo de favorito
                }),
            });

            const data = await response.json();
            setIsFavorite(data.isFavorite); // Actualizar el estado con la respuesta del servidor
        } catch (error) {
            console.error("Error al comprobar favoritos:", error);
        }
    };

    useEffect(() => {
        // Función para cargar datos del ejército y sus escuadrones
        const fetchArmyData = async () => {
            try {
                // Obtener datos del ejército
                const response = await fetch(`http://${import.meta.env.VITE_APP_PETICION_IP}/api/armiesSlug/${slug}`);
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                const jsonData = await response.json();
                setArmy(jsonData.data); // Guardar datos del ejército

                // Obtener escuadrones del ejército
                const squadsResponse = await fetch(
                    `http://${import.meta.env.VITE_APP_PETICION_IP}/api/squadronsArmy/${jsonData.data.slug}`
                );
                if (!squadsResponse.ok) {
                    throw new Error(`HTTP error! status: ${squadsResponse.status}`);
                }
                const squadsData = await squadsResponse.json();
                setSquads(squadsData.data || []); // Guardar escuadrones
            } catch (error) {
                console.error("Error fetching army data:", error);
                setErrorMessage("Error al cargar los datos. Inténtalo nuevamente.");
            } finally {
                setIsLoading(false); // Finaliza la carga
            }
        };

        fetchArmyData(); // Llamar a la función al montar el componente
    }, [slug]);

    useEffect(() => {
        // Comprobar si el ejército está en favoritos después de cargar los datos
        if (army) {
            checkFavorite();
        }
    }, [army]);

    const handleSquadClick = (squad) => {
        const newPath = `/squads/${squad.slug}`; // Crear la ruta del escuadrón con su slug
        navigate(newPath); // Navegar a la página del escuadrón
    };

    return (
        <div>
            {isLoading ? (
                <p>Cargando...</p>
            ) : errorMessage ? (
                <p>{errorMessage}</p>
            ) : army ? (
                <>
                    <img src={army.image} alt={army.name} />
                    <h1>{army.name}</h1>
                    <p>{army.description}</p>

                    {/* Mostrar botón o mensaje dependiendo del estado de favoritos */}
                    {isFavorite ? (
                        <p>Este ejército ya está en tus favoritos.</p>
                    ) : (
                        <button onClick={addToFavorites} className="btn btn-primary">
                            Agregar a favoritos
                        </button>
                    )}

                    <h2>Squads</h2>
                    <div className="p-1">
                        {squads.map((squad) => (
                            <div key={squad.id} className="card" onClick={() => handleSquadClick(squad)}>
                                <Card>
                                    <Row className="g-2 flex-md">
                                        <Col lg={4} md={12} className="d-flex justify-content-center">
                                            <Card.Img src={squad.image} alt="image" className="card-image" />
                                        </Col>
                                        <Col lg={8} md={12} className="card-content">
                                            <Card.Body>
                                                <Card.Title className="card-title">
                                                    <strong>{squad.name}</strong>
                                                </Card.Title>
                                            </Card.Body>
                                        </Col>
                                    </Row>
                                </Card>
                            </div>
                        ))}
                    </div>
                </>
            ) : (
                <p>Ejército no encontrado</p>
            )}
        </div>
    );
}
