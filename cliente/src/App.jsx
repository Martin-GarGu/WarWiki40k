import 'bootstrap/dist/css/bootstrap.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Registro from "./components/register/Register.jsx";
import Header from "./components/header/Header.jsx";
import "bootstrap/dist/css/bootstrap.min.css";
import Inicio from "./components/complements/Inicio.jsx";
import Faction from "./components/complements/Faction.jsx";
import Login from "./components/login/Login.jsx";
import Squad from "./components/complements/Squad.jsx";
import { useEffect, useRef, useState } from "react";
import Army from "./components/complements/Army.jsx";
import Perfil from "./components/complements/Perfil.jsx";
import CrudAdmin from "./components/complements/CrudAdmin/CrudAdmin.jsx";
import Favoritos from "./components/complements/Favoritos.jsx";
import Games from "./components/complements/Games.jsx";
import CreateGames from "./components/complements/CrudAdmin/Create/CreateGames.jsx";
import Footer from './components/footer/Footer.jsx';
import CreateFaction from './components/complements/CrudAdmin/Create/CreateFaction.jsx';
import CreateMenu from "./components/complements/CrudAdmin/Create/CreateMenu.jsx";
import CreateArmy from './components/complements/CrudAdmin/Create/CreateArmy.jsx';
import CreateSquad from './components/complements/CrudAdmin/Create/CreateSquad.jsx';
import CreateSoldier from './components/complements/CrudAdmin/Create/CreateSoldier.jsx';
import CreateWeapon from './components/complements/CrudAdmin/Create/CreateWeapon.jsx';
import EliminateMenu from './components/complements/CrudAdmin/Eliminate/EliminateMenu.jsx';
import EliminateFaction from './components/complements/CrudAdmin/Eliminate/EliminateFaction.jsx';
import EliminateArmy from './components/complements/CrudAdmin/Eliminate/EliminateArmy.jsx';
import EliminateSquad from './components/complements/CrudAdmin/Eliminate/EliminateSquad.jsx';
import EliminateSoldier from './components/complements/CrudAdmin/Eliminate/EliminateSoldier.jsx';

function App() {
  const headerRef = useRef(null);
  const footerRef = useRef(null);
  const [routeHeight, setAltura] = useState("100vh");

  useEffect(() => {
    const headerHeight = headerRef.current ? headerRef.current.offsetHeight : 0;
    const footerHeight = footerRef.current ? footerRef.current.offsetHeight : 0;
    const altura = `calc(100vh - ${headerHeight}px - ${footerHeight}px)`;

    setAltura(altura);
  }, []);

  return (
    <>
      <BrowserRouter>
        <Header ref={headerRef} className="w-100"></Header>
        <div className="routes-container" style={{ minHeight: routeHeight }}>
          <Routes>
            <Route path="/" element={<Inicio />} />
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
              path='/createMenu'
              element={<CreateMenu />}
            />
            <Route
              path='/eliminateMenu'
              element={<EliminateMenu />}
            />
            <Route
              path="/:slug"
              element={<Faction />}
            />
            <Route
              path="/armies/:slug"
              element={<Army />}
            />
            <Route
              path="/squads/:slug"
              element={<Squad />}
            />
            <Route
              path="/perfil"
              element={<Perfil />}
            />
            <Route
              path="/crud"
              element={<CrudAdmin />}
            />
            <Route
              path="/favorites"
              element={<Favoritos />}
            />
            <Route
              path="/games"
              element={<Games />}
            />
            <Route
              path="/games/create"
              element={<CreateGames />}
            />
            <Route
              path='/create/faction'
              element={<CreateFaction />}
            />
            <Route
              path='/create/army'
              element={<CreateArmy />}
            />
            <Route
              path='/create/squad'
              element={<CreateSquad />}
            />
            <Route
              path='/create/soldier'
              element={<CreateSoldier />}
            />
            <Route
              path='/create/weapon'
              element={<CreateWeapon />}
            />
            <Route 
              path='/eliminate/faction'
              element={<EliminateFaction />}
            />
            <Route 
              path='/eliminate/army'
              element={<EliminateArmy />}
            />
            <Route 
              path='/eliminate/squad'
              element={<EliminateSquad/>}
            />
            <Route 
              path='/eliminate/soldier'
              element={<EliminateSoldier/>}
            />
          </Routes>

        </div>
        <Footer ref={footerRef} />
      </BrowserRouter>
    </>
  );
}

export default App;