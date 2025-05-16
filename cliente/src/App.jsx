import 'bootstrap/dist/css/bootstrap.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Registro from './components/register/Register.jsx';
import Header from './components/header/Header.jsx';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import Inicio from './components/complements/Inicio.jsx';
import Faction from './components/complements/Faction.jsx';
import Login from './components/login/Login.jsx';
import Squad from './components/complements/Squad.jsx';
import { useEffect, useRef, useState } from 'react';
import Army from './components/complements/Army.jsx';
import Perfil from './components/complements/Perfil.jsx';
import CrudAdmin from './components/complements/CrudAdmin/CrudAdmin.jsx';
import Favoritos from './components/complements/Favoritos.jsx';
import Games from './components/complements/Games.jsx';
import CreateGames from './components/complements/CrudAdmin/Create/CreateGames.jsx';
import Footer from './components/footer/Footer.jsx';
import CreateFaction from './components/complements/CrudAdmin/Create/CreateFaction.jsx';
import CreateMenu from './components/complements/CrudAdmin/Create/CreateMenu.jsx';
import CreateArmy from './components/complements/CrudAdmin/Create/CreateArmy.jsx';
import CreateSquad from './components/complements/CrudAdmin/Create/CreateSquad.jsx';
import CreateSoldier from './components/complements/CrudAdmin/Create/CreateSoldier.jsx';
import CreateWeapon from './components/complements/CrudAdmin/Create/CreateWeapon.jsx';
import EliminateMenu from './components/complements/CrudAdmin/Eliminate/EliminateMenu.jsx';
import EliminateFaction from './components/complements/CrudAdmin/Eliminate/EliminateFaction.jsx';
import EliminateArmy from './components/complements/CrudAdmin/Eliminate/EliminateArmy.jsx';
import EliminateSquad from './components/complements/CrudAdmin/Eliminate/EliminateSquad.jsx';
import EliminateSoldier from './components/complements/CrudAdmin/Eliminate/EliminateSoldier.jsx';
import UpdateMenu from './components/complements/CrudAdmin/Update/UpdateMenu.jsx';
import UpdateFaction from './components/complements/CrudAdmin/Update/UpdateFaction.jsx';
import UpdateFactionMenu from './components/complements/CrudAdmin/Update/UpdateFactionMenu.jsx';
import UpdateArmyMenu from './components/complements/CrudAdmin/Update/UpdateArmyMenu.jsx';
import UpdateArmy from './components/complements/CrudAdmin/Update/UpdateArmy.jsx';
import UpdateSquadMenu from './components/complements/CrudAdmin/Update/UpdateSquadMenu.jsx';
import UpdateSquad from './components/complements/CrudAdmin/Update/UpdateSquad.jsx';
import UpdateSoldierMenu from './components/complements/CrudAdmin/Update/UpdateSoldierMenu.jsx';
import UpdateSoldier from './components/complements/CrudAdmin/Update/UpdateSoldier.jsx';
import Rules from './components/complements/Rules.jsx';
import SpecialRules from './components/complements/SpecialRules.jsx';
import AccessDenied from './components/complements/AccessDenied.jsx';
import UpdateGame from './components/complements/UpdateGame.jsx';
import FactionAdmin from './components/complements/CrudAdmin/FactionAdmin.jsx';
import ArmyAdmin from './components/complements/CrudAdmin/ArmyAdmin.jsx';
import SquadAdmin from './components/complements/CrudAdmin/SquadAdmin.jsx';
import SoldierAdmin from './components/complements/CrudAdmin/SoldierAdmin.jsx';

function App() {
  const headerRef = useRef(null);
  const footerRef = useRef(null);
  const [routeHeight, setRouteHeight] = useState('100vh');
  
  useEffect(() => {
    // Ajustar altura del contenido principal basado en la altura del header
    const headerHeight = headerRef.current ? headerRef.current.offsetHeight : 0;
    setRouteHeight(`calc(100vh - ${headerHeight}px)`);
    
    // Función para ajustar tamaños cuando cambia el tamaño de la ventana
    const handleResize = () => {
      const headerHeight = headerRef.current ? headerRef.current.offsetHeight : 0;
      setRouteHeight(`calc(100vh - ${headerHeight}px)`);
    };

    // Configuración para el botón Back to Top
    const scrollContainer = document.getElementById('scroll-container');
    if (scrollContainer) {
      // Si existe un botón Back to Top en el DOM, configuramos su comportamiento
      const backToTopButton = document.querySelector('.back-to-top');
      if (backToTopButton) {
        backToTopButton.addEventListener('click', () => {
          scrollContainer.scrollTo({
            top: 0,
            behavior: 'smooth'
          });
        });
      }
    }

    window.addEventListener('resize', handleResize);
    
    return () => {
      window.removeEventListener('resize', handleResize);
      // Limpieza del evento click
      const backToTopButton = document.querySelector('.back-to-top');
      if (backToTopButton && scrollContainer) {
        backToTopButton.removeEventListener('click', () => {});
      }
    };
  }, []);

  return (
    <BrowserRouter>
      <div className="app-container d-flex flex-column min-vh-100" id='scroll-container'>
        <Header ref={headerRef} className="header w-100" />
        
        <main className="main-content flex-grow-1" style={{ minHeight: 'calc(100vh - 56px)' }}>
          <div 
            className="content-wrapper pb-4" 
            style={{ minHeight: routeHeight, overflowY: "auto" }}
          >
            <Routes>
              <Route path="/" element={<Inicio />} />
              <Route
                path="/register"
                element={
                  <div className="d-flex justify-content-center registro">
                    <div className="col-sm-10 col-md-8 col-lg-6 col-xl-5">
                      <Registro />
                    </div>
                  </div>
                }
              />
              <Route
                path="/login"
                element={
                  <div className="d-flex justify-content-center login">
                    <div className="col-sm-10 col-md-8 col-lg-6 col-xl-5">
                      <Login />
                    </div>
                  </div>
                }
              />
              <Route path='/rules' element={<Rules />} />
              <Route path="/access-denied" element={<AccessDenied />} />
              <Route path='/specialRules' element={<SpecialRules />} />
              <Route path='/createMenu' element={<CreateMenu />} />
              <Route path='/eliminateMenu' element={<EliminateMenu />} />
              <Route path='/updateMenu' element={<UpdateMenu />} />
              <Route path="/:slug" element={<Faction />} />
              <Route path="/armies/:slug" element={<Army />} />
              <Route path="/squads/:slug" element={<Squad />} />
              <Route path="/profile" element={<Perfil />} />
              <Route path="/crud" element={<CrudAdmin />} />
              <Route path="/favorites" element={<Favoritos />} />
              <Route path="/games" element={<Games />} />
              <Route path="/games/create" element={<CreateGames />} />
              <Route path='/create/faction' element={<CreateFaction />} />
              <Route path='/create/army' element={<CreateArmy />} />
              <Route path='/create/squad' element={<CreateSquad />} />
              <Route path='/create/soldier' element={<CreateSoldier />} />
              <Route path='/create/weapon' element={<CreateWeapon />} />
              <Route path='/eliminate/faction' element={<EliminateFaction />} />
              <Route path='/eliminate/army' element={<EliminateArmy />} />
              <Route path='/eliminate/squad' element={<EliminateSquad />} />
              <Route path='/eliminate/soldier' element={<EliminateSoldier />} />
              <Route path='/update/factionMenu' element={<UpdateFactionMenu />} />
              <Route path='/update/armyMenu' element={<UpdateArmyMenu />} />
              <Route path='/update/game' element={<UpdateGame />} />
              <Route path='/update/squadMenu' element={<UpdateSquadMenu />} />
              <Route path='/update/soldierMenu' element={<UpdateSoldierMenu />} />
              <Route path='/update/faction' element={<UpdateFaction />} />
              <Route path='/update/army' element={<UpdateArmy />} />
              <Route path='/update/squad' element={<UpdateSquad />} />
              <Route path='/update/soldier' element={<UpdateSoldier />} />
              <Route path='/crud/factionAdmin' element={<FactionAdmin/>} />
              <Route path='/crud/armiesAdmin' element={<ArmyAdmin/>} />
              <Route path='/crud/squadAdmin' element={<SquadAdmin/>} />
              <Route path='/crud/soldierAdmin' element={<SoldierAdmin/>} />
            </Routes>
          </div>
        </main>
        
        <Footer ref={footerRef} />
      </div>
    </BrowserRouter>
  );
}

export default App;