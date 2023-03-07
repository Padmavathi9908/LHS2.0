import React, { useState } from 'react'

const Forms = () => {
    const[objData,setObjData] = useState({})
    const getInputs = (value,name) =>{
        let data={[name]:value}
        setObjData({ ...objData ,...data})
        console.log(objData);
        // console.log(name);

    }
    const submit = (e) =>{
        e.preventDefault()
        console.log(objData);
    }
  return (
    <form onSubmit={submit}>
    <div className='form'>
        <input placeholder="Write your Name.."
        name="name"
        type="text"
        onChange={(event)=> getInputs(event.target.value , event.target.name)}
        />
      <br/>
      <br/><br/>
        <input placeholder="Write your Age.."
         name="Age"
         type="text"
        onChange={(event)=> getInputs(event.target.value , event.target.name)}
        />  <br/>  <br/><br/>
        <input placeholder="Write your Hobbies.."
         name="Hobbies"
         type="text"
        onChange={(event)=> getInputs(event.target.value , event.target.name)}
        />  <br/>  <br/><br/>
        <input placeholder="Write your Date.."
         name="Date"
         type="date"
        onChange={(event)=> getInputs(event.target.value , event.target.name)}
        />
        <br/>  <br/><br/>
         <input placeholder="Write your Date.."
         name="file"
         type="file"
        onChange={(event)=> getInputs(event.target.value , event.target.name)}
        />
        <button type='submit'>submit</button>
        <button type='reset'>Reset</button>
    </div>
    </form>
  )
}

export default Forms