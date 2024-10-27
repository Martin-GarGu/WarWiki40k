import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

// import NavDropdown from 'react-bootstrap/NavDropdown';
import { useEffect, useState } from "react";

function Collapsible() {
  const [logeado, setLogeado] = useState(false);

  useEffect(() => {
    if (localStorage.getItem("token")) {
      setLogeado(true);
    } else {
      setLogeado(false);
    }
  }, []);

  const logout = () => {
    localStorage.removeItem("token");
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
          {/* <Nav className="col-8 me-auto" id="nav">
            <NavLink
              to="/crearRuta"
              className={`nav-link fs-5 ${
                location.pathname === "/crearRuta" ? "active" : ""
              }`}
            >
              Planificar Ruta
            </NavLink>
            <NavLink
              to="/sitiosSecretos"
              className={`nav-link fs-5 ${
                location.pathname === "/sitiosSecretos" ? "active" : ""
              }`}
            >
              Sitios Secretos
            </NavLink>
            <NavLink
              to="/formasDescubrirlo"
              className={`nav-link fs-5 ${
                location.pathname === "/formasDescubrirlo" ? "active" : ""
              }`}
            >
              Formas de Descubrirlo
            </NavLink>
          </Nav> */}
          <Nav className="col-4" id="account">
            {!logeado ? (
              <>
                <Nav.Link href="/login" className=" fs-5">
                  Login
                </Nav.Link>
                <Nav.Link eventKey={2} href="/register" className=" fs-5">
                  Register
                </Nav.Link>
              </>
            ) : (
              <Nav.Link href="/" className=" fs-5" onClick={logout}>
                Logout
              </Nav.Link>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Collapsible;