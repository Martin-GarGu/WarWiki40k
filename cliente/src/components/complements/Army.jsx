import { useParams, useNavigate } from 'react-router-dom';
import { useEffect, useState } from "react";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export default function Army() {
    const { slug } = useParams(); // Obtener el slug del ejército desde la URL
    const [army, setArmy] = useState(null);  // Estado para almacenar los datos del ejército
    const [squads, setSquads] = useState([]);
    const [errorMessage, setErrorMessage] = useState(null);
    const navigate = useNavigate();
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        // Primero obtenemos los datos del ejército utilizando el slug
        const fetchArmyData = async () => {
            try {
                // Petición para obtener el ejército por slug
                const response = await fetch(`http://${import.meta.env.VITE_APP_PETICION_IP}/api/armiesSlug/${slug}`);
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                const jsonData = await response.json();
                setArmy(jsonData.data); // Guardamos los datos del ejército

                // Luego obtenemos los escuadrones para ese ejército
                const squadsResponse = await fetch(`http://${import.meta.env.VITE_APP_PETICION_IP}/api/squadronsArmy/${jsonData.data.slug}`);
                if (!squadsResponse.ok) {
                    throw new Error(`HTTP error! status: ${squadsResponse.status}`);
                }
                const squadsData = await squadsResponse.json();
                setSquads(squadsData.data || []); // Guardamos los escuadrones
            } catch (error) {
                console.error("Error fetching army data:", error);
                setErrorMessage("Error al cargar los datos. Inténtalo nuevamente.");
            } finally {
                setIsLoading(false); // Finaliza la carga
            }
        };

        fetchArmyData();  // Llamamos a la función cuando el componente se monta o el slug cambia
    }, [slug]);  // Dependemos del slug para hacer la petición al backend

    const handleSquadClick = (squad) => {
        const newPath = `/squads/${squad.slug}`;  // Creamos la ruta del escuadrón directamente con su slug
        navigate(newPath);  // Navegamos a la página del escuadrón
    };    

    return (
        <div>
            {army ? (
                <>
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
                    )}
                </>
            ) : (
                <p>Army not found</p>  // Si no se encuentra el ejército
            )}
        </div>
    );
}
