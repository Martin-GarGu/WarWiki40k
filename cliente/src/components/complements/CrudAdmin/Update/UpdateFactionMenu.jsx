import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function UpdateFactionMenu() {
  const [factions, setFactions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const userData = localStorage.getItem("user");
    const token = localStorage.getItem("token");

    if (userData && token) {
      const parsedUser = JSON.parse(userData);

      // Verificar si el usuario tiene el rol de "admin"
      if (parsedUser.role !== "admin") {
        navigate("/access-denied"); // Redirige a la página de acceso denegado si no es admin
      } else {
        fetchFactions(token); // Cargar las facciones solo si el usuario es admin
      }
    } else {
      navigate("/login"); // Redirige al login si no hay usuario autenticado o no hay token
    }
  }, [navigate]);

  const fetchFactions = async (token) => {
    let isMounted = true; // Para verificar si el componente sigue montado
    try {
      const response = await fetch(`${import.meta.env.VITE_APP_PETICION_IP}/api/factions`, {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`, // Agregar el token en el encabezado
        },
      });

      if (!response.ok) {
        throw new Error(`Error en la solicitud: ${response.statusText}`);
      }

      const contentType = response.headers.get("content-type");
      if (contentType && contentType.includes("application/json")) {
        const jsonData = await response.json();
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
    <div className="update-faction-menu-container">
      <h1 className="update-faction-menu-title">Modificar Facciones</h1>
      {loading && <p>Cargando facciones...</p>}
      {error && <p className="update-faction-menu-message error">{error}</p>}
      
      <table className="update-faction-menu-table">
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Acción</th>
          </tr>
        </thead>
        <tbody>
          {factions.map((faction, index) => (
            <tr key={index}>
              <td>{faction.name}</td>
              <td>
                <button onClick={() => handleUpdate(faction)} className="update-faction-menu-button">
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
