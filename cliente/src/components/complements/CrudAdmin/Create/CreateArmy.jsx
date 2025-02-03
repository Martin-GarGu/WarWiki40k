import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const CreateArmy = () => {
    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    const [image, setImage] = useState("");
    const [factionId, setFactionId] = useState("");
    const [factions, setFactions] = useState([]); // Inicializa como array vacío
    const [errorMessage, setErrorMessage] = useState(""); // Mensaje de error
    const [successMessage, setSuccessMessage] = useState(""); // Mensaje de éxito
    const navigate = useNavigate(); // Hook para la redirección

    // Verificación de usuario autenticado y rol de administrador
    useEffect(() => {
        const userFromStorage = localStorage.getItem("user");
        if (userFromStorage) {
            const parsedUser = JSON.parse(userFromStorage);
            if (parsedUser.role !== "admin") {
                navigate('/access-denied'); // Redirige si no es administrador
            }
        } else {
            navigate('/login'); // Redirige si no hay usuario logueado
        }
    }, [navigate]);

    // Cargar facciones desde la API
    useEffect(() => {
        // const fetchFactions = async () => {
        //     try {
        //         const response = await fetch(`${import.meta.env.VITE_APP_PETICION_IP}/api/factions`);
        //         const data = await response.json(); // Directamente parseamos como JSON
    
        //         console.log("Respuesta de la API:", data); // Para ver qué llega realmente
    
        //         if (data && data.length > 0) {
        //             setFactions(data);
        //         } else {
        //             console.warn("No se encontraron facciones en la respuesta.");
        //             setFactions([]); // Deja factions como un array vacío para evitar errores
        //         }
        //     } catch (error) {
        //         console.error("Error al cargar facciones:", error);
        //         setFactions([]); // Evita que factions sea undefined
        //         setErrorMessage("No se pudieron cargar las facciones.");
        //     }
        // };
        const fetchFactions = async () => {
            let isMounted = true; // Para verificar si el componente sigue montado
            try {
              const respuesta = await fetch(`${import.meta.env.VITE_APP_PETICION_IP}/api/factions`, {
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
                }
              } else {
                throw new Error("La respuesta no es JSON.");
              }
            } catch (error) {
              if (isMounted) {
                console.error("Error en la solicitud:", error);
              }
            }
      
            return () => {
              isMounted = false; // Limpiar el flag cuando el componente se desmonte
            };
          };
        fetchFactions();
    }, []);
    

    const handleSubmit = async (e) => {
        e.preventDefault();

        setErrorMessage("");
        setSuccessMessage("");

        // Verificar que todos los campos estén completos
        if (!name || !description || !factionId) {
            setErrorMessage("Por favor, completa todos los campos obligatorios(*) correctamente.");
            return;
        }

        const newArmy = {
            name,
            description,
            image,
            faction_id: factionId
        };

        try {
            const token = localStorage.getItem("token"); // Obtener el token de localStorage
            const response = await fetch(`${import.meta.env.VITE_APP_PETICION_IP}/api/armies/create`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${token}`, // Incluir el token en las cabeceras
                },
                body: JSON.stringify(newArmy),
            });

            const responseText = await response.text();
            let data = null;
            try {
                data = JSON.parse(responseText);
                console.log(data);
            } catch (parseError) {
                console.error("Error al parsear JSON:", parseError.message);
                throw new Error("El servidor devolvió un formato inesperado.");
            }

            if (response.ok) {
                setSuccessMessage("Ejército creado exitosamente.");
                setErrorMessage("");
                setTimeout(() => {
                    navigate("/");
                }, 2000); // Retraso de 2 segundos
            } else {
                throw new Error(data?.message || "Hubo un error al crear el ejército.");
            }
        } catch (error) {
            console.error("Error en handleSubmit:", error.message);
            setErrorMessage(error.message || "Hubo un error al procesar los datos.");
        }
    };

    return (
        <div className="create-form">
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="name">Nombre del Ejército *</label>
                    <input 
                        type="text" 
                        id="name" 
                        value={name} 
                        onChange={(e) => setName(e.target.value)} 
                        required 
                        className="form-control" 
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="description">Descripción del Ejército *</label>
                    <input 
                        type="text" 
                        id="description" 
                        value={description} 
                        onChange={(e) => setDescription(e.target.value)} 
                        required 
                        className="form-control" 
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="image">Url de la imagen del Ejército</label>
                    <input 
                        type="text" 
                        id="image" 
                        value={image} 
                        onChange={(e) => setImage(e.target.value)} 
                        className="form-control" 
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="factionId">Facción a la que pertenece el Ejército *</label>
                    <select 
                        id="factionId" 
                        value={factionId} 
                        onChange={(e) => setFactionId(e.target.value)} 
                        required 
                        className="form-control"
                    >
                        <option value="">Selecciona una facción</option>
                        {Array.isArray(factions) && factions.length > 0 ? (
                            factions.map((faction) => (
                                <option key={faction.id} value={faction.id}>
                                    {faction.name}
                                </option>
                            ))
                        ) : (
                            <option disabled>Cargando facciones...</option>
                        )}
                    </select>
                </div>

                {/* Mostrar mensajes */}
                {errorMessage && <div className="error-message">{errorMessage}</div>}
                {successMessage && <div className="success-message">{successMessage}</div>}

                <div className="form-group">
                    <button type="submit" className="btn-submit">Crear Ejército</button>
                </div>
            </form>
        </div>
    );
};

export default CreateArmy;
