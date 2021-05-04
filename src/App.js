import axios from "axios";
import React, {useState, useEffect} from 'react';
import './App.css';
// import {
//     BrowserRouter as Router,
//     Switch,
//     Route,
// } from 'react-router-dom';
import SingleCard from "./pages/SingleCard";
import DefaultHeader from "./components/DefaultHeader";
// import HomePage from "./pages/HomePage";
import Button from "./components/Button";

import {ReactComponent as LoadingIcon} from './assets/Ripple-1s-321px.svg'

// import {ReactComponent as PokeSpinner} from './assets/Wedges-3s-200px.svg'


function App() {

    // functionality useStates
    const [pokemon, setPokemon] = useState([]);
    const [endpoint, setEndpoint] = useState('https://pokeapi.co/api/v2/pokemon/');
    const [loading, toggleLoading] = useState(false);
    const [error, setError] = useState("");
    // functionality pageDisplay
    const [previousPageUrl, setPreviousPageUrl] = useState()
    const [currentPageUrl, setCurrentPageUrl] = useState("https://pokeapi.co/api/v2/pokemon")
    const [nextPageUrl, setNextPageUrl] = useState();


    // pokemon card data useStates
    // const [abilities, setAbilities] = useState([]);
    // const [type, setType] = useState([]);
    // const [moves, setMoves] = useState([]);
    // const [url, setUrl] = useState([])


    useEffect(() => {

        async function getPokemons() {
            toggleLoading(true);
            setError(false);

            try {
                // List of all Pokemon(s)
                const {data} = await axios.get(endpoint);
                setPokemon(data);
            } catch (e) {
                console.error(e);
                setError(true);
            }
            toggleLoading(false);
        }

        getPokemons()
    }, [endpoint]);


    return (
        <div className="router">

            {pokemon &&
            <>
                <DefaultHeader/>
                <Button
                    disabled={!pokemon.previous}
                    clickHandler={() => setEndpoint(pokemon.previous)}
                > Previous
                </Button>

                <Button
                    disabled={!pokemon.next}
                    clickHandler={() => setEndpoint(pokemon.next)}
                > Next
                </Button>


                {pokemon.results && pokemon.results.map((pokemon) => {
                    return <SingleCard name={pokemon.name} endpoint={pokemon.url}/>
                })}
            </>}

            {loading && <LoadingIcon className="loader"/>}
            {error && <p>{error.message}</p>}
        </div>
    );
}


export default App;
