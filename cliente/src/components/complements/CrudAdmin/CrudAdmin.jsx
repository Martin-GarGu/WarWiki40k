import { useNavigate } from "react-router-dom";

const AdminPanel = () => {
  return (
    <div className="admin-panel">
      <h1 className="admin-title">Admin Panel</h1>
      <div className="button-grid">
        <div className="admin-button">
          <img src="/src/assets/images/faction.png" alt="Faccion" className="admin-icon" />
          <button className="admin-btn">Facciones</button>
        </div>
        <div className="admin-button">
          <img src="/src/assets/images/army.png" alt="Ejercito" className="admin-icon" />
          <button className="admin-btn">Ejercitos</button>
        </div>
        <div className="admin-button">
          <img src="/src/assets/images/squadron.png" alt="Escuadrones" className="admin-icon" />
          <button className="admin-btn">Escuadrones</button>
        </div>
        <div className="admin-button">
          <img src="/src/assets/images/soldier.png" alt="Soldados" className="admin-icon" />
          <button className="admin-btn">Soldados</button>
        </div>
      </div>
    </div>
  );
};

export default AdminPanel;
