import { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";

export default function UpdateSquad() {
    const location = useLocation();
    const squad = location.state?.squad || {}; // Obtener la unidad desde el state o un objeto vacío

    const [name, setName] = useState(squad.name || "");
    const [description, setDescription] = useState(squad.description || "");
    const [image, setImage] = useState(squad.image || "");
    const [armyId, setArmyId] = useState(squad.army_id || ""); // Campo army_id
    const [errorMessage, setErrorMessage] = useState("");
    const [successMessage, setSuccessMessage] = useState("");
    const navigate = useNavigate();

    useEffect(() => {
        const userData = localStorage.getItem("user");
        if (!userData) {
            navigate("/login"); // Si no hay usuario en localStorage, redirige al login
        } else {
            const parsedUser = JSON.parse(userData);
            if (parsedUser.role !== 'admin') {
                navigate("/access-denied"); // Si el usuario no es admin, redirige a acceso denegado
            }
        }
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
            const response = await fetch(`http://${import.meta.env.VITE_APP_PETICION_IP}/api/squads/${squad.id}`, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(updatedUnit),
            });

            const responseText = await response.text();

            let data = null;
            try {
                data = JSON.parse(responseText);
            } catch (parseError) {
                console.error("Error al parsear JSON:", parseError.message);
                throw new Error("El servidor devolvió un formato inesperado.");
            }

            if (response.ok) {
                setSuccessMessage("Unidad actualizada exitosamente.");
                setErrorMessage("");
                setTimeout(() => {
                    navigate("/"); // Redirigir a la página principal o a otra ruta después de la actualización
                }, 2000);
            } else {
                throw new Error(data?.message || "Hubo un error al actualizar la unidad.");
            }
        } catch (error) {
            console.error("Error en handleSubmit:", error.message);
            setErrorMessage(error.message || "Hubo un error al procesar los datos.");
        }
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="name">Nombre de la Unidad *</label>
                    <input
                        type="text"
                        id="name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label htmlFor="description">Descripción de la Unidad *</label>
                    <input
                        type="text"
                        id="description"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label htmlFor="image">URL de la Imagen de la Unidad</label>
                    <input
                        type="text"
                        id="image"
                        value={image}
                        onChange={(e) => setImage(e.target.value)}
                    />
                </div>
                <div>
                    <label htmlFor="armyId">ID del Ejército *</label>
                    <input
                        type="text"
                        id="armyId"
                        value={armyId}
                        onChange={(e) => setArmyId(e.target.value)}
                        required
                    />
                </div>
                {/* Mostrar mensajes */}
                {errorMessage && <div style={{ color: "red" }}>{errorMessage}</div>}
                {successMessage && <div style={{ color: "green" }}>{successMessage}</div>}

                <div>
                    <button type="submit">Actualizar Escuadron</button>
                </div>
            </form>
        </div>
    );
}
