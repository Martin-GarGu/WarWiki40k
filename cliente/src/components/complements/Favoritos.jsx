import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function Favoritos() {
    const [user, setUser] = useState(null); // Usuario autenticado
    const [favorites, setFavorites] = useState([]); // Lista de favoritos
    const [loading, setLoading] = useState(true); // Estado de carga
    const [error, setError] = useState(null); // Mensajes de error
    const [currentPage, setCurrentPage] = useState(1); // Página actual
    const favoritesPerPage = 5; // Número de favoritos por página
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
        try {
            const token = localStorage.getItem("token"); // Obtener el token
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
            const token = localStorage.getItem("token"); // Obtener token
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

    // Paginación
    const indexOfLast = currentPage * favoritesPerPage;
    const indexOfFirst = indexOfLast - favoritesPerPage;
    const currentFavorites = favorites.slice(indexOfFirst, indexOfLast);
    const totalPages = Math.ceil(favorites.length / favoritesPerPage);

    // Funciones de paginación mejoradas
    const goToFirstPage = () => {
        setCurrentPage(1);
    };

    const goToLastPage = () => {
        setCurrentPage(totalPages || 1);
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
                <>
                    <table className="favorites-table table table-dark table-striped">
                        <thead>
                            <tr>
                                <th>NOMBRE</th>
                                <th>TIPO</th>
                                <th>ACCIONES</th>
                            </tr>
                        </thead>
                        <tbody>
                            {currentFavorites.map((favorite) => (
                                <tr key={favorite.id}>
                                    <td>{favorite.name || "No disponible"}</td>
                                    <td>{favorite.favorites_type}</td>
                                    <td>
                                        <button
                                            className="btn btn-primary btn-sm me-2"
                                            onClick={() => handleNavigate(favorite)}
                                            title="Ir a la página"
                                        >
                                            <i className="fa fa-external-link-alt"></i>
                                        </button>
                                        <button
                                            className="btn btn-danger btn-sm"
                                            onClick={() => handleEliminate(favorite.id)}
                                            title="Eliminar de favoritos"
                                        >
                                            <i className="fa fa-trash-alt"></i>
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>

                    {/* Controles de Paginación mejorados */}
                    <div className="pagination-controls mt-3">
                        <button
                            className="btn btn-secondary btn-sm me-2"
                            onClick={goToFirstPage}
                            disabled={currentPage === 1}
                            title="Primera página"
                        >
                            <i className="fa fa-angle-double-left"></i>
                        </button>
                        <button
                            className="btn btn-secondary btn-sm me-2"
                            onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
                            disabled={currentPage === 1}
                            title="Página anterior"
                        >
                            <i className="fa fa-chevron-left"></i>
                        </button>
                        <span className="text-white">Página {currentPage} de {totalPages}</span>
                        <button
                            className="btn btn-secondary btn-sm ms-2"
                            onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
                            disabled={currentPage === totalPages}
                            title="Página siguiente"
                        >
                            <i className="fa fa-chevron-right"></i>
                        </button>
                        <button
                            className="btn btn-secondary btn-sm ms-2"
                            onClick={goToLastPage}
                            disabled={currentPage === totalPages}
                            title="Última página"
                        >
                            <i className="fa fa-angle-double-right"></i>
                        </button>
                    </div>
                </>
            ) : (
                <p className="no-favorites-text">No tienes favoritos todavía.</p>
            )}
        </div>
    );
}