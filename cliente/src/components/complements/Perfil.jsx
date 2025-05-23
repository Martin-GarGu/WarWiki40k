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

    // Estados para mostrar/ocultar contraseñas
    const [showPassword, setShowPassword] = useState({
        showCurrentPassword: false,
        showNewPassword: false,
        showConfirmPassword: false
    });

    // Estados para validaciones
    const [errorUsername, setErrorUsername] = useState({ color: false, text: "" });
    const [errorCurrentPassword, setErrorCurrentPassword] = useState({ color: false, text: "" });
    const [errorNewPassword, setErrorNewPassword] = useState({ color: false, text: "" });
    const [errorConfirmPassword, setErrorConfirmPassword] = useState({ color: false, text: "" });

    // Expresiones regulares para validaciones
    const passRegEx = /^(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
    const enieRegEx = /ñ|Ñ/;

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

    // Auto-ocultar mensajes después de 5 segundos
    useEffect(() => {
        if (message) {
            const timer = setTimeout(() => {
                setMessage(null);
            }, 5000);
            return () => clearTimeout(timer);
        }
    }, [message]);

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

    // Validar nombre de usuario en el servidor
    const validarUsername = async (username) => {
        try {
            const response = await fetch(
                `${import.meta.env.VITE_APP_PETICION_IP}/api/buscarUsername/${username}`, 
                { method: "GET" }
            );
            if (!response.ok) {
                throw new Error("Error al verificar el nombre de usuario");
            }
            const data = await response.json();
            if (data.repuesta === "si") {
                setErrorUsername({ color: true, text: "Nombre de usuario ya en uso" });
                return false;
            } else {
                setErrorUsername({ color: false, text: "" });
                return true;
            }
        } catch (error) {
            console.error("Error al verificar el nombre de usuario:", error.message);
            setErrorUsername({ color: true, text: "Error al verificar el nombre de usuario." });
            return false;
        }
    };

    // Función de validación completa
    const validarFormulario = async () => {
        let valid = true;
        
        // Validar username
        if (newUsername === "") {
            setErrorUsername({ color: true, text: "Completa este campo" });
            valid = false;
        } else if (enieRegEx.test(newUsername)) {
            setErrorUsername({ color: true, text: "El carácter 'ñ' no es válido" });
            valid = false;
        } else if (newUsername.length < 3) {
            setErrorUsername({ color: true, text: "El nombre de usuario debe tener al menos 3 caracteres" });
            valid = false;
        } else if (newUsername.length > 30) {
            setErrorUsername({ color: true, text: "El nombre de usuario no puede tener más de 30 caracteres" });
            valid = false;
        } else if (newUsername !== user.username) {
            // Solo validar en servidor si cambió el username
            const usernameValid = await validarUsername(newUsername);
            if (!usernameValid) {
                valid = false;
            }
        } else {
            setErrorUsername({ color: false, text: "" });
        }

        // Si se quiere cambiar la contraseña, validar todos los campos
        if (newPassword || confirmPassword || currentPassword) {
            // Validar contraseña actual
            if (currentPassword === "") {
                setErrorCurrentPassword({ color: true, text: "Ingresa tu contraseña actual" });
                valid = false;
            } else {
                setErrorCurrentPassword({ color: false, text: "" });
            }

            // Validar nueva contraseña
            if (newPassword === "") {
                setErrorNewPassword({ color: true, text: "Completa este campo" });
                valid = false;
            } else if (!passRegEx.test(newPassword)) {
                setErrorNewPassword({
                    color: true,
                    text: "La contraseña debe tener al menos 8 caracteres, con mayúsculas y minúsculas",
                });
                valid = false;
            } else if (enieRegEx.test(newPassword)) {
                setErrorNewPassword({ color: true, text: "La contraseña no puede tener 'ñ'" });
                valid = false;
            } else {
                setErrorNewPassword({ color: false, text: "" });
            }

            // Validar confirmación de contraseña
            if (confirmPassword === "") {
                setErrorConfirmPassword({ color: true, text: "Completa este campo" });
                valid = false;
            } else if (confirmPassword !== newPassword) {
                setErrorConfirmPassword({ color: true, text: "Las contraseñas no son iguales" });
                valid = false;
            } else {
                setErrorConfirmPassword({ color: false, text: "" });
            }
        } else {
            // Si no se están cambiando las contraseñas, limpiar errores
            setErrorCurrentPassword({ color: false, text: "" });
            setErrorNewPassword({ color: false, text: "" });
            setErrorConfirmPassword({ color: false, text: "" });
        }

        return valid;
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
        
        // Validar formulario antes de enviar
        const isValid = await validarFormulario();
        if (!isValid) {
            return;
        }
        
        const token = localStorage.getItem("token");

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
                
                if (!passwordResponse.ok) {
                    let errorMessage = "Error al actualizar la contraseña";
                    
                    try {
                        const passwordData = await passwordResponse.json();
                        
                        if (passwordResponse.status === 422) {
                            // Errores de validación
                            if (passwordData.errors?.current_password) {
                                errorMessage = passwordData.errors.current_password[0];
                            } else if (passwordData.errors?.password) {
                                errorMessage = passwordData.errors.password[0];
                            } else if (passwordData.message) {
                                errorMessage = passwordData.message;
                            }
                        } else if (passwordResponse.status === 401) {
                            errorMessage = "Contraseña actual incorrecta";
                        } else if (passwordResponse.status === 500) {
                            errorMessage = "Error interno del servidor. Inténtalo más tarde.";
                        }
                    } catch (parseError) {
                        // Si no se puede parsear la respuesta
                        if (passwordResponse.status === 401) {
                            errorMessage = "Contraseña actual incorrecta";
                        } else if (passwordResponse.status === 500) {
                            errorMessage = "Error interno del servidor. Inténtalo más tarde.";
                        }
                    }
                    
                    throw new Error(errorMessage);
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
        // Limpiar errores
        setErrorUsername({ color: false, text: "" });
        setErrorCurrentPassword({ color: false, text: "" });
        setErrorNewPassword({ color: false, text: "" });
        setErrorConfirmPassword({ color: false, text: "" });
        // Resetear visibilidad de contraseñas
        setShowPassword({
            showCurrentPassword: false,
            showNewPassword: false,
            showConfirmPassword: false
        });
    };

    // Función para cerrar el modal de editar perfil
    const closeEditModal = () => {
        setIsEditModalOpen(false);
        setNewUsername(user?.username || "");
        setCurrentPassword("");
        setNewPassword("");
        setConfirmPassword("");
        setMessage(null);
        // Limpiar errores
        setErrorUsername({ color: false, text: "" });
        setErrorCurrentPassword({ color: false, text: "" });
        setErrorNewPassword({ color: false, text: "" });
        setErrorConfirmPassword({ color: false, text: "" });
        // Resetear visibilidad de contraseñas
        setShowPassword({
            showCurrentPassword: false,
            showNewPassword: false,
            showConfirmPassword: false
        });
    };

    // Función para alternar visibilidad de contraseñas
    const togglePasswordVisibility = (field) => {
        setShowPassword(prev => ({
            ...prev,
            [field]: !prev[field]
        }));
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
                                    className={errorUsername.color ? 'input-error' : ''}
                                />
                                {errorUsername.text && (
                                    <span className="error-message">{errorUsername.text}</span>
                                )}
                            </div>
                            
                            <div className="password-section">
                                <h4>Cambiar Contraseña (opcional)</h4>
                                <div className="form-group">
                                    <label>Contraseña actual:</label>
                                    <div className="password-input-container">
                                        <input
                                            type={showPassword.showCurrentPassword ? "text" : "password"}
                                            value={currentPassword}
                                            onChange={(e) => setCurrentPassword(e.target.value)}
                                            minLength="6"
                                            className={errorCurrentPassword.color ? 'input-error' : ''}
                                        />
                                        <i
                                            className={`fa-solid fa-eye${showPassword.showCurrentPassword ? "-slash" : ""} password-toggle`}
                                            onClick={() => togglePasswordVisibility('showCurrentPassword')}
                                        ></i>
                                    </div>
                                    {errorCurrentPassword.text && (
                                        <span className="error-message">{errorCurrentPassword.text}</span>
                                    )}
                                </div>
                                <div className="form-group">
                                    <label>Nueva contraseña:</label>
                                    <div className="password-input-container">
                                        <input
                                            type={showPassword.showNewPassword ? "text" : "password"}
                                            value={newPassword}
                                            onChange={(e) => setNewPassword(e.target.value)}
                                            minLength="6"
                                            className={errorNewPassword.color ? 'input-error' : ''}
                                        />
                                        <i
                                            className={`fa-solid fa-eye${showPassword.showNewPassword ? "-slash" : ""} password-toggle`}
                                            onClick={() => togglePasswordVisibility('showNewPassword')}
                                        ></i>
                                    </div>
                                    {errorNewPassword.text && (
                                        <span className="error-message">{errorNewPassword.text}</span>
                                    )}
                                </div>
                                <div className="form-group">
                                    <label>Confirmar nueva contraseña:</label>
                                    <div className="password-input-container">
                                        <input
                                            type={showPassword.showConfirmPassword ? "text" : "password"}
                                            value={confirmPassword}
                                            onChange={(e) => setConfirmPassword(e.target.value)}
                                            minLength="6"
                                            className={errorConfirmPassword.color ? 'input-error' : ''}
                                        />
                                        <i
                                            className={`fa-solid fa-eye${showPassword.showConfirmPassword ? "-slash" : ""} password-toggle`}
                                            onClick={() => togglePasswordVisibility('showConfirmPassword')}
                                        ></i>
                                    </div>
                                    {errorConfirmPassword.text && (
                                        <span className="error-message">{errorConfirmPassword.text}</span>
                                    )}
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