import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const CreateSoldier = () => {
    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    const [image, setImage] = useState("");
    const [squadId, setSquadId] = useState("");
    const [squads, setSquads] = useState([]); // Estado para almacenar los escuadrones
    const [m, setM] = useState("");
    const [apl, setApl] = useState(0);
    const [ga, setGa] = useState(0);
    const [df, setDf] = useState(0);
    const [sv, setSv] = useState(0);
    const [w, setW] = useState(0);
    const [base, setBase] = useState("");
    const [errorMessage, setErrorMessage] = useState("");
    const [successMessage, setSuccessMessage] = useState("");
    const navigate = useNavigate();

    useEffect(() => {
        const fetchSquads = async () => {
            let isMounted = true; // Para verificar si el componente sigue montado
            try {
                const respuesta = await fetch(`${import.meta.env.VITE_APP_PETICION_IP}/api/squads`, {
                    method: "GET",
                });

                if (!respuesta.ok) {
                    throw new Error(`Error en la solicitud: ${respuesta.statusText}`);
                }

                const contentType = respuesta.headers.get("content-type");
                if (contentType && contentType.includes("application/json")) {
                    const jsonData = await respuesta.json();
                    if (isMounted) {
                        setSquads(jsonData.data); // Asumiendo que los datos están dentro de "data"
                    }
                } else {
                    throw new Error("La respuesta no es JSON.");
                }
            } catch (error) {
                if (isMounted) {
                    console.error("Error en la solicitud de escuadrones:", error);
                }
            }

            return () => {
                isMounted = false; // Limpiar el flag cuando el componente se desmonte
            };
        };


        fetchSquads();
    }, []);

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!name || !description || !squadId || !m || !apl || !ga || !df || !sv || !w || !base) {
            setErrorMessage("Por favor, completa todos los campos obligatorios.");
            return;
        }

        const newSoldier = {
            name,
            description,
            image,
            squadron_id: squadId,
            m,
            apl,
            ga,
            df,
            sv,
            w,
            base
        };

        try {
            const response = await fetch(`${import.meta.env.VITE_APP_PETICION_IP}/api/soldiers/create`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(newSoldier),
            });

            if (response.ok) {
                setSuccessMessage("Soldado creado exitosamente.");
                setTimeout(() => navigate("/"), 2000);
            } else {
                throw new Error("Error al crear el soldado.");
            }
        } catch (error) {
            setErrorMessage(error.message);
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

                {/* 🔥 CAMPO MODIFICADO: Select de Escuadrón */}
                <div className="form-group">
                    <label htmlFor="squadId">Escuadrón*</label>
                    <select
                        id="squadId"
                        value={squadId}
                        onChange={(e) => setSquadId(e.target.value)}
                        required
                        className="form-control"
                    >
                        <option value="" disabled>Selecciona un escuadrón</option>
                        {squads.map((squad) => (
                            <option key={squad.id} value={squad.id}>
                                {squad.name}
                            </option>
                        ))}
                    </select>
                </div>

                <div className="form-group">
                    <label htmlFor="m">Movimiento*</label>
                    <select
                        id="m"
                        value={m || ""}
                        onChange={(e) => setM(e.target.value)}
                        required
                        className="form-control"
                    >
                        <option disabled>Selecciona el movimiento</option>
                        <option>2 Circles</option>
                        <option>3 Circles</option>
                        <option>4 Circles</option>
                    </select>
                </div>
                <div className="form-group">
                    <label htmlFor="apl">Acciones por turno*</label>
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
                    <label htmlFor="ga">Acciones de grupo*</label>
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
                    <label htmlFor="df">Defensa*</label>
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
                    <label htmlFor="sv">Tirada de salvación*</label>
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
                    <label htmlFor="w">Heridas*</label>
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
                    <label htmlFor="base">Base*</label>
                    <input
                        type="text"
                        id="base"
                        value={base}
                        onChange={(e) => setBase(e.target.value)}
                        required
                        className="form-control"
                    />
                </div>

                {/* Mensajes de error/éxito */}
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
