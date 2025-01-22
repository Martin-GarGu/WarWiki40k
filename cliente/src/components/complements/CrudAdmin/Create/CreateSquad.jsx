import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const CreateSquad = () => {
    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    const [image, setImage] = useState("");
    const [armyId, setArmyId] = useState(0);
    const [errorMessage, setErrorMessage] = useState("");
    const [successMessage, setSuccessMessage] = useState("");
    const navigate = useNavigate();

    // Verificar autenticación y rol de administrador
    const verifyAuth = () => {
        const userFromStorage = localStorage.getItem("user");
        if (!userFromStorage) {
            navigate('/login');
        } else {
            const parsedUser = JSON.parse(userFromStorage);
            if (parsedUser.role !== "admin") {
                navigate('/access-denied');
            }
        }
    };

    useEffect(() => {
        verifyAuth();
    }, [navigate]);

    // Validación de campos
    const validateForm = () => {
        if (!name || !description || !armyId) {
            setErrorMessage("Por favor, completa todos los campos obligatorios(*) correctamente.");
            return false;
        }
        return true;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        setErrorMessage("");
        setSuccessMessage("");

        if (!validateForm()) return;

        const newSquad = {
            name,
            description,
            image,
            army_id: armyId,
        };

        try {
            const response = await fetch(`${import.meta.env.VITE_APP_PETICION_IP}/api/squads/create`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(newSquad),
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
                setSuccessMessage("Escuadrón creado exitosamente.");
                setErrorMessage("");
                setTimeout(() => {
                    navigate("/");
                }, 2000);
            } else {
                throw new Error(data?.message || "Hubo un error al crear el escuadrón.");
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
                    <label htmlFor="name">Nombre del Escuadrón *</label>
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
                    <label htmlFor="description">Descripción del Escuadrón *</label>
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
                    <label htmlFor="image">Url de la imagen del Escuadrón</label>
                    <input 
                        type="text" 
                        id="image" 
                        value={image} 
                        onChange={(e) => setImage(e.target.value)} 
                        className="form-control" 
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="armyId">Id del ejército al que pertenece el Escuadrón *</label>
                    <input 
                        type="number" 
                        id="armyId" 
                        value={armyId} 
                        onChange={(e) => setArmyId(e.target.value)} 
                        required 
                        className="form-control" 
                    />
                </div>

                {/* Mostrar mensajes */}
                {errorMessage && <div className="error-message">{errorMessage}</div>}
                {successMessage && <div className="success-message">{successMessage}</div>}

                <div className="form-group">
                    <button type="submit" className="btn-submit">Crear Escuadrón</button>
                </div>
            </form>
        </div>
    );
};

export default CreateSquad;
