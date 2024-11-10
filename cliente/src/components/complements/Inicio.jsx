import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import FactionCarousel from "./Carrousel"; // Asegúrate de que este componente esté correctamente importado

function Inicio() {
  const [factions, setFactions] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchFactions = async () => {
      let isMounted = true; // Para verificar si el componente sigue montado
      try {
        const respuesta = await fetch(`http://127.0.0.1:8000/api/factions`, {
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
            setIsLoading(false);
          }
        } else {
          throw new Error("La respuesta no es JSON.");
        }
      } catch (error) {
        if (isMounted) {
          console.error("Error en la solicitud:", error);
          setError(`Error en la solicitud: ${error.message}`);
          setIsLoading(false);
        }
      }

      return () => {
        isMounted = false; // Limpiar el flag cuando el componente se desmonte
      };
    };

    fetchFactions();
  }, []); // El array vacío asegura que solo se ejecute una vez cuando el componente se monta

  const handleClickFactions = (faction) => {
    navigate(`/${faction.slug}`);
  };

  return (
    <div>
      <h1>WarWiki40K</h1>
      {isLoading ? (
        <p>Cargando...</p>
      ) : error ? (
        <p>Error: {error}</p>
      ) : (
        <FactionCarousel factions={factions} handleClickFactions={handleClickFactions} />
      )}
    </div>
  );
}

export default Inicio;
