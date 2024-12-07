import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export default function UpdateMenu() {
    const navigate = useNavigate();

    useEffect(() => {
        const userData = localStorage.getItem("user");
        if (!userData) {
            navigate("/login"); // Si no hay usuario en localStorage, redirige al login
        } else {
            const parsedUser = JSON.parse(userData);
            if (parsedUser.role !== 'admin') {
                navigate("/access-denied"); // Si el usuario no es admin, redirige a acceso denegado
            }
        }
    }, [navigate]);

    const handleFaction = () => {
        navigate('/update/factionMenu');
    };

    const handleArmy = () => {
        navigate('/update/armyMenu');
    };

    const handleSquad = () => {
        navigate('/update/squadMenu');
    };

    const handleSoldier = () => {
        navigate('/update/soldierMenu');
    };

    return (
        <div>
            <h1>Modificar Elementos</h1>
            <div className="crud-buttons">
                <button onClick={handleFaction} className="btn btn-warning">
                    Modificar Facción
                </button>
                <button onClick={handleArmy} className="btn btn-warning">
                    Modificar Ejercito
                </button>
                <button onClick={handleSquad} className="btn btn-warning">
                    Modificar Escuadron
                </button>
                <button onClick={handleSoldier} className="btn btn-warning">
                    Modificar Soldado
                </button>
            </div>
        </div>
    );
}
