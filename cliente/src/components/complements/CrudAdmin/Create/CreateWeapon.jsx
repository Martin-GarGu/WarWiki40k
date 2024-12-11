import { useState } from "react";
import { useNavigate } from "react-router-dom";

const CreateWeapon = () => {

    const [name, setName] = useState("");
    const [a, setA] = useState(0);
    const [bs_ws, setBs_ws] = useState("");
    const [d, setD] = useState("");
    const [type, setType] = useState("");
    // const [specialRuleName, setSpecialRuleName] = useState("");
    // const [specialRuleDescription, setSpecialRuleDescription] = useState("");
    // const [specialRuleType, setSpecialRuleType] = useState("");
    const [errorMessage, setErrorMessage] = useState(""); // Mensaje de error
    const [successMessage, setSuccessMessage] = useState(""); // Mensaje de éxito
    const navigate = useNavigate(); // Hook para la redirección

    const handleSubmit = async (e) => {
        e.preventDefault();
    
        setErrorMessage("");
        setSuccessMessage("");
        console.log(name);
        console.log(a);
        console.log(bs_ws);
        console.log(d);
        console.log(type);
    
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
            // specialRules: {
            //     name: specialRuleName,
            //     description: specialRuleDescription,
            //     type: specialRuleType,
            // }
        };
        console.log(type);
    
        try {
            const response = await fetch(`${import.meta.env.VITE_APP_PETICION_IP}/api/weapons/create`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(newWeapon),
            });
    
            // Verificar si la respuesta es exitosa
            if (!response.ok) {
                throw new Error('Error en la respuesta del servidor');
            }
    
            // Verifica el tipo de contenido de la respuesta
            const contentType = response.headers.get("content-type");
            console.log("Content-Type:", contentType);
    
            // Si la respuesta no es JSON, trata de ver qué es
            if (!contentType || !contentType.includes("application/json")) {
                const responseText = await response.text();  // Recupera la respuesta como texto
                console.log("Respuesta no es JSON:", responseText);  // Ver qué es lo que recibes
                throw new Error("La respuesta no es JSON");
            }
    
            // Si la respuesta es JSON, intenta convertirla
            const data = await response.json();
            console.log("Respuesta JSON:", data);
    
            setSuccessMessage("Arma creada exitosamente.");
            setErrorMessage("");
    
            // Esperar un poco antes de redirigir para que el usuario vea el mensaje de éxito
            setTimeout(() => {
                navigate("/");
            }, 2000); // Retraso de 2 segundos
    
        } catch (error) {
            console.error("Error al procesar la solicitud:", error);
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
                        <option value="" disabled>
                            Selecciona el tipo del arma
                        </option>
                        <option value="ranged">Ranged</option>
                        <option value="melee">Melee</option>
                    </select>
                </div>
                {/* <div>
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
                </div> */}
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