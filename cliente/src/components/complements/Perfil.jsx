// src/components/Perfil.jsx
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function Perfil() {
    const navigate = useNavigate();
    const [user, setUser] = useState(null);

    useEffect(() => {
        const userData = localStorage.getItem("user");
        if (userData) {
            setUser(JSON.parse(userData));
        } else {
            navigate("/login"); // Redirige a /login si no hay usuario logueado
        }
    }, [navigate]); // Agregar navigate como dependencia para evitar advertencias

    if (!user) {
        return <p className="loading-text">Cargando...</p>; // Mostrar un mensaje mientras se valida
    }

    const handleFavoritos = () => {
        navigate("/favorites");
    };

    const handlePartidas = () => {
        navigate("/games");
    };

    return (
        <div className="perfil-container">
            <h2 className="perfil-header">Perfil del Usuario</h2>
            <div className="perfil-details">
                <h3>Nombre de Usuario:</h3>
                <p>{user.username}</p>
                <h3>Email:</h3>
                <p>{user.email}</p>
            </div>
            <div className="perfil-actions">
                <button onClick={handleFavoritos} className="btn btn-primary">
                    Favoritos
                </button>
                <button onClick={handlePartidas} className="btn btn-primary">
                    Partidas
                </button>
            </div>
        </div>
    );
}
