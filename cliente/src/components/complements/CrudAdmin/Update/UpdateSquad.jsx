import { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";

export default function UpdateSquad() {
    const location = useLocation();
    const squad = location.state?.squad || {}; // Obtener la unidad desde el state o un objeto vacío

    const [name, setName] = useState(squad.name || "");
    const [description, setDescription] = useState(squad.description || "");
    const [image, setImage] = useState(squad.image || "");
    const [armyId, setArmyId] = useState(squad.army_id || ""); // Campo army_id
    const [armies, setArmies] = useState([]); // Estado para almacenar los ejércitos
    const [errorMessage, setErrorMessage] = useState("");
    const [successMessage, setSuccessMessage] = useState("");
    const navigate = useNavigate();

    useEffect(() => {
        const userData = localStorage.getItem("user");
        const token = localStorage.getItem("token");

        if (!userData || !token) {
            navigate("/login"); // Si no hay usuario o token, redirige al login
        } else {
            const parsedUser = JSON.parse(userData);
            if (parsedUser.role !== 'admin') {
                navigate("/access-denied"); // Si el usuario no es admin, redirige a acceso denegado
            }
        }

        // Obtener los ejércitos desde la API
        const fetchArmies = async () => {
            try {
                const response = await fetch(`${import.meta.env.VITE_APP_PETICION_IP}/api/armies`, {
                    method: "GET",
                });
                const data = await response.json();
                setArmies(data.data); // Guardar ejércitos en el estado
            } catch (error) {
                console.error("Error al obtener ejércitos:", error);
            }
        };

        fetchArmies();
    }, [navigate]);

    const handleSubmit = async (e) => {
        e.preventDefault();

        setErrorMessage("");
        setSuccessMessage("");

        // Verificar que los campos obligatorios estén completos
        if (!name || !description || !armyId) {
            setErrorMessage("Por favor, completa todos los campos obligatorios(*) correctamente.");
            return;
        }

        const updatedUnit = {
            name,
            description,
            image,
            army_id: armyId, // Incluye army_id
        };

        try {
            const token = localStorage.getItem("token"); // Obtiene el token del almacenamiento local
            const response = await fetch(`${import.meta.env.VITE_APP_PETICION_IP}/api/squads/${squad.id}`, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token}`, // Añade el token al encabezado
                },
                body: JSON.stringify(updatedUnit),
            });

            const data = await response.json();

            if (response.ok) {
                setSuccessMessage("Escuadrón actualizado exitosamente.");
                setTimeout(() => navigate("/"), 2000);
            } else {
                setErrorMessage(data?.message || "Hubo un error al actualizar el escuadrón.");
            }
        } catch (error) {
            console.error("Error en handleSubmit:", error);
            setErrorMessage("Hubo un error al procesar los datos.");
        }
    };

    return (
        <div className="update-squad-container">
            <h1 className="update-squad-title">Modificar Escuadrón</h1>
            <form onSubmit={handleSubmit} className="update-squad-form">
                <div className="form-group">
                    <label htmlFor="name">Nombre del Escuadrón *</label>
                    <input
                        type="text"
                        id="name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="description">Descripción del Escuadrón *</label>
                    <textarea
                        id="description"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="image">URL de la Imagen del Escuadrón</label>
                    <input
                        type="text"
                        id="image"
                        value={image}
                        onChange={(e) => setImage(e.target.value)}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="armyId">Ejército *</label>
                    <select
                        id="armyId"
                        value={armyId}
                        onChange={(e) => setArmyId(e.target.value)}
                        required
                    >
                        <option value="" disabled>
                            Selecciona un ejército
                        </option>
                        {armies.map((army) => (
                            <option key={army.id} value={army.id}>
                                {army.name}
                            </option>
                        ))}
                    </select>
                </div>
                {/* Mostrar mensajes */}
                {errorMessage && <div className="error-message">{errorMessage}</div>}
                {successMessage && <div className="success-message">{successMessage}</div>}

                <div className="form-group">
                    <button type="submit" className="update-squad-button">Actualizar Escuadrón</button>
                </div>
            </form>
        </div>
    );
}
