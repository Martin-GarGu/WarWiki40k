import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function CreateGame() {
    const [user2Name, setUser2Name] = useState(""); // Nombre del usuario2
    const [user2Id, setUser2Id] = useState(0); // ID del usuario2
    const [winner, setWinner] = useState(""); // ID del ganador
    const [user1Points, setUser1Points] = useState(""); // Puntos de usuario1
    const [user2Points, setUser2Points] = useState(""); // Puntos de usuario2
    const [errorMessage, setErrorMessage] = useState(""); // Mensaje de error
    const [successMessage, setSuccessMessage] = useState(""); // Mensaje de éxito
    const [user1, setUser1] = useState(null); // Datos del usuario1

    const navigate = useNavigate(); // Hook para la redirección

    // Verificar si el usuario está autenticado y cargar datos al montar el componente
    useEffect(() => {
        try {
            const userFromStorage = localStorage.getItem("user");
            if (userFromStorage) {
                setUser1(JSON.parse(userFromStorage));
            } else {
                navigate("/login"); // Redirige a /login si no hay usuario logueado
            }
        } catch (error) {
            setErrorMessage("Error al leer los datos del usuario logueado.");
        }
    }, [navigate]); // navigate como dependencia para evitar advertencias

    // Función para buscar el ID del usuario 2
    const searchUser2ByName = async () => {
        try {
            if (!user2Name) {
                setErrorMessage("Por favor, introduce un nombre de usuario para buscar.");
                return;
            }

            const response = await fetch(
                `${import.meta.env.VITE_APP_PETICION_IP}/api/userUsername/${user2Name}`
            );

            const textResponse = await response.text(); // Leer el texto de la respuesta

            const data = JSON.parse(textResponse); // Convertirlo a JSON

            if (response.ok && data.data && data.data.id) {
                const newUserId = data.data.id;
                setUser2Id(newUserId); // Actualiza el estado
                console.log(newUserId);
                setErrorMessage(""); // Limpiar errores
            } else {
                throw new Error(data.message || "No se encontró el usuario.");
            }
        } catch (error) {
            console.error("Error:", error.message);
            setErrorMessage(error.message || "Error al buscar el usuario.");
            setUser2Id(null); // Limpiar el ID del usuario 2
        }
    };

    // Manejo del envío del formulario
    const handleSubmit = async (e) => {
        e.preventDefault();

        setErrorMessage("");
        setSuccessMessage("");

        // Verificar que todos los campos estén completos
        if (!user1 || !user2Id || !user1Points || !user2Points || !winner) {
            setErrorMessage("Por favor, completa todos los campos correctamente.");
            return;
        }

        // Validación de puntos
        if ((winner === "user1" && parseInt(user1Points, 10) <= parseInt(user2Points, 10)) ||
            (winner === "user2" && parseInt(user2Points, 10) <= parseInt(user1Points, 10))) {
            setErrorMessage("El ganador debe tener más puntos que el otro jugador.");
            return;
        }

        // Determinamos el ID del ganador (1 o 2)
        const winnerId = winner === "user1" ? 1 : 2;

        const newGameData = {
            user1_id: user1.id,
            user2_id: user2Id,
            winner: winnerId,  // Aquí usamos 1 o 2 en vez de 'user1' o 'user2'
            points_user1: parseInt(user1Points, 10),
            points_user2: parseInt(user2Points, 10),
        };

        try {
            const response = await fetch(`http://${import.meta.env.VITE_APP_PETICION_IP}/api/games/create`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(newGameData),
            });

            const responseText = await response.text();
            
            // Manejo adecuado del formato de la respuesta
            let data = null;
            try {
                data = JSON.parse(responseText);
            } catch (parseError) {
                console.error("Error al parsear JSON:", parseError.message);
                throw new Error("El servidor devolvió un formato inesperado.");
            }

            if (response.ok) {
                setSuccessMessage("Partida creada exitosamente.");
                setErrorMessage("");
                // Esperar un poco antes de redirigir para que el usuario vea el mensaje de éxito
                setTimeout(() => {
                    navigate("/games"); // Redirigir a la lista de juegos
                }, 2000); // Retraso de 2 segundos
            } else {
                throw new Error(data?.message || "Hubo un error al crear la partida.");
            }
        } catch (error) {
            console.error("Error en handleSubmit:", error.message);
            setErrorMessage(error.message || "Hubo un error al procesar los datos.");
        }
    };

    return (
        <div className="create-game-form">
            <h2>Crea una nueva partida</h2>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="user2Name">Nombre del Jugador 2:</label>
                    <input
                        type="text"
                        id="user2Name"
                        value={user2Name}
                        onChange={(e) => setUser2Name(e.target.value)}
                        required
                    />
                    <button type="button" onClick={searchUser2ByName}>
                        Buscar Jugador 2
                    </button>
                </div>
                <div className="form-group">
                    <label htmlFor="winner">Selecciona al Ganador:</label>
                    <select
                        id="winner"
                        value={winner || ""}
                        onChange={(e) => setWinner(e.target.value)}
                        required
                    >
                        <option value="" disabled>
                            Selecciona un ganador
                        </option>
                        {user1 && <option value="user1">Jugador 1 (tú)</option>}
                        {user2Id && <option value="user2">Jugador 2</option>}
                    </select>
                </div>
                <div className="form-group">
                    <label htmlFor="user1Points">Puntos Jugador 1:</label>
                    <input
                        type="number"
                        id="user1Points"
                        value={user1Points}
                        onChange={(e) => setUser1Points(e.target.value)}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="user2Points">Puntos Jugador 2:</label>
                    <input
                        type="number"
                        id="user2Points"
                        value={user2Points}
                        onChange={(e) => setUser2Points(e.target.value)}
                        required
                    />
                </div>

                {/* Mostrar mensajes */}
                {errorMessage && <div className="error-message">{errorMessage}</div>}
                {successMessage && <div className="success-message">{successMessage}</div>}

                <div>
                    <button type="submit">Crear Partida</button>
                </div>
            </form>
        </div>
    );
}
