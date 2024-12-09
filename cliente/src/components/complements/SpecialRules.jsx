// src/components/SpecialRules.jsx
import { useEffect, useState } from "react";

export default function SpecialRules() {
    const [specialRules, setSpecialRules] = useState([]);
    const [errorMessage, setErrorMessage] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const fetchSpecialRulesData = async () => {
            try {
                const specialRulesResponse = await fetch(
                    `http://${import.meta.env.VITE_APP_PETICION_IP}/api/specialRules`
                );
                if (!specialRulesResponse.ok) {
                    throw new Error(`Error HTTP al obtener datos: ${specialRulesResponse.status}`);
                }
                const specialRulesData = await specialRulesResponse.json();
                setSpecialRules(specialRulesData.data || []); // Datos de las reglas especiales

                setErrorMessage(null);
            } catch (error) {
                console.error("Error al cargar los datos:", error);
                setErrorMessage("Error al cargar los datos. Inténtalo nuevamente.");
            } finally {
                setIsLoading(false);
            }
        };
        fetchSpecialRulesData();
    }, []);

    return (
        <div className="special-rules-container">
            {isLoading ? (
                <p className="loading-text">Cargando...</p>
            ) : errorMessage ? (
                <p className="error-text">{errorMessage}</p>
            ) : (
                <table className="special-rules-table table table-dark table-striped">
                    <thead>
                        <tr>
                            <th>Nombre</th>
                            <th>Descripción</th>
                        </tr>
                    </thead>
                    <tbody>
                        {specialRules.map((specialRule, index) => (
                            <tr key={index}>
                                <td>{specialRule.name}</td>
                                <td>{specialRule.description}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            )}
        </div>
    );
}
