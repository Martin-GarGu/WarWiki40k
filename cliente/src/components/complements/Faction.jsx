
import { useLocation, useNavigate } from 'react-router-dom';
import { useEffect, useState } from "react";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";


export default function Faction() {
    const location = useLocation();
    const faction = location.state?.faction;
    const [armies, setArmies] = useState([]);
    const navigate = useNavigate();
    const [isLoading, setIsLoading] = useState(true);
    // console.log(faction);
    useEffect(() => {
        const fetchFactionData = async () => {
            if (faction) {
                try {
                    const response = await fetch(`http://127.0.0.1:8000/api/armies/${faction.id}`);
                    if (!response.ok) {
                        throw new Error(`HTTP error! status: ${response.status}`);
                    }

                    const jsonData = await response.json();

                    // Si jsonData.data no tiene elementos, setea armies como un array vacío
                    setArmies(jsonData.data || []);
                } catch (error) {
                    console.error("Error fetching faction data:", error);
                    // Opcional: maneja la navegación en caso de error
                    // navigate('/error');
                    setArmies([]); // Para asegurar que sea un array vacío en caso de error
                } finally {
                    setIsLoading(false); // Asegura que isLoading se desactive
                }
            } else {
                console.error("No faction data provided!");
                setIsLoading(false);
            }
        };

        fetchFactionData();
    }, [faction]);


    const handleArmyClick = (army) => {
        navigate(`/${faction.slug}/${army.slug}`, { state: { army } });
    }

    // console.log(armies);
    return (
        <div>
            <img src={faction.image} alt={faction.name} />
            <h1>{faction.name}</h1>
            <p>{faction.description}</p>
            <h2>Armies</h2>

            {isLoading ? (
                <p>Loading...</p>
            ) : (
                armies.length === 0 ? (
                    <p>No hay datos</p>
                ) : (
                    <div className="p-1">
                        {armies.map((army) => (
                            <div key={army.id} className="card" onClick={() => handleArmyClick(army)}>
                                <Card>
                                    <Row className="g-2">
                                        <Col lg={4} md={12} className="d-flex justify-content-center">
                                            <Card.Img src={`${army.image}`} alt="image" className="card-image" />
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
        </div>


    );
}
