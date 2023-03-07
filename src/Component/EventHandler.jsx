import React from 'react'

export const EventHandler = () => {
const getInput = (event) =>{
console.log(event.target.name);
}

    const addNumbs = (num1,num2) =>{
        console.log(num1+num2);

    }
  return (
    <div className= "App">
        <input placeholder="add something.." onChange={getInput} name="input"/>
        <button onClick={() => addNumbs(2,3)}>adding two numbers</button>
    </div>
  )
}
