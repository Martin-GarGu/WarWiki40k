import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function Favoritos() {
    const [user, setUser] = useState(null); // Usuario autenticado
    const [favorites, setFavorites] = useState([]); // Lista de favoritos
    const [loading, setLoading] = useState(true); // Estado de carga
    const [error, setError] = useState(null); // Mensajes de error
    const navigate = useNavigate();

    useEffect(() => {
        const userData = localStorage.getItem("user"); // Obtener datos del usuario del localStorage
        if (userData) {
            const parsedUser = JSON.parse(userData);
            setUser(parsedUser); // Guardar el usuario en el estado
            fetchFavorites(parsedUser.id); // Obtener los favoritos del usuario
        } else {
            navigate('/login'); // Redirigir al login si no hay usuario
        }
    }, [navigate]);

    const fetchFavorites = async (userId) => {
        console.log(userId);
        try {
            const token = localStorage.getItem("token"); // Obtener el token
            console.log(token);
            const response = await fetch(`${import.meta.env.VITE_APP_PETICION_IP}/api/favorites/user/${userId}`, {
                method: "GET", // Método explícito
                headers: {
                    Authorization: `Bearer ${token}`, // Incluir token en los headers
                },
            });

            if (!response.ok) {
                throw new Error("Error al obtener los favoritos"); // Manejar errores
            }

            const data = await response.json();
            setFavorites(data.data); // Actualizar favoritos
        } catch (err) {
            setError(err.message); // Guardar mensaje de error
        } finally {
            setLoading(false); // Finalizar carga
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
                console.warn("Tipo de favorito desconocido:", favorites_type); // Advertencia en caso de tipo no reconocido
        }
    };

    const handleEliminate = async (id) => {
        try {
            const token = localStorage.getItem("authToken"); // Obtener token
            const response = await fetch(
                `${import.meta.env.VITE_APP_PETICION_IP}/api/favorites/delete/${id}`,
                {
                    method: "DELETE", // Método explícito
                    headers: {
                        Authorization: `Bearer ${token}`, // Incluir token en los headers
                    },
                }
            );

            if (!response.ok) {
                throw new Error("Error al eliminar el favorito"); // Manejar errores
            }

            setFavorites((prevFavorites) =>
                prevFavorites.filter((favorite) => favorite.id !== id) // Actualizar lista
            );
        } catch (err) {
            setError(err.message); // Guardar mensaje de error
        }
    };

    if (loading) {
        return <div className="loading-text">Cargando favoritos...</div>; // Mostrar mensaje de carga
    }

    if (error) {
        return <div className="error-text">Error: {error}</div>; // Mostrar mensaje de error
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
