import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { useEffect, useState } from "react";
import logo from "../../assets/images/asd.png"
import { useNavigate } from 'react-router-dom';

function Collapsible() {
  const [logeado, setLogeado] = useState(false);
  const [role, setRole] = useState("");
  const [user, setUser] = useState(null);
  const [factions, setFactions] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");
    const userData = JSON.parse(localStorage.getItem("user"));

    if (token) {
      setLogeado(true);
    } else {
      setLogeado(false);
    }

    if (userData) {
      setUser(userData);
      if (userData.role) {
        setRole(userData.role);
      }
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
    setUser(null);
    navigate("/login");
  };

  // Función para obtener las iniciales del usuario
  const getInitials = (user) => {
    if (!user) return "U";
    
    if (user.name) {
      return user.name
        .split(" ")
        .map(word => word[0])
        .join("")
        .toUpperCase()
        .substring(0, 2);
    } else if (user.username) {
      return user.username.substring(0, 2).toUpperCase();
    } else if (user.email) {
      return user.email.substring(0, 2).toUpperCase();
    }
    
    return "U";
  };

  return (
    <Navbar collapseOnSelect expand="lg" className="p-0" id="headerNavbar">
      <Container fluid className="navbar-container p-0">
        <Navbar.Brand href="/" className="nav-link nav-brand-custom">
          <div>
            <img src={logo} alt="logo" id="logo"/>
          </div>
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
            
            {/* Admin Panel - solo visible para admins */}
            {logeado && role === "admin" && (
              <Nav.Link href="/crud" className="nav-item-custom">Admin Panel</Nav.Link>
            )}
          </Nav>
          <Nav className="ms-auto" id="account">
            {logeado ? (
              <NavDropdown 
                title={
                  <div className="avatar-container">
                    <div className="avatar">
                      {user?.avatar ? (
                        <img src={user.avatar} alt="Avatar" className="avatar-img" />
                      ) : (
                        <span className="avatar-initials">{getInitials(user)}</span>
                      )}
                    </div>
                  </div>
                } 
                id="user-dropdown" 
                className="nav-item-custom user-dropdown"
                align="end"
              >
                <NavDropdown.Item href="/profile" className="dropdown-item-custom">
                  <i className="fas fa-user me-2"></i>Perfil
                </NavDropdown.Item>
                <NavDropdown.Item href="/favorites" className="dropdown-item-custom">
                  <i className="fas fa-heart me-2"></i>Favoritos
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item onClick={logout} className="dropdown-item-custom logout-item">
                  <i className="fas fa-sign-out-alt me-2"></i>Cerrar Sesión
                </NavDropdown.Item>
              </NavDropdown>
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