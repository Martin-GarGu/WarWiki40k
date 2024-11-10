import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { useEffect, useState } from "react";

function Collapsible() {
  const [logeado, setLogeado] = useState(false);
  const [role, setRole] = useState("");

  useEffect(() => {
    // Verificar si hay un token y usuario en localStorage
    const token = localStorage.getItem("token");
    const user = JSON.parse(localStorage.getItem("user")); // Cargar el objeto user completo
    
    if (token) {
      setLogeado(true);
    } else {
      setLogeado(false);
    }

    // Asignar rol si el usuario está definido
    if (user && user.role) {
      setRole(user.role);
    }
  }, []);

  const logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    setLogeado(false);
    setRole("");
  };

  return (
    <Navbar
      collapseOnSelect
      expand="lg"
      className=" p-3"
      id="headerNavbar"
      data-bs-theme="dark"
    >
      <Container fluid>
        <Navbar.Brand
          href="/"
          className={`nav-link fs-5 ${
            location.pathname === "/" ? "active" : ""
          }`}
        >
          <div id="logo" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="col-4" id="account">
            {!logeado ? (
              <>
                <Nav.Link href="/login" className="fs-5">
                  Login
                </Nav.Link>
                <Nav.Link eventKey={2} href="/register" className="fs-5">
                  Register
                </Nav.Link>
              </>
            ) : (
              <>
                {role === "admin" && (
                  <Nav.Link href="/crud" className="fs-5">
                    Admin Panel
                  </Nav.Link>
                )}
                <Nav.Link href="/perfil" className="fs-5">
                  Perfil
                </Nav.Link>
                <Nav.Link href="/" className="fs-5" onClick={logout}>
                  Logout
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
