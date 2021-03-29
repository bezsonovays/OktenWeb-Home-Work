import React, {Component, useState} from "react";
import './ToggleSwitch.css'


class Switch extends Component {
    render() {
     //let {car} = this.props;


    return (
            <>
                <div className="card__switch" >
                    <label>
                        <span>Change card's theme</span>
                        <input type="checkbox" ></input>
                    </label>
                </div>
            </>
        );
    }
}


export default Switch;