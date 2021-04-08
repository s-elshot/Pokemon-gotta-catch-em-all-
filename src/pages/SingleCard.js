import React from 'react';
import './SingleCard.css'
import {ReactComponent as LoadingIcon} from "../assets/Ripple-1s-321px.svg";


function SingleCard({singleCard,abilities,moves,type,loading}) {


    return (
        <>

            {loading && <LoadingIcon className="loader"/> }
            <span className="singleCard_Parent">
                <h3 className="singleCardHeader">{singleCard.name}</h3>
                {<img src={singleCard.sprites?.front_default}
                          className="ProfilePic"
                          alt={singleCard.name}
                />}

                <p>
                    <div className="propertyType">Abilities</div>
                    {abilities && abilities.map((type)=>{
                        return<div key={type.ability.name} className="abilities">{type.ability.name}</div>
                    })}
                </p>

                <div className="propertyType">weigth: {singleCard.weight}</div>
                <div className="propertyType">Total moves: {moves.length}</div>

                <p>
                    <div className="propertyType">Pokemon type</div>
                    {type && type.map((type)=>{
                        return<div key={type.type.name} className="abilities">{type.type.name}</div>
                    })}
                </p>
            </span>
        </>
    );
}
export default SingleCard