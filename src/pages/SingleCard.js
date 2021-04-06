import React from 'react';
import './SingleCard.css'

function SingleCard({singleCard,moves, abilities}) {

    if(singleCard.sprites === undefined){
        return ( <p>Loading...please wait</p>)
    }

    return (
        <>
            <span className="singleCard_Parent">

                    <h3 className="singleCardHeader">{singleCard.name}</h3>
                    {<img src={singleCard.sprites?.front_default}
                          className="ProfilePic"
                          alt="profile"
                    />}

                    <div className="propertyType">Abilities:</div>

                    {abilities && abilities.map((type)=>{
                        return<div key={type.ability.name} className="abilities">{type.ability.name}</div>
                    })}

                    <div className="propertyType">weigth: {singleCard.weight}</div>
                    <div className="propertyType">Total moves: {moves.length}</div>


            </span>
        </>
    );
}

export default SingleCard