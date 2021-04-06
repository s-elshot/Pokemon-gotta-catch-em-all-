
import React from 'react';



function HomePage({pokemon,setPokemon}){

return(

    <ul>
        {pokemon && pokemon.map((type)=>{
            return <li key={type.name}>{type.name}</li>
            })}
    </ul>

);
}

export default HomePage