import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const CreateFaction = () => {

    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    const [image, setImage] = useState("");
    const [errorMessage, setErrorMessage] = useState(""); // Mensaje de error
    const [successMessage, setSuccessMessage] = useState(""); // Mensaje de éxito
    const navigate = useNavigate(); // Hook para la redirección

    // Verificación de usuario autenticado y rol de administrador
    useEffect(() => {
        const userFromStorage = localStorage.getItem("user");
        if (userFromStorage) {
            const parsedUser = JSON.parse(userFromStorage);
            if (parsedUser.role !== "admin") {
                navigate('/access-denied'); // Redirige si no es administrador
            }
        } else {
            navigate('/login'); // Redirige si no hay usuario logueado
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

        const newFaction = {
            name: name,
            description: description,
            image: image, 
        };

        try {
            const response = await fetch(`${import.meta.env.VITE_APP_PETICION_IP}/api/factions/create`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(newFaction),
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
                setSuccessMessage("Facción creada exitosamente.");
                setErrorMessage("");
                // Esperar un poco antes de redirigir para que el usuario vea el mensaje de éxito
                setTimeout(() => {
                    navigate("/");
                }, 2000); // Retraso de 2 segundos
            } else {
                throw new Error(data?.message || "Hubo un error al crear la facción.");
            }
        } catch (error) {
            console.error("Error en handleSubmit:", error.message);
            setErrorMessage(error.message || "Hubo un error al procesar los datos.");
        }
    };

    return (
        <div className="create-form">
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="name">Nombre de la Facción *</label>
                    <input 
                        type="text" 
                        id="name" 
                        value={name} 
                        onChange={(e) => setName(e.target.value)} 
                        required 
                        className="form-control" 
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="description">Descripción de la Facción *</label>
                    <input 
                        type="text" 
                        id="description" 
                        value={description} 
                        onChange={(e) => setDescription(e.target.value)} 
                        required 
                        className="form-control" 
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="image">Url de la imagen de la Facción</label>
                    <input 
                        type="text" 
                        id="image" 
                        value={image} 
                        onChange={(e) => setImage(e.target.value)} 
                        className="form-control" 
                    />
                </div>

                {/* Mostrar mensajes */}
                {errorMessage && <div className="error-message">{errorMessage}</div>}
                {successMessage && <div className="success-message">{successMessage}</div>}

                <div className="form-group">
                    <button type="submit" className="btn-submit">Crear Facción</button>
                </div>
            </form>
        </div>
    );
};

export default CreateFaction;
