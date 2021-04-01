import React from "react";


export function TabContent ({data, tabs, indexTab})  {

    const arg = tabs[indexTab].arguments;
    console.log(arg[0], arg[1])  

    return (
    <>
    
    {data.map( (item, index) => 
        {
            return (
            <div key={index}> 
                    <div><strong>{item[arg[0]]} - {item[arg[1]]}</strong></div>
                    <div>{item[arg[2]]}</div>
                    <div>{item[arg[3]]}</div>
            </div>
        
            )
        })}
    </>
    )
}

export default TabContent;
