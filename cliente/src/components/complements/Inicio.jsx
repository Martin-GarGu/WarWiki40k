import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import FactionCarousel from "./Carrousel";
import routeApi from "../../routeApi";
import backToTop from "../../assets/images/backToTop.png";

function Inicio() {
  const [factions, setFactions] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [featuredKillTeams, setFeaturedKillTeams] = useState([]);
  const [killTeamsLoading, setKillTeamsLoading] = useState(true);
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  // Verificar si el usuario está logueado
  useEffect(() => {
    const userData = localStorage.getItem("user");
    if (userData) {
      setUser(JSON.parse(userData));
    }
  }, []);

  useEffect(() => {
    const fetchFactions = async () => {
      let isMounted = true;
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
        isMounted = false;
      };
    };

    fetchFactions();
  }, []);

  // Nueva petición para obtener los Kill Teams
  useEffect(() => {
    const fetchKillTeams = async () => {
      let isMounted = true;
      setKillTeamsLoading(true);
      
      try {
        // Obtener todos los escuadrones desde el endpoint correcto
        const response = await fetch(`${import.meta.env.VITE_APP_PETICION_IP}/api/squads`);
        
        if (!response.ok) {
          throw new Error(`Error en la solicitud: ${response.statusText}`);
        }
        
        const jsonData = await response.json();
        if (isMounted) {
          // Asumiendo que la API devuelve un objeto con una propiedad "data" que contiene el array
          const allSquads = jsonData.data || [];
          
          // Si la API no tiene filtro de destacados, podemos mostrar los primeros 3 o usar alguna lógica personalizada
          // Aquí puedes modificar la lógica para seleccionar los que deseas mostrar como destacados
          // Por ejemplo, podrías seleccionar los primeros 3, o filtrar por alguna propiedad si existe
          const featured = allSquads.slice(0, 3); // Tomar los primeros 3 como destacados
          
          setFeaturedKillTeams(featured);
          setKillTeamsLoading(false);
        }
      } catch (error) {
        if (isMounted) {
          console.error("Error al cargar Kill Teams:", error);
          setFeaturedKillTeams([]);
          setKillTeamsLoading(false);
        }
      }
      
      return () => {
        isMounted = false;
      };
    };
    
    fetchKillTeams();
  }, []);

  const handleClickFactions = (faction) => {
    navigate(`/${faction.slug}`);
  };

  const handleViewKillTeam = (squad) => {
    navigate(`/squads/${squad.slug}`);
  };

  const handleRules = () => {
    navigate('/rules');
  };
  const handleSpecialRules = () => {
    navigate('/specialRules');
  };
  const handleKillTeamGuide = () => {
    // Como no tienes una página de guía, podrías redirigir a la página principal or a otra página existente
    navigate('/rules'); // O cualquier otra página que tengas disponible
  };

  const handleRegister = () => {
    navigate('/register');
  };

  const handleLogin = () => {
    navigate('/login');
  };

  const handleVisitGamesWorkshop = () => {
    // Abrir la página de Games Workshop en una nueva pestaña
    window.open('https://www.warhammer.com/en-GB/home?srsltid=AfmBOooAX0PzT4Ywr0zdFbMncpis9IFcuIiOvJCCmKHWUPEbv7f6YxiF', '_blank');
  };

  return (
    <div className="inicio-container">
      {/* Banner principal */}
      <div className="hero-banner text-center mb-5 position-relative">
        <div className="overlay d-flex flex-column justify-content-center align-items-center p-5">
          <h1 className="display-4 fw-bold inicio-title mb-4">WarWiki40K</h1>
          <h2 className="h3 mb-4 text-light">Tu guía definitiva para Kill Team</h2>
          <p className="lead text-light mb-4">
            Estrategias, equipos, reglas y tácticas para dominar el campo de batalla
          </p>
          <div className="d-flex gap-3">
            <button onClick={handleRules} className="btn btn1 btn-lg">
              Reglas
            </button>
            <button onClick={handleSpecialRules} className="btn btn-outline-light btn-lg">
              Reglas Especiales
            </button>
          </div>
        </div>
      </div>

      {/* Sección de carousel de facciones */}
      <section className="factions-section mb-5">
        <div className="container">
          <h2 className="text-center section-title mb-4">Facciones de Warhammer 40K</h2>
          {isLoading ? (
            <div className="text-center p-5">
              <div className="spinner-border" role="status">
                <span className="visually-hidden">Cargando...</span>
              </div>
              <p className="mt-3 text-light">Cargando facciones...</p>
            </div>
          ) : error ? (
            <div className="alert alert-danger" role="alert">
              Error: {error}
            </div>
          ) : (
            <FactionCarousel factions={factions} handleClickFactions={handleClickFactions} />
          )}
        </div>
      </section>

      {/* Sección de Kill Teams destacados - MODIFICADA */}
      <section className="featured-killteams py-5">
        <div className="container">
          <h2 className="text-center section-title mb-4">Kill Teams Destacados</h2>
          {killTeamsLoading ? (
            <div className="text-center p-5">
              <div className="spinner-border" role="status">
                <span className="visually-hidden">Cargando...</span>
              </div>
              <p className="mt-3 text-light">Cargando Kill Teams destacados...</p>
            </div>
          ) : featuredKillTeams.length > 0 ? (
            <div className="row g-4">
              {featuredKillTeams.map(team => (
                <div key={team.id} className="col-md-4">
                  <div className="card h-100 border text-center" style={{ backgroundColor: "#1a1a1a", color: "#fff" }}>
                    {/* Imagen más grande y prominente */}
                    <div className="card-img-container p-3" style={{height: "220px", overflow: "hidden", display: "flex", alignItems: "center", justifyContent: "center"}}>
                      <img 
                        src={`${routeApi()}${team.image}`} 
                        className="card-img-top" 
                        alt={team.name}
                        style={{maxWidth: "100%", maxHeight: "200px", objectFit: "contain"}}
                      />
                    </div>
                    <div className="card-body text-center pt-2 pb-3">
                      {/* Solo nombre y botón, sin descripción */}
                      <h5 className="card-title mb-3" style={{color: "#ccad00"}}>{team.name}</h5>
                      <button 
                        className="btn btn-warning" 
                        onClick={() => handleViewKillTeam(team)}
                        style={{backgroundColor: "#ccad00", color: "#000"}}
                      >
                        VER
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="alert alert-info" role="alert">
              No hay Kill Teams destacados disponibles en este momento.
            </div>
          )}
        </div>
      </section>

      {/* Sección de últimas actualizaciones */}
      <section className="updates-section py-5">
        <div className="container">
          <h2 className="text-center section-title mb-4">Últimas Actualizaciones</h2>
          <div className="row">
            <div className="col-md-6">
              <div className="card mb-4">
                <div className="card-body">
                  <h5 className="card-title">Nuevas reglas para Kill Team</h5>
                  <p className="card-text">
                    Games Workshop ha lanzado una actualización importante de las reglas de Kill Team, 
                    incluyendo cambios significativos en el combate cuerpo a cuerpo y las habilidades tácticas.
                  </p>
                  <small className="text-muted">Publicado el 15 de mayo, 2025</small>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="card mb-4">
                <div className="card-body">
                  <h5 className="card-title">Torneo Internacional Kill Team</h5>
                  <p className="card-text">
                    Anunciamos el próximo torneo internacional de Kill Team que se celebrará en Madrid. 
                    ¡Prepara tu equipo y demuestra tus habilidades tácticas contra los mejores jugadores!
                  </p>
                  <small className="text-muted">Publicado el 10 de mayo, 2025</small>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sección de inicio rápido - MODIFICADA PARA YOUTUBE */}
      <section className="quickstart py-5">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-6">
              <h2 className="section-title-normal mb-3">¿Nuevo en Kill Team?</h2>
              <p className="text-light mb-4">
                Kill Team es un juego de escaramuzas tácticas ambientado en el universo de Warhammer 40,000. 
                A diferencia del juego principal, aquí comandas un pequeño equipo de especialistas en misiones 
                estratégicas y operaciones encubiertas.
              </p>
              <ul className="list-group list-group-flush bg-transparent mb-4">
                <li className="list-group-item bg-transparent border-warning">
                  <i className="bi bi-check-circle-fill me-2"></i>
                  Partidas rápidas de 30-60 minutos
                </li>
                <li className="list-group-item bg-transparent border-warning">
                  <i className="bi bi-check-circle-fill me-2"></i>
                  Pocos modelos necesarios para comenzar
                </li>
                <li className="list-group-item bg-transparent border-warning">
                  <i className="bi bi-check-circle-fill me-2"></i>
                  Reglas simplificadas pero con profundidad táctica
                </li>
                <li className="list-group-item bg-transparent border-warning">
                  <i className="bi bi-check-circle-fill me-2"></i>
                  Personajes con habilidades únicas y especializaciones
                </li>
              </ul>
              <button onClick={handleRules} className="btn btn1">
                Ver reglas
              </button>
            </div>
            <div className="col-md-6 mt-4 mt-md-0 text-center">
              <div className="ratio ratio-16x9">
                {/* Modificado el YouTube embed para evitar errores de adblocker */}
                <iframe 
                  title="Kill Team Introduction" 
                  src="https://www.youtube-nocookie.com/embed/AgXd4NjJOis?rel=0" 
                  frameBorder="0" 
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                  allowFullScreen
                  className="rounded border">
                </iframe>
              </div>
              {/* Texto de crédito del canal de YouTube */}
              <p className="mt-2 text-muted small">
                Video cortesía del canal oficial Warhammer en YouTube. © Games Workshop Ltd.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* NUEVA SECCIÓN: Obtener tu primer Kill Team */}
      <section className="get-killteam py-5" style={{ backgroundColor: "#0d0d0d" }}>
        <div className="container">
          <div className="row align-items-center">
            <div className="col-12 text-center mb-4">
              <h2 className="section-title">Consigue tu primer Kill Team</h2>
              <p className="text-light mb-4">
                ¿Listo para dar el salto y comenzar tu propia aventura en Kill Team? 
                Visita la tienda oficial de Games Workshop para adquirir todo lo necesario y comenzar a jugar.
              </p>
              <button 
                onClick={handleVisitGamesWorkshop} 
                className="btn btn1 btn-lg"
              >
                Visitar Games Workshop
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA final - SOLO SE MUESTRA SI NO HAY USUARIO LOGUEADO */}
      {!user && (
        <section className="cta-section text-center py-5">
          <div className="container">
            <h2 className="section-title mb-4">¡Únete a la comunidad!</h2>
            <p className="text-light mb-4">
              Comparte estrategias, encuentra jugadores cercanos y mantente actualizado con las últimas novedades.
            </p>
            <div className="d-flex justify-content-center gap-3">
              <button onClick={handleRegister} className="btn btn1">Registrarse</button>
              <button onClick={handleLogin} className="btn btn-outline-light">Iniciar sesión</button>
            </div>
          </div>
        </section>
      )}
      {/* Botón Back to Top con imagen de fondo */}
      <a href="#scroll-container">
        <button
          style={{
            position: "fixed",
            bottom: "20px",
            right: "20px",
            width: "60px",
            height: "60px",
            backgroundColor: "#d4af37", 
            backgroundImage: `url(${backToTop})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            border: "none",
            borderRadius: "50%",
            cursor: "pointer",
            boxShadow: "0 0 10px rgba(0,0,0,0.3)",
            zIndex: 1000,
            transition: "transform 0.3s ease"
          }}
          onMouseOver={(e) => e.target.style.transform = "scale(1.1)"} 
          onMouseOut={(e) => e.target.style.transform = "scale(1)"}
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        >
        </button>
      </a>
    </div>
  );
}

export default Inicio;