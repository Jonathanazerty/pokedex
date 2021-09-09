import React, {useState, useEffect} from 'react';
import Header from './components/Header';
import Footer from './components/Footer'
import axios from 'axios';
import Dexstructure from './components/Dexstructure';
import Leftcontainer from './components/Leftcontainer';
import Rightcontainer from './components/Rightcontainer';



export default function Pokedex() {

    const [pokemon, setPokemon] = useState([]);

    //Name of Pokemon
    useEffect(()=> {
        axios.get('https://pokeapi.co/api/v2/pokemon?limit=100')
            .then(function (response) {
                // console.log(response)
                setPokemon(response.data.results)
                // console.log(response.data.results)
            })
            .catch(function (error) {
                // handle error
                console.log(error);
            })

    },[]);

    return (
        <>
        <center><Header /></center>
        <div className = "pokedex">
            <Leftcontainer />
            <Rightcontainer />
        </div>
        <center><Footer /></center>
        </>
    )
}
