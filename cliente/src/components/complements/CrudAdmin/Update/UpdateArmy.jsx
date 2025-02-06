import { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";

export default function UpdateArmy() {
    const location = useLocation();
    const army = location.state?.army || {}; // Obtener el ejército desde el state o un objeto vacío por defecto
    const [name, setName] = useState(army.name || "");
    const [description, setDescription] = useState(army.description || "");
    const [image, setImage] = useState(army.image || "");
    const [factionId, setFactionId] = useState(army.faction_id || ""); // Campo faction_id
    const [factions, setFactions] = useState([]); // Estado para guardar las facciones
    const [errorMessage, setErrorMessage] = useState("");
    const [successMessage, setSuccessMessage] = useState("");
    const navigate = useNavigate();

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

        fetchFactions(); // Cargar las facciones al montar el componente
    }, [navigate]);

    // Función para obtener las facciones desde la API
    const fetchFactions = async () => {
        let isMounted = true;
        try {
            const respuesta = await fetch(`${import.meta.env.VITE_APP_PETICION_IP}/api/factions`, {
                method: "GET",
            });

            if (!respuesta.ok) {
                throw new Error(`Error en la solicitud: ${respuesta.statusText}`);
            }

            const contentType = respuesta.headers.get("content-type");
            if (contentType && contentType.includes("application/json")) {
                const jsonData = await respuesta.json();
                if (isMounted) {
                    setFactions(jsonData.data);
                }
            } else {
                throw new Error("La respuesta no es JSON.");
            }
        } catch (error) {
            if (isMounted) {
                console.error("Error en la solicitud de facciones:", error);
            }
        }

        return () => {
            isMounted = false;
        };
    };

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
            const token = localStorage.getItem("token"); // Obtener token de localStorage

            const response = await fetch(`${import.meta.env.VITE_APP_PETICION_IP}/api/armies/${army.id}`, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token}`, // Incluir token en el header
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
        <div className="update-army-container">
            <h1 className="update-army-title">Modificar Ejército</h1>
            <form onSubmit={handleSubmit} className="update-army-form">
                <div className="form-group">
                    <label htmlFor="name">Nombre del Ejército *</label>
                    <input
                        type="text"
                        id="name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="description">Descripción del Ejército *</label>
                    <textarea
                        id="description"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="image">URL de la Imagen del Ejército</label>
                    <input
                        type="text"
                        id="image"
                        value={image}
                        onChange={(e) => setImage(e.target.value)}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="factionId">Facción *</label>
                    <select
                        id="factionId"
                        value={factionId}
                        onChange={(e) => setFactionId(e.target.value)}
                        required
                    >
                        <option value="" disabled>Selecciona una facción</option>
                        {factions.map((faction) => (
                            <option key={faction.id} value={faction.id}>
                                {faction.name}
                            </option>
                        ))}
                    </select>
                </div>

                {/* Mostrar mensajes */}
                {errorMessage && <div className="error-message">{errorMessage}</div>}
                {successMessage && <div className="success-message">{successMessage}</div>}
                <div className="form-group">
                    <button type="submit" className="update-army-button">Actualizar Ejército</button>
                </div>
            </form>
        </div>
    );
}
