import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const CreateMenu = () => {
    const navigate = useNavigate();

    // Verificar si el usuario está autenticado y es administrador
    useEffect(() => {
        const userFromStorage = localStorage.getItem("user");

        if (userFromStorage) {
            const parsedUser = JSON.parse(userFromStorage);
            if (parsedUser.role !== "admin") {
                navigate('/access-denied'); // Redirige si no es administrador
            }
        } else {
            navigate('/login'); // Redirige a /login si no hay usuario logueado
        }
    }, [navigate]); // Dependencia navigate para evitar advertencias

    const handleFaction = () => {
        navigate('/create/faction');
    };

    const handleArmy = () => {
        navigate('/create/army');
    };

    const handleSquad = () => {
        navigate('/create/squad');
    };

    const handleSoldier = () => {
        navigate('/create/soldier');
    };
    // const handleWeapon = () => {
    //     navigate('/create/weapon');
    // };

    return (
        <div className="create-menu-container">
            <h1>Crear Elementos</h1>
            <div className="create-menu-buttons">
                <button onClick={handleFaction} className="btn btn-primary">
                    Crear Facción
                </button>
                <button onClick={handleArmy} className="btn btn-primary">
                    Crear Ejercito
                </button>
                <button onClick={handleSquad} className="btn btn-primary">
                    Crear Escuadron
                </button>
                <button onClick={handleSoldier} className="btn btn-primary">
                    Crear Soldado
                </button>
                {/* <button onClick={handleWeapon} className="btn btn-primary">
                    Crear Arma
                </button> */}
            </div>
        </div>
    );
};

export default CreateMenu;
