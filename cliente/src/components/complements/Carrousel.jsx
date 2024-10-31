/* eslint-disable react/prop-types */
import { useState } from 'react';
import '../styles/scss/styles.scss';


export default function Carrousel({ factions, handleClickFactions }) {

    const [activeIndex, setActiveIndex] = useState(0);
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

    

    return (
        <div className="carousel">
            <button onClick={prevSlide} className="carousel__btn carousel__btn--prev">
                &lt;
            </button>
            <div onClick={()=>{handleClickFactions(factions[activeIndex])}}>
                <img src={factions[activeIndex].image} alt={factions[activeIndex].name} />
                <p>{factions[activeIndex].name}</p>
            </div>
            <button onClick={nextSlide} className="carousel__btn carousel__btn--next">
                &gt;
            </button>
        </div>
    )
}
