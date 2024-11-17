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
    color: false,
    text: ""
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

  function usernameBD() {
    fetch(
      `http://${import.meta.env.VITE_APP_PETICION_IP}/api/buscarUsername/${username}`,
      { method: "get" }
    )
      .then(function (respuesta) {
        return respuesta.json();
      })
      .then(function (jsonData) {
        jsonData.repuesta === "si"
          ? setErrorUsername({
              color: true,
              text: "Este nombre de usuario ya está registrado"
            })
          : setErrorUsername({ color: false, text: "" });
      })
      .catch(function (ex) {
        console.error("Error", ex.message);
      });
  }

  function emailBD() {
    fetch(
      `http://localhost:8000/api/buscarUsername/${email}`,
      { method: "get" }
    )
      .then(function (respuesta) {
        return respuesta.json();
      })
      .then(function (jsonData) {
        jsonData.repuesta === "si"
          ? setErrorEmail({
              color: true,
              text: "Este email ya está registrado"
            })
          : setErrorEmail({ color: false, text: "" });
      })
      .catch(function (ex) {
        console.error("Error", ex.message);
      });
  }

  function validar() {
    let valid = true;
    if (pass === "") {
      setErrorPass({ color: true, text: "Completa este campo" });
      valid = false;
    } else if (!passRegEx.test(pass)) {
      setErrorPass({
        color: true,
        text: "La contraseña debe tener al menos 8 caracteres, con masyúsculas y minúsculas"
      });
      valid = false;
    } else if (enieRegEx.test(pass)) {
      setErrorPass({ color: true, text: "La contraseña no puede tener 'ñ'" });
      return false;
    } else {
      setErrorPass({ color: false, text: "" });
    }

    if (confpass === "") {
      setErrorConfpass({ color: true, text: "Completa este campo" });
      valid = false;
    } else if (confpass !== pass) {
      setErrorConfpass({ color: true, text: "Las contraseñas no son iguales" });
      valid = false;
    } else {
      setErrorConfpass({ color: false, text: "" });
    }

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

    if (username === "") {
      setErrorUsername({ color: true, text: "Completa este campo" });
      valid = false;
    } else if (enieRegEx.test(username)) {
      setErrorUsername({ color: true, text: "El carácter 'ñ' no es válido" });
      return false;
    } else {
      usernameBD();
    }

    return valid;
  }

  function redirigir() {
    navigate("/login");
  }

  function handleRegistro(e) {
    e.preventDefault();

    if (validar()) {
      fetchPost().catch((error) => {
        console.error("Error al registrar:", error);
        setAlertMessage("Hubo un problema al registrar el usuario");
        setAlertVariant("danger");
        setShowAlert(true);
        setLoading(false)
      });
    }
  }
  async function fetchPost() {
    setLoading(true);
    const result = await fetch(
      `http://localhost:8000/api/register`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          username: username,
          password: pass,
          password_confirmation: confpass,
          email: email,
        })
      }
    );

    // const jsonData = await result.json();
    // console.log(jsonData);

    if (result.ok) {
      setAlertMessage("Usuario registrado correctamente");
      setAlertVariant("success");
      setShowAlert(true);
      setTimeout(redirigir, 3000);
    } else {
      setLoading(false)
    }
  }

  return (
    <>
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
        className="formulario rounded-4 p-4"
        maxWidth="md"
        sx={{ marginTop: "50px" }}
      >
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          <h3>Datos del nuevo usuario</h3>
        </Typography>
        <form onSubmit={handleRegistro}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                placeholder={"Nombre de usuario *"}
                fullWidth
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                helperText={errorusername.text}
                error={errorusername.color}
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                placeholder={"Contraseña *"}
                fullWidth
                type={showPassword.showPassword ? "text" : "password"}
                value={pass}
                onChange={(e) => setPass(e.target.value)}
                helperText={errorpass.text}
                error={errorpass.color}
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <i
                        className={`fa-solid fa-eye${
                          showPassword.showPassword ? "-slash" : ""
                        } d-flex justify-content-center align-items-center`}
                        onClick={() =>
                          setShowPassword({
                            ...showPassword,
                            showPassword: !showPassword.showPassword
                          })
                        }
                      ></i>
                    </InputAdornment>
                  )
                }}
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                placeholder={"Confirmar contraseña *"}
                fullWidth
                type={showPassword.showConfPassword ? "text" : "password"}
                value={confpass}
                onChange={(e) => setConfpass(e.target.value)}
                helperText={errorconfpass.text}
                error={errorconfpass.color}
                password_confirmation
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <i
                        className={`fa-solid fa-eye${
                          showPassword.showConfPassword ? "-slash" : ""
                        } d-flex justify-content-center align-items-center`}
                        onClick={() =>
                          setShowPassword({
                            ...showPassword,
                            showConfPassword: !showPassword.showConfPassword
                          })
                        }
                      ></i>
                    </InputAdornment>
                  )
                }}
              />
            </Grid>
            <Grid item xs={8}>
              <TextField
                placeholder={"Email *"}
                fullWidth
                type="email"
                value={email}
                onChange={(e) => {
                  e.target.value = e.target.value.toLowerCase();
                  setEmail(e.target.value);
                }}
                helperText={erroremail.text}
                error={erroremail.color}
              />
            </Grid>
            <Grid item xs={12}>
              {loading ? (
                <SpinnerFormulario />
              ) : (
                <Button type="submit" variant="contained" color="success">
                  Crear Usuario
                </Button>
              )}
            </Grid>
          </Grid>
        </form>
      </Container>
    </>
  );
};

export default Registro;