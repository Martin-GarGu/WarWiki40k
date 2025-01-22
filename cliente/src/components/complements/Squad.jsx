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
    const [isFavorite, setIsFavorite] = useState(false);
    const navigate = useNavigate();

    const user = JSON.parse(localStorage.getItem("user"));
    const authToken = localStorage.getItem("authToken");

    const createFavoriteSquad = async () => {
        if (!user || !authToken) return;

        const squadId = squad.id;

        try {
            const response = await fetch(`${import.meta.env.VITE_APP_PETICION_IP}/api/favorites/create`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${authToken}`,
                },
                body: JSON.stringify({
                    user_id: user.id,
                    favorites_id: squadId,
                    favorites_type: "Squadron",
                }),
            });

            const data = await response.json();

            if (response.ok) {
                console.log("Escuadrón añadido a favoritos");
                setIsFavorite(true);
            } else {
                console.error("Error al crear el favorito:", data.message);
            }
        } catch (error) {
            console.error("Error al crear el favorito:", error);
        }
    };

    const checkFavorite = async () => {
        if (!user || !authToken) return;

        try {
            const response = await fetch(`${import.meta.env.VITE_APP_PETICION_IP}/api/favorites/check`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${authToken}`,
                },
                body: JSON.stringify({
                    user_id: user.id,
                    favorites_id: squad.id,
                    favorites_type: "Squadron",
                }),
            });

            const data = await response.json();
            setIsFavorite(data.isFavorite);
        } catch (error) {
            console.error("Error al comprobar favorito:", error);
        }
    };

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

    useEffect(() => {
        if (squad && user) {
            checkFavorite();
        }
    }, [squad, user]);

    if (isLoading) return <p>Cargando...</p>;
    if (errorMessage) return <p>{errorMessage}</p>;

    const handleSpecialRules = () => {
        navigate("/specialRules");
    };

    return (
        <div className="container">
            {squad && (
                <>
                    <img src={`${routeApi()}${squad.image}`} alt={squad.name} />
                    <h1>{squad.name}</h1>
                    <p>{squad.description}</p>

                    {user && !isFavorite && (
                        <button onClick={createFavoriteSquad} className="btn btn-primary">
                            Agregar a favoritos
                        </button>
                    )}

                    {isFavorite && <p>Este escuadrón ya está en tus favoritos.</p>}
                </>
            )}
            <button onClick={handleSpecialRules} className="btn btn-primary">
                Ver reglas especiales
            </button>
            <h2>Soldados</h2>

            {soldiers.length === 0 ? (
                <p>No hay soldados disponibles para este escuadrón.</p>
            ) : (
                <div className="row">
                    <div className="justify-content-center col-12 squadsDivDatos ms-2">
                        {soldiers.map((soldier, index) => (
                            <div key={index} className="d-flex justify-content-center row squadsDivDatos">
                                <Card key={`${soldier.id}-${index}-soldier`} className="squad-card card col-12" style={{ width: '100vh' }}>
                                    <div className="squad-card-content">
                                        <Row className="g-2">
                                            <Col lg={4} md={12} className="d-flex justify-content-center">
                                                <img
                                                    src={`${routeApi()}${soldier.image}`}
                                                    alt={soldier.name}
                                                    className="squad-card-image"
                                                    style={{ width: '100%', height: 'auto', maxHeight: '200px', objectFit: 'contain' }}
                                                />
                                            </Col>
                                            <Col lg={8} md={12}>
                                                <Card.Body>
                                                    <Card.Title className="squad-card-title">
                                                        <strong>{soldier.name}</strong>
                                                    </Card.Title>
                                                    <p>{soldier.description}</p>
                                                    <table className="squad-card-table">
                                                        <thead>
                                                            <tr>
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
                                                </Card.Body>
                                                <div className="squad-card-weapons">
                                                    <h5>Armas:</h5>
                                                    <table className="squad-card-table">
                                                        <thead>
                                                            <tr>
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
                                                                    <td>{weapon.specialRules.map((specialRule, index) => (
                                                                        <p key={index}>
                                                                            {specialRule.name.endsWith("x") ? (
                                                                                `${specialRule.name.substring(0, specialRule.name.length - 1)} ${specialRule.type}`
                                                                            ) : specialRule.name}
                                                                        </p>
                                                                    ))}</td>
                                                                </tr>
                                                            ))}
                                                        </tbody>
                                                    </table>
                                                </div>
                                                <div className="squad-card-footer">
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
                                            </Col>
                                        </Row>
                                    </div>
                                </Card>
                            </div>
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
}
