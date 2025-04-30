import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const SoldierAdmin = () => {
    const [soldiers, setSoldiers] = useState([]);
    const [squads, setSquads] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [currentPage, setCurrentPage] = useState(1);
    const [createModalOpen, setCreateModalOpen] = useState(false);
    const [editModalOpen, setEditModalOpen] = useState(false);
    const [currentSoldier, setCurrentSoldier] = useState(null);

    const [formData, setFormData] = useState({
        name: "",
        description: "",
        image: "",
        squadron_id: "",
        m: "",
        apl: 0,
        ga: 0,
        df: 0,
        sv: 0,
        w: 0,
        base: ""
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
                fetchSoldiers(token);
                fetchSquads(token);
            }
        } catch (error) {
            console.error("Error parsing user data:", error);
            navigate('/login');
        }
    }, [navigate]);

    const fetchSoldiers = async (token) => {
        try {
            const response = await fetch(`${import.meta.env.VITE_APP_PETICION_IP}/api/soldiers`, {
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
                setSoldiers(jsonData.data);
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
    const currentSoldiers = soldiers.slice(indexOfFirstItem, indexOfLastItem);
    const totalPages = Math.ceil(soldiers.length / itemsPerPage);

    // Funciones para los modales
    const openCreateModal = () => {
        setFormData({
            name: "",
            description: "",
            image: "",
            squadron_id: "",
            m: "",
            apl: 0,
            ga: 0,
            df: 0,
            sv: 0,
            w: 0,
            base: ""
        });
        setErrorMessage("");
        setSuccessMessage("");
        setCreateModalOpen(true);
    };

    const openEditModal = (soldier) => {
        setCurrentSoldier(soldier);
        setFormData({
            name: soldier.name || "",
            description: soldier.description || "",
            image: soldier.image || "",
            squadron_id: soldier.squadron_id || "",
            m: soldier.m || "",
            apl: soldier.apl || 0,
            ga: soldier.ga || 0,
            df: soldier.df || 0,
            sv: soldier.sv || 0,
            w: soldier.w || 0,
            base: soldier.base || ""
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

    // Función para crear soldado
    const handleCreate = async (e) => {
        if (e) e.preventDefault();

        setErrorMessage("");
        setSuccessMessage("");

        const { name, description, image, squadron_id, m, apl, ga, df, sv, w, base } = formData;

        if (!name || !description || !squadron_id || !m || !apl || !ga || !df || !sv || !w || !base) {
            setErrorMessage("Por favor, completa todos los campos obligatorios(*) correctamente.");
            return;
        }

        const newSoldier = { 
            name, 
            description, 
            image, 
            squadron_id, 
            m, 
            apl, 
            ga, 
            df, 
            sv, 
            w, 
            base 
        };

        try {
            const token = localStorage.getItem("token");
            const response = await fetch(`${import.meta.env.VITE_APP_PETICION_IP}/api/soldiers/create`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${token}`,
                },
                body: JSON.stringify(newSoldier),
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
                setSuccessMessage("Soldado creado exitosamente.");
                fetchSoldiers(token);
                setTimeout(() => {
                    closeModal();
                }, 2000);
            } else {
                throw new Error(data?.message || "Hubo un error al crear el soldado.");
            }
        } catch (error) {
            console.error("Error en handleCreate:", error.message);
            setErrorMessage(error.message || "Hubo un error al procesar los datos.");
        }
    };

    // Función para actualizar soldado
    const handleUpdate = async (e) => {
        if (e) e.preventDefault();

        setErrorMessage("");
        setSuccessMessage("");

        const { name, description, image, squadron_id, m, apl, ga, df, sv, w, base } = formData;

        if (!name || !description || !squadron_id || !m || !apl || !ga || !df || !sv || !w || !base) {
            setErrorMessage("Por favor, completa todos los campos obligatorios(*) correctamente.");
            return;
        }

        const updatedSoldier = { 
            name, 
            description, 
            image, 
            squadron_id, 
            m, 
            apl, 
            ga, 
            df, 
            sv, 
            w, 
            base 
        };

        try {
            const token = localStorage.getItem("token");
            const response = await fetch(`${import.meta.env.VITE_APP_PETICION_IP}/api/soldiers/${currentSoldier.id}`, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${token}`,
                },
                body: JSON.stringify(updatedSoldier),
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
                setSuccessMessage("Soldado actualizado exitosamente.");
                fetchSoldiers(token);
                setTimeout(() => {
                    closeModal();
                }, 2000);
            } else {
                throw new Error(data?.message || "Hubo un error al actualizar el soldado.");
            }
        } catch (error) {
            console.error("Error en handleUpdate:", error.message);
            setErrorMessage(error.message || "Hubo un error al procesar los datos.");
        }
    };

    // Función para eliminar soldado
    const handleDelete = async (soldierId) => {
        if (window.confirm("¿Estás seguro de que deseas eliminar este soldado?")) {
            try {
                const token = localStorage.getItem("token");
                const response = await fetch(`${import.meta.env.VITE_APP_PETICION_IP}/api/soldiers/delete/${soldierId}`, {
                    method: "DELETE",
                    headers: {
                        "Authorization": `Bearer ${token}`,
                    },
                });

                if (response.ok) {
                    fetchSoldiers(token);
                } else {
                    const errorData = await response.json();
                    alert(errorData.message || "Error al eliminar el soldado");
                }
            } catch (error) {
                console.error("Error al eliminar soldado:", error);
                alert("Error al eliminar el soldado");
            }
        }
    };

    // Renderizado del formulario para crear o editar
    const renderForm = (isEdit = false) => {
        return (
            <div className="soldier-admin-container">
                {errorMessage && <div className="alert alert-danger mb-3">{errorMessage}</div>}
                {successMessage && <div className="alert alert-success mb-3">{successMessage}</div>}
                
                <form>
                    <div className="form-row">
                        <div className="form-col">
                            <div className="form-group">
                                <label htmlFor={isEdit ? "edit-name" : "name"} className="form-label required-field">Nombre del Soldado</label>
                                <input
                                    type="text"
                                    id={isEdit ? "edit-name" : "name"}
                                    name="name"
                                    value={formData.name}
                                    onChange={handleInputChange}
                                    className="form-control"
                                />
                            </div>
                            
                            <div className="form-group">
                                <label htmlFor={isEdit ? "edit-squadron_id" : "squadron_id"} className="form-label required-field">Escuadrón</label>
                                <select 
                                    name="squadron_id" 
                                    id={isEdit ? "edit-squadron_id" : "squadron_id"}
                                    className="form-select"
                                    value={formData.squadron_id}
                                    onChange={handleInputChange}
                                >
                                    <option value="" disabled>Selecciona un escuadrón</option>
                                    {squads.map((squad) => (
                                        <option key={squad.id} value={squad.id}>
                                            {squad.name}
                                        </option>
                                    ))}
                                </select>
                            </div>
                            
                            <div className="form-group">
                                <label htmlFor={isEdit ? "edit-m" : "m"} className="form-label required-field">Movimiento</label>
                                <select
                                    id={isEdit ? "edit-m" : "m"}
                                    name="m"
                                    value={formData.m}
                                    onChange={handleInputChange}
                                    className="form-select"
                                >
                                    <option value="" disabled>Selecciona el movimiento</option>
                                    <option>2 Circles</option>
                                    <option>3 Circles</option>
                                    <option>4 Circles</option>
                                </select>
                            </div>

                            <div className="form-group">
                                <label htmlFor={isEdit ? "edit-image" : "image"} className="form-label">URL de la imagen</label>
                                <input
                                    type="text"
                                    id={isEdit ? "edit-image" : "image"}
                                    name="image"
                                    value={formData.image}
                                    onChange={handleInputChange}
                                    className="form-control"
                                />
                            </div>
                            
                            <div className="form-group">
                                <label htmlFor={isEdit ? "edit-apl" : "apl"} className="form-label required-field">Acciones por turno</label>
                                <input
                                    type="number"
                                    id={isEdit ? "edit-apl" : "apl"}
                                    name="apl"
                                    value={formData.apl}
                                    onChange={handleInputChange}
                                    className="form-control"
                                />
                            </div>
                            
                            <div className="form-group">
                                <label htmlFor={isEdit ? "edit-ga" : "ga"} className="form-label required-field">Acciones de grupo</label>
                                <input
                                    type="number"
                                    id={isEdit ? "edit-ga" : "ga"}
                                    name="ga"
                                    value={formData.ga}
                                    onChange={handleInputChange}
                                    className="form-control"
                                />
                            </div>
                        </div>
                        
                        <div className="form-col">
                            <div className="form-group">
                                <label htmlFor={isEdit ? "edit-description" : "description"} className="form-label required-field">Descripción</label>
                                <textarea
                                    id={isEdit ? "edit-description" : "description"}
                                    name="description"
                                    value={formData.description}
                                    onChange={handleInputChange}
                                    className="form-control"
                                    rows="4"
                                />
                            </div>
                            
                            <div className="form-group">
                                <label htmlFor={isEdit ? "edit-df" : "df"} className="form-label required-field">Defensa</label>
                                <input
                                    type="number"
                                    id={isEdit ? "edit-df" : "df"}
                                    name="df"
                                    value={formData.df}
                                    onChange={handleInputChange}
                                    className="form-control"
                                />
                            </div>
                            
                            <div className="form-group">
                                <label htmlFor={isEdit ? "edit-sv" : "sv"} className="form-label required-field">Tirada de salvación</label>
                                <input
                                    type="text"
                                    id={isEdit ? "edit-sv" : "sv"}
                                    name="sv"
                                    value={formData.sv}
                                    onChange={handleInputChange}
                                    className="form-control"
                                />
                            </div>
                            
                            <div className="form-group">
                                <label htmlFor={isEdit ? "edit-w" : "w"} className="form-label required-field">Heridas</label>
                                <input
                                    type="number"
                                    id={isEdit ? "edit-w" : "w"}
                                    name="w"
                                    value={formData.w}
                                    onChange={handleInputChange}
                                    className="form-control"
                                />
                            </div>
                            
                            <div className="form-group">
                                <label htmlFor={isEdit ? "edit-base" : "base"} className="form-label required-field">Base</label>
                                <input
                                    type="text"
                                    id={isEdit ? "edit-base" : "base"}
                                    name="base"
                                    value={formData.base}
                                    onChange={handleInputChange}
                                    className="form-control"
                                />
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        );
    };

    return (
        <div className="soldier-admin-container">
            <h1 className="text-center">Administración de Soldados</h1>

            {loading ? (
                <p className="loading-text">Cargando...</p>
            ) : error ? (
                <p className="error-text">{error}</p>
            ) : (
                <>
                    <div className="text-end mb-3">
                        <button
                            onClick={openCreateModal}
                            className="btn btn-primary"
                        >
                            <i className="fa fa-plus me-2"></i>Crear nuevo soldado
                        </button>
                    </div>

                    <table className="table table-dark table-striped">
                        <thead>
                            <tr>
                                <th>NOMBRE</th>
                                <th>ESCUADRÓN</th>
                                <th>ACCIONES</th>
                            </tr>
                        </thead>
                        <tbody>
                            {currentSoldiers.length > 0 ? (
                                currentSoldiers.map((soldier) => (
                                    <tr key={soldier.id}>
                                        <td>{soldier.name}</td>
                                        <td>
                                            {squads.find(squad => squad.id === soldier.squadron_id)?.name || 'N/A'}
                                        </td>
                                        <td>
                                            <button
                                                onClick={() => openEditModal(soldier)}
                                                className="btn btn-info btn-sm me-2"
                                                title="Editar"
                                            >
                                                <i className="fa fa-edit"></i>
                                            </button>
                                            <button
                                                onClick={() => handleDelete(soldier.id)}
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
                                    <td colSpan="3" className="text-center">No hay soldados disponibles</td>
                                </tr>
                            )}
                        </tbody>
                    </table>

                    {/* Paginación */}
                    <div className="pagination-controls text-center mt-3">
                        <button
                            className="btn btn-secondary btn-sm me-2"
                            onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
                            disabled={currentPage === 1}
                        >
                            <i className="fa fa-chevron-left me-1"></i>Anterior
                        </button>
                        <span className="text-white">Página {currentPage} de {totalPages || 1}</span>
                        <button
                            className="btn btn-secondary btn-sm ms-2"
                            onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages || 1))}
                            disabled={currentPage === (totalPages || 1)}
                        >
                            Siguiente<i className="fa fa-chevron-right ms-1"></i>
                        </button>
                    </div>
                </>
            )}

            {/* Modal para crear soldado */}
            {createModalOpen && (
                <div className="modal-backdrop">
                    <div className="game-modal">
                        <div className="modal-header">
                            <h3>Crear nuevo soldado</h3>
                        </div>
                        <div className="modal-body">
                            {renderForm(false)}
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

            {/* Modal para editar soldado */}
            {editModalOpen && (
                <div className="modal-backdrop">
                    <div className="game-modal">
                        <div className="modal-header">
                            <h3>Editar soldado: {currentSoldier?.name}</h3>
                        </div>
                        <div className="modal-body">
                            {renderForm(true)}
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

export default SoldierAdmin;