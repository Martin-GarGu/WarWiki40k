import { useEffect, useState } from "react";
import backToTop from "../../assets/images/backToTop.png"

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
        <div className="container-fluid d-flex" style={{ position: "relative", marginTop: "20px" }} >
            {/* Índice */}
            <div
                className="sidebar"
                style={{
                    backgroundColor: "#2e2e2e",
                    color: "#d4af37",
                    border: "2px solid #d4af37",
                    width: "20%",
                    padding: "20px",
                    marginTop: "120px",
                    height: "400px",
                    position: "fixed",
                    top: "20px",
                }}
            >
                <h5 style={{ borderBottom: "1px solid #d4af37", paddingBottom: "10px" }}>Índice</h5>
                <ul style={{ listStyle: "none", padding: 0 }}>
                    {specialRules.map((rule, index) => (
                        <li key={index} style={{ marginBottom: "10px" }}>
                            <a
                                href={`#rule-${index}`}
                                style={{ textDecoration: "none", color: "#d4af37", cursor: "pointer" }}
                            >
                                {rule.name}
                            </a>
                        </li>
                    ))}
                </ul>
            </div>

            {/* Contenido principal */}
            <div
                className="special-rules-container"
                style={{
                    flexGrow: 1,
                    padding: "40px",
                    marginLeft: "25%",
                    maxWidth: "70%",
                    marginRight: "10%"
                }}
            >
                {isLoading ? (
                    <p className="loading-text">Cargando...</p>
                ) : errorMessage ? (
                    <p className="error-text">{errorMessage}</p>
                ) : (
                    <table
                        className="table table-dark table-striped"
                        style={{
                            tableLayout: "fixed",
                            width: "100%",
                            borderCollapse: "separate",
                            borderSpacing: "0 8px",
                            marginBottom: "100px"
                        }}
                    >
                        <thead>
                            <tr>
                                <th style={{ width: "25%", whiteSpace: "nowrap" }}>Nombre</th>
                                <th>Descripción</th>
                            </tr>
                        </thead>
                        <tbody>
                            {specialRules.map((specialRule, index) => (
                                <tr key={index} id={`rule-${index}`}>
                                    <td
                                        style={{
                                            whiteSpace: "nowrap",
                                            overflow: "hidden",
                                            textOverflow: "ellipsis",
                                            verticalAlign: "middle"
                                        }}
                                    >
                                        {specialRule.name}
                                    </td>
                                    <td style={{ textAlign: "justify", verticalAlign: "middle", paddingRight: "40px" }}>
                                        {specialRule.description}
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                )}
            </div>

            {/* Botón Back to Top con imagen de fondo */}
            <a href="#scroll-container">
                <button
                    style={{
                        position: "fixed",
                        bottom: "20px",
                        right: "20px",
                        width: "60px",
                        height: "60px",
                        backgroundColor: "#d4af37", // Mantengo el color de fondo original
                        backgroundImage: `url(${backToTop})`, // Ruta de la imagen
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                        border: "none",
                        borderRadius: "50%",
                        cursor: "pointer",
                        boxShadow: "0 0 10px rgba(0,0,0,0.3)",
                        zIndex: 1000,
                        transition: "transform 0.3s ease"
                    }}
                    onMouseOver={(e) => e.target.style.transform = "scale(1.1)"} // Efecto hover
                    onMouseOut={(e) => e.target.style.transform = "scale(1)"}
                    onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                >
                </button>
            </a>
        </div>
    );
}
