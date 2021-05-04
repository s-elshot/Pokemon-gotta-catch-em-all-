import React from 'react';
import "./Button.css"


function Button({setCurrentPageUrl,nextPageUrl,previousPageUrl}){

    return(
        <>
            <span className="buttonPosition">
                <button
                    type="submit"
                    onClick={ ()=>setCurrentPageUrl(previousPageUrl)}>Previous
                </button>
                <button
                    type="submit"
                    onClick={ ()=>setCurrentPageUrl(nextPageUrl)}>Next
                </button>
           </span>
        </>

    );
}

export default Button