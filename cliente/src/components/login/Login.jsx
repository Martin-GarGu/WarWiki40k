import { Container } from "@mui/material";
import Button from "@mui/material/Button";
import { TextField } from "@mui/material";
import { useState } from "react";
import Alert from "react-bootstrap/Alert";
import { useNavigate } from "react-router-dom";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import SpinnerFormulario from "../SpinnerFormulario";
import InputAdornment from "@mui/material/InputAdornment";

function Login() {
    const [email, setEmail] = useState("");
    const [errorEmail, setErrorEmail] = useState({ color: false, text: "" });
    const [password, setPassword] = useState("");
    const [errorPassword, setErrorPassword] = useState({
        color: false,
        text: ""
    });
    const emailRegEx = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const enieRegEx = /ñ|Ñ/;

    const navigate = useNavigate();
    const [showAlert, setShowAlert] = useState(false);
    const [alertVariant, setAlertVariant] = useState("");
    const [alertMessage, setAlertMessage] = useState("");
    const [loading, setLoading] = useState(false);
    const [showPassword, setShowPassword] = useState(false);

    function redirigir() {
        navigate("/");
        window.location.reload();
    }

    function validar() {
        if (email === "") {
            setErrorEmail({ color: true, text: "Completa este campo" });
            return false;
        } else if (!emailRegEx.test(email)) {
            setErrorEmail({ color: true, text: "Introduce un email válido" });
            return false;
        } else if (enieRegEx.test(email)) {
            setErrorEmail({ color: true, text: "El carácter 'ñ' no es válido" });
            return false;
        } else {
            setErrorEmail({ color: false, text: "" });
        }

        if (password === "") {
            setErrorPassword({ color: true, text: "Completa este campo" });
            return false;
        }
        return true;
    }

    function limpiarFormulario() {
        setEmail("");
        setPassword("");
    }

    async function fetchPost() {
        setLoading(true);
        const url = `http://${import.meta.env.VITE_APP_PETICION_IP}/api/login`;
        const opciones = {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                email,
                password
            })
        };

        const result = await fetch(url, opciones);
        const jsonData = await result.json();

        if (result.ok) {
            const { token, user } = jsonData; // Extraer token y user de la respuesta
            if (token && user) { 
                localStorage.setItem("token", token);                 // Guardar el token
                localStorage.setItem("user", JSON.stringify(user));   // Guardar el objeto user completo

                setAlertVariant("success");
                setAlertMessage("Usuario logeado exitosamente");
                setShowAlert(true);
                setTimeout(redirigir, 3000);
            } else {
                setAlertMessage("Error: el usuario o el token no están en la respuesta");
                setAlertVariant("danger");
                setShowAlert(true);
                setLoading(false);
            }
        } else {
            setAlertMessage("Usuario o contraseña incorrecta. Vuelve a intentarlo");
            setAlertVariant("danger");
            setShowAlert(true);
            setLoading(false);
            limpiarFormulario();
        }
    }

    function handleSubmit(e) {
        e.preventDefault();
        if (validar()) {
            fetchPost().catch((error) => {
                console.error("Error al iniciar sesión:", error);
                setAlertMessage("Hubo un problema al iniciar sesión");
                setAlertVariant("danger");
                setShowAlert(true);
                setLoading(false);
            });
        }
    }

    return (
        <main>
            {showAlert && (
                <Alert
                    variant={alertVariant}
                    onClose={() => setShowAlert(false)}
                    dismissible
                    className="mt-2"
                >
                    {alertMessage}
                </Alert>
            )}
            <Container
                className="rounded-4 p-4 formulario"
                maxWidth="md"
                sx={{ marginTop: "50px" }}
            >
                <Typography
                    className="p-3"
                    variant="h6"
                    component="div"
                    sx={{ flexGrow: 1 }}
                >
                    <h3>Datos del nuevo usuario</h3>
                </Typography>
                <form onSubmit={handleSubmit} noValidate>
                    <Grid container spacing={2}>
                        <Grid item xs={12}>
                            <TextField
                                placeholder="Email *"
                                fullWidth
                                value={email}
                                helperText={errorEmail.text}
                                error={errorEmail.color}
                                onChange={(e) => {
                                    e.target.value = e.target.value.toLowerCase();
                                    setEmail(e.target.value);
                                }}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                placeholder="Contraseña *"
                                fullWidth
                                type={showPassword ? "text" : "password"}
                                helperText={errorPassword.text}
                                error={errorPassword.color}
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                InputProps={{
                                    endAdornment: (
                                        <InputAdornment position="end">
                                            <i
                                                className={`fa-solid fa-eye${showPassword ? "-slash" : ""} d-flex justify-content-center align-items-center`}
                                                onClick={() => setShowPassword(!showPassword)}
                                            ></i>
                                        </InputAdornment>
                                    )
                                }}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            {loading ? (
                                <SpinnerFormulario />
                            ) : (
                                <Button variant="contained" type="submit" color="success">
                                    Iniciar Sesión
                                </Button>
                            )}
                        </Grid>
                    </Grid>
                </form>
            </Container>
        </main>
    );
}

export default Login;
