import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const SquadAdmin = () => {
    const [squads, setSquads] = useState([]);
    const [filteredSquads, setFilteredSquads] = useState([]);
    const [armies, setArmies] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [currentPage, setCurrentPage] = useState(1);
    const [createModalOpen, setCreateModalOpen] = useState(false);
    const [editModalOpen, setEditModalOpen] = useState(false);
    const [currentSquad, setCurrentSquad] = useState(null);
    // Iniciamos con "all" para mostrar todos los ejércitos
    const [selectedArmy, setSelectedArmy] = useState("all");

    const [formData, setFormData] = useState({
        name: "",
        description: "",
        image: "",
        army_id: "",
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
                fetchSquads(token);
                fetchArmies(token);
            }
        } catch (error) {
            console.error("Error parsing user data:", error);
            navigate('/login');
        }
    }, [navigate]);

    // Filtrar escuadrones por ejército cuando cambia la selección o los datos
    useEffect(() => {
        if (selectedArmy === "all") {
            setFilteredSquads(squads);
        } else {
            // Aseguramos que la comparación sea con strings para evitar problemas de tipo
            const filtered = squads.filter(squad => String(squad.army_id) === String(selectedArmy));
            setFilteredSquads(filtered);
        }
        // Resetear a la primera página cuando cambia el filtro
        setCurrentPage(1);
    }, [selectedArmy, squads]);

    const fetchSquads = async (token) => {
        try {
            const response = await fetch(`${import.meta.env.VITE_APP_PETICION_IP}/api/squads`, {
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
                setSquads(jsonData.data);
                setFilteredSquads(jsonData.data); // Inicializar los filtrados con todos
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

    // Función para manejar el cambio en el filtro de ejércitos
    const handleArmyFilterChange = (e) => {
        // Guardamos el valor seleccionado (puede ser 'all' o el ID del ejército)
        setSelectedArmy(e.target.value);
        console.log("Filtro cambiado a:", e.target.value); // Para depuración
    };

    // Paginación
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentSquads = filteredSquads.slice(indexOfFirstItem, indexOfLastItem);
    const totalPages = Math.ceil(filteredSquads.length / itemsPerPage);

    // Función para determinar si mostrar paginación
    const shouldShowPagination = filteredSquads.length > itemsPerPage;

    // Funciones para los modales
    const openCreateModal = () => {
        setFormData({
            name: "",
            description: "",
            image: "",
            army_id: ""
        });
        setErrorMessage("");
        setSuccessMessage("");
        setCreateModalOpen(true);
    };

    const openEditModal = (squad) => {
        setCurrentSquad(squad);
        setFormData({
            name: squad.name || "",
            description: squad.description || "",
            image: squad.image || "",
            army_id: squad.army_id || "",
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

    // Función para crear escuadrón
    const handleCreate = async (e) => {
        if (e) e.preventDefault();

        setErrorMessage("");
        setSuccessMessage("");

        const { name, description, image, army_id } = formData;

        if (!name || !description || !army_id) {
            setErrorMessage("Por favor, completa todos los campos obligatorios(*) correctamente.");
            return;
        }

        const newSquad = { name, description, image, army_id };

        try {
            const token = localStorage.getItem("token");
            const response = await fetch(`${import.meta.env.VITE_APP_PETICION_IP}/api/squads/create`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${token}`,
                },
                body: JSON.stringify(newSquad),
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
                setSuccessMessage("Escuadrón creado exitosamente.");
                fetchSquads(token);
                setTimeout(() => {
                    closeModal();
                }, 2000);
            } else {
                throw new Error(data?.message || "Hubo un error al crear el escuadrón.");
            }
        } catch (error) {
            console.error("Error en handleCreate:", error.message);
            setErrorMessage(error.message || "Hubo un error al procesar los datos.");
        }
    };

    // Función para actualizar escuadrón
    const handleUpdate = async (e) => {
        if (e) e.preventDefault();

        setErrorMessage("");
        setSuccessMessage("");

        const { name, description, image, army_id } = formData;

        if (!name || !description || !army_id) {
            setErrorMessage("Por favor, completa todos los campos obligatorios(*) correctamente.");
            return;
        }

        const updatedSquad = { name, description, image, army_id };

        try {
            const token = localStorage.getItem("token");
            const response = await fetch(`${import.meta.env.VITE_APP_PETICION_IP}/api/squads/${currentSquad.id}`, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${token}`,
                },
                body: JSON.stringify(updatedSquad),
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
                setSuccessMessage("Escuadrón actualizado exitosamente.");
                fetchSquads(token);
                setTimeout(() => {
                    closeModal();
                }, 2000);
            } else {
                throw new Error(data?.message || "Hubo un error al actualizar el escuadrón.");
            }
        } catch (error) {
            console.error("Error en handleUpdate:", error.message);
            setErrorMessage(error.message || "Hubo un error al procesar los datos.");
        }
    };

    // Función para eliminar escuadrón
    const handleDelete = async (squadId) => {
        if (window.confirm("¿Estás seguro de que deseas eliminar este escuadrón?")) {
            try {
                const token = localStorage.getItem("token");
                const response = await fetch(`${import.meta.env.VITE_APP_PETICION_IP}/api/squads/delete/${squadId}`, {
                    method: "DELETE",
                    headers: {
                        "Authorization": `Bearer ${token}`,
                    },
                });

                if (response.ok) {
                    fetchSquads(token);
                } else {
                    const errorData = await response.json();
                    alert(errorData.message || "Error al eliminar el escuadrón");
                }
            } catch (error) {
                console.error("Error al eliminar escuadrón:", error);
                alert("Error al eliminar el escuadrón");
            }
        }
    };

    // Función para ir a la primera página
    const goToFirstPage = () => {
        setCurrentPage(1);
    };

    // Función para ir a la última página
    const goToLastPage = () => {
        setCurrentPage(totalPages);
    };

    return (
        <div className="squad-admin-container">
            <h1 className="text-center">Escuadrones</h1>

            {loading ? (
                <p className="loading-text">Cargando...</p>
            ) : error ? (
                <p className="error-text">{error}</p>
            ) : (
                <>
                    {/* Barra superior con filtro y botón de crear */}
                    <div className="d-flex justify-content-between mb-3">
                        <div className="filter-container">
                            <label htmlFor="army-filter" className="form-label">Filtrar por ejército:</label>
                            <select 
                                id="army-filter" 
                                className="form-select" 
                                value={selectedArmy} 
                                onChange={handleArmyFilterChange}
                            >
                                <option value="all">Todos los ejércitos</option>
                                {armies.map((army) => (
                                    <option key={army.id} value={army.id}>
                                        {army.name}
                                    </option>
                                ))}
                            </select>
                        </div>

                        {/* Botón para crear nuevo escuadrón (reposicionado aquí) */}
                        <button
                            onClick={openCreateModal}
                            className="btn btn-primary"
                        >
                            <i className="fa fa-plus me-2"></i>Crear nuevo escuadrón
                        </button>
                    </div>

                    <table className="table table-dark table-striped">
                        <thead>
                            <tr>
                                <th>NOMBRE</th>
                                <th>EJÉRCITO</th>
                                <th>ACCIÓN</th>
                            </tr>
                        </thead>
                        <tbody>
                            {currentSquads.length > 0 ? (
                                currentSquads.map((squad) => (
                                    <tr key={squad.id}>
                                        <td>{squad.name}</td>
                                        <td>
                                            {armies.find(army => String(army.id) === String(squad.army_id))?.name || "Desconocido"}
                                        </td>
                                        <td>
                                            <button
                                                onClick={() => openEditModal(squad)}
                                                className="btn btn-info btn-sm me-2"
                                                title="Editar"
                                            >
                                                <i className="fa fa-edit"></i>
                                            </button>
                                            <button
                                                onClick={() => handleDelete(squad.id)}
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
                                    <td colSpan="3" className="text-center">No hay escuadrones disponibles</td>
                                </tr>
                            )}
                        </tbody>
                    </table>

                    {/* Paginación solo si hay suficientes datos */}
                    {shouldShowPagination && (
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
                                <i className="fa fa-angle-left"></i>
                            </button>
                            <span className="text-white">Página {currentPage} de {totalPages}</span>
                            <button
                                className="btn btn-secondary btn-sm ms-2"
                                onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
                                disabled={currentPage === totalPages}
                                title="Página siguiente"
                            >
                                <i className="fa fa-angle-right"></i>
                            </button>
                            <button
                                className="btn btn-secondary btn-sm ms-2"
                                onClick={goToLastPage}
                                disabled={currentPage === totalPages}
                                title="Última página"
                            >
                                <i className="fa fa-angle-double-right"></i>
                            </button>
                        </div>
                    )}

                    {/* Mostrar cantidad de registros cuando no hay paginación */}
                    {!shouldShowPagination && filteredSquads.length > 0 && (
                        <div className="text-center mt-3">
                            <span className="text-white">Mostrando {filteredSquads.length} escuadrones</span>
                        </div>
                    )}
                </>
            )}

            {/* Modales */}

            {createModalOpen && (
                <div className="modal-backdrop">
                    <div className="game-modal">
                        <div className="modal-header">
                            <h3>Crear nuevo escuadrón</h3>
                        </div>
                        <div className="modal-body">
                            {errorMessage && <div className="alert alert-danger mb-3">{errorMessage}</div>}
                            {successMessage && <div className="alert alert-success mb-3">{successMessage}</div>}

                            <div className="form-group mb-3">
                                <label htmlFor="name" className="form-label">Nombre del Escuadrón *</label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleInputChange}
                                    className="form-control"
                                />
                            </div>
                            <div className="form-group mb-3">
                                <label htmlFor="description" className="form-label">Descripción del Escuadrón *</label>
                                <textarea
                                    id="description"
                                    name="description"
                                    value={formData.description}
                                    onChange={handleInputChange}
                                    className="form-control"
                                    rows="6"
                                />
                            </div>
                            <div className="form-group mb-3">
                                <label htmlFor="image" className="form-label">URL de la imagen del Escuadrón</label>
                                <input
                                    type="text"
                                    id="image"
                                    name="image"
                                    value={formData.image}
                                    onChange={handleInputChange}
                                    className="form-control"
                                />
                            </div>
                            <div className="form-group mb-3">
                                <label htmlFor="army_id" className="form-label">Ejército al que pertenece *</label>
                                <select 
                                    name="army_id" 
                                    id="army_id"
                                    className="form-select"
                                    value={formData.army_id}
                                    onChange={handleInputChange}
                                >
                                    <option value="" disabled>Selecciona un ejército</option>
                                    {armies.map((army) => (
                                        <option key={army.id} value={army.id}>
                                            {army.name}
                                        </option>
                                    ))}
                                </select>
                            </div>
                        </div>
                        <div className="modal-footer">
                            <button
                                onClick={closeModal}
                                className="btn btn-danger me-2"
                                id="btnCancelar"
                            >
                                Cancelar
                            </button>
                            <button
                                onClick={handleCreate}
                                className="btn btn-success"
                                id="btnGuardar"
                            >
                                Guardar
                            </button>
                        </div>
                    </div>
                </div>
            )}
            {editModalOpen && (
                <div className="modal-backdrop">
                    <div className="game-modal">
                        <div className="modal-header">
                            <h3>Editar escuadrón</h3>
                        </div>
                        <div className="modal-body">
                            {errorMessage && <div className="alert alert-danger mb-3">{errorMessage}</div>}
                            {successMessage && <div className="alert alert-success mb-3">{successMessage}</div>}

                            <div className="form-group mb-3">
                                <label htmlFor="edit-name" className="form-label">Nombre del Escuadrón *</label>
                                <input
                                    type="text"
                                    id="edit-name"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleInputChange}
                                    className="form-control"
                                />
                            </div>
                            <div className="form-group mb-3">
                                <label htmlFor="edit-description" className="form-label">Descripción del Escuadrón *</label>
                                <textarea
                                    id="edit-description"
                                    name="description"
                                    value={formData.description}
                                    onChange={handleInputChange}
                                    className="form-control"
                                    rows="6"
                                />
                            </div>
                            <div className="form-group mb-3">
                                <label htmlFor="edit-image" className="form-label">URL de la imagen del Escuadrón</label>
                                <input
                                    type="text"
                                    id="edit-image"
                                    name="image"
                                    value={formData.image}
                                    onChange={handleInputChange}
                                    className="form-control"
                                />
                            </div>
                            <div className="form-group mb-3">
                                <label htmlFor="edit-army_id" className="form-label">Ejército al que pertenece *</label>
                                <select 
                                    name="army_id" 
                                    id="edit-army_id"
                                    className="form-select"
                                    value={formData.army_id}
                                    onChange={handleInputChange}
                                >
                                    <option value="" disabled>Selecciona un ejército</option>
                                    {armies.map((army) => (
                                        <option key={army.id} value={army.id}>
                                            {army.name}
                                        </option>
                                    ))}
                                </select>
                            </div>
                        </div>
                        <div className="modal-footer">
                            <button
                                onClick={closeModal}
                                className="btn btn-danger me-2"
                                id="btnCancelar"
                            >
                                Cancelar
                            </button>
                            <button
                                onClick={handleUpdate}
                                className="btn btn-success"
                                id="btnGuardar"
                            >
                                Actualizar
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

export default SquadAdmin;