import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Carousel from 'react-bootstrap/Carousel';
import routeApi from "../../routeApi";

export default function Squad() {
    const { slug } = useParams();
    const [squad, setSquad] = useState(null);
    const [soldiers, setSoldiers] = useState([]);
    const [errorMessage, setErrorMessage] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [searchTerm, setSearchTerm] = useState("");
    const [expanded, setExpanded] = useState({});
    const navigate = useNavigate();
    const [isFavorite, setIsFavorite] = useState(false);
    const [isHovering, setIsHovering] = useState(false);
    
    const user = JSON.parse(localStorage.getItem("user"));

    // Optimizado para cargar escuadrón, soldados y verificar favoritos
    useEffect(() => {
        const fetchSquadData = async () => {
            if (!slug) {
                setErrorMessage("No se pudo obtener el slug del escuadrón.");
                setIsLoading(false);
                return;
            }

            try {
                const squadResponse = await fetch(`${import.meta.env.VITE_APP_PETICION_IP}/api/squads/${slug}`);
                if (!squadResponse.ok) throw new Error(`Error HTTP: ${squadResponse.status}`);
                const squadData = await squadResponse.json();
                setSquad(squadData);

                const soldiersResponse = await fetch(`${import.meta.env.VITE_APP_PETICION_IP}/api/soldiersSquadron/${slug}`);
                if (!soldiersResponse.ok) throw new Error(`Error HTTP: ${soldiersResponse.status}`);
                const soldiersData = await soldiersResponse.json();
                setSoldiers(soldiersData.data || []);

                // Si hay un usuario, verificamos si es favorito
                if (user && squadData.id) {
                    try {
                        const token = localStorage.getItem("token");
                        const favoriteResponse = await fetch(`${import.meta.env.VITE_APP_PETICION_IP}/api/favorites/check`, {
                            method: "POST",
                            headers: {
                                "Content-Type": "application/json",
                                "Authorization": `Bearer ${token}`,
                            },
                            body: JSON.stringify({
                                user_id: user.id,
                                favorites_id: squadData.id,
                                favorites_type: "Squadron",
                            }),
                        });

                        if (favoriteResponse.ok) {
                            const data = await favoriteResponse.json();
                            setIsFavorite(data.isFavorite);
                        }
                    } catch (error) {
                        console.error("Error al comprobar favoritos:", error);
                    }
                }

                setErrorMessage(null);
            } catch (error) {
                console.error("Error:", error);
                setErrorMessage("Error al cargar los datos. Inténtalo nuevamente.");
            } finally {
                setIsLoading(false);
            }
        };
        
        fetchSquadData();
    }, [slug, user]);

    // Función para alternar favoritos (añadir/eliminar)
    const toggleFavorite = async () => {
        if (!user || !squad) return;
        
        try {
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
                        favorites_id: squad.id,
                        favorites_type: "Squadron",
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
                        favorites_id: squad.id,
                        favorites_type: "Squadron",
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
        }
    };

    const filteredSoldiers = soldiers.filter(s => s.name.toLowerCase().includes(searchTerm.toLowerCase()));

    const toggleExpand = id => {
        setExpanded(prev => ({ ...prev, [id]: !prev[id] }));
    };

    // Estilos para el botón de corazón
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

    return (
        <div className="d-flex">
            <div className="sidebar rounded-2"
                style={{
                    position: "fixed", top: "110px", left: "20px",
                    width: "200px", height: "auto", overflowY: "auto",
                    backgroundColor: "#2e2e2e", padding: "10px",
                    color: "#d4af37", border: "2px solid #d4af37"
                }}>
                <h5 style={{ marginBottom: "15px", borderBottom: "1px solid #d4af37", paddingBottom: "10px" }}>
                    Índice de Soldados
                </h5>
                <input
                    type="text"
                    placeholder="Buscar soldado..."
                    value={searchTerm}
                    onChange={e => setSearchTerm(e.target.value)}
                    style={{ width: "100%", padding: "5px", marginBottom: "10px", color: "white" }}
                />
                <ul style={{ listStyle: "none", padding: 0 }}>
                    {filteredSoldiers.map((s, index) => (
                        <li key={index} style={{ marginBottom: "10px" }}>
                            <a href={`#soldier-${s.id}`}
                                style={{ textDecoration: "none", color: "#d4af37", cursor: "pointer", transition: "color 0.3s" }}
                                onMouseOver={e => e.target.style.color = "#fff"}
                                onMouseOut={e => e.target.style.color = "#d4af37"}>
                                {s.name}
                            </a>
                        </li>
                    ))}
                </ul>
            </div>

            <div className="container" style={{ marginLeft: "220px" }}>
                {squad && (
                    <>
                        <img src={`${routeApi()}${squad.image}`} alt={squad.name}
                            className="img-fluid mb-3"
                            style={{ border: "2px solid #d4af37", borderRadius: "10px", marginTop: "10px" }}
                        />
                        <h1 className="text-gold" style={{ color: "#d4af37" }}>{squad.name}</h1>
                        <p style={{ color: "#ccc" }}>{squad.description}</p>
                        
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
                    </>
                )}

                <h2 className="text-gold"
                    style={{ color: "#d4af37", borderBottom: "1px solid #d4af37", marginBottom: "20px", paddingBottom: "10px" }}>
                    Soldados
                </h2>

                {filteredSoldiers.length === 0 ? (
                    <p style={{ color: "#fff" }}>No hay soldados disponibles para este escuadrón.</p>
                ) : (
                    <div className="row">
                        {filteredSoldiers.map(soldier => (
                            <div key={soldier.id} className="col-12 mb-4" id={`soldier-${soldier.id}`}>
                                <Card className="squad-card"
                                    style={{ backgroundColor: "#1e1e1e", color: "#d4af37", border: "1px solid #d4af37" }}
                                    onClick={() => toggleExpand(soldier.id)}>

                                    <Row className="g-2 align-items-stretch" style={{ flexWrap: expanded[soldier.id] ? 'nowrap' : 'wrap' }}>
                                        <Col lg={expanded[soldier.id] ? 5 : 4} md={12} className="d-flex justify-content-center align-items-center"
                                            style={{ padding: expanded[soldier.id] ? '10px' : '0' }}>
                                            <div style={{ width: '100%', height: expanded[soldier.id] ? '100%' : 'auto', display: 'flex', alignItems: 'center' }}>
                                                <img
                                                    src={`${routeApi()}${soldier.image}`}
                                                    alt={soldier.name}
                                                    style={{
                                                        maxHeight: expanded[soldier.id] ? '100%' : '200px',
                                                        width: '100%',
                                                        objectFit: expanded[soldier.id] ? 'cover' : 'contain',
                                                        border: "1px solid #d4af37",
                                                        borderRadius: "5px",
                                                        margin: expanded[soldier.id] ? '10px' : '0'
                                                    }}
                                                />
                                            </div>
                                        </Col>

                                        <Col lg={expanded[soldier.id] ? 7 : 8} md={12} className="d-flex flex-column justify-content-center">
                                            <Card.Body className="d-flex flex-column justify-content-center">
                                                <Card.Title
                                                    style={{
                                                        borderBottom: "1px solid #d4af37",
                                                        paddingBottom: "10px",
                                                        cursor: "pointer",
                                                        textAlign: "center"
                                                    }}>
                                                    <strong style={{ color: "#d4af37" }}>{soldier.name}</strong>
                                                </Card.Title>

                                                {expanded[soldier.id] && (
                                                    <div>
                                                        <p>{soldier.description}</p>
                                                        <h5 style={{ borderBottom: "1px solid #d4af37", paddingBottom: "5px", marginBottom: "10px" }}>Datos:</h5>
                                                        <table className="squad-card-table" style={{ borderCollapse: "collapse", width: "100%", marginBottom: "15px" }}>
                                                            <thead>
                                                                <tr style={{ backgroundColor: "#3e3e3e" }}>
                                                                    <th>Movimiento</th>
                                                                    <th>Acciones por turno</th>
                                                                    <th>Acciones de grupo</th>
                                                                    <th>Defensa</th>
                                                                    <th>Tirada de salvación</th>
                                                                    <th>Heridas</th>
                                                                    <th>Base figura</th>
                                                                </tr>
                                                            </thead>
                                                            <tbody>
                                                                <tr>
                                                                    <td>{soldier.m}</td>
                                                                    <td>{soldier.apl}</td>
                                                                    <td>{soldier.ga}</td>
                                                                    <td>{soldier.df}</td>
                                                                    <td>{soldier.sv}</td>
                                                                    <td>{soldier.w}</td>
                                                                    <td>{soldier.base}</td>
                                                                </tr>
                                                            </tbody>
                                                        </table>

                                                        <div className="squad-card-weapons">
                                                            <h5 style={{ borderBottom: "1px solid #d4af37", paddingBottom: "5px", marginBottom: "10px" }}>Armas:</h5>
                                                            <table className="squad-card-table" style={{ borderCollapse: "collapse", width: "100%" }}>
                                                                <thead>
                                                                    <tr style={{ backgroundColor: "#3e3e3e" }}>
                                                                        <th>Nombre del arma</th>
                                                                        <th>A</th>
                                                                        <th>BS/WS</th>
                                                                        <th>Dmg</th>
                                                                        <th>Tipo de daño</th>
                                                                        <th>Reglas especiales</th>
                                                                    </tr>
                                                                </thead>
                                                                <tbody>
                                                                    {soldier.weapons.map((weapon, index) => (
                                                                        <tr key={`${weapon.id}-${index}-weapon`}>
                                                                            <td>{weapon.name}</td>
                                                                            <td>{weapon.a}</td>
                                                                            <td>{weapon.bs_ws}</td>
                                                                            <td>{weapon.d}</td>
                                                                            <td>{weapon.type}</td>
                                                                            <td>
                                                                                {weapon.specialRules.map((rule, i) => (
                                                                                    <p key={i}>
                                                                                        {rule.name.endsWith("x") ? `${rule.name.slice(0, -1)} ${rule.type}` : rule.name}
                                                                                    </p>
                                                                                ))}
                                                                            </td>
                                                                        </tr>
                                                                    ))}
                                                                </tbody>
                                                            </table>
                                                        </div>

                                                        <div className="squad-card-footer" style={{ marginTop: "10px" }}>
                                                            <p className="squad-keywords"><strong>Keywords: </strong>
                                                                {soldier.keywords.map((keyword, index) => (
                                                                    <span key={`${soldier.id}-${keyword.name}`}>
                                                                        {keyword.name}{index < soldier.keywords.length - 1 ? ", " : ""}
                                                                    </span>
                                                                ))}
                                                            </p>
                                                        </div>
                                                    </div>
                                                )}
                                            </Card.Body>
                                        </Col>
                                    </Row>
                                </Card>
                            </div>
                        ))}
                    </div>
                )}

                {(squad || soldiers.length > 0) && (
                    <div className="mt-5">
                        <h2 className="text-gold"
                            style={{ color: "#d4af37", borderBottom: "1px solid #d4af37", marginBottom: "20px", paddingBottom: "10px" }}>
                            Galería del Escuadrón
                        </h2>
                        <Carousel variant="dark" interval={3000}>
                            {squad && (
                                <Carousel.Item>
                                    <div style={{
                                        position: 'relative', textAlign: 'center', width: '100%', height: '400px',
                                        display: 'flex', alignItems: 'center', justifyContent: 'center',
                                        backgroundColor: '#1e1e1e', borderRadius: '10px', border: '2px solid #d4af37'
                                    }}>
                                        <h3 style={{
                                            color: '#d4af37', position: 'absolute', top: '10px', left: '50%',
                                            transform: 'translateX(-50%)', backgroundColor: 'rgba(0, 0, 0, 0.6)',
                                            padding: '5px 10px', borderRadius: '5px'
                                        }}>{squad.name}</h3>
                                        <img
                                            src={`${routeApi()}${squad.image}`}
                                            alt={`Escuadrón: ${squad.name}`}
                                            style={{ maxHeight: '100%', maxWidth: '100%', objectFit: 'contain' }}
                                        />
                                    </div>
                                </Carousel.Item>
                            )}
                            {soldiers.map(s => (
                                <Carousel.Item key={`carousel-${s.id}`}>
                                    <div style={{
                                        position: 'relative', textAlign: 'center', width: '100%', height: '400px',
                                        display: 'flex', alignItems: 'center', justifyContent: 'center',
                                        backgroundColor: '#1e1e1e', borderRadius: '10px', border: '2px solid #d4af37'
                                    }}>
                                        <h5 style={{
                                            color: '#d4af37', position: 'absolute', top: '10px', left: '50%',
                                            transform: 'translateX(-50%)', backgroundColor: 'rgba(0, 0, 0, 0.6)',
                                            padding: '3px 8px', borderRadius: '5px'
                                        }}>{s.name}</h5>
                                        <img
                                            src={`${routeApi()}${s.image}`}
                                            alt={s.name}
                                            style={{ maxHeight: '100%', maxWidth: '100%', objectFit: 'contain' }}
                                        />
                                    </div>
                                </Carousel.Item>
                            ))}
                        </Carousel>
                    </div>
                )}
            </div>

            {/* Botón Back to Top con imagen de fondo */}
            <a href="#scroll-container">
                <button
                    style={{
                        position: "fixed",
                        bottom: "20px",
                        right: "20px",
                        width: "60px",
                        height: "60px",
                        backgroundColor: "#d4af37",
                        backgroundImage: "url(/src/assets/images/backToTop.png)",
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                        border: "none",
                        borderRadius: "50%",
                        cursor: "pointer",
                        boxShadow: "0 0 10px rgba(0,0,0,0.3)",
                        zIndex: 1000,
                        transition: "transform 0.3s ease"
                    }}
                    onMouseOver={(e) => e.target.style.transform = "scale(1.1)"}
                    onMouseOut={(e) => e.target.style.transform = "scale(1)"}
                    onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                >
                </button>
            </a>
        </div>
    );
}