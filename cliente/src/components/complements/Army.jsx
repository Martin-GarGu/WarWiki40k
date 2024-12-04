import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export default function Army() {
    const { slug } = useParams();
    const navigate = useNavigate();

    const [army, setArmy] = useState(null);
    const [squads, setSquads] = useState([]);
    const [errorMessage, setErrorMessage] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [isFavorite, setIsFavorite] = useState(false);

    // Verificar si hay un usuario logueado
    const user = JSON.parse(localStorage.getItem("user"));

    const addToFavorites = async () => {
        if (!user) return; // Si no hay usuario logueado, no hacemos nada

        try {
            const response = await fetch(`http://${import.meta.env.VITE_APP_PETICION_IP}/api/favorites/create`, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    user_id: user.id,
                    favorites_id: army.id,
                    favorites_type: "Army",
                }),
            });

            if (!response.ok) {
                const { message } = await response.json();
                throw new Error(message || "Error al agregar a favoritos");
            }

            setIsFavorite(true);
        } catch (error) {
            console.error("Error al añadir a favoritos:", error);
        }
    };

    const checkFavorite = async () => {
        if (!user) return; // Si no hay usuario logueado, no comprobamos favoritos

        try {
            const response = await fetch(`http://${import.meta.env.VITE_APP_PETICION_IP}/api/favorites/check`, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    user_id: user.id,
                    favorites_id: army.id,
                    favorites_type: "Army",
                }),
            });

            const data = await response.json();
            setIsFavorite(data.isFavorite);
        } catch (error) {
            console.error("Error al comprobar favoritos:", error);
        }
    };

    useEffect(() => {
        const fetchArmyData = async () => {
            try {
                const response = await fetch(`http://${import.meta.env.VITE_APP_PETICION_IP}/api/armiesSlug/${slug}`);
                if (!response.ok) throw new Error(`Error al obtener el ejército: ${response.status}`);

                const armyData = await response.json();
                setArmy(armyData.data);

                const squadsResponse = await fetch(
                    `http://${import.meta.env.VITE_APP_PETICION_IP}/api/squadronsArmy/${armyData.data.slug}`
                );
                if (!squadsResponse.ok) throw new Error(`Error al obtener los escuadrones: ${squadsResponse.status}`);

                const squadsData = await squadsResponse.json();
                setSquads(squadsData.data || []);
            } catch (error) {
                console.error("Error al cargar datos del ejército:", error);
                setErrorMessage("Error al cargar los datos. Inténtalo nuevamente.");
            } finally {
                setIsLoading(false);
            }
        };

        fetchArmyData();
    }, [slug]);

    useEffect(() => {
        if (army && user) checkFavorite();
    }, [army, user]);

    const handleSquadClick = (squad) => navigate(`/squads/${squad.slug}`);

    if (isLoading) return <p>Cargando...</p>;
    if (errorMessage) return <p>{errorMessage}</p>;
    if (!army) return <p>No se encontró el ejército solicitado.</p>;

    return (
        <div className="container">
            <div>
                <img src={army.image} alt={army.name} className="army-image" />
                <h1>{army.name}</h1>
                <p>{army.description}</p>

                {/* Solo mostrar el botón de favoritos si hay un usuario logueado */}
                {user && !isFavorite && (
                    <button onClick={addToFavorites} className="btn btn-primary">
                        Agregar a favoritos
                    </button>
                )}

                {/* Mostrar mensaje si el ejército ya está en favoritos */}
                {isFavorite && <p>Este ejército ya está en tus favoritos.</p>}

                <h2>Escuadrones</h2>
                {squads.length > 0 ? (
                    <div className="squad-list">
                        {squads.map((squad) => (
                            <div key={squad.id} className="card normalCard squad-card" onClick={() => handleSquadClick(squad)}>
                                <Card>
                                    <Row className="g-2 flex-md">
                                        <Col lg={4} md={12} className="d-flex justify-content-center">
                                            <Card.Img src={squad.image} alt={squad.name} className="card-image" />
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
                ) : (
                    <p>No se encontraron escuadrones para este ejército.</p>
                )}
            </div>
        </div>
    );
}
