import React, { useState } from 'react'

const DynamicInputs = () => {
    const[inputs,setInputs]=useState({})
    const getInput = (data) =>{
        let {name,value}=data.target
        let input={[name] : value}
setInputs({ ...inputs , ...input});

    } 
    console.log(inputs);
  return (
    
    <div className="App">
    <div className="input-container">
        <input placeholder="Name" 
        name="name" 
        id='name'
        onChange={getInput}/><br/><br/><br/>
        <input placeholder="age"    name="age" onChange={getInput}/><br/><br/><br/>
         <input placeholder="years of experieence" name="yoe" onChange={getInput}/><br/><br/><br/>
         

    </div>
    <button>add new group</button>
    </div>
  )
}

export default DynamicInputs