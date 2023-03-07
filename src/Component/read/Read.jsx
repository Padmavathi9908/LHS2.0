import React from 'react'
import { useState } from 'react'
import { Button, Form } from 'semantic-ui-react'
import axios from "axios";
const Read = () => {
    const[firstName,setFirstName]=useState()
    const[lastName,setLastName]=useState()
    console.log(firstName);
    console.log(lastName);

    const sendDatatoApi = () =>{
 axios.post(`https://60cdfb0691cc8e00178dc448.mockapi.io/Crud`,
 firstName,
 lastName
 )
 
    }

  return (
    <div>
        <Form>
            <Form.Field>
                <label>firstName</label>
                <input name="fname" onChange={(e) => setFirstName(e.target.value)} placeholder='First Name'/>            
                </Form.Field>
                <Form.Field>
                <label>lastName</label>
                <input  name="lname" onChange={(e) => setLastName(e.target.value)} placeholder='last Name'/>            
                </Form.Field>
                <Button onClick={sendDatatoApi}>submit</Button>
        </Form>
    </div>
  )
}

export default Read