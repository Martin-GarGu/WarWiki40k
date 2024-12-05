import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";

export default function UpdateArmy() {
    const location = useLocation();
    const army = location.state?.army || {}; // Obtener el ejército desde el state o un objeto vacío por defecto

    const [name, setName] = useState(army.name || "");
    const [description, setDescription] = useState(army.description || "");
    const [image, setImage] = useState(army.image || "");
    const [factionId, setFactionId] = useState(army.faction_id || ""); // Campo faction_id
    const [errorMessage, setErrorMessage] = useState("");
    const [successMessage, setSuccessMessage] = useState("");
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();

        setErrorMessage("");
        setSuccessMessage("");

        // Verificar que los campos obligatorios estén completos
        if (!name || !description || !factionId) {
            setErrorMessage("Por favor, completa todos los campos obligatorios(*) correctamente.");
            return;
        }

        const updatedArmy = {
            name,
            description,
            image,
            faction_id: factionId, // Incluye faction_id
        };

        try {
            const response = await fetch(`http://${import.meta.env.VITE_APP_PETICION_IP}/api/armies/${army.id}`, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(updatedArmy),
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
                setSuccessMessage("Ejército actualizado exitosamente.");
                setErrorMessage("");
                setTimeout(() => {
                    navigate("/"); // Redirigir a la página principal o a otra ruta después de la actualización
                }, 2000);
            } else {
                throw new Error(data?.message || "Hubo un error al actualizar el ejército.");
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
                    <label htmlFor="name">Nombre del Ejército *</label>
                    <input
                        type="text"
                        id="name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label htmlFor="description">Descripción del Ejército *</label>
                    <input
                        type="text"
                        id="description"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label htmlFor="image">Url de la Imagen del Ejército</label>
                    <input
                        type="text"
                        id="image"
                        value={image}
                        onChange={(e) => setImage(e.target.value)}
                    />
                </div>
                <div>
                    <label htmlFor="factionId">ID de la Facción *</label>
                    <input
                        type="text"
                        id="factionId"
                        value={factionId}
                        onChange={(e) => setFactionId(e.target.value)}
                        required
                    />
                </div>
                {/* Mostrar mensajes */}
                {errorMessage && <div style={{ color: "red" }}>{errorMessage}</div>}
                {successMessage && <div style={{ color: "green" }}>{successMessage}</div>}

                <div>
                    <button type="submit">Actualizar Ejército</button>
                </div>
            </form>
        </div>
    );
}
