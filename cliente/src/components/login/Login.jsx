import { useState } from "react";
import { Container, TextField, Button, Typography, InputAdornment, Link } from "@mui/material";
import Alert from "react-bootstrap/Alert";
import { useNavigate } from "react-router-dom";

function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);
    const [errorEmail, setErrorEmail] = useState({ color: false, text: "" });
    const [errorPassword, setErrorPassword] = useState({ color: false, text: "" });
    const [loading, setLoading] = useState(false);
    const [showAlert, setShowAlert] = useState(false);
    const [alertVariant, setAlertVariant] = useState("");
    const [alertMessage, setAlertMessage] = useState("");

    const navigate = useNavigate();

    const emailRegEx = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    const handleRedirection = () => {
        navigate("/");
        window.location.reload();
    };

    const validateFields = () => {
        let isValid = true;

        if (!email) {
            setErrorEmail({ color: true, text: "El correo es obligatorio" });
            isValid = false;
        } else if (!emailRegEx.test(email)) {
            setErrorEmail({ color: true, text: "Formato de correo no válido" });
            isValid = false;
        } else {
            setErrorEmail({ color: false, text: "" });
        }

        if (!password.trim()) {
            setErrorPassword({ color: true, text: "La contraseña es obligatoria" });
            isValid = false;
        } else {
            setErrorPassword({ color: false, text: "" });
        }

        return isValid;
    };

    const fetchLogin = async () => {
        setLoading(true);

        try {
            const response = await fetch(`${import.meta.env.VITE_APP_PETICION_IP}/api/login`, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ email, password }),
            });

            if (!response.ok) {
                throw new Error("Correo o contraseña incorrectos");
            }

            const data = await response.json();

            if (data.token && data.user) {
                localStorage.setItem("token", data.token);
                localStorage.setItem("user", JSON.stringify(data.user));

                setAlertVariant("success");
                setAlertMessage("Inicio de sesión exitoso");
                setShowAlert(true);

                setTimeout(handleRedirection, 3000);
            } else {
                throw new Error("Correo o contraseña incorrectos");
            }
        } catch (error) {
            setAlertVariant("danger");
            setAlertMessage("Correo o contraseña incorrectos");
            setShowAlert(true);
        } finally {
            setLoading(false);
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (validateFields()) {
            fetchLogin().catch(console.error);
        }
    };

    const handleGoToRegister = () => {
        navigate("/register");
    };

    return (
        <div className="login-container">
            {showAlert && (
                <Alert
                    variant={alertVariant}
                    dismissible
                    className="login-alert"
                    onClose={() => setShowAlert(false)}
                >
                    {alertMessage}
                </Alert>
            )}
            
            <Container className="login-form-container rounded-4 p-4" maxWidth="sm">
                <Typography variant="h4" component="div" className="login-title">
                    Iniciar Sesión
                </Typography>
                <Typography variant="body1" className="login-subtitle">
                    Ingresa tus credenciales para acceder
                </Typography>
                
                <form onSubmit={handleSubmit} className="login-form" noValidate>
                    {/* Email */}
                    <TextField
                        fullWidth
                        type="email"
                        placeholder="Correo Electrónico *"
                        variant="outlined"
                        value={email}
                        onChange={(e) => setEmail(e.target.value.toLowerCase())}
                        error={errorEmail.color}
                        helperText={errorEmail.text}
                        className="login-input"
                        InputProps={{
                            startAdornment: (
                                <InputAdornment position="start">
                                    <i className="fa-solid fa-envelope login-input-icon"></i>
                                </InputAdornment>
                            ),
                        }}
                        sx={{ mb: 3 }}
                    />

                    {/* Password */}
                    <TextField
                        fullWidth
                        type={showPassword ? "text" : "password"}
                        placeholder="Contraseña *"
                        variant="outlined"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        error={errorPassword.color}
                        helperText={errorPassword.text}
                        className="login-input"
                        InputProps={{
                            startAdornment: (
                                <InputAdornment position="start">
                                    <i className="fa-solid fa-lock login-input-icon"></i>
                                </InputAdornment>
                            ),
                            endAdornment: (
                                <InputAdornment position="end">
                                    <i
                                        className={`fa-solid fa-eye${showPassword ? "-slash" : ""} login-password-toggle`}
                                        onClick={() => setShowPassword(!showPassword)}
                                    />
                                </InputAdornment>
                            ),
                        }}
                        sx={{ mb: 3 }}
                    />

                    {/* Login Button */}
                    <Button
                        type="submit"
                        variant="contained"
                        fullWidth
                        size="large"
                        disabled={loading}
                        className="login-submit-btn"
                        sx={{ mb: 3 }}
                    >
                        {loading ? (
                            <span
                                className="spinner-border spinner-border-sm"
                                role="status"
                                aria-hidden="true"
                            />
                        ) : (
                            "Iniciar Sesión"
                        )}
                    </Button>

                    {/* Divider */}
                    <div className="login-divider">
                        <span>o</span>
                    </div>

                    {/* Register Link */}
                    <div className="login-register-section">
                        <Typography variant="body2" className="login-register-text">
                            ¿No tienes una cuenta?
                        </Typography>
                        <Button
                            variant="outlined"
                            fullWidth
                            size="large"
                            onClick={handleGoToRegister}
                            className="login-register-btn"
                        >
                            Crear Nueva Cuenta
                        </Button>
                    </div>
                </form>
            </Container>
        </div>
    );
}

export default Login;