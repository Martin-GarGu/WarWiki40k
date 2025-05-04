import { useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import faction from "../../../assets/images/faction.png";
import army from "../../../assets/images/army.png";
import squadron from "../../../assets/images/squadron.png";
import soldier from "../../../assets/images/soldier.png";


const AdminPanel = () => {

  const navigate = useNavigate();

  useEffect(() => {
    const userData = localStorage.getItem("user");
    if (!userData) {
      navigate("/login"); // Si no hay usuario en localStorage, redirige al login
    } else {
      const parsedUser = JSON.parse(userData);
      if (parsedUser.role !== 'admin') {
        navigate("/access-denied"); // Si el usuario no es admin, redirige a acceso denegado
      }
    }
  }, [navigate]);

  const handleFaction = async () => {
    navigate("/crud/factionAdmin");
  };
  const handleArmies = async()=>{
    navigate("/crud/armiesAdmin");
  };
  const handleSquads = async()=>{
    navigate("/crud/squadAdmin");
  };
  const handleSoldiers = async()=>{
    navigate('/crud/soldierAdmin');
  };

  return (
    <div className="admin-panel">
      <h1 className="admin-title">Admin Panel</h1>
      <div className="button-grid">
        <div className="admin-button">
          <img src={faction} alt="Faccion" className="admin-icon" />
          <button className="admin-btn" onClick={() => handleFaction()}>Facciones</button>
        </div>
        <div className="admin-button">
          <img src={army} alt="Ejercito" className="admin-icon" />
          <button className="admin-btn" onClick={()=>handleArmies()}>Ejercitos</button>
        </div>
        <div className="admin-button">
          <img src={squadron} alt="Escuadrones" className="admin-icon" />
          <button className="admin-btn" onClick={()=>handleSquads()}>Escuadrones</button>
        </div>
        <div className="admin-button">
          <img src={soldier} alt="Soldados" className="admin-icon" />
          <button className="admin-btn" onClick={()=>handleSoldiers()}>Soldados</button>
        </div>
      </div>
    </div>
  );
};

export default AdminPanel;
