import { useNavigate } from 'react-router-dom';

const EliminateMenu = () => {
    const navigate = useNavigate();

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
    const handleWeapon = () => {
        navigate('/eliminate/weapon');
    };

    return (
        <div className="crud-admin">
            <h1>Eliminar Elementos</h1>
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
                <button onClick={handleWeapon} className="btn btn-danger">
                    Eliminar Arma
                </button>
            </div>
        </div>
    );
};

export default EliminateMenu;