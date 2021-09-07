import React, {useState, useEffect} from 'react';
import './dexStyling.css';
import Header from './components/Header';
import Footer from './components/Footer';
// import axios from 'axios';


export default function Home( props ) {
    // busy with Basile ----------------------------------------------------------
    // export default function Home( props ) {
    //     const [pokemon, setPokemon] = useState([
    //         {'name':""}
    //     ])
    //     const [pokeData, setPokeData] = useState([])
      
    //     useEffect(() => {
    
    //         axios.get("https://pokeapi.co/api/v2/pokemon?limit=100").then(res => {
    //         res.data.results.map((detailsPokemon) => {
    //             setPokemon(...pokemon, {'name':detailsPokemon.name});
    //             console.log(detailsPokemon.url);
    //         })
    //       })
    //     }, [])
    //     console.log(pokemon);
  
    // const [pokemon, setPokemon] = useState([]);
    // useEffect(() => {
    // ----------------------------------------------------------------------------
  
    // Works ----------------------------------------------------------------------
    //   axios.get("https://pokeapi.co/api/v2/pokemon?limit=100").then(res => {
    //     setPokemon(res.data.results.map(p => p.name))
    //   })
    // }, [])
    // console.log(pokemon);
    //--------------------------------------------------------------------------------

    const [pokemon, setPokemon] = useState([]);
    const urlPokemon = 'https://pokeapi.co/api/v2/pokemon?limit=100';

    useEffect((pokemon) => {
        async function fetchData() {
            let response = await fetch (urlPokemon);
            let pokemonData = await response.json();
            console.log(pokemonData.results);
            console.log(pokemonData.results[0].name);
            console.log(pokemonData.results[0].url);
        }
        fetchData();
    }, []);

    return (
        <div>
            {/* {pokemon.map(p => (
                <div key={p}>{p}</div>
            ))} */}
        <>
        <Header />
        <Footer />
        </>
        </div>
    )
}
