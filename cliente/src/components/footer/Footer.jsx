import React from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";

const Footer = React.forwardRef((props, ref) => {
  return (
    <footer ref={ref} className="footer bg-dark text-white py-4 w-100">
      <div className="container">
        <div className="row">
          {/* Columna 1: Logo y descripción */}
          <div className="col-md-4 mb-3">
            <h5 className="mb-3">WarWiki40K</h5>
            <p className="small">
              Tu plataforma de informacion sobre facciones, ejércitos y escuadrones en el mundo de Warhammer 40.000.
            </p>
          </div>

          {/* Columna 2: Enlaces útiles */}
          <div className="col-md-4 mb-3">
            <h5 className="mb-3">Enlaces útiles</h5>
            <ul className="list-unstyled">
              <li className="mb-2">
                <Link to="/" className="text-white text-decoration-none">
                  Inicio
                </Link>
              </li>
              <li className="mb-2">
                <Link to="/rules" className="text-white text-decoration-none">
                  Reglas
                </Link>
              </li>
            </ul>
          </div>

          {/* Columna 3: Redes sociales */}
          <div className="col-md-4 mb-3">
            <h5 className="mb-3">Síguenos</h5>
            <div className="d-flex gap-3 fs-5">
              <a href="#" className="text-white">
                <i className="bi bi-facebook"></i>
              </a>
              <a href="#" className="text-white">
                <i className="bi bi-twitter"></i>
              </a>
              <a href="#" className="text-white">
                <i className="bi bi-instagram"></i>
              </a>
              <a href="#" className="text-white">
                <i className="bi bi-discord"></i>
              </a>
            </div>
          </div>
        </div>

        {/* Línea divisoria */}
        <hr className="my-3 border-secondary" />

        {/* Copyright */}
        <div className="row">
          <div className="col-12 text-center">
            <p className="small mb-0">
              © {new Date().getFullYear()} Wargame App. Todos los derechos reservados.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
});

Footer.displayName = "Footer";

export default Footer;