import { useEffect, useState } from "react";

export default function SpecialRules() {
    const [specialRules, setSpecialRules] = useState([]);
    const [errorMessage, setErrorMessage] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const fetchSpecialRulesData = async () => {
            try {
                const specialRulesResponse = await fetch(
                    `${import.meta.env.VITE_APP_PETICION_IP}/api/specialRules`
                );
                if (!specialRulesResponse.ok) {
                    throw new Error(`Error HTTP al obtener datos: ${specialRulesResponse.status}`);
                }
                const specialRulesData = await specialRulesResponse.json();
                setSpecialRules(specialRulesData.data || []);
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
        <div className="container-fluid d-flex">
            {/* Índice a la izquierda */}
            <div className="col-12 col-md-3 p-3 sidebar" style={{ backgroundColor: "#2e2e2e", color: "#d4af37", border: "2px solid #d4af37" }}>
                <h5 style={{ borderBottom: "1px solid #d4af37", paddingBottom: "10px" }}>Índice</h5>
                <div style={{ overflowY: "auto", height: "200px" }}>
                    <ul style={{ listStyle: "none", padding: 0 }}>
                        {specialRules.map((rule, index) => (
                            <li key={index} style={{ marginBottom: "10px" }}>
                                <a href={`#rule-${index}`} style={{ textDecoration: "none", color: "#d4af37", cursor: "pointer" }}>
                                    {rule.name}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>

            {/* Contenido principal */}
            <div className="col-12 col-md-9 special-rules-container p-3">
                {isLoading ? (
                    <p className="loading-text">Cargando...</p>
                ) : errorMessage ? (
                    <p className="error-text">{errorMessage}</p>
                ) : (
                    <table className="special-rules-table table table-dark">
                        <thead>
                            <tr>
                                <th>Nombre</th>
                                <th>Descripción</th>
                            </tr>
                        </thead>
                        <tbody>
                            {specialRules.map((specialRule, index) => (
                                <tr key={index} id={`rule-${index}`}>
                                    <td>{specialRule.name}</td>
                                    <td>{specialRule.description}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                )}
            </div>
        </div>
    );
}
