import { useState } from "react";
import { useNavigate } from "react-router-dom";

const CreateSquad = () => {

    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    const [image, setImage] = useState("");
    const [armyId, setArmyId] = useState(0);
    const [errorMessage, setErrorMessage] = useState(""); // Mensaje de error
    const [successMessage, setSuccessMessage] = useState(""); // Mensaje de éxito
    const navigate = useNavigate(); // Hook para la redirección

    const handleSubmit = async (e) => {
        e.preventDefault();

        setErrorMessage("");
        setSuccessMessage("");

        // Verificar que todos los campos estén completos
        if (!name || !description || !armyId) {
            setErrorMessage("Por favor, completa todos los campos obligatorios(*) correctamente.");
            return;
        }

        const newEscuadron = {
            name: name,
            description: description,
            image: image,
            army_id: armyId
        };

        try {
            const response = await fetch(`http://${import.meta.env.VITE_APP_PETICION_IP}/api/squads/create`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(newEscuadron),
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
                throw new Error(data?.message || "Hubo un error al crear el escuadron.");
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
                    <label htmlFor="name">Nombre del Escuadron *</label>
                    <input type="text" id="name" value={name} onChange={(e) => setName(e.target.value)} required />
                </div>
                <div>
                    <label htmlFor="description">Descripción del Escuadron *</label>
                    <input type="text" id="description" value={description} onChange={(e) => setDescription(e.target.value)} required />
                </div>
                <div>
                    <label htmlFor="image">Url de la imagen del Escuadron</label>
                    <input type="text" id="image" value={image} onChange={(e) => setImage(e.target.value)} />
                </div>
                <div>
                    <label htmlFor="armyId">Id del ejercito al que pertenece el Escuadron *</label>
                    <input type="number" id="armyId" value={armyId} onChange={(e) => setArmyId(e.target.value)} required />
                </div>
                {/* Mostrar mensajes */}
                {errorMessage && <div style={{ color: "red" }}>{errorMessage}</div>}
                {successMessage && <div style={{ color: "green" }}>{successMessage}</div>}

                <div>
                    <button type="submit">Crear Escuadron</button>
                </div>
            </form>
        </div>
    );

};

export default CreateSquad;