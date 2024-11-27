import { useState, useEffect } from "react";

export default function Games() {

    const [user, setUser] = useState(null);
    const [games, setGames] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [user2, setUser2] = useState(null);

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
                throw new Error("Error al obtener los favoritos");
            }

            const data = await response.json();
            setGames(data.data);
        } catch (err) {
            setError(err.message);
        } finally {
            setLoading(false);
        }
    };

    const fetchUsername = async (userId) => {
        try {
            const response = await fetch(`http://${import.meta.env.VITE_APP_PETICION_IP}/api/userId/${userId}`);

            if (!response.ok) {
                throw new Error("Error al obtener los favoritos");
            }

            const data = await response.json();
            setUser2(data.data);
        } catch (err) {
            setError(err.message);
        } finally {
            setLoading(false);
        }
    }

    return (
        <>
            <div>
                {games.length > 0 ? (
                    <table>
                        <thead>
                            <tr>
                                <th>Jugador 1</th>
                                <th>Jugador 2</th>
                                <th>Winner</th>
                                <th>Puntos jugador 1</th>
                                <th>Puntos jugador 2</th>
                            </tr>
                        </thead>
                        <tbody>
                            {games.map((game) => (
                                <tr key={game.id}>
                                    <td>{game.user1_id == user.id ? user.username : game.user1_id}</td>
                                    <td>{game.user2_id == user.id ? user.username : (fetchUsername(game.user2_id) ? user2[0].username : game.user2_id)}</td>
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
                <button className="button border-black border">Crear nueva partida</button>
            </div>
        </>
    );
}