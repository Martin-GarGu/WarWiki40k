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
    
    // Estados para modal de editar perfil
    const [isEditModalOpen, setIsEditModalOpen] = useState(false);
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
            navigate("/login");
        }
    }, [navigate]);

    const fetchUserStats = async (userId) => {
        try {
            const token = localStorage.getItem("token");
            
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

    // Función para manejar el envío del formulario
    const handleSubmitProfile = async (e) => {
        e.preventDefault();
        setMessage(null);
        
        const token = localStorage.getItem("token");
        let hasErrors = false;

        try {
            // Actualizar nombre de usuario si ha cambiado
            if (newUsername !== user.username) {
                const usernameResponse = await fetch(
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
                
                const usernameData = await usernameResponse.json();
                
                if (!usernameResponse.ok) {
                    throw new Error(usernameData.error?.username?.[0] || usernameData.error || "Error al actualizar el nombre de usuario");
                }
                
                // Actualizar el usuario en localStorage y en el estado
                const updatedUser = { ...user, username: newUsername };
                localStorage.setItem("user", JSON.stringify(updatedUser));
                setUser(updatedUser);
            }

            // Actualizar contraseña si se proporcionó
            if (newPassword) {
                if (newPassword !== confirmPassword) {
                    throw new Error("Las contraseñas no coinciden");
                }

                const passwordResponse = await fetch(
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
                
                const passwordData = await passwordResponse.json();
                
                if (!passwordResponse.ok) {
                    throw new Error(passwordData.error?.password?.[0] || passwordData.error || "Error al actualizar la contraseña");
                }
            }

            // Si llegamos aquí, todo salió bien
            closeEditModal();
            setMessage({ type: "success", text: "Perfil actualizado correctamente" });
            
        } catch (err) {
            setMessage({ type: "error", text: err.message });
        }
    };

    // Función para abrir modal de editar perfil
    const openEditModal = () => {
        setNewUsername(user?.username || "");
        setCurrentPassword("");
        setNewPassword("");
        setConfirmPassword("");
        setIsEditModalOpen(true);
        setMessage(null);
    };

    // Función para cerrar el modal de editar perfil
    const closeEditModal = () => {
        setIsEditModalOpen(false);
        setNewUsername(user?.username || "");
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
                <p>{user.username}</p>
                
                <h3>Email:</h3>
                <p>{user.email}</p>
                
                <h3>Miembro desde:</h3>
                <p>{new Date(user.created_at).toLocaleDateString()}</p>
                
                <h3>Favoritos guardados:</h3>
                <p>{stats.totalFavorites}</p>
            </div>
            
            <div className="perfil-actions">
                <button onClick={handleFavoritos} className="btn">
                    <i className="fa fa-star"></i> FAVORITOS
                </button>
                <button onClick={handlePartidas} className="btn">
                    <i className="fa fa-gamepad"></i> PARTIDAS
                </button>
                <button onClick={openEditModal} className="btn">
                    <i className="fa fa-edit"></i> EDITAR PERFIL
                </button>
            </div>

            {/* Modal para editar perfil */}
            {isEditModalOpen && (
                <div className="modal-overlay">
                    <div className="modal-content">
                        <h3>Editar Perfil</h3>
                        {message && (
                            <div className={`message ${message.type}`}>
                                {message.text}
                            </div>
                        )}
                        <form onSubmit={handleSubmitProfile}>
                            <div className="form-group">
                                <label>Nombre de usuario:</label>
                                <input
                                    type="text"
                                    value={newUsername}
                                    onChange={(e) => setNewUsername(e.target.value)}
                                    required
                                    minLength="3"
                                    maxLength="30"
                                />
                            </div>
                            
                            <div className="password-section">
                                <h4>Cambiar Contraseña (opcional)</h4>
                                <div className="form-group">
                                    <label>Contraseña actual:</label>
                                    <input
                                        type="password"
                                        value={currentPassword}
                                        onChange={(e) => setCurrentPassword(e.target.value)}
                                        minLength="6"
                                    />
                                </div>
                                <div className="form-group">
                                    <label>Nueva contraseña:</label>
                                    <input
                                        type="password"
                                        value={newPassword}
                                        onChange={(e) => setNewPassword(e.target.value)}
                                        minLength="6"
                                    />
                                </div>
                                <div className="form-group">
                                    <label>Confirmar nueva contraseña:</label>
                                    <input
                                        type="password"
                                        value={confirmPassword}
                                        onChange={(e) => setConfirmPassword(e.target.value)}
                                        minLength="6"
                                    />
                                </div>
                            </div>
                            
                            <div className="modal-buttons">
                                <button type="submit" className="btn btn-save">Guardar Cambios</button>
                                <button type="button" className="btn btn-cancel" onClick={closeEditModal}>Cancelar</button>
                            </div>
                        </form>
                    </div>
                </div>
            )}
        </div>
    );
}