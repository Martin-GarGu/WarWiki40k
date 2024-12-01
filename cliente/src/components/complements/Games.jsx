import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom"; // Importamos useNavigate

export default function Games() {
    const [user, setUser] = useState(null);
    const [games, setGames] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [usernames, setUsernames] = useState({}); // Almacenamos usernames por ID
    const navigate = useNavigate(); // Inicializamos el hook de navegación

    useEffect(() => {
        const userData = localStorage.getItem("user");
        if (userData) {
            const parsedUser = JSON.parse(userData);
            setUser(parsedUser);
            fetchGames(parsedUser.id);
        } else {
            setLoading(false);
        }
    }, []);

    const fetchGames = async (userId) => {
        try {
            const response = await fetch(`http://${import.meta.env.VITE_APP_PETICION_IP}/api/games/${userId}`);
            if (!response.ok) {
                throw new Error("Error al obtener las partidas");
            }
            const data = await response.json();

            // Cargar juegos y luego obtener los usernames
            const gameData = data.data || [];
            setGames(gameData);

            // Obtener todos los user_ids únicos de los juegos
            const userIds = [
                ...new Set(
                    gameData.flatMap((game) => [game.user1_id, game.user2_id])
                ),
            ];

            // Filtrar IDs que no hemos resuelto aún
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
            const requests = userIds.map((id) =>
                fetch(`http://${import.meta.env.VITE_APP_PETICION_IP}/api/userId/${id}`)
            );
            const responses = await Promise.all(requests);

            const resolvedUsernames = {};
            for (let i = 0; i < responses.length; i++) {
                if (responses[i].ok) {
                    const data = await responses[i].json();
                    resolvedUsernames[userIds[i]] = data.data.username; // Asumiendo que `data.data` contiene `username`
                }
            }

            setUsernames((prev) => ({ ...prev, ...resolvedUsernames }));
        } catch (err) {
            setError(err.message);
        }
    };

    // Función para redirigir al componente CreateGame
    const handleCreateGame = () => {
        navigate("/games/create");
    };

    return (
        <>
            <div>
                {games.length > 0 ? (
                    <table>
                        <thead>
                            <tr>
                                <th>Jugador 1</th>
                                <th>Jugador 2</th>
                                <th>Ganador</th>
                                <th>Puntos jugador 1</th>
                                <th>Puntos jugador 2</th>
                            </tr>
                        </thead>
                        <tbody>
                            {games.map((game) => (
                                <tr key={game.id}>
                                    <td>
                                        {game.user1_id === user?.id
                                            ? user.username
                                            : usernames[game.user1_id] || "Cargando..."}
                                    </td>
                                    <td>
                                        {game.user2_id === user?.id
                                            ? user.username
                                            : usernames[game.user2_id] || "Cargando..."}
                                    </td>
                                    <td>{game.winner}</td>
                                    <td>{game.points_user1}</td>
                                    <td>{game.points_user2}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                ) : (
                    <p>No tienes partidas todavía.</p>
                )}
            </div>
            <div>
                <button className="button border-black border" onClick={handleCreateGame}>
                    Crear nueva partida
                </button>
            </div>
        </>
    );
}
