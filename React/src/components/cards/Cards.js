import React, {useState} from "react";
import {cars} from "../../data/data";
import Card from "../card/Card";
import ButtonDelete from '../button-delete/ButtonDelete';
//import Switch from "../toggle-switch/ToggleSwitch";
import '../toggle-switch/ToggleSwitch.css'

export function Cards() {
    const [data, setCars] = useState();
    const [itemToHide, setItemToHide] = useState([]);

    const filterArr = cars.filter(el => !itemToHide.includes(el.id));

    const handleArrChange = (el) => {
        console.log(el.id)
        setItemToHide([...itemToHide, el.id]);
    }

   const onRevert = () => {
        setItemToHide([])
    }

    const [isOk, setIsOk] = useState(false);

    

    const handleChangeTheme = (event) => {
            let car = filterArr[event.target.dataset.id];
            car.checked = !car.checked;

          setCars(filterArr)
    }
       
    return (
        <div className="flex-center">
            <h2 onClick={() => setIsOk(!isOk)}>{isOk ? 'true' : 'false'}</h2>

            <button onClick={onRevert} className="revert">Revert</button>

            <div className="cards">
                {filterArr.map((card, index) => {
                    console.log(card.checked)
                    return (
                        <div key={card.id}  className={ card.checked ? "card darkTheme" : "card"}>
                            <Card car={card}></Card>
                            <div onClick={() => handleArrChange(card)} className="card__button">
                                <ButtonDelete></ButtonDelete>
                            </div>
                            <div className="card__switch" >
                                <label>
                                    <span>Change card's theme</span>
                                    <input type="checkbox" data-id={index} onChange={handleChangeTheme}></input>
                                </label>
                            </div>
                        </div>)
                })}
            </div>
        </div>
    );
}  

export default Cards;