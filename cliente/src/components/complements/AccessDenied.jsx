import { useNavigate } from 'react-router-dom';

const AccessDenied = () => {
    const navigate = useNavigate();

    return (
        <div className="access-denied-container">
            <h1>Acceso Denegado</h1>
            <p>No tienes permiso para acceder a esta página.</p>
            <button className="btn btn-primary" onClick={() => navigate("/")}>
                Volver al Inicio
            </button>
        </div>
    );
};

export default AccessDenied;
