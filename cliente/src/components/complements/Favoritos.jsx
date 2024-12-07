import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function Favoritos() {
    const [user, setUser] = useState(null);
    const [favorites, setFavorites] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        const userData = localStorage.getItem("user");
        if (userData) {
            const parsedUser = JSON.parse(userData);
            setUser(parsedUser);
            fetchFavorites(parsedUser.id);
        } else {
            navigate('/login'); // Redirige a /login si no hay usuario logueado
        }
    }, [navigate]); // Agregar navigate como dependencia para evitar advertencias

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

    const handleNavigate = (favorite) => {
        const { favorites_type, slug } = favorite;

        // Redirigir según el tipo de favorito
        switch (favorites_type) {
            case "Faction":
                navigate(`/${slug}`); // Ruta para factions
                break;
            case "Army":
                navigate(`/armies/${slug}`); // Ruta para armies
                break;
            case "Squadron":
                navigate(`/squads/${slug}`); // Ruta para squads
                break;
            default:
                console.warn("Tipo de favorito desconocido:", favorites_type);
        }
    };

    const handleEliminate = async (id) => {
        try {
            // Realiza la solicitud DELETE al backend
            const response = await fetch(
                `http://${import.meta.env.VITE_APP_PETICION_IP}/api/favorites/delete/${id}`,
                {
                    method: "DELETE",
                }
            );

            if (!response.ok) {
                throw new Error("Error al eliminar el favorito");
            }

            // Elimina el favorito localmente del estado
            setFavorites((prevFavorites) =>
                prevFavorites.filter((favorite) => favorite.id !== id)
            );
        } catch (err) {
            setError(err.message);
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
                                    <button onClick={() => handleNavigate(favorite)}>
                                        Ir
                                    </button>
                                </td>
                                <td>
                                    <button onClick={() => handleEliminate(favorite.id)}>
                                        Eliminar
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
