import './Card.css';
import React, {Component, useState} from "react";
import {cars} from "../../data/data";

class Card extends Component {
    render() {
     let {car} = this.props;


    return (
            <>
                <div className="card__img" style={{background: `url(${car.img})` }}></div>
                        
                <div className="card__description">
                    <div className="card__title">{car.producer}</div>
                    <p>Обьем двигателя - {car.tankVolume}</p>
                    <p>Лошадиных сил - {car.horsePower}</p>
                </div>
            </>
        );
    }
}


export default Card;