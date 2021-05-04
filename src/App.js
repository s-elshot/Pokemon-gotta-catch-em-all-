import {
    BrowserRouter as Router,
    Switch,
    Route,
} from 'react-router-dom';
import axios from "axios";
import React,{useState, useEffect} from 'react';
import './App.css';

import {ReactComponent as LoadingIcon} from './assets/Ripple-1s-321px.svg'
// import {ReactComponent as PokeSpinner} from './assets/Wedges-3s-200px.svg'
import SingleCard from "./pages/SingleCard";
import DefaultHeader from "./components/DefaultHeader";
import HomePage from "./pages/HomePage";
import Button from "./components/Button";




function App() {

    const [pokemon, setPokemon]= useState([]);
    const [singleCard, setSingleCard]= useState({});


    // pokemon card data useStates
    const [abilities, setAbilities] = useState([]);
    const [type,setType]= useState([]);
    const [moves,setMoves]= useState([]);
    const [url,setUrl] = useState([])

    // functionality useStates
    const [error, setError] = useState("");
    const [loading, toggleLoading] = useState(false);

    // functionality pageDisplay
    const [previousPageUrl,setPreviousPageUrl] = useState()
    const [currentPageUrl, setCurrentPageUrl] = useState("https://pokeapi.co/api/v2/pokemon")
    const [nextPageUrl, setNextPageUrl]= useState();


    useEffect(()=>{

        async function getPokemons(){
            setError("");
            toggleLoading(true);


            try {
            // List of all Pokemon(s)
                const response = await axios.get(currentPageUrl)
                setPreviousPageUrl(response.data.previous)
                setPokemon(response.data.results);
                setNextPageUrl(response.data.next)
                console.log(response.data.results)
                const tjek = response.data.results;
                const what=(tjek.map((type)=>{return type.name}))


            // Single pokemon data
                const singleResponse = await axios.get(`https://pokeapi.co/api/v2/pokemon/bulbasaur`);
                setSingleCard(singleResponse.data);
                setMoves(singleResponse.data.moves);
                setAbilities(singleResponse.data.abilities);
                setType(singleResponse.data.types);

                const url= await axios.get(`https://pokeapi.co/api/v2/pokemon/${url}`);



            } catch(error) {
            setError("Something went wrong with retrieving the Pokemons");
            console.error(error);
            }
        }
        getPokemons()
        toggleLoading(false)
    },[pokemon.name,currentPageUrl,loading]);


  return (
    <Router className="router">
        {loading && <LoadingIcon className="loader"/> }
        {error && <p>{error.message}</p>}



        <nav>
            <DefaultHeader/>
        </nav>



        <Switch>
            <Route exact path={"/"}>
                <Button
                    setCurrentPageUrl={setCurrentPageUrl}
                    previousPageUrl={previousPageUrl}
                    nextPageUrl={nextPageUrl}
                />
                <HomePage
                    pokemon={pokemon}
                    setPokemon={setPokemon}
                />
                <Button
                setCurrentPageUrl={setCurrentPageUrl}
                previousPageUrl={previousPageUrl}
                nextPageUrl={nextPageUrl}
                />
            </Route>


            <Route>
                <SingleCard exact path={"/singlecard"}
                            singleCard={singleCard}
                            moves={moves}
                            abilities={abilities}
                            type={type}
                            loading={loading}
                            url={url}

                />

            </Route>

        </Switch>
    </Router>
  );
}


export default App;
