import React from 'react';
import Logo from "../assets/Daco_4238200_N.png";
import "./DefaultHeader.css"

function DefaultHeader(){

    return(
        <>
            <img src={Logo} alt={"logo"} className="logoHeader"/>
            <h1>POKEMON - GOTTA CATCH-EM ALL</h1>
        </>
    );
}

export default DefaultHeader