import './App.css';
import React from "react";
import Cards from "./components/cards/Cards";

//1.  відмалювати список карточок базуючись на якомусь створеному вами масиві
// створити окрему кнопку, яка буде видаляти поточний перший елемент (або останній)
// якщо у нас масив з 3 елементів і ми клікнули на кнопку 3 рази,
// то на екрані жодна карточка не має відмалюватись
// (кнопки повернення до початкового стану не треба)

// export function App() {
//     const [arr, changeArr] = useState(cars);
//     // const removeFirst = () => {
//     //     const newArr = [...arr];
//     //     newArr.shift();
//     //     changeArr(newArr);
//     // };
//     // const removeLast = () => {
//     //     const newArr = [...arr];
//     //     newArr.pop();
//     //     changeArr(newArr);
//     // }
//
//     //itemToRemove is 'last' of 'first'
//     const handleArrChange = (itemToRemove) => {
//         if (itemToRemove !== 'first' && itemToRemove !== 'last') return;
//         const newArr = [...arr];
//         itemToRemove === 'first' && newArr.shift();
//         itemToRemove === 'last' && newArr.pop();
//
//         //або
//         // itemToRemove === 'first' ? newArr.shift() : newArr.pop();
//
//         //aбо
//         // const newArr = arr.slice('first' ? 0 : arr.length,  'first' ? 1 : arr.length - 1);
//
//         changeArr(newArr);
//     }
//
//     return (
//         <div className={App}>
//             <h2>TEST</h2>
//             {/*<button onClick={removeFirst}>Delete first</button>*/}
//             {/*<button onClick={removeLast}>Delete last</button>*/}
//
//             <button onClick={() => {
//                 handleArrChange('first')
//             }}>Delete first
//             </button>
//             <button onClick={() => {
//                 handleArrChange('last')
//             }}>Delete last
//             </button>
//
//             {arr.map(el => <li key={el.id}>{el.title}</li>)}
//         </div>
//     )
// }

//2. те саме, тільки з кнопкою реверт (повернутись до стану, де у нас видно 3 елемнети, як на початку)
// export function App() {
//    const [itemToHide, setItemToHide] = useState([]);
//    const filterArr = cars.filter(el => !itemToHide.includes(el.id));
//
//    const handleArrChange = () => {
//         const itemToRemove = filterArr[0];
//
//         if(!itemToRemove) return;
//         console.log(itemToRemove);
//
//         setItemToHide([...itemToHide, itemToRemove.id])
//     }
//
//     const onRevert = () => {
//         setItemToHide([])
//      }
//
//     return (
//           <div className={App}>
//                <h2>TEST</h2>
//                <button onClick={handleArrChange}>Delete</button>
//                <button onClick={onRevert}>Revert</button>
//                {filterArr.map(el => <li key={el.id}>{el.title}</li>)}
//           </div>
//     );
//}


//3. задача з зірочкою)
// кожна карточка з завдання вище має мати кнопку,
// по кліку на яку, ми видаляємо зі списку саме її
// + реверт кнопка, щоб вернути все назад
// (ця кнопка одна дня всіх карточок, клікнули по ній і всі каркти вернулись назазд)
// (згадування функції фільтр в лекції було не просто так)

export function App() {
    return (
        <div className="container">
            <Cards></Cards>
        </div>
    )

}
export default App;