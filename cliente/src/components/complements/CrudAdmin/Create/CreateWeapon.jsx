import { useState } from "react";
import { useNavigate } from "react-router-dom";

const CreateWeapon = () => {

    const [name, setName] = useState("");
    const [a, setA] = useState(0);
    const [bs_ws, setBs_ws] = useState("");
    const [d, setD] = useState("");
    const [type, setType] = useState("");
    const [specialRuleName, setSpecialRuleName] = useState("");
    const [specialRuleDescription, setSpecialRuleDescription] = useState("");
    const [specialRuleType, setSpecialRuleType] = useState("");
    const [errorMessage, setErrorMessage] = useState(""); // Mensaje de error
    const [successMessage, setSuccessMessage] = useState(""); // Mensaje de éxito
    const navigate = useNavigate(); // Hook para la redirección

    const handleSubmit = async (e) => {
        e.preventDefault();

        setErrorMessage("");
        setSuccessMessage("");

        // Verificar que todos los campos estén completos
        if (!name || !a || !bs_ws || !d || !type) {
            setErrorMessage("Por favor, completa todos los campos obligatorios(*) correctamente.");
            return;
        }

        const newWeapon = {
            name: name,
            a: a,
            bs_ws: bs_ws,
            d: d,
            type: type,
            specialRules: {
                name: specialRuleName,
                description: specialRuleDescription,
                type: specialRuleType,
            }
        };
        console.log(type);
        try {
            const response = await fetch(`http://${import.meta.env.VITE_APP_PETICION_IP}/api/weapons/create`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(newWeapon),
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
        <div>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="name">Nombre del Arma*</label>
                    <input type="text" id="name" value={name} onChange={(e) => setName(e.target.value)} required />
                </div>
                <div>
                    <label htmlFor="a">Ataque del Arma *</label>
                    <input type="number" id="a" value={a} onChange={(e) => setA(e.target.value)} required />
                </div>
                <div>
                    <label htmlFor="bs_ws">Habilidad del Arma *</label>
                    <input type="text" id="bs_ws" value={bs_ws} onChange={(e) => setBs_ws(e.target.value)} required />
                </div>
                <div>
                    <label htmlFor="d">Daño del Arma *</label>
                    <input type="text" id="d" value={d} onChange={(e) => setD(e.target.value)} required />
                </div>
                <div>
                    <label htmlFor="type">Tipo de Arma *</label>
                    <select
                        id="type"
                        value={type || ""}
                        onChange={(e) => setType(e.target.value)}
                        required
                    >
                        <option disabled>
                            Selecciona el tipo del arma
                        </option>
                        <option>ranged</option>
                        <option>melee</option>
                    </select>
                </div>
                <div>
                    <label htmlFor="specialRuleName">Nombre de la Regla Especial*</label>
                    <input type="text" id="specialRuleName" value={specialRuleName} onChange={(e) => setSpecialRuleName(e.target.value)} required />
                </div>
                <div>
                    <label htmlFor="specialRuleDescription">Descripción de la Regla Especial*</label>
                    <input type="text" id="specialRuleDescription" value={specialRuleDescription} onChange={(e) => setSpecialRuleDescription(e.target.value)} required />
                </div>
                <div>
                    <label htmlFor="specialRuleType">Tipo de la Regla Especial*</label>
                    <input type="text" id="specialRuleType" value={specialRuleType} onChange={(e) => setSpecialRuleType(e.target.value)} />
                </div>
                {/* Mostrar mensajes */}
                {errorMessage && <div style={{ color: "red" }}>{errorMessage}</div>}
                {successMessage && <div style={{ color: "green" }}>{successMessage}</div>}

                <div>
                    <button type="submit">Crear Arma</button>
                </div>
            </form>
        </div>
    );

};

export default CreateWeapon;