import React from 'react';
import logo from '../header-logo.png'


function Tags(){
    const style = {
        position: "fixed",
        top: "50%",
        left: "50%",
      }
    return(
        <div style={style}>
            <h1> Tags</h1>
            <img src={logo}></img>
        </div>
    )
    
}

export default Tags;