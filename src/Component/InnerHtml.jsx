import React from 'react'

const InnerHtml = () => {
    let data=`<p style="font-size:25px;color:red">This is myHome </p>`
    let data2=`<b style="font-size:25px;color:red">This is myHome </b>`
  return (
    <div className='App'>
        <div dangerouslySetInnerHTML={{__html:data}}></div>
        <div dangerouslySetInnerHTML={{__html:data2}}></div>

        <p style={{fontSize:25,color:"red"}}>This is my name</p>
        </div>
  )
}

export default InnerHtml