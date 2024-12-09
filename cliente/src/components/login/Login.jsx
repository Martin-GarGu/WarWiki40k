import { useState } from "react";
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
    const enieRegEx = /ñ|Ñ/;

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
        } else if (enieRegEx.test(email)) {
            setErrorEmail({ color: true, text: "El carácter 'ñ' no está permitido" });
            isValid = false;
        } else {
            setErrorEmail({ color: false, text: "" });
        }

        if (!password) {
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
            const response = await fetch(`http://${import.meta.env.VITE_APP_PETICION_IP}/api/login`, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ email, password }),
            });

            const data = await response.json();

            if (response.ok && data.token && data.user) {
                localStorage.setItem("token", data.token);
                localStorage.setItem("user", JSON.stringify(data.user));

                setAlertVariant("success");
                setAlertMessage("Inicio de sesión exitoso");
                setShowAlert(true);

                setTimeout(handleRedirection, 3000);
            } else {
                throw new Error(data.message || "Credenciales incorrectas");
            }
        } catch (error) {
            setAlertVariant("danger");
            setAlertMessage(error.message || "Error al iniciar sesión");
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

    return (
        <main className="login-page">
            {showAlert && (
                <Alert
                    variant={alertVariant}
                    dismissible
                    className="mt-2"
                    onClose={() => setShowAlert(false)}
                >
                    {alertMessage}
                </Alert>
            )}
            <div className="container py-5">
                <div className="row justify-content-center">
                    <div className="col-lg-6 col-md-8 col-sm-12">
                        <div className="form-container p-4">
                            <h2 className="text-center mb-4">Iniciar Sesión</h2>
                            <form onSubmit={handleSubmit} noValidate>
                                <div className="mb-3">
                                    <label htmlFor="email" className="form-label">
                                        Correo Electrónico
                                    </label>
                                    <input
                                        type="email"
                                        id="email"
                                        className={`form-control ${
                                            errorEmail.color ? "is-invalid" : ""
                                        }`}
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value.toLowerCase())}
                                    />
                                    {errorEmail.text && (
                                        <div className="invalid-feedback">{errorEmail.text}</div>
                                    )}
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="password" className="form-label">
                                        Contraseña
                                    </label>
                                    <div className="input-group">
                                        <input
                                            type={showPassword ? "text" : "password"}
                                            id="password"
                                            className={`form-control ${
                                                errorPassword.color ? "is-invalid" : ""
                                            }`}
                                            value={password}
                                            onChange={(e) => setPassword(e.target.value)}
                                        />
                                        <button
                                            type="button"
                                            className="btn btn-outline-secondary"
                                            onClick={() => setShowPassword(!showPassword)}
                                        >
                                            <i
                                                className={`fa-solid fa-eye${
                                                    showPassword ? "-slash" : ""
                                                }`}
                                            ></i>
                                        </button>
                                    </div>
                                    {errorPassword.text && (
                                        <div className="invalid-feedback">{errorPassword.text}</div>
                                    )}
                                </div>
                                <div className="d-grid">
                                    <button type="submit" className="btn btn-primary">
                                        {loading ? (
                                            <span
                                                className="spinner-border spinner-border-sm"
                                                role="status"
                                                aria-hidden="true"
                                            ></span>
                                        ) : (
                                            "Iniciar Sesión"
                                        )}
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}

export default Login;
