import { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';

export default function UpdateFactionMenu() {

  const [factions, setFactions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const userData = localStorage.getItem("user");
    if (userData) {
      const parsedUser = JSON.parse(userData);

      // Verificar si el usuario tiene el rol de "admin"
      if (parsedUser.role !== "admin") {
        navigate("/access-denied"); // Redirige a la página de acceso denegado si no es admin
      } else {
        fetchFactions(); // Cargar las facciones solo si el usuario es admin
      }
    } else {
      navigate("/login"); // Redirige al login si no hay usuario autenticado
    }
  }, [navigate]);

  const fetchFactions = async () => {
    let isMounted = true; // Para verificar si el componente sigue montado
    try {
      const respuesta = await fetch(`http://${import.meta.env.VITE_APP_PETICION_IP}/api/factions`, {
        method: "GET",
      });

      if (!respuesta.ok) {
        throw new Error(`Error en la solicitud: ${respuesta.statusText}`);
      }

      const contentType = respuesta.headers.get("content-type");
      if (contentType && contentType.includes("application/json")) {
        const jsonData = await respuesta.json();
        if (isMounted) {
          setFactions(jsonData.data);
          setLoading(false);
        }
      } else {
        throw new Error("La respuesta no es JSON.");
      }
    } catch (error) {
      if (isMounted) {
        console.error("Error en la solicitud:", error);
        setError(`Error en la solicitud: ${error.message}`);
        setLoading(false);
      }
    }

    return () => {
      isMounted = false; // Limpiar el flag cuando el componente se desmonte
    };
  };

  const handleUpdate = async (faction) => {
    navigate("/update/faction", { state: { faction } });
  };

  return (
    <div className="m-2">
      {loading && <p>Cargando facciones...</p>}
      {error && <p style={{ color: "red" }}>{error}</p>}
      <table>
        <thead>
          <tr>
            <th>Nombre</th>
          </tr>
        </thead>
        <tbody>
          {factions.map((faction, index) => (
            <tr key={index}>
              <td>{faction.name}</td>
              <td>
                <button onClick={() => handleUpdate(faction)}>
                  Editar
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
