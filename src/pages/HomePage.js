import React from 'react';


function HomePage({pokemon}){

return(

    <div>
        {pokemon && pokemon.map((type)=>{
            return <p key={type.name}> {type.name}</p>
            })}
    </div>

);
}

export default HomePage