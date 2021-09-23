import React, {useState, useEffect} from 'react';
import Header from './Header';
import Footer from './Footer'
import axios from 'axios';
import Leftcontainer from './Leftcontainer';
import pokedex from '../images/pokedex.png';



export default function Pokedex() {

    const [pokemon, setPokemon] = useState([]);

    //Name of Pokemon
    useEffect(()=> {
        axios.get('https://pokeapi.co/api/v2/pokemon?limit=150')
            .then(function (response) {
                setPokemon(response.data.results)
            })
            .catch(function (error) {
                // handle error
                console.log(error);
            })

    },[pokemon]);

    return (
        <>
            <div className="dexHeader"><Header /></div>
            <img src ={pokedex} className="img-fluid" alt="Responsive Pokedex letter logo"></img>
            <div className = "pokedex"><Leftcontainer /></div>
            <Footer />

        </>
    )
}
