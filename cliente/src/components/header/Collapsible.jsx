import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { useEffect, useState } from "react";
// import './Navbar.scss'; // Importamos el archivo SCSS

function Collapsible() {
  const [logeado, setLogeado] = useState(false);
  const [role, setRole] = useState("");
  const [factions, setFactions] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem("token");
    const user = JSON.parse(localStorage.getItem("user"));

    if (token) {
      setLogeado(true);
    } else {
      setLogeado(false);
    }

    if (user && user.role) {
      setRole(user.role);
    }
    
    // Cargar las facciones al iniciar el componente
    fetchFactions();
  }, []);

  const fetchFactions = async () => {
    let isMounted = true; // Para verificar si el componente sigue montado
    try {
      const respuesta = await fetch(`${import.meta.env.VITE_APP_PETICION_IP}/api/factions`, {
        method: "GET",
      });

      if (!respuesta.ok) {
        throw new Error(`Error en la solicitud: ${respuesta.statusText}`);
      }

      const contentType = respuesta.headers.get("content-type");
      if (contentType && contentType.includes("application/json")) {
        const jsonData = await respuesta.json();
        if (isMounted) {
          setFactions(jsonData.data);
          setIsLoading(false);
        }
      } else {
        throw new Error("La respuesta no es JSON.");
      }
    } catch (error) {
      if (isMounted) {
        console.error("Error en la solicitud:", error);
        setError(`Error en la solicitud: ${error.message}`);
        setIsLoading(false);
      }
    }

    return () => {
      isMounted = false; // Limpiar el flag cuando el componente se desmonte
    };
  };

  const logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    setLogeado(false);
    setRole("");
  };

  return (
    <Navbar collapseOnSelect expand="lg" className="p-0" id="headerNavbar">
      <Container fluid className="navbar-container p-0">
        <Navbar.Brand href="/" className="nav-link nav-brand-custom">
          <div id="logo" />
          {/* <div style={{backgroundImage: "url(/src/assets/images/asd.png)"}}/> */}
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto" id="nav">
            <Nav.Link href="/rules" className="nav-item-custom">Reglas</Nav.Link>
            
            {/* Dropdown de facciones - visible para todos */}
            <NavDropdown title="Facciones" id="factions-dropdown" className="nav-item-custom">
              {isLoading ? (
                <NavDropdown.Item disabled>Cargando...</NavDropdown.Item>
              ) : error ? (
                <NavDropdown.Item disabled>Error al cargar facciones</NavDropdown.Item>
              ) : (
                factions.map((faction) => (
                  <NavDropdown.Item key={faction._id} href={`/${faction.slug}`} className="dropdown-item-custom">
                    {faction.name}
                  </NavDropdown.Item>
                ))
              )}
              {!isLoading && !error && factions.length === 0 && (
                <NavDropdown.Item disabled>No hay facciones disponibles</NavDropdown.Item>
              )}
            </NavDropdown>
            
            {/* Enlace a Partidas - solo visible si está logueado */}
            {logeado && (
              <Nav.Link href="/games" className="nav-item-custom">Partidas</Nav.Link>
            )}
            
            {logeado && (
              <Nav.Link href="/profile" className="nav-item-custom">Perfil</Nav.Link>
            )}
            
            {/* Admin Panel movido después de Perfil */}
            {logeado && role === "admin" && (
              <Nav.Link href="/crud" className="nav-item-custom">Admin Panel</Nav.Link>
            )}
          </Nav>
          <Nav className="ms-auto" id="account">
            {logeado ? (
              <Nav.Link href="/" className="nav-item-custom" onClick={logout}>
                Cerrar Sesión
              </Nav.Link>
            ) : (
              <>
                <Nav.Link href="/login" className="nav-item-custom">
                  Iniciar Sesión
                </Nav.Link>
                <Nav.Link href="/register" className="nav-item-custom">
                  Registro
                </Nav.Link>
              </>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Collapsible;