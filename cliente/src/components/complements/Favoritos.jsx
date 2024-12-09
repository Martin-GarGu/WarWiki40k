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
            navigate('/login');
        }
    }, [navigate]);

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

        switch (favorites_type) {
            case "Faction":
                navigate(`/${slug}`);
                break;
            case "Army":
                navigate(`/armies/${slug}`);
                break;
            case "Squadron":
                navigate(`/squads/${slug}`);
                break;
            default:
                console.warn("Tipo de favorito desconocido:", favorites_type);
        }
    };

    const handleEliminate = async (id) => {
        try {
            const response = await fetch(
                `http://${import.meta.env.VITE_APP_PETICION_IP}/api/favorites/delete/${id}`,
                { method: "DELETE" }
            );

            if (!response.ok) {
                throw new Error("Error al eliminar el favorito");
            }

            setFavorites((prevFavorites) =>
                prevFavorites.filter((favorite) => favorite.id !== id)
            );
        } catch (err) {
            setError(err.message);
        }
    };

    if (loading) {
        return <div className="loading-text">Cargando favoritos...</div>;
    }

    if (error) {
        return <div className="error-text">Error: {error}</div>;
    }

    return (
        <div className="favorites-container">
            <h2>Mis Favoritos</h2>
            {favorites.length > 0 ? (
                <table className="favorites-table table table-dark table-striped">
                    <thead>
                        <tr>
                            <th>Nombre</th>
                            <th>Tipo</th>
                            <th>Ir</th>
                            <th>Eliminar</th>
                        </tr>
                    </thead>
                    <tbody>
                        {favorites.map((favorite) => (
                            <tr key={favorite.id}>
                                <td>{favorite.name || "No disponible"}</td>
                                <td>{favorite.favorites_type}</td>
                                <td>
                                    <button
                                        className="btn btn-primary btn-sm"
                                        onClick={() => handleNavigate(favorite)}
                                    >
                                        Ir
                                    </button>
                                </td>
                                <td>
                                    <button
                                        className="btn btn-danger btn-sm"
                                        onClick={() => handleEliminate(favorite.id)}
                                    >
                                        Eliminar
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            ) : (
                <p className="no-favorites-text">No tienes favoritos todavía.</p>
            )}
        </div>
    );
}
