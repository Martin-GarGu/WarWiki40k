import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
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

    useEffect(() => {
        const fetchSquadData = async () => {
            if (!slug) {
                setErrorMessage("No se pudo obtener el slug del escuadrón.");
                setIsLoading(false);
                return;
            }

            try {
                const squadResponse = await fetch(`${import.meta.env.VITE_APP_PETICION_IP}/api/squads/${slug}`);
                if (!squadResponse.ok) {
                    throw new Error(`Error HTTP al obtener datos del escuadrón: ${squadResponse.status}`);
                }
                const squadData = await squadResponse.json();
                setSquad(squadData);

                const soldiersResponse = await fetch(
                    `${import.meta.env.VITE_APP_PETICION_IP}/api/soldiersSquadron/${slug}`
                );
                if (!soldiersResponse.ok) {
                    throw new Error(`Error HTTP al obtener soldados: ${soldiersResponse.status}`);
                }
                const soldiersData = await soldiersResponse.json();
                setSoldiers(soldiersData.data || []);

                setErrorMessage(null);
            } catch (error) {
                console.error("Error al cargar los datos:", error);
                setErrorMessage("Error al cargar los datos. Inténtalo nuevamente.");
            } finally {
                setIsLoading(false);
            }
        };

        fetchSquadData();
    }, [slug]);

    const filteredSoldiers = soldiers.filter((soldier) =>
        soldier.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const toggleExpand = (id) => {
        setExpanded((prev) => ({ ...prev, [id]: !prev[id] }));
    };

    if (isLoading) return <p>Cargando...</p>;
    if (errorMessage) return <p>{errorMessage}</p>;

    return (
        <div className="d-flex">
            <div className="sidebar rounded-2" style={{ position: "fixed", top: "110px", left: "20px", width: "200px", height: "auto", overflowY: "auto", backgroundColor: "#2e2e2e", padding: "10px", color: "#d4af37", border: "2px solid #d4af37" }}>
                <h5 style={{ marginBottom: "15px", borderBottom: "1px solid #d4af37", paddingBottom: "10px" }}>Índice de Soldados</h5>
                <input
                    type="text"
                    placeholder="Buscar soldado..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    style={{ width: "100%", padding: "5px", marginBottom: "10px", color: "white" }}
                />
                <ul style={{ listStyle: "none", padding: 0 }}>
                    {filteredSoldiers.map((soldier, index) => (
                        <li key={index} style={{ marginBottom: "10px" }}>
                            <a href={`#soldier-${soldier.id}`} style={{ textDecoration: "none", color: "#d4af37", cursor: "pointer", transition: "color 0.3s" }}
                                onMouseOver={(e) => e.target.style.color = "#fff"}
                                onMouseOut={(e) => e.target.style.color = "#d4af37"}>
                                {soldier.name}
                            </a>
                        </li>
                    ))}
                </ul>
            </div>

            <div className="container" style={{ marginLeft: "220px" }}>
                {squad && (
                    <>
                        <img src={`${routeApi()}${squad.image}`} alt={squad.name} className="img-fluid mb-3" style={{ border: "2px solid #d4af37", borderRadius: "10px", marginTop: "10px" }} />
                        <h1 className="text-gold" style={{ color: "#d4af37" }}>{squad.name}</h1>
                        <p style={{ color: "#ccc" }}>{squad.description}</p>
                    </>
                )}

                <h2 className="text-gold" style={{ color: "#d4af37", borderBottom: "1px solid #d4af37", marginBottom: "20px", paddingBottom: "10px" }}>Soldados</h2>

                {filteredSoldiers.length === 0 ? (
                    <p style={{ color: "#fff" }}>No hay soldados disponibles para este escuadrón.</p>
                ) : (
                    <div className="row">
                        {filteredSoldiers.map((soldier) => (
                            <div key={soldier.id} className="col-12 mb-4" id={`soldier-${soldier.id}`}>
                                <Card className="squad-card" style={{ backgroundColor: "#1e1e1e", color: "#d4af37", border: "1px solid #d4af37" }}>
                                    <Row className="g-2">
                                        <Col lg={4} md={12} className="d-flex justify-content-center">
                                            <img
                                                src={`${routeApi()}${soldier.image}`}
                                                alt={soldier.name}
                                                className="squad-card-image"
                                                style={{ width: '100%', height: 'auto', maxHeight: '200px', objectFit: 'contain', border: "1px solid #d4af37", borderRadius: "5px" }}
                                            />
                                        </Col>
                                        <Col lg={8} md={12}>
                                            <Card.Body>
                                                <Card.Title style={{ borderBottom: "1px solid #d4af37", paddingBottom: "10px", cursor: "pointer" }} onClick={() => toggleExpand(soldier.id)} className="text-center">
                                                    <strong style={{ color: "#d4af37" }}>{soldier.name}</strong>
                                                </Card.Title>
                                                {expanded[soldier.id] && (
                                                    <div>
                                                        <p>{soldier.description}</p>
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
                                                                                {weapon.specialRules.map((specialRule, i) => (
                                                                                    <p key={i}>
                                                                                        {specialRule.name.endsWith("x")
                                                                                            ? `${specialRule.name.substring(0, specialRule.name.length - 1)} ${specialRule.type}`
                                                                                            : specialRule.name}
                                                                                    </p>
                                                                                ))}
                                                                            </td>
                                                                        </tr>
                                                                    ))}
                                                                </tbody>
                                                            </table>
                                                        </div>
                                                        <div className="squad-card-footer" style={{ marginTop: "10px" }}>
                                                            <p className="squad-keywords">
                                                                <strong>Keywords: </strong>
                                                                {soldier.keywords.map((keyword, index) => (
                                                                    <span key={`${soldier.id}-${keyword.name}`}>
                                                                        {keyword.name}
                                                                        {index < soldier.keywords.length - 1 ? ", " : ""}
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
            </div>
        </div>
    );
}
