import React from 'react'

const KeyValue = () => {
    const numbers=[1,2,3,4,5,6,7,8]
    const details=[
        {
          id:1,
            name:"padhu",
            age:26
        },
        {
          id:2,
            name:"padmavathi",
            age:20
        },
        {
            name:"mayonk",
            age:15
        }
    ]
  return (
    <div>
      <ul>
        {numbers.map((number) => {
            return <li key={number}>{number}</li>
        })}
      </ul>
      <ul>
        {details.map((detail,index)=>{
          return(
            <div key={index}>
             <li>{detail.name}</li>
             <li>{detail.age}</li>
             </div>
             )
            
        })}
      </ul>
    </div>
  )
}

export default KeyValue
