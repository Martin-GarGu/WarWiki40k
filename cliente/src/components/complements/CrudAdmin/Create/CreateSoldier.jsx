import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const CreateSoldier = () => {
    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    const [image, setImage] = useState("");
    const [squadId, setSquadId] = useState(0);
    const [m, setM] = useState("");
    const [apl, setApl] = useState(0);
    const [ga, setGa] = useState(0);
    const [df, setDf] = useState(0);
    const [sv, setSv] = useState(0);
    const [w, setW] = useState(0);
    const [base, setBase] = useState("");
    const [errorMessage, setErrorMessage] = useState(""); // Mensaje de error
    const [successMessage, setSuccessMessage] = useState(""); // Mensaje de éxito
    const navigate = useNavigate(); // Hook para la redirección

    // Verificación de autenticación y rol de administrador
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
        if (!name || !description || !squadId || !m || !apl || !ga || !df || !sv || !w || !base) {
            setErrorMessage("Por favor, completa todos los campos obligatorios(*) correctamente.");
            return;
        }

        const newSoldier = {
            name: name,
            description: description,
            image: image,
            squadron_id: squadId,
            m: m,
            apl: apl,
            ga: ga,
            df: df,
            sv: sv,
            w: w,
            base: base
        };

        try {
            const response = await fetch(`http://${import.meta.env.VITE_APP_PETICION_IP}/api/soldiers/create`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(newSoldier),
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
                setSuccessMessage("Soldado creado exitosamente.");
                setErrorMessage("");
                // Esperar un poco antes de redirigir para que el usuario vea el mensaje de éxito
                setTimeout(() => {
                    navigate("/");
                }, 2000); // Retraso de 2 segundos
            } else {
                throw new Error(data?.message || "Hubo un error al crear el soldado.");
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
                    <label htmlFor="name">Nombre del Soldado*</label>
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
                    <label htmlFor="description">Descripción del Soldado *</label>
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
                    <label htmlFor="image">Url de la imagen del Soldado</label>
                    <input 
                        type="text" 
                        id="image" 
                        value={image} 
                        onChange={(e) => setImage(e.target.value)} 
                        className="form-control" 
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="squadId">Id del escuadrón al que pertenece el Soldado *</label>
                    <input 
                        type="number" 
                        id="squadId" 
                        value={squadId} 
                        onChange={(e) => setSquadId(e.target.value)} 
                        required 
                        className="form-control" 
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="m">Movimiento del Soldado *</label>
                    <select 
                        id="m" 
                        value={m || ""} 
                        onChange={(e) => setM(e.target.value)} 
                        required 
                        className="form-control"
                    >
                        <option disabled>Selecciona el movimiento del soldado</option>
                        <option>2 Circles</option>
                        <option>3 Circles</option>
                        <option>4 Circles</option>
                    </select>
                </div>
                <div className="form-group">
                    <label htmlFor="apl">Acciones por turno del Soldado *</label>
                    <input 
                        type="number" 
                        id="apl" 
                        value={apl} 
                        onChange={(e) => setApl(e.target.value)} 
                        required 
                        className="form-control" 
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="ga">Acciones de grupo del Soldado *</label>
                    <input 
                        type="number" 
                        id="ga" 
                        value={ga} 
                        onChange={(e) => setGa(e.target.value)} 
                        required 
                        className="form-control" 
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="df">Defensa del Soldado *</label>
                    <input 
                        type="number" 
                        id="df" 
                        value={df} 
                        onChange={(e) => setDf(e.target.value)} 
                        required 
                        className="form-control" 
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="sv">Tirada de salvación del Soldado *</label>
                    <input 
                        type="text" 
                        id="sv" 
                        value={sv} 
                        onChange={(e) => setSv(e.target.value)} 
                        required 
                        className="form-control" 
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="w">Heridas del Soldado *</label>
                    <input 
                        type="number" 
                        id="w" 
                        value={w} 
                        onChange={(e) => setW(e.target.value)} 
                        required 
                        className="form-control" 
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="base">Base del Soldado *</label>
                    <input 
                        type="text" 
                        id="base" 
                        value={base} 
                        onChange={(e) => setBase(e.target.value)} 
                        required 
                        className="form-control" 
                    />
                </div>

                {/* Mostrar mensajes */}
                {errorMessage && <div className="error-message">{errorMessage}</div>}
                {successMessage && <div className="success-message">{successMessage}</div>}

                <div className="form-group">
                    <button type="submit" className="btn-submit">Crear Soldado</button>
                </div>
            </form>
        </div>
    );
};

export default CreateSoldier;
