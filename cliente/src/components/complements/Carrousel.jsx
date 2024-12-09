import PropTypes from 'prop-types'; // Importa PropTypes al inicio
import { useState } from 'react';
import '../styles/scss/styles.scss';
import routeApi from "../../routeApi";

export default function Carrousel({ factions, handleClickFactions }) {
    const [activeIndex, setActiveIndex] = useState(0);

    if (!factions || factions.length === 0) {
        return <p>No hay facciones disponibles.</p>;
    }

    const nextSlide = () => {
        setActiveIndex((prevIndex) => (prevIndex + 1) % factions.length);
    };

    const prevSlide = () => {
        setActiveIndex((prevIndex) => (prevIndex - 1 + factions.length) % factions.length);
    };

    const currentFaction = factions[activeIndex];

    if (!currentFaction || !currentFaction.image || !currentFaction.name) {
        return <p>Datos de la facción no disponibles.</p>;
    }

    return (
        <div className="carousel">
            <button onClick={prevSlide} className="carousel__btn carousel__btn--prev">
                &lt;
            </button>
            <div onClick={() => { handleClickFactions(currentFaction) }}>
                <img src={`${routeApi()}${currentFaction.image}`} alt={currentFaction.name} />
                <p>{currentFaction.name}</p>
            </div>
            <button onClick={nextSlide} className="carousel__btn carousel__btn--next">
                &gt;
            </button>
        </div>
    );
}

// Validación de props
Carrousel.propTypes = {
    factions: PropTypes.arrayOf(
        PropTypes.shape({
            image: PropTypes.string.isRequired, // La imagen debe ser una cadena
            name: PropTypes.string.isRequired,  // El nombre debe ser una cadena
            slug: PropTypes.string,             // Opcional, si se usa
        })
    ).isRequired, // La lista de facciones es obligatoria
    handleClickFactions: PropTypes.func.isRequired, // La función de manejo de clics es obligatoria
};
