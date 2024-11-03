import FactionCarousel from "./Carrousel";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function Inicio() {
  const [factions, setFactions] = useState([]);
  const [isLoading, setIsLoading] = useState(true); 
  const navigate = useNavigate();

  useEffect(() => {
    const fetchFactions = async () => {
      try {
        const respuesta = await fetch(`http://127.0.0.1:8000/api/factions`, {
          method: "get",
        });
        const jsonData = await respuesta.json();
        setFactions(jsonData.data);
        setIsLoading(false); 
      } catch (error) {
        console.error("Error", error.message);
        setIsLoading(false);
      }
    };
    fetchFactions();
  }, []);

  const handleClickFactions = (faction) => {
    navigate(`/${faction.slug}`, { state: { faction } });
  };

  return (
    <div>
      <h1>WarWiki40K</h1>
      {isLoading ? ( 
        <p>Cargando...</p>
      ) : (
        <FactionCarousel factions={factions} handleClickFactions={handleClickFactions}/>
      )}
    </div>
  );
}

export default Inicio;