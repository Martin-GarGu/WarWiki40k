import { useState } from "react";
import { useNavigate } from "react-router-dom";

const CreateWeapon = () => {
    const [name, setName] = useState("");
    const [a, setA] = useState(0);
    const [bs_ws, setBs_ws] = useState("");
    const [d, setD] = useState("");
    const [type, setType] = useState("");
    const [errorMessage, setErrorMessage] = useState("");
    const [successMessage, setSuccessMessage] = useState("");
    const navigate = useNavigate();

    // Validación de formulario
    const validateForm = () => {
        if (!name || !a || !bs_ws || !d || !type) {
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

        const newWeapon = {
            name,
            a,
            bs_ws,
            d,
            type,
        };

        try {
            const response = await fetch(`${import.meta.env.VITE_APP_PETICION_IP}/api/weapons/create`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(newWeapon),
            });

            const responseText = await response.text();
            let data = null;

            try {
                data = JSON.parse(responseText);
            } catch (parseError) {
                console.error("Error al parsear JSON:", parseError.message);
                throw new Error("La respuesta no es un formato JSON esperado.");
            }

            if (response.ok) {
                setSuccessMessage("Arma creada exitosamente.");
                setTimeout(() => {
                    navigate("/"); // Redirigir después del éxito
                }, 2000);
            } else {
                throw new Error(data?.message || "Hubo un error al crear el arma.");
            }
        } catch (error) {
            console.error("Error en la solicitud:", error.message);
            setErrorMessage(error.message || "Hubo un error al procesar los datos.");
        }
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="name">Nombre del Arma*</label>
                    <input
                        type="text"
                        id="name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                        className="form-control"
                    />
                </div>
                <div>
                    <label htmlFor="a">Ataque del Arma*</label>
                    <input
                        type="number"
                        id="a"
                        value={a}
                        onChange={(e) => setA(e.target.value)}
                        required
                        className="form-control"
                    />
                </div>
                <div>
                    <label htmlFor="bs_ws">Habilidad del Arma*</label>
                    <input
                        type="text"
                        id="bs_ws"
                        value={bs_ws}
                        onChange={(e) => setBs_ws(e.target.value)}
                        required
                        className="form-control"
                    />
                </div>
                <div>
                    <label htmlFor="d">Daño del Arma*</label>
                    <input
                        type="text"
                        id="d"
                        value={d}
                        onChange={(e) => setD(e.target.value)}
                        required
                        className="form-control"
                    />
                </div>
                <div>
                    <label htmlFor="type">Tipo de Arma*</label>
                    <select
                        id="type"
                        value={type || ""}
                        onChange={(e) => setType(e.target.value)}
                        required
                        className="form-control"
                    >
                        <option value="" disabled>Selecciona el tipo del arma</option>
                        <option value="ranged">Ranged</option>
                        <option value="melee">Melee</option>
                    </select>
                </div>

                {/* Mostrar mensajes */}
                {errorMessage && <div style={{ color: "red" }}>{errorMessage}</div>}
                {successMessage && <div style={{ color: "green" }}>{successMessage}</div>}

                <div>
                    <button type="submit" className="btn-submit">Crear Arma</button>
                </div>
            </form>
        </div>
    );
};

export default CreateWeapon;
