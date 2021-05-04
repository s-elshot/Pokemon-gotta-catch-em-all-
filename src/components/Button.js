import React from 'react';
import "./Button.css"


function Button({children, clickHandler, disabled}){

    return(
        <>

                <button
                    className="buttonPosition"
                    type="submit"
                    onClick={clickHandler}
                    disabled={disabled}
                >
                    {children}
                </button>
        </>
    );
}

export default Button