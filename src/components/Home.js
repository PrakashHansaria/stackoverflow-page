import React from 'react';
import logo from '../header-logo.png'


function Home(){
    const style = {
        position:"fixed",
        top: "50%",
        left: "50%",
      }
    return(
        <div style={style}>
            <h1> Home page</h1>
            <img src={logo}></img>
        </div>
    )
    
}

export default Home;