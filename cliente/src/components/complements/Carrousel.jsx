/* eslint-disable react/prop-types */
import { useState } from 'react';
import '../styles/scss/styles.scss';

export default function Carrousel({ factions, handleClickFactions }) {
    const [activeIndex, setActiveIndex] = useState(0);

    // Verifica si el arreglo factions está vacío antes de intentar acceder a sus elementos
    if (!factions || factions.length === 0) {
        return <p>No hay facciones disponibles.</p>;
    }

    const nextSlide = () => {
        setActiveIndex((prevIndex) =>
            prevIndex === factions.length - 1 ? 0 : prevIndex + 1
        );
    };

    const prevSlide = () => {
        setActiveIndex((prevIndex) =>
            prevIndex === 0 ? factions.length - 1 : prevIndex - 1
        );
    };

    // Asegúrate de que el objeto actual de la facción tenga los datos necesarios
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
                <img src={currentFaction.image} alt={currentFaction.name} />
                <p>{currentFaction.name}</p>
            </div>
            <button onClick={nextSlide} className="carousel__btn carousel__btn--next">
                &gt;
            </button>
        </div>
    );
}
