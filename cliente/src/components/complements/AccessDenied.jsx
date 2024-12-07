
import { useNavigate } from 'react-router-dom';

const AccessDenied = () => {
    const navigate = useNavigate();

    return (
        <div style={{ textAlign: "center", padding: "50px" }}>
            <h1>Acceso Denegado</h1>
            <p>No tienes permiso para acceder a esta página.</p>
            <button onClick={() => navigate("/")}>Volver al Inicio</button>
        </div>
    );
};

export default AccessDenied;
