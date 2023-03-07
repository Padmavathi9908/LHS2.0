import React, { useState } from 'react'
const styles =  {
    internal:{
        color:"red",
    },
    light:{
        backgroundColor:"white",
        color:"black"
    },
    dark:{
        backgroundColor:"black",
        color:"white"
    }
};
const CssInternal = () => {
    const[theme,setTheme] = React.useState(false)
    const toggeltheme = () =>{
        setTheme(!theme)
        console.log(setTheme);
    }
 return (
    <div      style={theme ? {color :"black",background:"white"}
    : {color:"white",background:"black"}
}>
        <h1 >External Styling</h1>
        <h1  
    
        
        >Internal Styling</h1>
        <h1 >Inline Styling</h1>
        <button onClick={toggeltheme}> Toggel Theme</button>
    </div>

  )
}

export default CssInternal