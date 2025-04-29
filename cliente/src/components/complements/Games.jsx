import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function Games() {
    const [user, setUser] = useState(null);
    const [games, setGames] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [usernames, setUsernames] = useState({});
    const [currentPage, setCurrentPage] = useState(1);
    const [showModal, setShowModal] = useState(false);
    const gamesPerPage = 5;
    const navigate = useNavigate();

    // Estados para el modal de crear partida
    const [user2Name, setUser2Name] = useState("");
    const [user2Id, setUser2Id] = useState(null);
    const [winner, setWinner] = useState("");
    const [user1Points, setUser1Points] = useState("");
    const [user2Points, setUser2Points] = useState("");
    const [searchStatus, setSearchStatus] = useState(null); // null, "success", "error"
    const [modalError, setModalError] = useState("");

    useEffect(() => {
        const userData = localStorage.getItem("user");
        if (userData) {
            const parsedUser = JSON.parse(userData);
            setUser(parsedUser);
            fetchGames(parsedUser.id);
        } else {
            navigate("/login");
        }
    }, [navigate]);

    // Validar puntos cuando cambian el ganador o los valores de puntos
    useEffect(() => {
        if (winner && user1Points && user2Points) {
            validatePoints();
        }
    }, [winner, user1Points, user2Points]);

    const validatePoints = () => {
        const points1 = parseInt(user1Points, 10);
        const points2 = parseInt(user2Points, 10);
        
        if (isNaN(points1) || isNaN(points2)) {
            setModalError("Los puntos deben ser valores numéricos");
            return false;
        }
        
        if (points1 < 0 || points2 < 0) {
            setModalError("Los puntos no pueden ser negativos");
            return false;
        }
        
        if (winner === "1" && points1 <= points2) {
            setModalError("El Jugador 1 debe tener más puntos si es el ganador");
            return false;
        }
        
        if (winner === "2" && points2 <= points1) {
            setModalError("El Jugador 2 debe tener más puntos si es el ganador");
            return false;
        }
        
        setModalError("");
        return true;
    };

    const fetchGames = async (userId) => {
        try {
            const token = localStorage.getItem("token");
            const response = await fetch(`${import.meta.env.VITE_APP_PETICION_IP}/api/games/${userId}`, {
                method: "GET",
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });
            if (!response.ok) {
                throw new Error("Error al obtener las partidas");
            }
            const data = await response.json();
            const gameData = data.data || [];
            setGames(gameData);

            const userIds = [
                ...new Set(
                    gameData.flatMap((game) => [game.user1_id, game.user2_id])
                ),
            ];

            const unresolvedIds = userIds.filter((id) => !(id in usernames));
            if (unresolvedIds.length > 0) {
                await fetchUsernames(unresolvedIds);
            }
        } catch (err) {
            setError(err.message);
        } finally {
            setLoading(false);
        }
    };

    const fetchUsernames = async (userIds) => {
        try {
            const token = localStorage.getItem("token");
            const requests = userIds.map((id) =>
                fetch(`${import.meta.env.VITE_APP_PETICION_IP}/api/userId/${id}`, {
                    method: "GET",
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                })
            );
            const responses = await Promise.all(requests);

            const resolvedUsernames = {};
            for (let i = 0; i < responses.length; i++) {
                if (responses[i].ok) {
                    const data = await responses[i].json();
                    resolvedUsernames[userIds[i]] = data.data.username;
                }
            }

            setUsernames((prev) => ({ ...prev, ...resolvedUsernames }));
        } catch (err) {
            setError(err.message);
        }
    };

    const handleEliminate = async (id) => {
        try {
            const token = localStorage.getItem("token");
            const response = await fetch(
                `${import.meta.env.VITE_APP_PETICION_IP}/api/games/delete/${id}`,
                {
                    method: "DELETE",
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                }
            );

            if (!response.ok) {
                throw new Error("Error al eliminar la partida");
            }

            setGames((prev) => prev.filter((game) => game.id !== id));
        } catch (err) {
            setError(err.message);
        }
    };

    const handleUpdate = async (game) => {
        navigate("/update/game", { state: { game } });
    };

    const handleCreateGameClick = () => {
        // Abrir el modal de crear partida
        resetModalFields();
        setShowModal(true);
    };

    const handleCloseModal = () => {
        setShowModal(false);
        resetModalFields();
    };

    // Función para buscar el jugador 2 por nombre
    const searchUser2ByName = async () => {
        try {
            if (!user2Name) {
                setSearchStatus("error");
                setModalError("Por favor, introduce un nombre de usuario para buscar");
                return;
            }

            const response = await fetch(
                `${import.meta.env.VITE_APP_PETICION_IP}/api/userUsername/${user2Name}`
            );

            const textResponse = await response.text();
            const data = JSON.parse(textResponse);

            if (response.ok && data.data && data.data.id) {
                setUser2Id(data.data.id);
                setSearchStatus("success");
                setModalError("");
            } else {
                setUser2Id(null);
                setSearchStatus("error");
                setModalError("Usuario no encontrado");
            }
        } catch (error) {
            console.error("Error:", error.message);
            setUser2Id(null);
            setSearchStatus("error");
            setModalError("Error al buscar el usuario");
        }
    };

    // Manejadores para las entradas numéricas
    const handlePointsChange = (e, playerType) => {
        const value = e.target.value;
        // Solo permitir números positivos
        if (value === "" || (parseInt(value, 10) >= 0 && !isNaN(parseInt(value, 10)))) {
            if (playerType === "user1") {
                setUser1Points(value);
            } else {
                setUser2Points(value);
            }
        }
    };

    // Función para manejar la creación de una nueva partida
    const handleSaveGame = async () => {
        try {
            // Validaciones básicas
            if (!user2Id) {
                setModalError("Debes buscar y seleccionar un jugador 2 válido");
                return;
            }
            
            if (!winner) {
                setModalError("Por favor selecciona un ganador");
                return;
            }
            
            if (!user1Points || !user2Points) {
                setModalError("Ambos jugadores deben tener puntos asignados");
                return;
            }
            
            // Validar puntos
            if (!validatePoints()) {
                return;
            }

            const newGameData = {
                user1_id: user.id,
                user2_id: user2Id,
                winner: parseInt(winner, 10),
                points_user1: parseInt(user1Points, 10),
                points_user2: parseInt(user2Points, 10),
            };

            const token = localStorage.getItem("token");
            const response = await fetch(`${import.meta.env.VITE_APP_PETICION_IP}/api/games/create`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token}`,
                },
                body: JSON.stringify(newGameData),
            });

            const responseText = await response.text();
            let data;
            
            try {
                data = JSON.parse(responseText);
            } catch (parseError) {
                throw new Error("El servidor devolvió un formato inesperado.");
            }

            if (response.ok) {
                // Actualizar la lista de partidas
                fetchGames(user.id);
                // Cerrar el modal
                handleCloseModal();
            } else {
                throw new Error(data?.message || "Hubo un error al crear la partida.");
            }
        } catch (err) {
            setModalError(err.message);
        }
    };

    const resetModalFields = () => {
        setUser2Name("");
        setUser2Id(null);
        setWinner("");
        setUser1Points("");
        setUser2Points("");
        setSearchStatus(null);
        setModalError("");
    };

    const indexOfLast = currentPage * gamesPerPage;
    const indexOfFirst = indexOfLast - gamesPerPage;
    const currentGames = games.slice(indexOfFirst, indexOfLast);
    const totalPages = Math.ceil(games.length / gamesPerPage);

    return (
        <div className="games-container">
            <h2 className="text-center">Mis Partidas</h2>
            {loading ? (
                <p className="loading-text">Cargando...</p>
            ) : error ? (
                <p className="error-text">{error}</p>
            ) : games.length > 0 ? (
                <>
                    <table className="games-table table table-dark table-striped">
                        <thead>
                            <tr>
                                <th>Jugador 1</th>
                                <th>Jugador 2</th>
                                <th>Ganador</th>
                                <th>Puntos Jugador 1</th>
                                <th>Puntos Jugador 2</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            {currentGames.map((game) => (
                                <tr key={game.id}>
                                    <td>
                                        {game.user1_id === user?.id
                                            ? user.username
                                            : usernames[game.user1_id] || "Desconocido"}
                                    </td>
                                    <td>
                                        {game.user2_id === user?.id
                                            ? user.username
                                            : usernames[game.user2_id] || "Desconocido"}
                                    </td>
                                    <td>
                                        {game.winner === 1
                                            ? `${usernames[game.user1_id] || "Desconocido"} (Jugador 1)`
                                            : `${usernames[game.user2_id] || "Desconocido"} (Jugador 2)`}
                                    </td>
                                    <td>{game.points_user1}</td>
                                    <td>{game.points_user2}</td>
                                    <td>
                                        <button
                                            className="btn btn-info btn-sm"
                                            onClick={() => handleUpdate(game)}
                                            title="Editar"
                                        >
                                            <i className="fa fa-edit"></i>
                                        </button>
                                        <button
                                            className="btn btn-danger btn-sm"
                                            onClick={() => handleEliminate(game.id)}
                                            title="Eliminar"
                                        >
                                            <i className="fa fa-trash-alt"></i>
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>

                    {/* Paginación */}
                    <div className="pagination-controls text-center mt-3">
                        <button
                            className="btn btn-secondary btn-sm me-2"
                            onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
                            disabled={currentPage === 1}
                        >
                            Anterior
                        </button>
                        <span className="text-white">Página {currentPage} de {totalPages}</span>
                        <button
                            className="btn btn-secondary btn-sm ms-2"
                            onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
                            disabled={currentPage === totalPages}
                        >
                            Siguiente
                        </button>
                    </div>
                </>
            ) : (
                <p className="no-games-text">No tienes partidas todavía.</p>
            )}
            <div className="text-center mt-4">
                <button className="btn btn-primary" onClick={handleCreateGameClick}>
                    Crear nueva partida
                </button>
            </div>

            {/* Modal para crear nueva partida */}
            {showModal && (
                <div className="modal-backdrop">
                    <div className="game-modal">
                        <div className="modal-header">
                            <h3>Crear Nueva Partida</h3>
                        </div>
                        <div className="modal-body">
                            {modalError && (
                                <div className="alert alert-danger mb-3">{modalError}</div>
                            )}
                            
                            <div className="form-group mb-3">
                                <label className="form-label">Jugador 2:</label>
                                <div className="search-container">
                                    <div className="input-wrapper">
                                        <input
                                            type="text"
                                            className="form-control search-input"
                                            value={user2Name}
                                            onChange={(e) => {
                                                setUser2Name(e.target.value);
                                                setSearchStatus(null);
                                            }}
                                            placeholder="Nombre del jugador 2"
                                        />
                                        {searchStatus === "success" && (
                                            <span className="status-icon success">
                                                <i className="fa fa-check"></i>
                                            </span>
                                        )}
                                        {searchStatus === "error" && (
                                            <span className="status-icon error">
                                                <i className="fa fa-times"></i>
                                            </span>
                                        )}
                                    </div>
                                    <button 
                                        className="search-button" 
                                        type="button" 
                                        onClick={searchUser2ByName}
                                    >
                                        <i className="fa fa-search"></i>
                                    </button>
                                </div>
                            </div>
                            
                            <div className="form-group mb-3">
                                <label className="form-label">Ganador:</label>
                                <select
                                    className="form-select"
                                    value={winner}
                                    onChange={(e) => setWinner(e.target.value)}
                                >
                                    <option value="" disabled>Selecciona ganador</option>
                                    <option value="1">Jugador 1</option>
                                    {user2Id && <option value="2">Jugador 2</option>}
                                </select>
                            </div>
                            
                            <div className="form-group mb-3">
                                <label className="form-label">Puntos Jugador 1:</label>
                                <input
                                    type="number"
                                    className="form-control"
                                    value={user1Points}
                                    onChange={(e) => handlePointsChange(e, "user1")}
                                    min="0"
                                />
                            </div>
                            
                            <div className="form-group mb-3">
                                <label className="form-label">Puntos Jugador 2:</label>
                                <input
                                    type="number"
                                    className="form-control"
                                    value={user2Points}
                                    onChange={(e) => handlePointsChange(e, "user2")}
                                    min="0"
                                />
                            </div>
                        </div>
                        <div className="modal-footer">
                            <button 
                                className="btn btn-danger me-2" 
                                id="btnCancelar"
                                onClick={handleCloseModal}
                            >
                                Cancelar
                            </button>
                            <button 
                                className="btn btn-success"
                                id="btnGuardar"
                                onClick={handleSaveGame}
                                disabled={!user2Id || !winner || !user1Points || !user2Points || modalError}
                            >
                                Guardar
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}