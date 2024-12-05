import { useNavigate } from 'react-router-dom';

const CrudAdmin = () => {
    const navigate = useNavigate();

    const handleCreate = () => {
        navigate('/createMenu'); // Redirige a la página de crear
    };

    const handleEdit = () => {
        navigate('/updateMenu'); // Redirige a la página de editar
    };

    const handleDelete = () => {
        navigate('/eliminateMenu'); // Redirige a la página de eliminar
    };

    return (
        <div className="crud-admin">
            <h1>Gestión de Elementos</h1>
            <div className="crud-buttons">
                <button onClick={handleCreate} className="btn btn-primary">
                    Crear
                </button>
                <button onClick={handleEdit} className="btn btn-warning">
                    Editar
                </button>
                <button onClick={handleDelete} className="btn btn-danger">
                    Eliminar
                </button>
            </div>
        </div>
    );
};

export default CrudAdmin;
