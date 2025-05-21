import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function Perfil() {
    const navigate = useNavigate();
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [stats, setStats] = useState({
        totalFavorites: 0
    });
    
    // Estados para edición
    const [isEditingUsername, setIsEditingUsername] = useState(false);
    const [isPasswordModalOpen, setIsPasswordModalOpen] = useState(false);
    const [newUsername, setNewUsername] = useState("");
    const [currentPassword, setCurrentPassword] = useState("");
    const [newPassword, setNewPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [message, setMessage] = useState(null);

    useEffect(() => {
        const userData = localStorage.getItem("user");
        if (userData) {
            const parsedUser = JSON.parse(userData);
            setUser(parsedUser);
            setNewUsername(parsedUser.username);
            fetchUserStats(parsedUser.id);
        } else {
            navigate("/login"); // Redirige a /login si no hay usuario logueado
        }
    }, [navigate]); // Agregar navigate como dependencia para evitar advertencias

    const fetchUserStats = async (userId) => {
        try {
            const token = localStorage.getItem("token");
            
            // Obtener conteo de favoritos
            const favResponse = await fetch(
                `${import.meta.env.VITE_APP_PETICION_IP}/api/favorites/user/${userId}`,
                {
                    headers: { Authorization: `Bearer ${token}` }
                }
            );

            if (!favResponse.ok) {
                throw new Error("Error al obtener datos de favoritos");
            }

            const favData = await favResponse.json();
            
            setStats({
                totalFavorites: favData.data.length
            });
            
        } catch (err) {
            setError(err.message);
        } finally {
            setLoading(false);
        }
    };

    const handleFavoritos = () => {
        navigate("/favorites");
    };

    const handlePartidas = () => {
        navigate("/games");
    };

    // Función para actualizar el nombre de usuario
    const handleUpdateUsername = async (e) => {
        e.preventDefault();
        setMessage(null);
        
        try {
            const token = localStorage.getItem("token");
            const response = await fetch(
                `${import.meta.env.VITE_APP_PETICION_IP}/api/profile/update-username`,
                {
                    method: "POST",
                    headers: { 
                        "Content-Type": "application/json",
                        Authorization: `Bearer ${token}`
                    },
                    body: JSON.stringify({ username: newUsername })
                }
            );
            
            const data = await response.json();
            
            if (!response.ok) {
                throw new Error(data.error?.username?.[0] || data.error || "Error al actualizar el nombre de usuario");
            }
            
            // Actualizar el usuario en localStorage y en el estado
            const updatedUser = { ...user, username: newUsername };
            localStorage.setItem("user", JSON.stringify(updatedUser));
            setUser(updatedUser);
            setIsEditingUsername(false);
            setMessage({ type: "success", text: "Nombre de usuario actualizado correctamente" });
            
        } catch (err) {
            setMessage({ type: "error", text: err.message });
        }
    };

    // Función para cambiar la contraseña
    const handleChangePassword = async (e) => {
        e.preventDefault();
        setMessage(null);
        
        if (newPassword !== confirmPassword) {
            setMessage({ type: "error", text: "Las contraseñas no coinciden" });
            return;
        }
        
        try {
            const token = localStorage.getItem("token");
            const response = await fetch(
                `${import.meta.env.VITE_APP_PETICION_IP}/api/profile/update-password`,
                {
                    method: "POST",
                    headers: { 
                        "Content-Type": "application/json",
                        Authorization: `Bearer ${token}`
                    },
                    body: JSON.stringify({
                        current_password: currentPassword,
                        password: newPassword,
                        password_confirmation: confirmPassword
                    })
                }
            );
            
            const data = await response.json();
            
            if (!response.ok) {
                throw new Error(data.error?.password?.[0] || data.error || "Error al actualizar la contraseña");
            }
            
            // Limpiar campos y mostrar mensaje de éxito
            setCurrentPassword("");
            setNewPassword("");
            setConfirmPassword("");
            setIsPasswordModalOpen(false);
            setMessage({ type: "success", text: "Contraseña actualizada correctamente" });
            
        } catch (err) {
            setMessage({ type: "error", text: err.message });
        }
    };

    // Función para cancelar la edición de nombre de usuario
    const handleCancelEdit = () => {
        setIsEditingUsername(false);
        setNewUsername(user?.username || "");
        setMessage(null);
    };

    // Función para cerrar el modal de contraseña
    const closePasswordModal = () => {
        setIsPasswordModalOpen(false);
        setCurrentPassword("");
        setNewPassword("");
        setConfirmPassword("");
        setMessage(null);
    };

    if (loading) {
        return <p className="loading-text">Cargando perfil...</p>;
    }

    if (error) {
        return <div className="error-text">Error: {error}</div>;
    }

    if (!user) {
        return <p className="loading-text">Usuario no encontrado</p>;
    }

    return (
        <div className="perfil-container">
            <h2 className="perfil-header">Perfil del Usuario</h2>
            
            {message && (
                <div className={`message ${message.type}`}>
                    {message.text}
                </div>
            )}
            
            <div className="perfil-avatar">
                <div className="avatar-placeholder">
                    {user.username.charAt(0).toUpperCase()}
                </div>
            </div>
            
            <div className="perfil-details">
                <h3>Nombre de Usuario:</h3>
                {isEditingUsername ? (
                    <form onSubmit={handleUpdateUsername} className="edit-form">
                        <input
                            type="text"
                            value={newUsername}
                            onChange={(e) => setNewUsername(e.target.value)}
                            required
                            minLength="3"
                            maxLength="30"
                        />
                        <div className="form-buttons">
                            <button type="submit" className="btn btn-save">Guardar</button>
                            <button type="button" className="btn btn-cancel" onClick={handleCancelEdit}>Cancelar</button>
                        </div>
                    </form>
                ) : (
                    <div className="detail-with-edit">
                        <p>{user.username}</p>
                        <button 
                            onClick={() => setIsEditingUsername(true)} 
                            className="btn-edit"
                            title="Editar nombre de usuario"
                        >
                            <i className="fa fa-pencil"></i>
                        </button>
                    </div>
                )}
                
                <h3>Email:</h3>
                <p>{user.email}</p>
                
                <h3>Miembro desde:</h3>
                <p>{new Date(user.created_at).toLocaleDateString()}</p>
                
                <h3>Favoritos guardados:</h3>
                <p>{stats.totalFavorites}</p>
                
                <h3>Contraseña:</h3>
                <div className="detail-with-edit">
                    <p>••••••••</p>
                    <button 
                        onClick={() => setIsPasswordModalOpen(true)} 
                        className="btn-edit"
                        title="Cambiar contraseña"
                    >
                        <i className="fa fa-key"></i>
                    </button>
                </div>
            </div>
            
            <div className="perfil-actions">
                <button onClick={handleFavoritos} className="btn">
                    <i className="fa fa-star"></i> FAVORITOS
                </button>
                <button onClick={handlePartidas} className="btn">
                    <i className="fa fa-gamepad"></i> PARTIDAS
                </button>
            </div>

            {/* Modal para cambiar contraseña */}
            {isPasswordModalOpen && (
                <div className="modal-overlay">
                    <div className="modal-content">
                        <h3>Cambiar Contraseña</h3>
                        <form onSubmit={handleChangePassword}>
                            <div className="form-group">
                                <label>Contraseña actual:</label>
                                <input
                                    type="password"
                                    value={currentPassword}
                                    onChange={(e) => setCurrentPassword(e.target.value)}
                                    required
                                    minLength="6"
                                />
                            </div>
                            <div className="form-group">
                                <label>Nueva contraseña:</label>
                                <input
                                    type="password"
                                    value={newPassword}
                                    onChange={(e) => setNewPassword(e.target.value)}
                                    required
                                    minLength="6"
                                />
                            </div>
                            <div className="form-group">
                                <label>Confirmar nueva contraseña:</label>
                                <input
                                    type="password"
                                    value={confirmPassword}
                                    onChange={(e) => setConfirmPassword(e.target.value)}
                                    required
                                    minLength="6"
                                />
                            </div>
                            <div className="modal-buttons">
                                <button type="submit" className="btn btn-save">Guardar</button>
                                <button type="button" className="btn btn-cancel" onClick={closePasswordModal}>Cancelar</button>
                            </div>
                        </form>
                    </div>
                </div>
            )}
        </div>
    );
}