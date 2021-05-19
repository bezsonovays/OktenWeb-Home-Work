
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
        radio: 'ВКЛ'
    })
      const handleSubmit = () => {
            alert(JSON.stringify(userData, null, 2))
      }

      const updateUserData = (e) => {
        const {target: {value, id, type, checked}} = e;
        console.log(id, value, checked);
        if (type === 'checkbox') {
          setuserData({ ...userData, checkboxControl: value})
        }
        if (type === 'radio') {
          setuserData({ ...userData, radio: value})
        }

    }


         /////////////////////////////////
        //jsonplaceholder///////////////
        ////////////////////////////////
        const BASE_URL = 'https://jsonplaceholder.typicode.com'
        const [endpoint, setEndpoint] = useState('');
        const [id, setId] = useState('');

        const [items, setItems] = useState([]);
        const [singleItem, setSingleItems] = useState([]);

        const fetchData = async () => {
          const responce = await fetch(`${BASE_URL}/${endpoint}/${id}`)
          const json = await responce.json();
          if (id) {
            setSingleItems(json);
            setItems([])

            return

          }  else {
            setSingleItems(null);
            setItems(json)
          }
        }

        // const updateInputs = (e) => {
        //     const {target: {value, id}} = e;
          
        //    setEndpoint()
        //    console.log(value);
        //     setId({ ...id, idEndpoint: value})
        // }
        

    return (
        <div style={{display: 'flex', maxWidth: '900px', margin: '0 auto'}}>
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
                    value='ВКЛ'
                    onChange={updateUserData}
                    type="radio"
                    name="radioButtonControl"
                    checked={userData.radio === 'ВКЛ'}
                />
                <label htmlFor="radioButtonControl"> ВКЛ</label>

                <input
                    value='ВЫКЛ'
                    onChange={updateUserData}
                    type="radio"
                    name="radioButtonControl"
                    checked={userData.radio === 'ВЫКЛ'}
                />
                <label htmlFor="radioButtonControl"> ВЫКЛ</label>

                <br/><br/>
                <button onClick={handleSubmit}>OK</button>

            </div>
{/* 
 створти 2 інтупи і кнопку
перший відповідає за ендпоінт джсон плейсхолдера (перша частина енпоніту) другий- за айдішнік  якщо другого ендпоінту нема- тягнемо весь список  потрібно зробити валідацію на перший інпут- чи ендпоінт існуючий на другий- чи це число і чи воно в рамках 1-100  зробити версію на функціональній компоненті контрольовану і не контрольовану  якщо є час- на класовій компоненті теж таке саме написати */}

            <div style={{width: '300px'}}>
            <h2 >jsonplaceholder</h2>
             <br/>
             <div>{BASE_URL}</div>
             <br/>
                <input
                    value={endpoint}
                    onChange={({target: {value}}) => setEndpoint(value)}
                    id="endpoint"
                    type="text"
                    placeholder="Enter API Endpoint"/> <br/><br/>

                <input
                    value={id}
                    onChange={({target: {value}}) => setId(value)}
                    id="idEndpoint"
                    type="number"
                    placeholder="Enter ID"  /><br/> <br/>

            
                <br/>
                <button onClick={fetchData}>Get data</button>
                <br/><br/>
                <div>
                <pre>
                    {singleItem && JSON.stringify(singleItem, null, 2)}
                </pre>
                {items.map (el => (<div>{el.id} - {el.title}</div>))}
                </div>
            </div>
        </div>
    )

}
export default App;
