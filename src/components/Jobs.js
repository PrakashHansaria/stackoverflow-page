import React from 'react';
import logo from '../header-logo.png'


function Jobs(){
    const style = {
        position:"fixed",
        top: "50%",
        left: "50%",
      }
    return(
        <div style={style}>
            <h1> Jobs page</h1>
            <img src={logo} alt=""></img>
        </div>
    )
    
}

export default Jobs;