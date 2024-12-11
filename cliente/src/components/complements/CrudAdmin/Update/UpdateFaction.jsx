import { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";

export default function UpdateFaction() {
    const location = useLocation();
    const faction = location.state?.faction || {}; // Obtener la facción desde el state

    const [name, setName] = useState(faction.name || "");
    const [description, setDescription] = useState(faction.description || "");
    const [image, setImage] = useState(faction.image || "");
    const [errorMessage, setErrorMessage] = useState(""); // Mensaje de error
    const [successMessage, setSuccessMessage] = useState(""); // Mensaje de éxito
    const navigate = useNavigate(); // Hook para la redirección

    useEffect(() => {
        const userData = localStorage.getItem("user");
        if (userData) {
            const parsedUser = JSON.parse(userData);

            // Verificar si el usuario tiene el rol de "admin"
            if (parsedUser.role !== "admin") {
                navigate("/access-denied"); // Redirige a la página de acceso denegado si no es admin
            }
        } else {
            navigate("/login"); // Redirige al login si no hay usuario autenticado
        }
    }, [navigate]);

    const handleSubmit = async (e) => {
        e.preventDefault();

        setErrorMessage("");
        setSuccessMessage("");

        // Verificar que todos los campos estén completos
        if (!name || !description) {
            setErrorMessage("Por favor, completa todos los campos obligatorios(*) correctamente.");
            return;
        }

        const updatedFaction = {
            name,
            description,
            image,
        };

        try {
            const response = await fetch(`${import.meta.env.VITE_APP_PETICION_IP}/api/factions/${faction.id}`, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(updatedFaction),
            });

            const responseText = await response.text();

            // Manejo adecuado del formato de la respuesta
            let data = null;
            try {
                data = JSON.parse(responseText);
            } catch (parseError) {
                console.error("Error al parsear JSON:", parseError.message);
                throw new Error("El servidor devolvió un formato inesperado.");
            }

            if (response.ok) {
                setSuccessMessage("Facción actualizada exitosamente.");
                setErrorMessage("");
                // Esperar un poco antes de redirigir para que el usuario vea el mensaje de éxito
                setTimeout(() => {
                    navigate("/");
                }, 2000); // Retraso de 2 segundos
            } else {
                throw new Error(data?.message || "Hubo un error al actualizar la facción.");
            }
        } catch (error) {
            console.error("Error en handleSubmit:", error.message);
            setErrorMessage(error.message || "Hubo un error al procesar los datos.");
        }
    };

    return (
        <div className="update-faction-container">
            <h1 className="update-faction-title">Modificar Facción</h1>
            <form onSubmit={handleSubmit} className="update-faction-form">
                <div className="form-group">
                    <label htmlFor="name">Nombre de la Facción *</label>
                    <input
                        type="text"
                        id="name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="description">Descripción de la Facción *</label>
                    <textarea
                        id="description"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="image">URL de la Imagen de la Facción</label>
                    <input
                        type="text"
                        id="image"
                        value={image}
                        onChange={(e) => setImage(e.target.value)}
                    />
                </div>
                {/* Mostrar mensajes */}
                {errorMessage && <div className="error-message">{errorMessage}</div>}
                {successMessage && <div className="success-message">{successMessage}</div>}

                <div className="form-group">
                    <button type="submit" className="update-faction-button">Actualizar Facción</button>
                </div>
            </form>
        </div>
    );
}
