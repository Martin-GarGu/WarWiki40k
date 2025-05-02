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
    const [showEditModal, setShowEditModal] = useState(false);
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
    
    // Estado para el modal de editar
    const [currentGame, setCurrentGame] = useState(null);
    const [editUser2Name, setEditUser2Name] = useState("");
    const [editUser2Id, setEditUser2Id] = useState(null); 
    const [editWinner, setEditWinner] = useState("");
    const [editUser1Points, setEditUser1Points] = useState("");
    const [editUser2Points, setEditUser2Points] = useState("");
    const [editSearchStatus, setEditSearchStatus] = useState(null);
    const [editError, setEditError] = useState("");
    const [editSuccess, setEditSuccess] = useState("");

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

    // Validar puntos de edición
    useEffect(() => {
        if (editWinner && editUser1Points && editUser2Points) {
            validateEditPoints();
        }
    }, [editWinner, editUser1Points, editUser2Points]);

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

    const validateEditPoints = () => {
        const points1 = parseInt(editUser1Points, 10);
        const points2 = parseInt(editUser2Points, 10);
        
        if (isNaN(points1) || isNaN(points2)) {
            setEditError("Los puntos deben ser valores numéricos");
            return false;
        }
        
        if (points1 < 0 || points2 < 0) {
            setEditError("Los puntos no pueden ser negativos");
            return false;
        }
        
        if (editWinner === "1" && points1 <= points2) {
            setEditError("El Jugador 1 debe tener más puntos si es el ganador");
            return false;
        }
        
        if (editWinner === "2" && points2 <= points1) {
            setEditError("El Jugador 2 debe tener más puntos si es el ganador");
            return false;
        }
        
        setEditError("");
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

    const handleCreateGameClick = () => {
        // Abrir el modal de crear partida
        resetModalFields();
        setShowModal(true);
    };

    const handleCloseModal = () => {
        setShowModal(false);
        resetModalFields();
    };

    const handleOpenEditModal = (game) => {
        setCurrentGame(game);
        setEditWinner(game.winner.toString());
        setEditUser1Points(game.points_user1.toString());
        setEditUser2Points(game.points_user2.toString());
        
        // Si el usuario actual es user1, entonces user2 es el otro usuario
        const otherUserId = user.id === game.user1_id ? game.user2_id : game.user1_id;
        setEditUser2Id(otherUserId);
        setEditUser2Name(usernames[otherUserId] || "");
        setEditSearchStatus("success"); // Ya tenemos el usuario, así que marcamos como éxito
        
        setEditError("");
        setEditSuccess("");
        setShowEditModal(true);
    };

    const handleCloseEditModal = () => {
        setShowEditModal(false);
        setCurrentGame(null);
        setEditWinner("");
        setEditUser1Points("");
        setEditUser2Points("");
        setEditUser2Name("");
        setEditUser2Id(null);
        setEditSearchStatus(null);
        setEditError("");
        setEditSuccess("");
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

    // Función para buscar el jugador 2 por nombre en el modal de edición
    const searchEditUser2ByName = async () => {
        try {
            if (!editUser2Name) {
                setEditSearchStatus("error");
                setEditError("Por favor, introduce un nombre de usuario para buscar");
                return;
            }

            const response = await fetch(
                `${import.meta.env.VITE_APP_PETICION_IP}/api/userUsername/${editUser2Name}`
            );

            const textResponse = await response.text();
            const data = JSON.parse(textResponse);

            if (response.ok && data.data && data.data.id) {
                setEditUser2Id(data.data.id);
                setEditSearchStatus("success");
                setEditError("");
            } else {
                setEditUser2Id(null);
                setEditSearchStatus("error");
                setEditError("Usuario no encontrado");
            }
        } catch (error) {
            console.error("Error:", error.message);
            setEditUser2Id(null);
            setEditSearchStatus("error");
            setEditError("Error al buscar el usuario");
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

    // Manejador para los puntos en el modal de edición
    const handleEditPointsChange = (e, playerType) => {
        const value = e.target.value;
        // Solo permitir números positivos
        if (value === "" || (parseInt(value, 10) >= 0 && !isNaN(parseInt(value, 10)))) {
            if (playerType === "user1") {
                setEditUser1Points(value);
            } else {
                setEditUser2Points(value);
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

    // Función para manejar la actualización de una partida
    const handleUpdateGame = async () => {
        try {
            // Validaciones básicas
            if (!editUser2Id) {
                setEditError("Debes buscar y seleccionar un jugador 2 válido");
                return;
            }
            
            if (!editWinner) {
                setEditError("Por favor selecciona un ganador");
                return;
            }
            
            if (!editUser1Points || !editUser2Points) {
                setEditError("Ambos jugadores deben tener puntos asignados");
                return;
            }
            
            // Validar puntos
            if (!validateEditPoints()) {
                return;
            }

            const updatedGameData = {
                user1_id: user.id,
                user2_id: editUser2Id,
                winner: parseInt(editWinner, 10),
                points_user1: parseInt(editUser1Points, 10),
                points_user2: parseInt(editUser2Points, 10),
            };

            const token = localStorage.getItem("token");
            const response = await fetch(`${import.meta.env.VITE_APP_PETICION_IP}/api/games/${currentGame.id}`, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token}`,
                },
                body: JSON.stringify(updatedGameData),
            });

            const responseText = await response.text();
            let data;
            
            try {
                data = JSON.parse(responseText);
            } catch (parseError) {
                throw new Error("El servidor devolvió un formato inesperado.");
            }

            if (response.ok) {
                setEditSuccess("Partida actualizada exitosamente.");
                // Actualizar la lista de partidas
                fetchGames(user.id);
                // Cerrar el modal después de 2 segundos
                setTimeout(() => {
                    handleCloseEditModal();
                }, 2000);
            } else {
                throw new Error(data?.message || "Hubo un error al actualizar la partida.");
            }
        } catch (err) {
            setEditError(err.message);
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
                                            onClick={() => handleOpenEditModal(game)}
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

                    {/* Paginación - solo mostrar si hay más de una página */}
                    {totalPages > 1 && (
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
                    )}
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

            {/* Modal para editar partida - ahora con la misma estructura que el de crear */}
            {showEditModal && currentGame && (
                <div className="modal-backdrop">
                    <div className="game-modal">
                        <div className="modal-header">
                            <h3>Editar Partida</h3>
                        </div>
                        <div className="modal-body">
                            {editError && (
                                <div className="alert alert-danger mb-3">{editError}</div>
                            )}
                            {editSuccess && (
                                <div className="alert alert-success mb-3">{editSuccess}</div>
                            )}
                            
                            <div className="form-group mb-3">
                                <label className="form-label">Jugador 2:</label>
                                <div className="search-container">
                                    <div className="input-wrapper">
                                        <input
                                            type="text"
                                            className="form-control search-input"
                                            value={editUser2Name}
                                            onChange={(e) => {
                                                setEditUser2Name(e.target.value);
                                                setEditSearchStatus(null);
                                            }}
                                            placeholder="Nombre del jugador 2"
                                        />
                                        {editSearchStatus === "success" && (
                                            <span className="status-icon success">
                                                <i className="fa fa-check"></i>
                                            </span>
                                        )}
                                        {editSearchStatus === "error" && (
                                            <span className="status-icon error">
                                                <i className="fa fa-times"></i>
                                            </span>
                                        )}
                                    </div>
                                    <button 
                                        className="search-button" 
                                        type="button" 
                                        onClick={searchEditUser2ByName}
                                    >
                                        <i className="fa fa-search"></i>
                                    </button>
                                </div>
                            </div>
                            
                            <div className="form-group mb-3">
                                <label className="form-label">Ganador:</label>
                                <select
                                    className="form-select"
                                    value={editWinner}
                                    onChange={(e) => setEditWinner(e.target.value)}
                                >
                                    <option value="" disabled>Selecciona ganador</option>
                                    <option value="1">Jugador 1</option>
                                    {editUser2Id && <option value="2">Jugador 2</option>}
                                </select>
                            </div>
                            
                            <div className="form-group mb-3">
                                <label className="form-label">Puntos Jugador 1:</label>
                                <input
                                    type="number"
                                    className="form-control"
                                    value={editUser1Points}
                                    onChange={(e) => handleEditPointsChange(e, "user1")}
                                    min="0"
                                />
                            </div>
                            
                            <div className="form-group mb-3">
                                <label className="form-label">Puntos Jugador 2:</label>
                                <input
                                    type="number"
                                    className="form-control"
                                    value={editUser2Points}
                                    onChange={(e) => handleEditPointsChange(e, "user2")}
                                    min="0"
                                />
                            </div>
                        </div>
                        <div className="modal-footer">
                            <button 
                                className="btn btn-danger me-2" 
                                id="btnCancelar"
                                onClick={handleCloseEditModal}
                            >
                                Cancelar
                            </button>
                            <button 
                                className="btn btn-success"
                                id="btnActualizar"
                                onClick={handleUpdateGame}
                                disabled={!editUser2Id || !editWinner || !editUser1Points || !editUser2Points || editError}
                            >
                                Actualizar
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}