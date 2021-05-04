import React from 'react';
import SingleCard from "./SingleCard";


function HomePage({pokemon}){

return(

    <div>
        {pokemon.results && pokemon.results.map((pokemon)=>{
            return <SingleCard key={pokemon.name}/>
            })}
    </div>

);
}

export default HomePage