import './Card.css';
import React from "react";

const Card = ({car:{img, producer, tankVolume, horsePower}}) => {

    return (
        <>
            <div className="card__img" style={{background: `url(${img})`}}/>
            <div className="card__description">
                <div className="card__title">{producer}</div>
                <p>Обьем двигателя - {tankVolume}</p>
                <p>Лошадиных сил - {horsePower}</p>
            </div>
        </>
    );
}

export default Card;
