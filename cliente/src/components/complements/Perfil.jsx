import { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';

export default function Perfil() {
    const navigate = useNavigate();
    const [user, setUser] = useState(null);

    useEffect(() => {
        const userData = localStorage.getItem("user");
        if (userData) {
            setUser(JSON.parse(userData));
        } else {
            navigate('/login'); // Redirige a /login si no hay usuario logueado
        }
    }, [navigate]); // Agregar navigate como dependencia para evitar advertencias

    if (!user) {
        return <p>Cargando...</p>; // Mostrar un mensaje mientras se valida
    }

    const handleFavoritos = () => {
        navigate('/favorites');
    };

    const handlePartidas = () => {
        navigate('/games');
    };

    return (
        <>
            <h3>Username:</h3>
            <p>{user.username}</p>
            <h3>Email:</h3>
            <p>{user.email}</p>
            <div className="crud-buttons">
                <button onClick={handleFavoritos} className="btn btn-primary">
                    Favoritos
                </button>
                <button onClick={handlePartidas} className="btn btn-primary">
                    Partidas
                </button>
            </div>
        </>
    );
}
