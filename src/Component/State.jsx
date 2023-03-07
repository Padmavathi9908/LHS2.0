import React, { useState } from 'react'

const State = () => {
    const[count,setCount]=useState(1)
    const[name,setName]=useState("")
    const[isVisible,setIsVisible]=useState(false)
    const[array,setArray]=useState([
        {
            name:'padhu',
            age:'26'
        },
        {
            name:'sindu',
            age:30
        },
    ]);
    
    const increment =()=>{
        // count= count+1;
        // console.log(count);
        setCount(count+1)
        setIsVisible(!isVisible)
        setName("padhu")
    }
  return (

    <div className="App">
        <h1>{count}</h1>
        <h1>{name}</h1>
        {isVisible?<h1>Visible</h1>:<h1>Not Visible</h1>}
        <button onClick={increment}>change Name</button>
    </div>
  )
}

export default State