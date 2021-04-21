
import './App.css';
import React, { useState } from "react";

// create controlled and uncontrolled select component
// create controlled and uncontrolled checkbox
// create controlled and uncontrolled radio

export function App() {

    ////////////////////
    //UNCONTROLLED INPUTS
    ///////////////////

    //3 СПОСІБ через ref
    const firstName = React.useRef();
    const age = React.useRef();
    const select = React.useRef();
    const checkbox = React.useRef();
    const radio1= React.useRef();
    const radio2= React.useRef();
    const form = React.useRef();


   const clickHandler = (e) => {
         e.preventDefault();
         console.log(e);

        //1 СПОСІБ - e.target.value
        // const {target: [
        //     {value: firstName},
        //     {value: age},
        //     {value: select},
        //     {checked: checkbox},
        //     {checked: radioButton1},
        //     {checked: radioButton2}
        // ]} = e;

        //  console.log(firstName, age, select, checkbox, radioButton1, radioButton2)

        //2 СПОСІБ - доступ до input через name = деструктизація e.target.elements
        //      const {target: { 
        //         firstName,
        //         age,
        //         select,
        //         checkbox,
        //         radio1,
        //         radio2
        //      }
        // } = e;
        //      console.log(e.target.elements) 
        //      console.log(firstName.value, age.value, select.value, checkbox.checked, radio1.checked, radio2.checked)
       

        //3 СПОСІБ через ref
        console.log(firstName.current.value, age.current.value, select.current.value, checkbox.current.checked, radio1.current.checked, radio2.current.checked)
        form.current.reset(); //очищення форми
    }
    
    ////////////////////
    //CONTROLLED INPUTS
    ///////////////////

    const [userData, setuserData] = useState({
        firstNameControl: '',
        ageControl: '',
        selectControl: '',
        checkboxControl: false,
        radio1: true,
        radio2: false,
    })
      const handleSubmit = () => {
            alert(JSON.stringify(userData, null, 2))
      }

      const updateUserData = (e) => {
        const {target: {value, id, type, checked}} = e;
        console.log(id, value, checked);
        setuserData({ ...userData, [id]: (type === 'checkbox' || type === 'radio') ? checked : value})
}

    return (
        <div style={{display: 'flex', maxWidth: '600px', margin: '0 auto'}}>
            <div style={{width: '300px'}}>

                <h2 >uncontrolled inputs</h2>
                <form ref={form} onSubmit={clickHandler}>
                    <br/>
                    <input ref={firstName} type="text" name="firstName" placeholder="enter your first name"/> <br/><br/>
                    <input ref={age} type="number" name="age" placeholder="enter your age"  /><br/> <br/>
                    <select ref={select} name="select">
                        <option value="t1" selected>1</option>
                        <option value="t2">2 </option>
                        <option value="t3">3</option>
                    </select> <br/><br/>
                    <input ref={checkbox} type="checkbox"  name="checkbox"/>
                    <label htmlFor="checkbox"> false</label>
                        <br/>
                    <input ref={radio1} type="radio" name="radioButton" id="radio1" checked/>
                    <label htmlFor="radioButton"> ВКЛ</label>
                    <input ref={radio2} type="radio" name="radioButton" id="radio2" />
                    <label htmlFor="radioButton"> ВЫКЛ</label>
                    <br/><br/>
                    <button type="submit" name="submit">OK</button>

                </form>
            </div>

            <div style={{width: '300px'}}>
            <h2 >controlled inputs</h2>
             <br/>
                <input 
                    value={userData.firstName}
                    onChange={updateUserData}
                    id="firstNameControl"
                    type="text"
                    placeholder="enter your first name"/> <br/><br/>

                <input 
                    value={userData.age}
                    onChange={updateUserData}
                    id="ageControl"
                    type="number" 
                    placeholder="enter your age"  /><br/> <br/>

                <select  
                    value={userData.select}
                    onChange={updateUserData}
                    id="selectControl">
                        <option value="t1" selected>1</option>
                        <option value="t2">2 </option>
                        <option value="t3">3</option>
                </select> <br/><br/>

                <input  
                    value={userData.checkbox}
                    onChange={updateUserData}
                    type="checkbox"
                    id="checkboxControl"/>
                        <label htmlFor="checkbox"> false</label>
                <br/>

                <input
                    value={userData.radio1}
                    onChange={updateUserData}
                    type="radio"
                    name="radioButtonControl"
                    id="radio1"
                    checked/>
                        <label htmlFor="radioButtonControl"> ВКЛ</label>

                <input 
                    value={userData.radio2}
                    onChange={updateUserData}
                    type="radio"
                    name="radioButtonControl"
                    id="radio2" />
                        <label htmlFor="radioButtonControl"> ВЫКЛ</label>
                 
                <br/><br/>
                <button onClick={handleSubmit}>OK</button>

            </div>
        </div>
    )

}
export default App;

