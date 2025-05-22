import Grid from "@mui/material/Grid";
import { Container } from "@mui/material";
import Button from "@mui/material/Button";
import { TextField } from "@mui/material";
import { useState } from "react";
import Alert from "react-bootstrap/Alert";
import Typography from "@mui/material/Typography";
import { useNavigate } from "react-router-dom";
import SpinnerFormulario from "../SpinnerFormulario";
import InputAdornment from "@mui/material/InputAdornment";

const Registro = () => {
  const navigate = useNavigate();
  const [pass, setPass] = useState("");
  const [confpass, setConfpass] = useState("");
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [errorpass, setErrorPass] = useState({ color: false, text: "" });
  const [errorconfpass, setErrorConfpass] = useState({
    color: false,
    text: ""
  });
  const [erroremail, setErrorEmail] = useState({ color: false, text: "" });
  const [errorusername, setErrorUsername] = useState({
    color: false, text: ""
  });
  const emailRegEx = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const passRegEx = /^(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
  const enieRegEx = /ñ|Ñ/;

  const [loading, setLoading] = useState(false);
  const [showAlert, setShowAlert] = useState(false);
  const [alertVariant, setAlertVariant] = useState("");
  const [alertMessage, setAlertMessage] = useState("");
  const [showPassword, setShowPassword] = useState({
    showPassword: false,
    showConfPassword: false
  });

  async function emailBD() {
    try {
      const response = await fetch(
        `${import.meta.env.VITE_APP_PETICION_IP}/api/buscarEmail/${email}`,
        { method: "GET" }
      );

      if (!response.ok) {
        throw new Error("Error al verificar el correo electrónico");
      }

      const data = await response.json();

      if (data.repuesta === "si") {
        setErrorEmail({
          color: true,
          text: "Este email ya está registrado",
        });
        return false;
      } else {
        setErrorEmail({ color: false, text: "" });
        return true;
      }
    } catch (error) {
      console.error("Error:", error.message);
      setErrorEmail({ color: true, text: "Error al verificar el email." });
      return false;
    }
  }

  async function validarUsername() {
    try {
      const response = await fetch(`${import.meta.env.VITE_APP_PETICION_IP}/api/buscarUsername/${username}`, { method: "GET" });
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
  }

  async function fetchPost() {
    setLoading(true);

    try {
      const response = await fetch(
        `${import.meta.env.VITE_APP_PETICION_IP}/api/register`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            username: username,
            password: pass,
            password_confirmation: confpass,
            email: email,
          }),
        }
      );

      const jsonData = await response.json();

      if (response.ok) {
        setAlertMessage("Usuario registrado correctamente");
        setAlertVariant("success");
        setShowAlert(true);
        setTimeout(redirigir, 3000);
      } else {
        if (jsonData?.message?.includes("email")) {
          setErrorEmail({
            color: true,
            text: "Este email ya está registrado",
          });
        } else if (jsonData?.message?.includes("username")) {
          setErrorUsername({
            color: true,
            text: "Este nombre de usuario ya está registrado",
          });
        } else {
          setAlertMessage("Error al registrar el usuario");
          setAlertVariant("danger");
          setShowAlert(true);
        }
      }
    } catch (error) {
      console.error("Error en registro:", error.message);
      setAlertMessage("Hubo un problema al registrar el usuario");
      setAlertVariant("danger");
      setShowAlert(true);
    } finally {
      setLoading(false);
    }
  }

  function validar() {
    let valid = true;
    
    // Validar email primero (ya que es más importante)
    if (email === "") {
      setErrorEmail({ color: true, text: "Completa este campo" });
      valid = false;
    } else if (!emailRegEx.test(email)) {
      setErrorEmail({ color: true, text: "Introduce un email válido" });
      valid = false;
    } else if (enieRegEx.test(email)) {
      setErrorEmail({ color: true, text: "El carácter 'ñ' no es válido" });
      return false;
    } else {
      emailBD();
    }

    // Validar username
    if (username === "") {
      setErrorUsername({ color: true, text: "Completa este campo" });
      valid = false;
    } else if (enieRegEx.test(username)) {
      setErrorUsername({ color: true, text: "El carácter 'ñ' no es válido" });
      return false;
    } else {
      validarUsername();
    }

    // Validar contraseña
    if (pass === "") {
      setErrorPass({ color: true, text: "Completa este campo" });
      valid = false;
    } else if (!passRegEx.test(pass)) {
      setErrorPass({
        color: true,
        text: "La contraseña debe tener al menos 8 caracteres, con mayúsculas y minúsculas",
      });
      valid = false;
    } else if (enieRegEx.test(pass)) {
      setErrorPass({ color: true, text: "La contraseña no puede tener 'ñ'" });
      return false;
    } else {
      setErrorPass({ color: false, text: "" });
    }

    // Validar confirmación de contraseña
    if (confpass === "") {
      setErrorConfpass({ color: true, text: "Completa este campo" });
      valid = false;
    } else if (confpass !== pass) {
      setErrorConfpass({ color: true, text: "Las contraseñas no son iguales" });
      valid = false;
    } else {
      setErrorConfpass({ color: false, text: "" });
    }

    return valid;
  }

  function handleRegistro(e) {
    e.preventDefault();

    if (validar()) {
      fetchPost().catch((error) => {
        console.error("Error al registrar:", error);
        setAlertMessage("Hubo un problema al registrar el usuario");
        setAlertVariant("danger");
        setShowAlert(true);
        setLoading(false);
      });
    }
  }

  function redirigir() {
    navigate("/login");
  }

  return (
    <div className="registro-container">
      {showAlert && (
        <Alert
          variant={alertVariant}
          onClose={() => setShowAlert(false)}
          dismissible
          className="registro-alert"
        >
          {alertMessage}
        </Alert>
      )}
      <Container className="registro-form-container rounded-4 p-4" maxWidth="md">
        <Typography variant="h4" component="div" className="registro-title">
          Crear Nueva Cuenta
        </Typography>
        <Typography variant="body1" className="registro-subtitle">
          Completa los siguientes datos para registrarte
        </Typography>
        
        <form onSubmit={handleRegistro} className="registro-form">
          <Grid container spacing={3}>
            {/* Email - Campo principal */}
            <Grid item xs={12}>
              <TextField
                placeholder="Email *"
                fullWidth
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                helperText={erroremail.text}
                error={erroremail.color}
                className="registro-input"
                variant="outlined"
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <i className="fa-solid fa-envelope registro-input-icon"></i>
                    </InputAdornment>
                  ),
                }}
              />
            </Grid>

            {/* Username */}
            <Grid item xs={12}>
              <TextField
                placeholder="Nombre de usuario *"
                fullWidth
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                helperText={errorusername.text}
                error={errorusername.color}
                className="registro-input"
                variant="outlined"
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <i className="fa-solid fa-user registro-input-icon"></i>
                    </InputAdornment>
                  ),
                }}
              />
            </Grid>

            {/* Contraseñas */}
            <Grid item xs={12} md={6}>
              <TextField
                placeholder="Contraseña *"
                fullWidth
                type={showPassword.showPassword ? "text" : "password"}
                value={pass}
                onChange={(e) => setPass(e.target.value)}
                helperText={errorpass.text}
                error={errorpass.color}
                className="registro-input"
                variant="outlined"
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <i className="fa-solid fa-lock registro-input-icon"></i>
                    </InputAdornment>
                  ),
                  endAdornment: (
                    <InputAdornment position="end">
                      <i
                        className={`fa-solid fa-eye${showPassword.showPassword ? "-slash" : ""} registro-password-toggle`}
                        onClick={() =>
                          setShowPassword({
                            ...showPassword,
                            showPassword: !showPassword.showPassword,
                          })
                        }
                      ></i>
                    </InputAdornment>
                  ),
                }}
              />
            </Grid>

            <Grid item xs={12} md={6}>
              <TextField
                placeholder="Confirmar contraseña *"
                fullWidth
                type={showPassword.showConfPassword ? "text" : "password"}
                value={confpass}
                onChange={(e) => setConfpass(e.target.value)}
                helperText={errorconfpass.text}
                error={errorconfpass.color}
                className="registro-input"
                variant="outlined"
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <i className="fa-solid fa-lock registro-input-icon"></i>
                    </InputAdornment>
                  ),
                  endAdornment: (
                    <InputAdornment position="end">
                      <i
                        className={`fa-solid fa-eye${showPassword.showConfPassword ? "-slash" : ""} registro-password-toggle`}
                        onClick={() =>
                          setShowPassword({
                            ...showPassword,
                            showConfPassword: !showPassword.showConfPassword,
                          })
                        }
                      ></i>
                    </InputAdornment>
                  ),
                }}
              />
            </Grid>

            {/* Botón de registro */}
            <Grid item xs={12}>
              <Button
                variant="contained"
                type="submit"
                fullWidth
                disabled={loading}
                className="registro-submit-btn"
                size="large"
              >
                {loading ? <SpinnerFormulario /> : "Crear Cuenta"}
              </Button>
            </Grid>
          </Grid>
        </form>
      </Container>
    </div>
  );
};

export default Registro;