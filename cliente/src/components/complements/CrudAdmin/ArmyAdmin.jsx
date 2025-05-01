import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const ArmyAdmin = () => {
    const [armies, setArmies] = useState([]);
    const [factions, setFactions] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [currentPage, setCurrentPage] = useState(1);
    const [createModalOpen, setCreateModalOpen] = useState(false);
    const [editModalOpen, setEditModalOpen] = useState(false);
    const [currentArmy, setCurrentArmy] = useState(null);
    const [selectedFaction, setSelectedFaction] = useState(""); // Estado para el filtro de facción

    const [formData, setFormData] = useState({
        name: "",
        description: "",
        image: "",
        faction_id: "",
    });
    const [errorMessage, setErrorMessage] = useState("");
    const [successMessage, setSuccessMessage] = useState("");

    const navigate = useNavigate();
    const itemsPerPage = 5;

    useEffect(() => {
        const userFromStorage = localStorage.getItem("user");
        const token = localStorage.getItem("token");

        if (!userFromStorage || !token) {
            navigate('/login'); // Redirige si no hay usuario logueado
            return;
        }

        try {
            const parsedUser = JSON.parse(userFromStorage);
            if (parsedUser.role !== "admin") {
                navigate('/access-denied'); // Redirige si no es administrador
            } else {
                fetchArmies(token);
                fetchFactions(token);
            }
        } catch (error) {
            console.error("Error parsing user data:", error);
            navigate('/login');
        }
    }, [navigate]);

    const fetchArmies = async (token) => {
        try {
            const response = await fetch(`${import.meta.env.VITE_APP_PETICION_IP}/api/armies`, {
                method: "GET",
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });

            if (!response.ok) {
                throw new Error(`Error en la solicitud: ${response.status} ${response.statusText}`);
            }

            const contentType = response.headers.get("content-type");
            if (contentType && contentType.includes("application/json")) {
                const jsonData = await response.json();
                setArmies(jsonData.data);
                setLoading(false);
            } else {
                throw new Error("La respuesta no es JSON.");
            }
        } catch (error) {
            console.error("Error en la solicitud:", error);
            setError(`Error en la solicitud: ${error.message}`);
            setLoading(false);
        }
    };

    const fetchFactions = async (token) => {
        try {
            const response = await fetch(`${import.meta.env.VITE_APP_PETICION_IP}/api/factions`, {
                method: "GET",
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });

            if (!response.ok) {
                throw new Error(`Error en la solicitud: ${response.status} ${response.statusText}`);
            }

            const contentType = response.headers.get("content-type");
            if (contentType && contentType.includes("application/json")) {
                const jsonData = await response.json();
                setFactions(jsonData.data);
                setLoading(false);
            } else {
                throw new Error("La respuesta no es JSON.");
            }
        } catch (error) {
            console.error("Error en la solicitud:", error);
            setError(`Error en la solicitud: ${error.message}`);
            setLoading(false);
        }
    };

    // Filtrar ejércitos por facción
    const filteredArmies = selectedFaction 
        ? armies.filter(army => String(army.faction_id) === String(selectedFaction))
        : armies;

    // Paginación
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentArmies = filteredArmies.slice(indexOfFirstItem, indexOfLastItem);
    const totalPages = Math.ceil(filteredArmies.length / itemsPerPage);

    // Manejo del cambio de filtro por facción
    const handleFactionFilterChange = (e) => {
        setSelectedFaction(e.target.value);
        setCurrentPage(1); // Reiniciar a la primera página cuando se cambia el filtro
    };

    // Ir a la primera página
    const goToFirstPage = () => {
        setCurrentPage(1);
    };

    // Ir a la última página
    const goToLastPage = () => {
        setCurrentPage(totalPages || 1);
    };

    // Funciones para los modales
    const openCreateModal = () => {
        setFormData({
            name: "",
            description: "",
            image: "",
            faction_id: ""
        });
        setErrorMessage("");
        setSuccessMessage("");
        setCreateModalOpen(true);
    };

    const openEditModal = (army) => {
        setCurrentArmy(army);
        setFormData({
            name: army.name || "",
            description: army.description || "",
            image: army.image || "",
            faction_id: army.faction_id || "",
        });
        setErrorMessage("");
        setSuccessMessage("");
        setEditModalOpen(true);
    };

    const closeModal = () => {
        setCreateModalOpen(false);
        setEditModalOpen(false);
        setErrorMessage("");
        setSuccessMessage("");
    };

    // Manejo de cambios en inputs
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    // Función para crear ejército
    const handleCreate = async (e) => {
        if (e) e.preventDefault();

        setErrorMessage("");
        setSuccessMessage("");

        const { name, description, image, faction_id } = formData;

        if (!name || !description || !faction_id) {
            setErrorMessage("Por favor, completa todos los campos obligatorios(*) correctamente.");
            return;
        }

        const newArmy = { name, description, image, faction_id };

        try {
            const token = localStorage.getItem("token");
            const response = await fetch(`${import.meta.env.VITE_APP_PETICION_IP}/api/armies/create`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${token}`,
                },
                body: JSON.stringify(newArmy),
            });

            const responseText = await response.text();

            let data = null;
            try {
                data = JSON.parse(responseText);
            } catch (parseError) {
                console.error("Error al parsear JSON:", parseError.message);
                throw new Error("El servidor devolvió un formato inesperado.");
            }

            if (response.ok) {
                setSuccessMessage("Ejército creado exitosamente.");
                fetchArmies(token);
                setTimeout(() => {
                    closeModal();
                }, 2000);
            } else {
                throw new Error(data?.message || "Hubo un error al crear el ejército.");
            }
        } catch (error) {
            console.error("Error en handleCreate:", error.message);
            setErrorMessage(error.message || "Hubo un error al procesar los datos.");
        }
    };

    // Función para actualizar ejército
    const handleUpdate = async (e) => {
        if (e) e.preventDefault();

        setErrorMessage("");
        setSuccessMessage("");

        const { name, description, image, faction_id } = formData;

        if (!name || !description || !faction_id) {
            setErrorMessage("Por favor, completa todos los campos obligatorios(*) correctamente.");
            return;
        }

        const updatedArmy = { name, description, image, faction_id };

        try {
            const token = localStorage.getItem("token");
            const response = await fetch(`${import.meta.env.VITE_APP_PETICION_IP}/api/armies/${currentArmy.id}`, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${token}`,
                },
                body: JSON.stringify(updatedArmy),
            });

            const responseText = await response.text();

            let data = null;
            try {
                data = JSON.parse(responseText);
            } catch (parseError) {
                console.error("Error al parsear JSON:", parseError.message);
                throw new Error("El servidor devolvió un formato inesperado.");
            }

            if (response.ok) {
                setSuccessMessage("Ejército actualizado exitosamente.");
                fetchArmies(token);
                setTimeout(() => {
                    closeModal();
                }, 2000);
            } else {
                throw new Error(data?.message || "Hubo un error al actualizar el ejército.");
            }
        } catch (error) {
            console.error("Error en handleUpdate:", error.message);
            setErrorMessage(error.message || "Hubo un error al procesar los datos.");
        }
    };

    // Función para eliminar ejército
    const handleDelete = async (armyId) => {
        if (window.confirm("¿Estás seguro de que deseas eliminar este ejército?")) {
            try {
                const token = localStorage.getItem("token");
                const response = await fetch(`${import.meta.env.VITE_APP_PETICION_IP}/api/armies/delete/${armyId}`, {
                    method: "DELETE",
                    headers: {
                        "Authorization": `Bearer ${token}`,
                    },
                });

                if (response.ok) {
                    fetchArmies(token);
                } else {
                    const errorData = await response.json();
                    alert(errorData.message || "Error al eliminar el ejército");
                }
            } catch (error) {
                console.error("Error al eliminar ejército:", error);
                alert("Error al eliminar el ejército");
            }
        }
    };

    return (
        <div className="army-admin-container">
            <h1 className="text-center">Administración de Ejércitos</h1>

            {loading ? (
                <p className="loading-text">Cargando...</p>
            ) : error ? (
                <p className="error-text">{error}</p>
            ) : (
                <>
                    <div className="d-flex justify-content-between mb-3">
                        {/* Filtro por facción */}
                        <div className="filter-container">
                            <label htmlFor="faction-filter" className="form-label me-2">Filtrar por facción:</label>
                            <select 
                                id="faction-filter"
                                className="form-select" 
                                value={selectedFaction} 
                                onChange={handleFactionFilterChange}
                                style={{ width: "auto", display: "inline-block" }}
                            >
                                <option value="">Todas las facciones</option>
                                {factions.map((faction) => (
                                    <option key={faction.id} value={faction.id}>
                                        {faction.name}
                                    </option>
                                ))}
                            </select>
                        </div>
                        
                        <button
                            onClick={openCreateModal}
                            className="btn btn-primary"
                        >
                            <i className="fa fa-plus me-2"></i>Crear nuevo ejército
                        </button>
                    </div>

                    <table className="table table-dark table-striped">
                        <thead>
                            <tr>
                                <th>NOMBRE</th>
                                <th>FACCIÓN</th>
                                <th>ACCIONES</th>
                            </tr>
                        </thead>
                        <tbody>
                            {currentArmies.length > 0 ? (
                                currentArmies.map((army) => (
                                    <tr key={army.id}>
                                        <td>{army.name}</td>
                                        <td>
                                            {factions.find(faction => faction.id === army.faction_id)?.name || 'N/A'}
                                        </td>
                                        <td>
                                            <button
                                                onClick={() => openEditModal(army)}
                                                className="btn btn-info btn-sm me-2"
                                                title="Editar"
                                            >
                                                <i className="fa fa-edit"></i>
                                            </button>
                                            <button
                                                onClick={() => handleDelete(army.id)}
                                                className="btn btn-danger btn-sm"
                                                title="Eliminar"
                                            >
                                                <i className="fa fa-trash-alt"></i>
                                            </button>
                                        </td>
                                    </tr>
                                ))
                            ) : (
                                <tr>
                                    <td colSpan="3" className="text-center">
                                        {selectedFaction ? "No hay ejércitos disponibles para esta facción" : "No hay ejércitos disponibles"}
                                    </td>
                                </tr>
                            )}
                        </tbody>
                    </table>

                    {/* Paginación mejorada */}
                    <div className="pagination-controls text-center mt-3">
                        <button
                            className="btn btn-secondary btn-sm me-2"
                            onClick={goToFirstPage}
                            disabled={currentPage === 1}
                            title="Primera página"
                        >
                            <i className="fa fa-angle-double-left"></i>
                        </button>
                        <button
                            className="btn btn-secondary btn-sm me-2"
                            onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
                            disabled={currentPage === 1}
                            title="Página anterior"
                        >
                            <i className="fa fa-chevron-left"></i>
                        </button>
                        <span className="text-white">Página {currentPage} de {totalPages || 1}</span>
                        <button
                            className="btn btn-secondary btn-sm ms-2"
                            onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages || 1))}
                            disabled={currentPage === (totalPages || 1)}
                            title="Página siguiente"
                        >
                            <i className="fa fa-chevron-right"></i>
                        </button>
                        <button
                            className="btn btn-secondary btn-sm ms-2"
                            onClick={goToLastPage}
                            disabled={currentPage === (totalPages || 1)}
                            title="Última página"
                        >
                            <i className="fa fa-angle-double-right"></i>
                        </button>
                    </div>
                </>
            )}

            {/* Modal para crear ejército */}
            {createModalOpen && (
                <div className="modal-backdrop">
                    <div className="game-modal">
                        <div className="modal-header">
                            <h3>Crear nuevo ejército</h3>
                        </div>
                        <div className="modal-body">
                            {errorMessage && <div className="alert alert-danger mb-3">{errorMessage}</div>}
                            {successMessage && <div className="alert alert-success mb-3">{successMessage}</div>}

                            <div className="form-row">
                                <div className="form-col">
                                    <div className="form-group">
                                        <label htmlFor="name" className="form-label required-field">Nombre del Ejército</label>
                                        <input
                                            type="text"
                                            id="name"
                                            name="name"
                                            value={formData.name}
                                            onChange={handleInputChange}
                                            className="form-control"
                                        />
                                    </div>
                                    
                                    <div className="form-group">
                                        <label htmlFor="faction_id" className="form-label required-field">Facción a la que pertenece</label>
                                        <select 
                                            name="faction_id" 
                                            id="faction_id"
                                            className="form-select"
                                            value={formData.faction_id}
                                            onChange={handleInputChange}
                                        >
                                            <option value="" disabled>Selecciona una facción</option>
                                            {factions.map((faction) => (
                                                <option key={faction.id} value={faction.id}>
                                                    {faction.name}
                                                </option>
                                            ))}
                                        </select>
                                    </div>
                                    
                                    <div className="form-group">
                                        <label htmlFor="image" className="form-label">URL de la imagen del Ejército</label>
                                        <input
                                            type="text"
                                            id="image"
                                            name="image"
                                            value={formData.image}
                                            onChange={handleInputChange}
                                            className="form-control"
                                        />
                                    </div>
                                </div>
                                
                                <div className="form-col">
                                    <div className="form-group">
                                        <label htmlFor="description" className="form-label required-field">Descripción del Ejército</label>
                                        <textarea
                                            id="description"
                                            name="description"
                                            value={formData.description}
                                            onChange={handleInputChange}
                                            className="form-control"
                                            rows="10"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="modal-footer">
                            <button
                                onClick={closeModal}
                                className="btn btn-danger me-2"
                            >
                                <i className="fa fa-times me-1"></i>Cancelar
                            </button>
                            <button
                                onClick={handleCreate}
                                className="btn btn-success"
                            >
                                <i className="fa fa-save me-1"></i>Guardar
                            </button>
                        </div>
                    </div>
                </div>
            )}

            {/* Modal para editar ejército */}
            {editModalOpen && (
                <div className="modal-backdrop">
                    <div className="game-modal">
                        <div className="modal-header">
                            <h3>Editar ejército: {currentArmy?.name}</h3>
                        </div>
                        <div className="modal-body">
                            {errorMessage && <div className="alert alert-danger mb-3">{errorMessage}</div>}
                            {successMessage && <div className="alert alert-success mb-3">{successMessage}</div>}

                            <div className="form-row">
                                <div className="form-col">
                                    <div className="form-group">
                                        <label htmlFor="edit-name" className="form-label required-field">Nombre del Ejército</label>
                                        <input
                                            type="text"
                                            id="edit-name"
                                            name="name"
                                            value={formData.name}
                                            onChange={handleInputChange}
                                            className="form-control"
                                        />
                                    </div>
                                    
                                    <div className="form-group">
                                        <label htmlFor="edit-faction_id" className="form-label required-field">Facción a la que pertenece</label>
                                        <select 
                                            name="faction_id" 
                                            id="edit-faction_id"
                                            className="form-select"
                                            value={formData.faction_id}
                                            onChange={handleInputChange}
                                        >
                                            <option value="" disabled>Selecciona una facción</option>
                                            {factions.map((faction) => (
                                                <option key={faction.id} value={faction.id}>
                                                    {faction.name}
                                                </option>
                                            ))}
                                        </select>
                                    </div>
                                    
                                    <div className="form-group">
                                        <label htmlFor="edit-image" className="form-label">URL de la imagen del Ejército</label>
                                        <input
                                            type="text"
                                            id="edit-image"
                                            name="image"
                                            value={formData.image}
                                            onChange={handleInputChange}
                                            className="form-control"
                                        />
                                    </div>
                                </div>
                                
                                <div className="form-col">
                                    <div className="form-group">
                                        <label htmlFor="edit-description" className="form-label required-field">Descripción del Ejército</label>
                                        <textarea
                                            id="edit-description"
                                            name="description"
                                            value={formData.description}
                                            onChange={handleInputChange}
                                            className="form-control"
                                            rows="10"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="modal-footer">
                            <button
                                onClick={closeModal}
                                className="btn btn-danger me-2"
                            >
                                <i className="fa fa-times me-1"></i>Cancelar
                            </button>
                            <button
                                onClick={handleUpdate}
                                className="btn btn-success"
                            >
                                <i className="fa fa-save me-1"></i>Actualizar
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

export default ArmyAdmin;