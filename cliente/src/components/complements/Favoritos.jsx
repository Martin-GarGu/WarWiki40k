import { useState, useEffect } from "react";

export default function Favoritos() {
    const [user, setUser] = useState(null);
    const [favorites, setFavorites] = useState([]);
    const [loading, setLoading] = useState(true); 
    const [error, setError] = useState(null);

    useEffect(() => {
        const userData = localStorage.getItem("user");
        if (userData) {
            const parsedUser = JSON.parse(userData);
            setUser(parsedUser);
            fetchFavorites(parsedUser.id);
        } else {
            setLoading(false);
        }
    }, []);

    const fetchFavorites = async (userId) => {
        try {
            const response = await fetch(`http://${import.meta.env.VITE_APP_PETICION_IP}/api/favorites/user/${userId}`);
            
            if (!response.ok) {
                throw new Error("Error al obtener los favoritos");
            }

            const data = await response.json();
            setFavorites(data.data);
        } catch (err) {
            setError(err.message);
        } finally {
            setLoading(false);
        }
    };

    if (loading) {
        return <div>Cargando favoritos...</div>;
    }

    if (error) {
        return <div>Error: {error}</div>;
    }

    return (
        <div>
            <h1>Favoritos</h1>
            {favorites.length > 0 ? (
                <table>
                    <thead>
                        <tr>
                            <th>Nombre</th>
                            <th>Tipo</th>
                            <th>Ir</th>
                        </tr>
                    </thead>
                    <tbody>
                        {favorites.map((favorite) => (
                            <tr key={favorite.id}>
                                <td>{favorite.name || "No disponible"}</td>
                                <td>{favorite.favorites_type}</td>
                                <td>
                                    <button
                                        onClick={() =>
                                            window.location.href = `/details/${favorite.favorites_type.toLowerCase()}/${favorite.favorites_id}`
                                        }
                                    >
                                        Ir
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            ) : (
                <p>No tienes favoritos todavía.</p>
            )}
        </div>
    );
}
