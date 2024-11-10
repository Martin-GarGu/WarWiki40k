import { BrowserRouter, Routes, Route} from "react-router-dom";
import Registro from "./components/register/Register.jsx";
import Header from "./components/header/Header.jsx";
import "bootstrap/dist/css/bootstrap.min.css";
import Inicio from "./components/complements/Inicio.jsx";
import Faction from "./components/complements/Faction.jsx";
import Login from "./components/login/Login.jsx";
import Squad from "./components/complements/Squad.jsx";
// import Footer from "./components/footer/Footer";
import { useEffect, useRef, useState } from "react";
import Army from "./components/complements/Army.jsx";
import Perfil from "./components/complements/Perfil.jsx";
import CrudAdmin from "./components/complements/CrudAdmin.jsx";

function App() {
  const headerRef = useRef(null);
  const footerRef = useRef(null);
  const [routeHeight, setAlturaRuta] = useState("100vh");

  useEffect(() => {
    const headerHeight = headerRef.current ? headerRef.current.offsetHeight : 0;
    const footerHeight = footerRef.current ? footerRef.current.offsetHeight : 0;
    const alturaRuta = `calc(100vh - ${headerHeight}px - ${footerHeight}px)`;

    setAlturaRuta(alturaRuta);
  }, []);

  return (
    <>
      <BrowserRouter>
        <Header ref={headerRef}></Header>
        <div className="routes-container" style={{ minHeight: routeHeight }}>
          <Routes>
            <Route path="/" element={<Inicio/>} />
            <Route
              path="/register"
              element={
                <div className="d-flex justify-content-center registro">
                  <div
                    className="col-sm-10 col-md-8 col-lg-6 col-xl-5"
                    style={{
                      height: routeHeight
                    }}
                  >
                    <Registro />
                  </div>
                </div>
              }
            />
            <Route
              path="/login"
              element={
                <div className="d-flex justify-content-center login">
                  <div
                    className="col-sm-10 col-md-8 col-lg-6 col-xl-5"
                    style={{
                      height: routeHeight
                    }}
                  >
                    <Login />
                  </div>
                </div>
              }
            />
            <Route
              path="/:slug"
              element={<Faction/>}
            />
            <Route
              path="/armies/:slug"
              element={<Army/>}
            />
            <Route
              path="/squads/:slug"
              element={<Squad/>}
            />
            <Route
              path="/perfil"
              element={<Perfil/>}
            />
            <Route
              path="/crud"
              element={<CrudAdmin/>}
            />
          </Routes>
          
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;