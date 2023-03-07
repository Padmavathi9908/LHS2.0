import React from 'react'

const PropsData = ({value,changeName}) => {
  return (
    <div>
      <h1>name is :{value}</h1>
      <button onClick= {() => changeName("Siri")}>change name</button>
    </div>
  )
}

export default PropsData
