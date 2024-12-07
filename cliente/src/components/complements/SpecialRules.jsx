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
                    throw new Error(`Error HTTP al obtener soldados: ${specialRulesResponse.status}`);
                }
                const specialRulesData = await specialRulesResponse.json();
                setSpecialRules(specialRulesData.data || []); // Datos de los soldados

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
        <div>
            <table className="squad-card-table">
                <thead>
                    <tr>
                        <th>Nombre</th>
                        <th>Descripcion</th>
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
        </div>
    )
}
