import { useState } from "react";
import { useNavigate } from "react-router-dom";

const CreateArmy = () => {

    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    const [image, setImage] = useState("");
    const [factionId, setFactionId] = useState(0);
    const [errorMessage, setErrorMessage] = useState(""); // Mensaje de error
    const [successMessage, setSuccessMessage] = useState(""); // Mensaje de éxito
    const navigate = useNavigate(); // Hook para la redirección

    const handleSubmit = async (e) => {
        e.preventDefault();

        setErrorMessage("");
        setSuccessMessage("");

        // Verificar que todos los campos estén completos
        if (!name || !description || !factionId) {
            setErrorMessage("Por favor, completa todos los campos obligatorios(*) correctamente.");
            return;
        }

        const newArmy = {
            name: name,
            description: description,
            image: image,
            faction_id: factionId
        };

        try {
            const response = await fetch(`http://${import.meta.env.VITE_APP_PETICION_IP}/api/armies/create`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(newArmy),
            });

            const responseText = await response.text();

            // Manejo adecuado del formato de la respuesta
            let data = null;
            try {
                data = JSON.parse(responseText);
                console.log(data);
            } catch (parseError) {
                console.error("Error al parsear JSON:", parseError.message);
                throw new Error("El servidor devolvió un formato inesperado.");
            }

            if (response.ok) {
                setSuccessMessage("Ejercito creada exitosamente.");
                setErrorMessage("");
                // Esperar un poco antes de redirigir para que el usuario vea el mensaje de éxito
                setTimeout(() => {
                    navigate("/");
                }, 2000); // Retraso de 2 segundos
            } else {
                throw new Error(data?.message || "Hubo un error al crear el ejercito.");
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
                    <label htmlFor="name">Nombre del Ejercito *</label>
                    <input type="text" id="name" value={name} onChange={(e) => setName(e.target.value)} required />
                </div>
                <div>
                    <label htmlFor="description">Descripción del Ejercito *</label>
                    <input type="text" id="description" value={description} onChange={(e) => setDescription(e.target.value)} required />
                </div>
                <div>
                    <label htmlFor="image">Url de la imagen del Ejercito</label>
                    <input type="text" id="image" value={image} onChange={(e) => setImage(e.target.value)} />
                </div>
                <div>
                    <label htmlFor="factionId">Id de la facción a la que pertenece el Ejercito *</label>
                    <input type="number" id="factionId" value={factionId} onChange={(e) => setFactionId(e.target.value)} required />
                </div>
                {/* Mostrar mensajes */}
                {errorMessage && <div style={{ color: "red" }}>{errorMessage}</div>}
                {successMessage && <div style={{ color: "green" }}>{successMessage}</div>}

                <div>
                    <button type="submit">Crear Ejercito</button>
                </div>
            </form>
        </div>
    );
};

export default CreateArmy;