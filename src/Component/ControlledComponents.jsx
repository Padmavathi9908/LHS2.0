import React from "react"

function ControlledComponent(){
    let name=React.createRef();
    let age=React.createRef();
const getName = (event) =>{
    console.log(event.target.value);
}
const getAge = (event) =>{
    console.log(event.target.value);
}
const submit = () =>{
        console.log(name.current.value);
        console.log(age.current.value);
    }

    return(
        <div className="App">
            <input placeholder="Name" onChange={getName}/>
            <input placeholder="age" onChange={getAge}/>
            <button onClick={submit}>submit</button>
        </div>
        
    )

}
export default ControlledComponent