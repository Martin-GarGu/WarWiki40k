import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";

export default function UpdateSoldier() {
    const location = useLocation();
    const soldier = location.state?.soldier || {}; // Obtener el soldado desde el state o un objeto vacío

    const [name, setName] = useState(soldier.name || "");
    const [image, setImage] = useState(soldier.image || "");
    const [description, setDescription] = useState(soldier.description || "");
    const [squadronId, setSquadronId] = useState(soldier.squadron_id || "");
    const [m, setM] = useState(soldier.m || "");
    const [apl, setApl] = useState(soldier.apl || "");
    const [ga, setGa] = useState(soldier.ga || "");
    const [df, setDf] = useState(soldier.df || "");
    const [sv, setSv] = useState(soldier.sv || "");
    const [w, setW] = useState(soldier.w || "");
    const [base, setBase] = useState(soldier.base || "");

    const [errorMessage, setErrorMessage] = useState(""); // Mensaje de error
    const [successMessage, setSuccessMessage] = useState(""); // Mensaje de éxito
    const navigate = useNavigate(); // Hook para la redirección

    // Verificar si el usuario está autenticado y tiene el rol de admin
    const userData = localStorage.getItem("user");
    if (!userData) {
        navigate("/login"); // Si no hay usuario en localStorage, redirige al login
    } else {
        const parsedUser = JSON.parse(userData);
        if (parsedUser.role !== "admin") {
            navigate("/access-denied"); // Si el usuario no es admin, redirige a acceso denegado
        }
    }

    const handleSubmit = async (e) => {
        e.preventDefault();

        setErrorMessage("");
        setSuccessMessage("");

        // Verificar que todos los campos obligatorios estén completos
        if (!name || !description || !squadronId || !m || !apl || !ga || !df || !sv || !w || !base) {
            setErrorMessage("Por favor, completa todos los campos obligatorios(*) correctamente.");
            return;
        }

        // Crear el objeto con los datos actualizados
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
            base
        };

        try {
            const response = await fetch(`http://${import.meta.env.VITE_APP_PETICION_IP}/api/soldiers/${soldier.id}`, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(updatedSoldier),
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
                setSuccessMessage("Soldado actualizado exitosamente.");
                setErrorMessage("");
                setTimeout(() => {
                    navigate("/"); // Redirigir a la página principal o a otra ruta después de la actualización
                }, 2000);
            } else {
                throw new Error(data?.message || "Hubo un error al actualizar el soldado.");
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
                    <label htmlFor="name">Nombre del Soldado *</label>
                    <input
                        type="text"
                        id="name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label htmlFor="image">Imagen del Soldado</label>
                    <input
                        type="text"
                        id="image"
                        value={image}
                        onChange={(e) => setImage(e.target.value)}
                    />
                </div>
                <div>
                    <label htmlFor="description">Descripción del Soldado *</label>
                    <input
                        type="text"
                        id="description"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label htmlFor="squadronId">ID del Escuadrón *</label>
                    <input
                        type="text"
                        id="squadronId"
                        value={squadronId}
                        onChange={(e) => setSquadronId(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label htmlFor="m">Movimiento *</label>
                    <input
                        type="text"
                        id="m"
                        value={m}
                        onChange={(e) => setM(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label htmlFor="apl">Puntos de Acción *</label>
                    <input
                        type="number"
                        id="apl"
                        value={apl}
                        onChange={(e) => setApl(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label htmlFor="ga">Acción de Grupo *</label>
                    <input
                        type="number"
                        id="ga"
                        value={ga}
                        onChange={(e) => setGa(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label htmlFor="df">Defensa *</label>
                    <input
                        type="number"
                        id="df"
                        value={df}
                        onChange={(e) => setDf(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label htmlFor="sv">Tirada de salvación *</label>
                    <input
                        type="text"
                        id="sv"
                        value={sv}
                        onChange={(e) => setSv(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label htmlFor="w">Heridas *</label>
                    <input
                        type="number"
                        id="w"
                        value={w}
                        onChange={(e) => setW(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label htmlFor="base">Base del Soldado *</label>
                    <input
                        type="text"
                        id="base"
                        value={base}
                        onChange={(e) => setBase(e.target.value)}
                        required
                    />
                </div>
                {/* Mostrar mensajes */}
                {errorMessage && <div style={{ color: "red" }}>{errorMessage}</div>}
                {successMessage && <div style={{ color: "green" }}>{successMessage}</div>}

                <div>
                    <button type="submit">Actualizar Soldado</button>
                </div>
            </form>
        </div>
    );
}
