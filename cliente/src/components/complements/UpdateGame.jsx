import { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";

export default function EditGame() {
    const location = useLocation();
    const game = location.state?.game || {}; // Obtener el juego desde el state o un objeto vacío

    const [user2Name, setUser2Name] = useState(game.user2_name || "");
    const [user2Id, setUser2Id] = useState(game.user2_id || 0);
    const [winner, setWinner] = useState(game.winner === 1 ? "user1" : "user2" || "");
    const [user1Points, setUser1Points] = useState(game.points_user1 || "");
    const [user2Points, setUser2Points] = useState(game.points_user2 || "");
    const [errorMessage, setErrorMessage] = useState(""); // Mensaje de error
    const [successMessage, setSuccessMessage] = useState(""); // Mensaje de éxito
    const navigate = useNavigate();

    useEffect(() => {
        const userFromStorage = localStorage.getItem("user");
        if (!userFromStorage) {
            navigate("/login"); // Redirige al login si no hay usuario logueado
        }
    }, [navigate]);

    const fetchUser2ByName = async () => {
        try {
            if (!user2Name) {
                setErrorMessage("Por favor, introduce un nombre de usuario para buscar.");
                return;
            }

            const response = await fetch(`${import.meta.env.VITE_APP_PETICION_IP}/api/userUsername/${user2Name}`);
            const data = await response.json();

            if (response.ok && data.data && data.data.id) {
                setUser2Id(data.data.id);
                setErrorMessage("");
            } else {
                throw new Error(data.message || "No se encontró el usuario.");
            }
        } catch (error) {
            console.error("Error:", error.message);
            setErrorMessage(error.message || "Error al buscar el usuario.");
            setUser2Id(null); // Limpiar el ID del usuario 2 si no se encuentra
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        setErrorMessage("");
        setSuccessMessage("");

        // Verificar que todos los campos estén completos
        if (!user2Id || !user1Points || !user2Points || !winner) {
            setErrorMessage("Por favor, completa todos los campos correctamente.");
            return;
        }

        // Validación de puntos
        if (
            (winner === "user1" && parseInt(user1Points, 10) <= parseInt(user2Points, 10)) ||
            (winner === "user2" && parseInt(user2Points, 10) <= parseInt(user1Points, 10))
        ) {
            setErrorMessage("El ganador debe tener más puntos que el otro jugador.");
            return;
        }

        const winnerId = winner === "user1" ? 1 : 2;

        const updatedGameData = {
            user1_id: game.user1_id,
            user2_id: user2Id,
            winner: winnerId,
            points_user1: parseInt(user1Points, 10),
            points_user2: parseInt(user2Points, 10),
        };

        try {
            const response = await fetch(
                `${import.meta.env.VITE_APP_PETICION_IP}/api/gamesUpdate/${game.id}`,
                {
                    method: "PUT",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify(updatedGameData),
                }
            );

            const responseText = await response.text();
            const data = JSON.parse(responseText);

            if (response.ok) {
                setSuccessMessage("Partida actualizada exitosamente.");
                setTimeout(() => {
                    navigate("/games"); // Redirigir a la lista de juegos después de éxito
                }, 2000);
            } else {
                throw new Error(data?.message || "Hubo un error al actualizar la partida.");
            }
        } catch (error) {
            console.error("Error en handleSubmit:", error.message);
            setErrorMessage(error.message || "Hubo un error al procesar los datos.");
        }
    };

    return (
        <div className="edit-game-form">
            <h2>Editar Partida</h2>
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
                    <button type="button" onClick={fetchUser2ByName}>
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
                        <option value="user1">Jugador 1 (tú)</option>
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
                    <button type="submit">Actualizar Partida</button>
                </div>
            </form>
        </div>
    );
}
