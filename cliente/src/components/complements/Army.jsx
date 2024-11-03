import { useLocation, useNavigate } from 'react-router-dom';
import { useEffect, useState } from "react";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export default function Army() {
    const location = useLocation();
    const army = location.state?.army;
    const [squads, setSquads] = useState([]);
    const [errorMessage, setErrorMessage] = useState(null);
    const navigate = useNavigate();
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const fetchSquadData = async () => {
            if (army) {
                try {
                    const response = await fetch(`http://127.0.0.1:8000/api/squadronsArmy/${army.slug}`);

                    // No lanzamos un error si el status es 200
                    if (!response.ok) {
                        throw new Error(`HTTP error! status: ${response.status}`);
                    }

                    const jsonData = await response.json();

                    // Comprobar si hay escuadrones
                    if (jsonData.data) {
                        if (jsonData.data.length === 0) {
                            // Si no hay escuadrones, actualiza el mensaje
                            setErrorMessage("No hay escuadrones para este ejército.");
                        } else {
                            // Si hay escuadrones, actualiza el estado
                            setSquads(jsonData.data);
                            setErrorMessage(null); // Limpiar el mensaje de error
                        }
                    }
                } catch (error) {
                    console.error("Error fetching squad data:", error);
                    setErrorMessage("Error al cargar los datos. Inténtalo nuevamente.");
                } finally {
                    setIsLoading(false);
                }
            } else {
                console.error("No army data provided!");
                setIsLoading(false);
            }
        };

        fetchSquadData();
    }, [army]);

    const handleSquadClick = (squad) => {
        const currentPath = location.pathname;
        const newPath = `${currentPath}/${squad.slug}`;
        navigate(newPath, { state: { squad } });
    };

    return (
        <div>
            <img src={army.image} alt={army.name} />
            <h1>{army.name}</h1>
            <p>{army.description}</p>
            <h2>Squads</h2>

            {isLoading ? (
                <p>Loading...</p>
            ) : errorMessage ? (
                <p>{errorMessage}</p>
            ) : (
                <div className="p-1">
                    {squads.map((squad) => (
                        <div key={squad.id} className="card" onClick={() => handleSquadClick(squad)}>
                            <Card>
                                <Row className="g-2 flex-md">
                                    <Col lg={4} md={12} className="d-flex justify-content-center">
                                        <Card.Img src={`${squad.image}`} alt="image" className="card-image" />
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
            )}
        </div>
    );
}
