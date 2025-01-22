import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function UpdateMenu() {
    const navigate = useNavigate();

    useEffect(() => {
        const userData = localStorage.getItem("user");
        const token = localStorage.getItem("token");

        if (!userData || !token) {
            navigate("/login"); // Redirige al login si no hay usuario o token en localStorage
        } else {
            const parsedUser = JSON.parse(userData);
            if (parsedUser.role !== "admin") {
                navigate("/access-denied"); // Si el usuario no es admin, redirige a acceso denegado
            }
        }
    }, [navigate]);

    const handleNavigation = (path) => {
        navigate(path); // Manejar navegación a diferentes rutas
    };

    return (
        <div className="update-menu-container">
            <h1>Modificar Elementos</h1>
            <div className="crud-buttons">
                <button onClick={() => handleNavigation("/update/factionMenu")} className="btn btn-warning">
                    Modificar Facción
                </button>
                <button onClick={() => handleNavigation("/update/armyMenu")} className="btn btn-warning">
                    Modificar Ejército
                </button>
                <button onClick={() => handleNavigation("/update/squadMenu")} className="btn btn-warning">
                    Modificar Escuadrón
                </button>
                <button onClick={() => handleNavigation("/update/soldierMenu")} className="btn btn-warning">
                    Modificar Soldado
                </button>
            </div>
        </div>
    );
}
