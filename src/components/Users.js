import React from 'react';
import logo from '../header-logo.png'


function Users(){

    const style = {
        position: "fixed",
        top: "50%",
        left: "50%",
      }
    return(
        <div style={style}>
            <h1> Users</h1>
            <img src={logo} alt=""></img>
        </div>
    )
    
}

export default Users;