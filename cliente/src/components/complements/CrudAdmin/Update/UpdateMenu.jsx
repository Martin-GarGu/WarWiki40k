import { useNavigate } from 'react-router-dom';

export default function UpdateMenu() {

    const navigate = useNavigate();

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
    )
}
