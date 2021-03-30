import React, {useState} from "react";
import {cars} from "../../data/data";
import Card from "../card/Card";
import ButtonDelete from '../button-delete/ButtonDelete';
//import Switch from "../toggle-switch/ToggleSwitch";
import '../toggle-switch/ToggleSwitch.css'

export function Cards() {

    const [data, setCars] = useState(cars);
    const [isOk, setIsOk] = useState(false);

    const handleArrChange = ({id}) => {
        setCars(prevState => {
            return prevState.filter(item => item.id !== id)
        })
    }

    const onRevert = () => {
        setCars(cars)
    }

    const handleChangeTheme = (event) => {
        setCars(prevState => {
            const newState = prevState.map(a=>({...a}))
            let car = newState[event.target.dataset.id];
            car.checked = !car.checked;
            return newState;
        })
    }

    return (
        <div className="flex-center">
            <h2 onClick={() => setIsOk(!isOk)}>{isOk ? 'true' : 'false'}</h2>

            <button onClick={onRevert} className="revert">Revert</button>

            <div className="cards">
                {
                    data.map((card, index) => {
                        console.log(card.checked)
                        return (
                            <div key={card.id} className={card.checked ? "card darkTheme" : "card"}>
                                <Card car={card}/>
                                <ButtonDelete
                                    onClick={() => handleArrChange(card)}
                                />
                                <div className="card__switch">
                                    <label>
                                        <span>Change card's theme</span>
                                        <input type="checkbox" data-id={index} onChange={handleChangeTheme}/>
                                    </label>
                                </div>
                            </div>)
                    })
                }
            </div>
        </div>
    );
}

export default Cards;
