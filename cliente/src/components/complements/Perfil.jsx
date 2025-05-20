import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function Perfil() {
    const navigate = useNavigate();
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [stats, setStats] = useState({
        totalFavorites: 0
    });

    useEffect(() => {
        const userData = localStorage.getItem("user");
        if (userData) {
            const parsedUser = JSON.parse(userData);
            setUser(parsedUser);
            fetchUserStats(parsedUser.id);
        } else {
            navigate("/login"); // Redirige a /login si no hay usuario logueado
        }
    }, [navigate]); // Agregar navigate como dependencia para evitar advertencias

    const fetchUserStats = async (userId) => {
        try {
            const token = localStorage.getItem("token");
            
            // Obtener conteo de favoritos
            const favResponse = await fetch(
                `${import.meta.env.VITE_APP_PETICION_IP}/api/favorites/user/${userId}`,
                {
                    headers: { Authorization: `Bearer ${token}` }
                }
            );

            if (!favResponse.ok) {
                throw new Error("Error al obtener datos de favoritos");
            }

            const favData = await favResponse.json();
            
            setStats({
                totalFavorites: favData.data.length
            });
            
        } catch (err) {
            setError(err.message);
        } finally {
            setLoading(false);
        }
    };

    const handleFavoritos = () => {
        navigate("/favorites");
    };

    const handlePartidas = () => {
        navigate("/games");
    };

    if (loading) {
        return <p className="loading-text">Cargando perfil...</p>;
    }

    if (error) {
        return <div className="error-text">Error: {error}</div>;
    }

    if (!user) {
        return <p className="loading-text">Usuario no encontrado</p>;
    }

    return (
        <div className="perfil-container">
            <h2 className="perfil-header">Perfil del Usuario</h2>
            
            <div className="perfil-avatar">
                <div className="avatar-placeholder">
                    {user.username.charAt(0).toUpperCase()}
                </div>
            </div>
            
            <div className="perfil-details">
                <h3>Nombre de Usuario:</h3>
                <p>{user.username}</p>
                
                <h3>Email:</h3>
                <p>{user.email}</p>
                
                <h3>Miembro desde:</h3>
                <p>{new Date(user.created_at).toLocaleDateString()}</p>
                
                <h3>Favoritos guardados:</h3>
                <p>{stats.totalFavorites}</p>
            </div>
            
            <div className="perfil-actions">
                <button onClick={handleFavoritos} className="btn">
                    <i className="fa fa-star"></i> FAVORITOS
                </button>
                <button onClick={handlePartidas} className="btn">
                    <i className="fa fa-gamepad"></i> PARTIDAS
                </button>
            </div>
        </div>
    );
}