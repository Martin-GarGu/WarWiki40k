import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function Games() {
    const [user, setUser] = useState(null);
    const [games, setGames] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [usernames, setUsernames] = useState({});
    const navigate = useNavigate();

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

    const fetchGames = async (userId) => {
        try {
            const token = localStorage.getItem("token"); // Obtener token de localStorage
            const response = await fetch(`${import.meta.env.VITE_APP_PETICION_IP}/api/games/${userId}`, {
                method: "GET",
                headers: {
                    Authorization: `Bearer ${token}`, // Incluir token en el header
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
            const token = localStorage.getItem("token"); // Obtener token de localStorage
            const requests = userIds.map((id) =>
                fetch(`${import.meta.env.VITE_APP_PETICION_IP}/api/userId/${id}`, {
                    method: "GET",
                    headers: {
                        Authorization: `Bearer ${token}`, // Incluir token en el header
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
            const token = localStorage.getItem("token"); // Obtener token de localStorage
            const response = await fetch(
                `${import.meta.env.VITE_APP_PETICION_IP}/api/games/delete/${id}`,
                {
                    method: "DELETE",
                    headers: {
                        Authorization: `Bearer ${token}`, // Incluir token en el header
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

    const handleCreateGame = () => {
        navigate("/games/create");
    };

    return (
        <div className="games-container">
            <h2 className="text-center">Mis Partidas</h2>
            {loading ? (
                <p className="loading-text">Cargando...</p>
            ) : error ? (
                <p className="error-text">{error}</p>
            ) : games.length > 0 ? (
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
                        {games.map((game) => (
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
            ) : (
                <p className="no-games-text">No tienes partidas todavía.</p>
            )}
            <div className="text-center mt-4">
                <button className="btn btn-primary" onClick={handleCreateGame}>
                    Crear nueva partida
                </button>
            </div>
        </div>
    );
}
