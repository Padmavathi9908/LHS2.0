import React from "react";

function Uncontrolled  () {
    let name=React.createRef();
    let age=React.createRef();
const submit = () =>{
    console.log(name.current.value);
    console.log(age.current.value);
}

    return(
        <div className="App">
            <input placeholder="Name" ref={name}/>
            <input placeholder="Age" ref={age}/>
            <button onClick={submit}>submit</button>
            
        </div>
    )

}
export default Uncontrolled
 