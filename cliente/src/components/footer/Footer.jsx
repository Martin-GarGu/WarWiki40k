import React from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";

const Footer = React.forwardRef((props, ref) => {
  const handleNavigation = () => {
    // Triple asegurado que va ARRIBA DEL TODO
    window.scrollTo(0, 0);
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;
  };

  return (
    <footer ref={ref} className="footer bg-dark text-white w-100">
      <div className="container">
        <div className="row gy-4">
          {/* Columna 1: Logo y descripción */}
          <div className="col-12 col-sm-6 col-lg-4">
            <h5 className="mb-3">WarWiki40K</h5>
            <p className="small">
              Tu plataforma de informacion sobre facciones, ejércitos y escuadrones en el mundo de Warhammer 40.000.
            </p>
          </div>

          {/* Columna 2: Enlaces útiles */}
          <div className="col-12 col-sm-6 col-lg-4">
            <h5 className="mb-3">Enlaces útiles</h5>
            <ul className="list-unstyled">
              <li className="mb-2">
                <Link 
                  to="/" 
                  className="text-white text-decoration-none hover-opacity"
                  onClick={handleNavigation}
                >
                  <i className="bi bi-house-door me-2"></i>Inicio
                </Link>
              </li>
              <li>
                <Link 
                  to="/rules" 
                  className="text-white text-decoration-none hover-opacity"
                  onClick={handleNavigation}
                >
                  <i className="bi bi-journal-text me-2"></i>Reglas
                </Link>
              </li>
            </ul>
          </div>

          {/* Columna 3: Redes sociales */}
          <div className="col-12 col-lg-4">
            <h5 className="mb-3 text-lg-center">Síguenos</h5>
            <div className="d-flex gap-4 fs-4 justify-content-start justify-content-lg-center">
              <a href="#" className="text-white hover-opacity" aria-label="Facebook">
                <i className="bi bi-facebook"></i>
              </a>
              <a href="#" className="text-white hover-opacity" aria-label="Twitter">
                <i className="bi bi-twitter"></i>
              </a>
              <a href="#" className="text-white hover-opacity" aria-label="Instagram">
                <i className="bi bi-instagram"></i>
              </a>
              <a href="#" className="text-white hover-opacity" aria-label="Discord">
                <i className="bi bi-discord"></i>
              </a>
            </div>
          </div>
        </div>

        {/* Línea divisoria */}
        <hr className="my-2 border-secondary" />

        {/* Copyright */}
        <div className="row">
          <div className="col-12 text-center">
            <p className="small">
              © {new Date().getFullYear()} WarWiki40k. Todos los derechos reservados.
            </p>
            <div className="d-md-none">
              <a href="#top" className="text-white text-decoration-none small">
                <i className="bi bi-arrow-up-circle me-1"></i>Volver arriba
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
});

Footer.displayName = "Footer";

export default Footer;