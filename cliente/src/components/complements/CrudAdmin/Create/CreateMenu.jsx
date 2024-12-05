import { useNavigate } from 'react-router-dom';

const CreateMenu = () => {
    const navigate = useNavigate();

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
        <div className="crud-admin">
            <h1>Crear Elementos</h1>
            <div className="crud-buttons">
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