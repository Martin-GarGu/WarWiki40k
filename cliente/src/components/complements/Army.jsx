import { useLocation} from 'react-router-dom';
import { useEffect, useState } from "react";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export default function Army() {
    const location = useLocation();
    const army = location.state?.army;
    const [squads, setSquads] = useState([]);
    // const navigate = useNavigate();
    const [isLoading, setIsLoading] = useState(true);
    // console.log(faction);
    useEffect(() => {
        const fetchFactionData = async () => {
            if (army) {
                try {
                    const response = await fetch(`http://127.0.0.1:8000/api/squadronsArmy/${army.slug}`);
                    if (!response.ok) {
                        throw new Error(`HTTP error! status: ${response.status}`);
                    }
                    const jsonData = await response.json();
                    setSquads(jsonData.data);
                } catch (error) {
                    console.error("Error fetching faction data:", error);
                    // navigate('/error'); // Manejar el error de manera adecuada
                } finally {
                    setIsLoading(false);
                }
            } else {
                console.error("No faction data provided!");
            }
        };

        fetchFactionData();
    }, [army]);
    return (
        <div>
            <img src={army.image} alt={army.name} />
            <h1>{army.name}</h1>
            <p>{army.description}</p>
            <h2>Squads</h2>
            {isLoading ? (
                <p>Loading...</p>
            ) : (
                <div className="p-1">
                    {squads.map((squad) => (
                        <div key={squad.id}>
                            <Card >
                                <Row className="g-2 flex-md">
                                    <Col lg={4} md={12} className="d-flex justify-content-center">
                                        <Card.Img src={`${squad.image}`} alt="image" />
                                    </Col>
                                    <Col lg={8} md={12}>
                                        <Card.Body>
                                            <Card.Title>{squad.name}</Card.Title>
                                            <Card.Text>{squad.description}</Card.Text>
                                        </Card.Body>
                                    </Col>

                                </Row>
                            </Card>
                        </div>
                    ))}
                </div>
            )}
        </div>
    )
}
