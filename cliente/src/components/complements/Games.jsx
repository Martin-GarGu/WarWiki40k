import { useState, useEffect } from "react";

export default function Games(){

    const [user, setUser] = useState(null);
    const [games, setGames] = useState([]);
    const [loading, setLoading] = useState(true);
     const [error, setError] = useState(null); 

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

    return(
        <>
            <div>
            {games.length > 0 ? (
                    <table>
                        <thead>
                            <tr>
                                <th>Usuario 1</th>
                                <th>Usuario 2</th>
                                <th>Winner</th>
                            </tr>
                        </thead>
                        <tbody>
                            {games.map((game) => (
                                <tr key={game.id}>
                                    <td>{user.username || "No disponible"}</td>
                                    <td>{game.user2_id}</td>
                                    <td>{game.winner}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                ) : (
                    <p>No tienes partidas todavía.</p>
                )}
            </div>
        </>
    );
}