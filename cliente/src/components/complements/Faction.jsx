import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Table from "react-bootstrap/Table";
import routeApi from "../../routeApi";

export default function Faction() {
    const { slug } = useParams();
    const [faction, setFaction] = useState(null);
    const [armies, setArmies] = useState([]);
    const [isFavorite, setIsFavorite] = useState(false);
    const [isLoading, setIsLoading] = useState(true);
    const navigate = useNavigate();
    const user = JSON.parse(localStorage.getItem("user"));

    const addToFavorites = async () => {
        try {
            const token = localStorage.getItem("token");
            const response = await fetch(`${import.meta.env.VITE_APP_PETICION_IP}/api/favorites/create`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${token}`,
                },
                body: JSON.stringify({
                    user_id: user.id,
                    favorites_id: faction.id,
                    favorites_type: "Faction",
                }),
            });

            const data = await response.json();
            if (response.ok) {
                setIsFavorite(true);
            } else {
                console.error("Error al añadir a favoritos:", data.message);
            }
        } catch (error) {
            console.error("Error al añadir a favoritos:", error);
        }
    };

    const checkFavorite = async () => {
        try {
            const token = localStorage.getItem("token");
            const response = await fetch(`${import.meta.env.VITE_APP_PETICION_IP}/api/favorites/check`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${token}`,
                },
                body: JSON.stringify({
                    user_id: user.id,
                    favorites_id: faction.id,
                    favorites_type: "Faction",
                }),
            });

            const data = await response.json();
            setIsFavorite(data.isFavorite);
        } catch (error) {
            console.error("Error al comprobar favoritos:", error);
        }
    };

    useEffect(() => {
        const fetchFactionData = async () => {
            try {
                const response = await fetch(`${import.meta.env.VITE_APP_PETICION_IP}/api/factions/${slug}`);
                if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
                const jsonData = await response.json();
                setFaction(jsonData.data);

                const armiesResponse = await fetch(`${import.meta.env.VITE_APP_PETICION_IP}/api/armies/${jsonData.data.id}`);
                if (!armiesResponse.ok) throw new Error(`HTTP error! status: ${armiesResponse.status}`);

                const armiesData = await armiesResponse.json();
                setArmies(armiesData.data || []);
            } catch (error) {
                console.error("Error fetching faction data:", error);
                setArmies([]);
            } finally {
                setIsLoading(false);
            }
        };

        fetchFactionData();
    }, [slug]);

    useEffect(() => {
        if (user && faction) checkFavorite();
    }, [faction]);

    const handleArmyClick = (army) => {
        navigate(`/armies/${army.slug}`);
    };

    return (
        <div className="faction-page">
            {isLoading ? (
                <p>Cargando...</p>
            ) : faction ? (
                <Row style={{ minHeight: "80vh" }}>
                    <Col
                        md={5}
                        className="d-flex flex-column align-items-center justify-content-center"
                        style={{
                            textAlign: "center",
                            padding: "20px"
                        }}
                    >
                        <img
                            src={`${routeApi()}${faction.image}`}
                            alt={faction.name}
                            style={{
                                width: "100%",
                                maxWidth: "450px",
                                borderRadius: "12px",
                                objectFit: "cover",
                                marginBottom: "20px"
                            }}
                        />
                        <h1>{faction.name}</h1>
                        <p>{faction.description}</p>
                        {user && (
                            isFavorite ? (
                                <p>Esta facción ya está en tus favoritos.</p>
                            ) : (
                                <button onClick={addToFavorites} className="btn btn-primary">
                                    Agregar a favoritos
                                </button>
                            )
                        )}
                    </Col>

                    <Col md={7}>
                        <h3 className="text-center mb-3">Ejércitos</h3>
                        {armies.length === 0 ? (
                            <p className="text-center">No hay ejércitos disponibles.</p>
                        ) : (
                            <div
                                style={{
                                    maxHeight: "650px",
                                    overflowY: "auto",
                                    backgroundColor: "#1e1e1e",
                                    borderRadius: "10px",
                                    padding: "10px"
                                }}
                            >
                                <Table bordered hover responsive style={{ color: "#f1f1f1", margin: 0 }}>
                                    <thead>
                                        <tr>
                                            <th>Imagen</th>
                                            <th>Nombre</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {armies.map((army) => (
                                            <tr
                                                key={army.id}
                                                onClick={() => handleArmyClick(army)}
                                                style={{
                                                    cursor: "pointer",
                                                    backgroundColor: "#2b2b2b"
                                                }}
                                            >
                                                <td className="text-center">
                                                    <img
                                                        src={`${routeApi()}${army.image}`}
                                                        alt={army.name}
                                                        style={{
                                                            width: "100px",
                                                            height: "auto",
                                                            borderRadius: "8px",
                                                            objectFit: "cover"
                                                        }}
                                                    />
                                                </td>
                                                <td className="align-middle text-center">
                                                    <strong>{army.name}</strong>
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </Table>
                            </div>
                        )}
                    </Col>
                </Row>
            ) : (
                <p>Faction not found</p>
            )}
        </div>
    );
}
