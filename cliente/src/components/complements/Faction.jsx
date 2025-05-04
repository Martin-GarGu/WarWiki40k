import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
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
    const [isHovering, setIsHovering] = useState(false);
    // Nuevo estado para controlar si hay una operación de favorito en curso
    const [isProcessingFavorite, setIsProcessingFavorite] = useState(false);
    const navigate = useNavigate();
    const user = JSON.parse(localStorage.getItem("user"));

    const toggleFavorite = async () => {
        if (!user || !faction || isProcessingFavorite) return;
        
        try {
            // Indicar que hay una operación en curso
            setIsProcessingFavorite(true);
            
            const token = localStorage.getItem("token");
            
            if (isFavorite) {
                // Eliminar de favoritos usando el método removeByUserAndType
                const response = await fetch(
                    `${import.meta.env.VITE_APP_PETICION_IP}/api/favorites/remove-by-type`,
                    {
                        method: "DELETE",
                        headers: {
                            "Content-Type": "application/json",
                            "Authorization": `Bearer ${token}`,
                        },
                        body: JSON.stringify({
                            user_id: user.id,
                            favorites_id: faction.id,
                            favorites_type: "Faction",
                        }),
                    }
                );
                
                if (response.ok) {
                    setIsFavorite(false);
                } else {
                    console.error("Error al eliminar de favoritos");
                }
            } else {
                // Añadir a favoritos
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

                if (response.ok) {
                    setIsFavorite(true);
                } else {
                    console.error("Error al añadir a favoritos");
                }
            }
        } catch (error) {
            console.error("Error al gestionar favoritos:", error);
        } finally {
            // Cuando termina la operación, independientemente del resultado
            setIsProcessingFavorite(false);
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

    // Estilos CSS para el botón de corazón
    const heartStyles = {
        button: {
            background: "transparent",
            border: "none",
            cursor: isProcessingFavorite ? "wait" : "pointer", // Cambia el cursor mientras procesa
            fontSize: "2rem",
            color: "#dc3545",
            transition: "transform 0.2s, color 0.2s, opacity 0.2s",
            padding: "10px",
            display: "inline-flex",
            alignItems: "center",
            justifyContent: "center",
            opacity: isProcessingFavorite ? 0.6 : 1, // Reducir opacidad mientras procesa
        },
        hoverEffect: {
            transform: isProcessingFavorite ? "scale(1)" : "scale(1.1)", // No escalar si está procesando
        }
    };

    // Función para renderizar el icono del corazón según el estado
    const renderHeartIcon = () => {
        if (isFavorite) {
            // Si es favorito y hay hover, mostrar corazón roto
            if (isHovering && !isProcessingFavorite) {
                return (
                    <svg 
                        width="32" 
                        height="32" 
                        viewBox="0 0 24 24" 
                        style={{ 
                            fill: '#dc3545',
                            display: 'block'
                        }}
                    >
                        {/* Mitad izquierda del corazón */}
                        <path d="M12,21.35L10.55,20.03C5.4,15.36 2,12.27 2,8.5C2,5.41 4.42,3 7.5,3C9.24,3 10.91,3.81 12,5.08L12,21.35Z" />
                        
                        {/* Mitad derecha del corazón (ligeramente separada) */}
                        <path d="M12,21.35L12,5.08C13.09,3.81 14.76,3 16.5,3C19.58,3 22,5.41 22,8.5C22,12.27 18.6,15.36 13.45,20.03L12,21.35Z" />
                        
                        {/* Línea de zigzag entre las mitades */}
                        <path 
                            d="M12,5.5L12,6.5L11.5,7L12.5,7.5L11.5,8L12.5,8.5L11.5,9L12.5,9.5L11.5,10L12.5,10.5L11.5,11L12.5,11.5L11.5,12L12.5,12.5L11.5,13L12.5,13.5L11.5,14L12.5,14.5L11.5,15L12.5,15.5L11.5,16L12.5,16.5L11.5,17L12.5,17.5L11.5,18L12.5,18.5L11.5,19L12,19.5L12,21"
                            stroke="white"
                            strokeWidth="0.7"
                            fill="none"
                        />
                    </svg>
                );
            } else {
                // Si es favorito sin hover, mostrar corazón lleno
                return <i className="bi bi-heart-fill" style={{ fontSize: '32px' }}></i>;
            }
        } else {
            // Si no es favorito, mostrar corazón vacío
            return <i className="bi bi-heart" style={{ fontSize: '32px' }}></i>;
        }
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
                            <button 
                                onClick={toggleFavorite} 
                                onMouseEnter={() => !isProcessingFavorite && setIsHovering(true)}
                                onMouseLeave={() => setIsHovering(false)}
                                style={{
                                    ...heartStyles.button,
                                    ...(isHovering && !isProcessingFavorite ? heartStyles.hoverEffect : {})
                                }}
                                title={isFavorite ? "Eliminar de favoritos" : "Añadir a favoritos"}
                                disabled={isProcessingFavorite} // Deshabilitar el botón durante el procesamiento
                            >
                                {renderHeartIcon()}
                                {isProcessingFavorite && (
                                    <span className="ms-2" style={{ fontSize: "0.8rem" }}>
                                        Procesando...
                                    </span>
                                )}
                            </button>
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