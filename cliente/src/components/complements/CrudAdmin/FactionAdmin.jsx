import { useState, useEffect} from "react";
import { useNavigate } from "react-router-dom";

const FactionAdmin = () => {
    const [factions, setFactions] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [currentPage, setCurrentPage] = useState(1);
    const [createModalOpen, setCreateModalOpen] = useState(false);
    const [editModalOpen, setEditModalOpen] = useState(false);
    const [currentFaction, setCurrentFaction] = useState(null);

    // Form states for create/edit
    const [formData, setFormData] = useState({
        name: "",
        description: "",
        image: ""
    });
    const [errorMessage, setErrorMessage] = useState("");
    const [successMessage, setSuccessMessage] = useState("");

    const navigate = useNavigate();
    const itemsPerPage = 5;



    // Verificación de usuario autenticado y carga de facciones
    useEffect(() => {
        const userFromStorage = localStorage.getItem("user");
        const token = localStorage.getItem("token");

        if (userFromStorage && token) {
            const parsedUser = JSON.parse(userFromStorage);
            if (parsedUser.role !== "admin") {
                navigate('/access-denied'); // Redirige si no es administrador
            } else {
                fetchFactions(token);
            }
        } else {
            navigate('/login'); // Redirige si no hay usuario logueado
        }
    }, [navigate]);

    const fetchFactions = async (token) => {
        try {
            const response = await fetch(`${import.meta.env.VITE_APP_PETICION_IP}/api/factions`, {
                method: "GET",
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });

            if (!response.ok) {
                throw new Error(`Error en la solicitud: ${response.statusText}`);
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

    // Paginación
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentFactions = factions.slice(indexOfFirstItem, indexOfLastItem);
    const totalPages = Math.ceil(factions.length / itemsPerPage);

    // Funciones para los modales
    const openCreateModal = () => {
        setFormData({
            name: "",
            description: "",
            image: ""
        });
        setErrorMessage("");
        setSuccessMessage("");
        setCreateModalOpen(true);
    };

    const openEditModal = (faction) => {
        setCurrentFaction(faction);
        setFormData({
            name: faction.name || "",
            description: faction.description || "",
            image: faction.image || ""
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

    // Función para crear facción
    const handleCreate = async (e) => {
        if (e) e.preventDefault();

        setErrorMessage("");
        setSuccessMessage("");

        const { name, description, image } = formData;

        if (!name || !description) {
            setErrorMessage("Por favor, completa todos los campos obligatorios(*) correctamente.");
            return;
        }

        const newFaction = { name, description, image };

        try {
            const token = localStorage.getItem("token");
            const response = await fetch(`${import.meta.env.VITE_APP_PETICION_IP}/api/factions/create`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${token}`,
                },
                body: JSON.stringify(newFaction),
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
                setSuccessMessage("Facción creada exitosamente.");
                fetchFactions(token);
                setTimeout(() => {
                    closeModal();
                }, 2000);
            } else {
                throw new Error(data?.message || "Hubo un error al crear la facción.");
            }
        } catch (error) {
            console.error("Error en handleCreate:", error.message);
            setErrorMessage(error.message || "Hubo un error al procesar los datos.");
        }
    };

    // Función para actualizar facción
    const handleUpdate = async (e) => {
        if (e) e.preventDefault();

        setErrorMessage("");
        setSuccessMessage("");

        const { name, description, image } = formData;

        if (!name || !description) {
            setErrorMessage("Por favor, completa todos los campos obligatorios(*) correctamente.");
            return;
        }

        const updatedFaction = { name, description, image };

        try {
            const token = localStorage.getItem("token");
            const response = await fetch(`${import.meta.env.VITE_APP_PETICION_IP}/api/factions/${currentFaction.id}`, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${token}`,
                },
                body: JSON.stringify(updatedFaction),
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
                setSuccessMessage("Facción actualizada exitosamente.");
                fetchFactions(token);
                setTimeout(() => {
                    closeModal();
                }, 2000);
            } else {
                throw new Error(data?.message || "Hubo un error al actualizar la facción.");
            }
        } catch (error) {
            console.error("Error en handleUpdate:", error.message);
            setErrorMessage(error.message || "Hubo un error al procesar los datos.");
        }
    };

    // Función para eliminar facción
    const handleDelete = async (factionId) => {
        if (window.confirm("¿Estás seguro de que deseas eliminar esta facción?")) {
            try {
                const token = localStorage.getItem("token");
                const response = await fetch(`${import.meta.env.VITE_APP_PETICION_IP}/api/factions/delete/${factionId}`, {
                    method: "DELETE",
                    headers: {
                        "Authorization": `Bearer ${token}`,
                    },
                });

                if (response.ok) {
                    fetchFactions(token);
                } else {
                    const errorData = await response.json();
                    alert(errorData.message || "Error al eliminar la facción");
                }
            } catch (error) {
                console.error("Error al eliminar facción:", error);
                alert("Error al eliminar la facción");
            }
        }
    };

    return (
        <div className="faction-admin-container">
            <h1 className="text-center">Facciones</h1>

            {loading ? (
                <p className="loading-text">Cargando...</p>
            ) : error ? (
                <p className="error-text">{error}</p>
            ) : (
                <>
                    <table className="table table-dark table-striped">
                        <thead>
                            <tr>
                                <th>NOMBRE</th>
                                <th>ACCION</th>
                            </tr>
                        </thead>
                        <tbody>
                            {currentFactions.length > 0 ? (
                                currentFactions.map((faction) => (
                                    <tr key={faction.id}>
                                        <td>{faction.name}</td>
                                        <td>
                                            <button
                                                onClick={() => openEditModal(faction)}
                                                className="btn btn-info btn-sm me-2"
                                                title="Editar"
                                            >
                                                <i className="fa fa-edit"></i>
                                            </button>
                                            <button
                                                onClick={() => handleDelete(faction.id)}
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
                                    <td colSpan="2" className="text-center">No hay facciones disponibles</td>
                                </tr>
                            )}
                        </tbody>
                    </table>

                    {/* Paginación siempre visible */}
                    <div className="pagination-controls text-center mt-3">
                        <button
                            className="btn btn-secondary btn-sm me-2"
                            onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
                            disabled={currentPage === 1}
                        >
                            Anterior
                        </button>
                        <span className="text-white">Página {currentPage} de {totalPages || 1}</span>
                        <button
                            className="btn btn-secondary btn-sm ms-2"
                            onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages || 1))}
                            disabled={currentPage === (totalPages || 1)}
                        >
                            Siguiente
                        </button>
                    </div>

                    {/* Botón para crear nueva facción */}
                    <div className="text-center mt-4">
                        <button
                            onClick={openCreateModal}
                            className="btn btn-primary"
                        >
                            Crear nueva facción
                        </button>
                    </div>
                </>
            )}

            {/* Modales */}

            {createModalOpen && (
                <div className="modal-backdrop">
                    <div className="game-modal">
                        <div className="modal-header">
                            <h3>Crear nueva facción</h3>
                        </div>
                        <div className="modal-body">
                            {errorMessage && <div className="alert alert-danger mb-3">{errorMessage}</div>}
                            {successMessage && <div className="alert alert-success mb-3">{successMessage}</div>}

                            <div className="form-group mb-3">
                                <label htmlFor="name" className="form-label">Nombre de la Facción *</label>
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
                                <label htmlFor="description" className="form-label">Descripción de la Facción *</label>
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
                                <label htmlFor="image" className="form-label">URL de la imagen de la Facción</label>
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
                            <h3>Editar facción</h3>
                        </div>
                        <div className="modal-body">
                            {errorMessage && <div className="alert alert-danger mb-3">{errorMessage}</div>}
                            {successMessage && <div className="alert alert-success mb-3">{successMessage}</div>}

                            <div className="form-group mb-3">
                                <label htmlFor="edit-name" className="form-label">Nombre de la Facción *</label>
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
                                <label htmlFor="edit-description" className="form-label">Descripción de la Facción *</label>
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
                                <label htmlFor="edit-image" className="form-label">URL de la imagen de la Facción</label>
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
};

export default FactionAdmin;