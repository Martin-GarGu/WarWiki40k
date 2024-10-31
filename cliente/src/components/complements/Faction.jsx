
import { useLocation} from 'react-router-dom';
import { useEffect, useState } from "react";

export default function Faction() {
    const location = useLocation();
    const faction = location.state?.faction;
    const [armies, setArmies] = useState([]);
    // const navigate = useNavigate();
    const [isLoading, setIsLoading] = useState(true);
    // console.log(faction);
    useEffect(() => {
        const fetchFactionData = async () => {
            if (faction) {
                try {
                    const response = await fetch(`http://127.0.0.1:8000/api/armies/${faction.id}`);
                    if (!response.ok) {
                        throw new Error(`HTTP error! status: ${response.status}`);
                    }
                    const jsonData = await response.json();
                    setArmies(jsonData.data); 
                } catch (error) {
                    console.error("Error fetching faction data:", error);
                    // navigate('/error'); // Manejar el error de manera adecuada
                } finally {
                    setIsLoading(false);
                }
            } else {
                console.error("No faction data provided!");
            }
        };

        fetchFactionData();
    }, [faction]);

    // console.log(armies);
    return (
        <div>
            <img src={faction.image} alt={faction.name} />
            <h1>{faction.name}</h1>
            <p>{faction.description}</p>
            <h2>Armies</h2>
            {isLoading ? (
                <p>Loading...</p>
            ) : (
                <ul>
                    {armies.map((army) => (
                        <li key={army.id}>
                            <h3>{army.name}</h3>
                            <p>{army.description}</p>
                            <img src={army.image} alt={army.name} />
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
}
