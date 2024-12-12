import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { useEffect, useState } from "react";

function Collapsible() {
  const [logeado, setLogeado] = useState(false);
  const [role, setRole] = useState("");

  useEffect(() => {
    const token = localStorage.getItem("token");
    const user = JSON.parse(localStorage.getItem("user")); // Cargar el objeto user completo

    if (token) {
      setLogeado(true);
    } else {
      setLogeado(false);
    }

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
      className="p-3 d-flex justify-content-between align-items-center"
      id="headerNavbar"
      data-bs-theme="dark"
    >
      <Container fluid>
        <Navbar.Brand href="/" className="nav-link fs-5 text-center">
          <div id="logo" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="d-flex justify-content-center align-items-center">
            <Nav.Link href="/rules" className="fs-5 text-center">
              Reglas
            </Nav.Link>
            <Nav.Link href="/specialRules" className="fs-5 text-center">
              Reglas especiales
            </Nav.Link>
            {logeado ? (
              <>
                {role === "admin" && (
                  <Nav.Link href="/crud" className="fs-5 text-center">
                    Admin Panel
                  </Nav.Link>
                )}
                <Nav.Link href="/profile" className="fs-5 text-center">
                  Perfil
                </Nav.Link>
                {/* <Nav.Link href="/" className="fs-5 text-center" onClick={logout}>
                  Logout
                </Nav.Link> */}
              </>
            ) : (
              <>
                {/* <Nav.Link href="/login" className="fs-5 text-center">
                  Login
                </Nav.Link>
                <Nav.Link href="/register" className="fs-5 text-center">
                  Register
                </Nav.Link> */}
              </>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
      <Nav className="d-flex justify-content-end">
        {logeado ? (
          <Nav.Link href="/" className="fs-5 text-center" onClick={logout}>
            Logout
          </Nav.Link>
        ) : (
          <>
            <Nav.Link href="/login" className="fs-5 text-center">
              Login
            </Nav.Link>
            <Nav.Link href="/register" className="fs-5 text-center">
              Register
            </Nav.Link>
          </>
        )}
      </Nav>
    </Navbar>
  );
}

export default Collapsible;
