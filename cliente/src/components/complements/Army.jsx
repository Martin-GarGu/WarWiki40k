import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Table from "react-bootstrap/Table";
import routeApi from "../../routeApi";

export default function Army() {
    const { slug } = useParams();
    const navigate = useNavigate();

    const [army, setArmy] = useState(null);
    const [squads, setSquads] = useState([]);
    const [errorMessage, setErrorMessage] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [isFavorite, setIsFavorite] = useState(false);

    const user = JSON.parse(localStorage.getItem("user"));

    const addToFavorites = async () => {
        if (!user) return;
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
        if (!user) return;
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
                const response = await fetch(`${import.meta.env.VITE_APP_PETICION_IP}/api/armiesSlug/${slug}`);
                if (!response.ok) throw new Error(`Error al obtener el ejército: ${response.status}`);
                const armyData = await response.json();
                setArmy(armyData.data);

                const squadsResponse = await fetch(`${import.meta.env.VITE_APP_PETICION_IP}/api/squadronsArmy/${armyData.data.slug}`);
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
        <div className="army-page">
            <Row>
                <Col md={6} className="d-flex flex-column align-items-center">
                    <img
                        src={`${routeApi()}${army.image}`}
                        alt={army.name}
                        style={{
                            width: "100%",
                            objectFit: "cover",
                            borderRadius: "8px",
                            maxWidth: "400px"
                        }}
                    />
                    <h1 className="mt-3">{army.name}</h1>
                    <p className="text-center">{army.description}</p>

                    {user && !isFavorite && (
                        <button onClick={addToFavorites} className="btn btn-primary">
                            Agregar a favoritos
                        </button>
                    )}
                    {isFavorite && <p className="mt-2">Este ejército ya está en tus favoritos.</p>}
                </Col>

                <Col md={6}>
                    <h2 className="text-center">Escuadrones</h2>
                    {squads.length > 0 ? (
                        <div
                            style={{
                                maxHeight: "400px",
                                overflowY: "auto",
                                marginRight: "15px",
                                backgroundColor: "#3a3a3a", // fondo amarillo tipo warhammer
                                padding: "10px",
                                borderRadius: "8px"
                            }}
                        >
                            <Table bordered hover responsive >
                                <thead>
                                    <tr>
                                        <th>Imagen</th>
                                        <th>Nombre</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {squads.map((squad) => (
                                        <tr
                                            key={squad.id}
                                            onClick={() => handleSquadClick(squad)}
                                            style={{
                                                cursor: "pointer",
                                                backgroundColor: "#3A3A3A",  // gris oscuro estilo Warhammer 40k
                                                color: "#EEE"  // texto claro para contraste
                                            }}
                                        >
                                            <td className="text-center">
                                                <img
                                                    src={`${routeApi()}${squad.image}`}
                                                    alt={squad.name}
                                                    style={{
                                                        width: "110px",
                                                        height: "auto",
                                                        borderRadius: "8px",
                                                        objectFit: "cover"
                                                    }}
                                                />
                                            </td>
                                            <td className="align-middle text-center">
                                                <strong>{squad.name}</strong>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </Table>
                        </div>
                    ) : (
                        <p className="text-center">No se encontraron escuadrones para este ejército.</p>
                    )}
                </Col>
            </Row>
        </div>
    );
}
