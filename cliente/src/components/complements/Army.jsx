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
    // Nuevo estado para controlar si hay una operación de favorito en curso
    const [isProcessingFavorite, setIsProcessingFavorite] = useState(false);

    const user = JSON.parse(localStorage.getItem("user"));

    // Función mejorada para cambiar favoritos con control de procesamiento
    const toggleFavorite = async () => {
        // No hacer nada si no hay usuario, ejército o ya está procesando
        if (!user || !army || isProcessingFavorite) return;
        
        try {
            // Indicar que hay una operación en curso
            setIsProcessingFavorite(true);
            
            const token = localStorage.getItem("token");
            
            if (isFavorite) {
                // Eliminar de favoritos 
                const response = await fetch(`${import.meta.env.VITE_APP_PETICION_IP}/api/favorites/remove-by-type`, {
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
                        favorites_id: army.id,
                        favorites_type: "Army",
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

    // Estilos CSS mejorados para el botón de corazón con estado de procesamiento
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
            // Si es favorito y hay hover, mostrar corazón roto (pero no durante procesamiento)
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