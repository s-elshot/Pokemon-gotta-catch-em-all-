import {
    BrowserRouter as Router,
    Switch,
    Route,
} from 'react-router-dom';

import React,{useState, useEffect} from 'react';
import './App.css';
import HomePage from "./pages/HomePage";
import axios from "axios";
import SingleCard from "./pages/SingleCard";
import DefaultHeader from "./pages/DefaultHeader";

function App() {

    const [pokemon, setPokemon]= useState([]);
    const [singleCard, setSingleCard]= useState({});
    const [abilities, setAbilities] = useState([]);
    const [moves,setMoves]= useState([]);
    const [error, setError] = useState("");

    useEffect(()=>{

        async function getPokemons(){
            setError("")

            try {
            // List of all Pokemon
                const response = await axios.get("https://pokeapi.co/api/v2/pokemon")
                setPokemon(response.data.results)
            // Single pokemon data
                const singleResponse = await axios.get(`https://pokeapi.co/api/v2/pokemon/venusaur`)
                setSingleCard(singleResponse.data)
                setMoves(singleResponse.data.moves)
                setAbilities(singleResponse.data.abilities)



            } catch(error) {
            setError("Something went wrong with retrieving the Pokemons");
            console.error(error);
            }

        }
        getPokemons()
    },[])

  return (
    <Router className="router">
        {error && <p>{error.message}</p>}
        <nav>
            <DefaultHeader/>
        </nav>

        <Switch>

            <Route exact path={"/"}>
                <HomePage
                pokemon={pokemon}
                setPokemon={setPokemon}
                />
            </Route>


            <Route>
                <SingleCard exact path={"/singlecard"}
                singleCard={singleCard}
                moves={moves}
                abilities={abilities}
                // pokemonName="pikachu"
                />

                <SingleCard exact path={"/singlecard"}
                            singleCard={singleCard}
                            moves={moves}
                            abilities={abilities}
                            // pokemonName="Pikachu"
                />

                <SingleCard exact path={"/singlecard"}
                            singleCard={singleCard}
                            moves={moves}
                            abilities={abilities}
                            // pokemonName="Pikachu"
                />

            </Route>

        </Switch>
    </Router>
  );
}


export default App;
