import { useNavigate, useParams } from 'react-router-dom';
import { useEffect, useState } from "react";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export default function Faction() {
    const { slug } = useParams();  // Usamos useParams para obtener el slug de la URL
    const [faction, setFaction] = useState(null);  // Usamos un estado para almacenar los datos de la facción
    const [armies, setArmies] = useState([]);
    const navigate = useNavigate();
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        // Primero obtenemos los datos de la facción usando el slug de la URL
        const fetchFactionData = async () => {
            try {
                const response = await fetch(`http://${import.meta.env.VITE_APP_PETICION_IP}/api/factions/${slug}`);
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                const jsonData = await response.json();
                setFaction(jsonData.data);  // Guardamos los datos de la facción

                // Después de obtener la facción, obtenemos sus ejércitos
                const armiesResponse = await fetch(`http://${import.meta.env.VITE_APP_PETICION_IP}/api/armies/${jsonData.data.id}`);
                if (!armiesResponse.ok) {
                    throw new Error(`HTTP error! status: ${armiesResponse.status}`);
                }

                const armiesData = await armiesResponse.json();
                setArmies(armiesData.data || []);  // Guardamos los ejércitos de la facción
            } catch (error) {
                console.error("Error fetching faction data:", error);
                setArmies([]); // En caso de error, aseguramos que armies sea un array vacío
            } finally {
                setIsLoading(false); // Terminamos la carga de datos
            }
        };

        fetchFactionData();  // Llamamos a la función cuando el componente se monta o el slug cambia
    }, [slug]);  // Repetimos la solicitud solo si el slug cambia

    const handleArmyClick = (army) => {
        navigate(`/armies/${army.slug}`);
    };

    return (
        <div>
            {faction ? (
                <>
                    <img src={faction.image} alt={faction.name} />
                    <h1>{faction.name}</h1>
                    <p>{faction.description}</p>
                    <h2>Armies</h2>

                    {isLoading ? (
                        <p>Loading...</p>
                    ) : (
                        armies.length === 0 ? (
                            <p>No armies available</p>
                        ) : (
                            <div className="p-1">
                                {armies.map((army) => (
                                    <div key={army.id} className="card" onClick={() => handleArmyClick(army)}>
                                        <Card>
                                            <Row className="g-2">
                                                <Col lg={4} md={12} className="d-flex justify-content-center">
                                                    <Card.Img src={army.image} alt="image" className="card-image" />
                                                </Col>
                                                <Col lg={8} md={12} className="card-content">
                                                    <Card.Body>
                                                        <Card.Title className="card-title">
                                                            <strong>{army.name}</strong>
                                                        </Card.Title>
                                                    </Card.Body>
                                                </Col>
                                            </Row>
                                        </Card>
                                    </div>
                                ))}
                            </div>
                        )
                    )}
                </>
            ) : (
                <p>Faction not found</p>
            )}
        </div>
    );
}
