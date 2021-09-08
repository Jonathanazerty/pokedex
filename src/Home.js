import React, {useState, useEffect} from 'react';
import './dexStyling.css';
import Header from './components/Header';
import Footer from './components/Footer';
import { Link } from 'react-router-dom'
import axios from 'axios';



const Home = () => {
    
    const [pokemon, setPokemon] = useState([]);
    useEffect(()=> {
        axios.get('https://pokeapi.co/api/v2/pokemon?limit=100')
            .then(function (res) {
                setPokemon(res.data.results)
                // console.log(res.data.results)
            })
            .catch(function (err) {
                // handle error
                console.log(err);
            })

    },[]);

    

    // const [pokemon, setPokemon] = useState([]);
    // const urlPokemon = 'https://pokeapi.co/api/v2/pokemon?limit=100';

    // useEffect((pokemon) => {
    //     async function fetchData() {
    //         let response = await fetch (urlPokemon);
    //         let pokemonData = await response.json();
    //         console.log(pokemonData.results);
    //     }
    //     fetchData();
    // }, []);

    return (
        <>
        <Header />
        <div>
            {pokemon.map((item, index) => {
                    return <li key={index}><Link to={"pokemon?id="+index+"&name="+item.name} details={item.url} >{item.name}</Link></li>
                })}
        </div>
        <Footer />
        </>
    )
}

export {Home};