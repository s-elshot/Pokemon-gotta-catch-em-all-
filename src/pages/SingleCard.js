import React, {useEffect, useState} from 'react';
import './SingleCard.css'
import axios from "axios";


function SingleCard({endpoint}) {

    const [pokemon, setPokemon] = useState(null);

    useEffect(() => {
        console.log(endpoint);

        async function fetchData() {
            try {
                const {data} = await axios.get(endpoint);
                setPokemon(data);
            } catch (e) {
                console.error(e);
            }
        }

        fetchData();
    }, [endpoint]);

    // const singleResponse = await axios.get(`https://pokeapi.co/api/v2/pokemon/bulbasaur`);
    // const setSingleCard(singleResponse.data);
    // setMoves(singleResponse.data.moves);
    // setAbilities(singleResponse.data.abilities);
    // setType(singleResponse.data.types);

    return (
        <>

            <span className="singleCard_Parent">
                {pokemon &&
                <>
                    <h3 className="singleCardHeader">{pokemon.name}</h3>
                    {<img src={pokemon.sprites?.front_default}
                          className="ProfilePic"
                          alt={pokemon.name}
                    />}

                    <p>
                        <div className="propertyType">Abilities</div>
                        {pokemon.abilities.map((type) => {
                            return <div key={type.ability.name} className="abilities">{type.ability.name}</div>
                        })}
                    </p>

                    <div className="propertyType">weigth: {pokemon.weight}</div>
                    <div className="propertyType">Total moves: {pokemon.moves.length}</div>

                    {/*<p>*/}
                    {/*    <div className="propertyType">Pokemon type</div>*/}
                    {/*    {pokemon.type.map((type)=>{*/}
                    {/*        return<div key={type.type.name} className="abilities">{type.type.name}</div>*/}
                    {/*    })}*/}
                    {/*</p>*/}
                </>}
            </span>
        </>
    );
}

export default SingleCard