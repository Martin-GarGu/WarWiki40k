import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

const EliminateMenu = () => {
    const navigate = useNavigate();

    useEffect(() => {
        const userData = localStorage.getItem("user");

        if (!userData) {
            navigate("/login"); // Si no hay usuario autenticado, redirige al login
            return;
        }

        const parsedUser = JSON.parse(userData);

        // Verificar si el usuario tiene el rol de admin
        if (parsedUser.role !== "admin") {
            navigate("/access-denied"); // Redirige a la página de acceso denegado si no es admin
        }
    }, [navigate]);

    const handleFaction = () => {
        navigate('/eliminate/faction');
    };

    const handleArmy = () => {
        navigate('/eliminate/army');
    };

    const handleSquad = () => {
        navigate('/eliminate/squad');
    };

    const handleSoldier = () => {
        navigate('/eliminate/soldier');
    };

    // const handleWeapon = () => {
    //     navigate('/eliminate/weapon');
    // };

    return (
        <div className="eliminate-menu-container">
            <h1 className="eliminate-menu-title">Eliminar Elementos</h1>
            <div className="crud-buttons">
                <button onClick={handleFaction} className="btn btn-danger">
                    Eliminar Facción
                </button>
                <button onClick={handleArmy} className="btn btn-danger">
                    Eliminar Ejercito
                </button>
                <button onClick={handleSquad} className="btn btn-danger">
                    Eliminar Escuadron
                </button>
                <button onClick={handleSoldier} className="btn btn-danger">
                    Eliminar Soldado
                </button>
                {/* <button onClick={handleWeapon} className="btn btn-danger">
                    Eliminar Arma
                </button> */}
            </div>
        </div>
    );
};

export default EliminateMenu;
