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
    const [isHovering, setIsHovering] = useState(false);

    const user = JSON.parse(localStorage.getItem("user"));

    // Función simplificada para cambiar favoritos
    const toggleFavorite = async () => {
        if (!user || !army) return;
        
        try {
            const token = localStorage.getItem("token");
            
            if (isFavorite) {
                // Eliminar de favoritos 
                await fetch(`${import.meta.env.VITE_APP_PETICION_IP}/api/favorites/remove-by-type`, {
                    method: "DELETE",
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
                
                setIsFavorite(false);
            } else {
                // Añadir a favoritos
                await fetch(`${import.meta.env.VITE_APP_PETICION_IP}/api/favorites/create`, {
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

                setIsFavorite(true);
            }
        } catch (error) {
            console.error("Error al gestionar favoritos:", error);
        }
    };

    // Cargar datos del ejército
    useEffect(() => {
        const fetchArmy = async () => {
            try {
                const response = await fetch(`${import.meta.env.VITE_APP_PETICION_IP}/api/armiesSlug/${slug}`);
                if (!response.ok) throw new Error(`Error: ${response.status}`);
                
                const armyData = await response.json();
                setArmy(armyData.data);
                setIsLoading(false);
            } catch (error) {
                console.error("Error al cargar el ejército:", error);
                setErrorMessage("Error al cargar los datos del ejército.");
                setIsLoading(false);
            }
        };

        fetchArmy();
    }, [slug]);

    // Cargar escuadrones una vez que tengamos el ejército
    useEffect(() => {
        if (!army) return;
        
        const fetchSquads = async () => {
            try {
                const response = await fetch(`${import.meta.env.VITE_APP_PETICION_IP}/api/squadronsArmy/${army.slug}`);
                if (!response.ok) throw new Error(`Error: ${response.status}`);
                
                const squadsData = await response.json();
                setSquads(squadsData.data || []);
            } catch (error) {
                console.error("Error al cargar escuadrones:", error);
            }
        };

        fetchSquads();
    }, [army]);

    // Comprobar si es favorito
    useEffect(() => {
        if (!army || !user) return;
        
        const checkIsFavorite = async () => {
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
                
                if (response.ok) {
                    const data = await response.json();
                    setIsFavorite(data.isFavorite);
                }
            } catch (error) {
                console.error("Error al comprobar favoritos:", error);
            }
        };

        checkIsFavorite();
    }, [army, user]);

    const handleSquadClick = (squad) => navigate(`/squads/${squad.slug}`);

    // Estilos CSS para el botón de corazón
    const heartStyles = {
        button: {
            background: "transparent",
            border: "none",
            cursor: "pointer",
            fontSize: "2rem",
            color: "#dc3545",
            transition: "transform 0.2s, color 0.2s",
            padding: "10px",
            display: "inline-flex",
            alignItems: "center",
            justifyContent: "center",
        },
        hoverEffect: {
            transform: "scale(1.1)",
        }
    };

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

                    {user && (
                        <button 
                            onClick={toggleFavorite} 
                            onMouseEnter={() => setIsHovering(true)}
                            onMouseLeave={() => setIsHovering(false)}
                            style={{
                                ...heartStyles.button,
                                ...(isHovering ? heartStyles.hoverEffect : {})
                            }}
                            title={isFavorite ? "Eliminar de favoritos" : "Añadir a favoritos"}
                        >
                            {isFavorite ? (
                                isHovering ? (
                                    <i className="bi bi-heart-break"></i>
                                ) : (
                                    <i className="bi bi-heart-fill"></i>
                                )
                            ) : (
                                <i className="bi bi-heart"></i>
                            )}
                        </button>
                    )}
                </Col>

                <Col md={6}>
                    <h2 className="text-center">Escuadrones</h2>
                    {squads.length > 0 ? (
                        <div
                            style={{
                                maxHeight: "400px",
                                overflowY: "auto",
                                marginRight: "15px",
                                backgroundColor: "#3a3a3a",
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
                                                backgroundColor: "#3A3A3A",
                                                color: "#EEE"
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