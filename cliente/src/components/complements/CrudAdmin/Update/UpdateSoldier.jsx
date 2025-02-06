import { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";

export default function UpdateSoldier() {
    const location = useLocation();
    const soldier = location.state?.soldier || {};

    const [name, setName] = useState(soldier.name || "");
    const [image, setImage] = useState(soldier.image || "");
    const [description, setDescription] = useState(soldier.description || "");
    const [squadronId, setSquadronId] = useState(soldier.squadron_id || "");
    const [squads, setSquads] = useState([]); // Estado para almacenar los escuadrones
    const [m, setM] = useState(soldier.m || "");
    const [apl, setApl] = useState(soldier.apl || "");
    const [ga, setGa] = useState(soldier.ga || "");
    const [df, setDf] = useState(soldier.df || "");
    const [sv, setSv] = useState(soldier.sv || "");
    const [w, setW] = useState(soldier.w || "");
    const [base, setBase] = useState(soldier.base || "");

    const [errorMessage, setErrorMessage] = useState("");
    const [successMessage, setSuccessMessage] = useState("");
    const navigate = useNavigate();

    useEffect(() => {
        const userData = localStorage.getItem("user");
        const token = localStorage.getItem("token");

        if (!userData || !token) {
            navigate("/login"); // Redirige al login si no hay usuario o token
        } else {
            const parsedUser = JSON.parse(userData);
            if (parsedUser.role !== "admin") {
                navigate("/access-denied"); // Redirige si no es admin
            }
        }

        // Obtener los escuadrones desde la API
        const fetchSquads = async () => {
            try {
                const response = await fetch(`${import.meta.env.VITE_APP_PETICION_IP}/api/squads`, {
                    // headers: { Authorization: `Bearer ${token}` },
                    method: "GET",
                });
                const data = await response.json();
                // console.log(data.data);
                setSquads(data.data);
            } catch (error) {
                console.error("Error al obtener escuadrones:", error);
            }
        };

        fetchSquads();
    }, [navigate]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setErrorMessage("");
        setSuccessMessage("");

        if (!name || !description || !squadronId || !m || !apl || !ga || !df || !sv || !w || !base) {
            setErrorMessage("Por favor, completa todos los campos obligatorios(*) correctamente.");
            return;
        }

        const updatedSoldier = {
            name,
            image,
            description,
            squadron_id: squadronId,
            m,
            apl,
            ga,
            df,
            sv,
            w,
            base,
        };

        try {
            const response = await fetch(
                `${import.meta.env.VITE_APP_PETICION_IP}/api/soldiers/${soldier.id}`,
                {
                    method: "PUT",
                    headers: {
                        "Content-Type": "application/json",
                        Authorization: `Bearer ${localStorage.getItem("token")}`,
                    },
                    body: JSON.stringify(updatedSoldier),
                }
            );

            const data = await response.json();

            if (response.ok) {
                setSuccessMessage("Soldado actualizado exitosamente.");
                setTimeout(() => navigate("/"), 2000);
            } else {
                setErrorMessage(data.message || "Hubo un error al actualizar el soldado.");
            }
        } catch (error) {
            setErrorMessage("Hubo un error al procesar los datos.");
        }
    };

    return (
        <div className="update-soldier-container">
            <h1 className="update-soldier-title">Actualizar Soldado</h1>
            <form className="update-soldier-form" onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="name">Nombre del Soldado *</label>
                    <input
                        type="text"
                        id="name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="image">Imagen del Soldado</label>
                    <input
                        type="text"
                        id="image"
                        value={image}
                        onChange={(e) => setImage(e.target.value)}
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
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="squadronId">Escuadrón *</label>
                    <select
                        id="squadronId"
                        value={squadronId}
                        onChange={(e) => setSquadronId(e.target.value)}
                        required
                    >
                        <option value="" disabled>
                            Selecciona un escuadrón
                        </option>
                        {squads.map((squad) => (
                            <option key={squad.id} value={squad.id}>
                                {squad.name}
                            </option>
                        ))}
                    </select>
                </div>
                <div className="form-group">
                    <label htmlFor="m">Movimiento *</label>
                    <select id="m" value={m} onChange={(e) => setM(e.target.value)} required>
                        <option value="" disabled>
                            Selecciona el movimiento
                        </option>
                        <option value="2 Circles">2 Circles</option>
                        <option value="3 Circles">3 Circles</option>
                        <option value="4 Circles">4 Circles</option>
                    </select>
                </div>
                <div className="form-group">
                    <label htmlFor="apl">Puntos de Acción *</label>
                    <input type="number" id="apl" value={apl} onChange={(e) => setApl(e.target.value)} required />
                </div>
                <div className="form-group">
                    <label htmlFor="ga">Acción de Grupo *</label>
                    <input type="number" id="ga" value={ga} onChange={(e) => setGa(e.target.value)} required />
                </div>
                <div className="form-group">
                    <label htmlFor="df">Defensa *</label>
                    <input type="number" id="df" value={df} onChange={(e) => setDf(e.target.value)} required />
                </div>
                <div className="form-group">
                    <label htmlFor="sv">Tirada de salvación *</label>
                    <input type="text" id="sv" value={sv} onChange={(e) => setSv(e.target.value)} required />
                </div>
                <div className="form-group">
                    <label htmlFor="w">Heridas *</label>
                    <input type="number" id="w" value={w} onChange={(e) => setW(e.target.value)} required />
                </div>
                <div className="form-group">
                    <label htmlFor="base">Base del Soldado *</label>
                    <input type="text" id="base" value={base} onChange={(e) => setBase(e.target.value)} required />
                </div>
                {errorMessage && <div className="error-message">{errorMessage}</div>}
                {successMessage && <div className="success-message">{successMessage}</div>}
                <button type="submit" className="update-soldier-button">
                    Actualizar Soldado
                </button>
            </form>
        </div>
    );
}
