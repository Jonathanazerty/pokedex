import React, {useState, useEffect} from 'react';
import Header from './Header';
import Footer from './Footer'
import axios from 'axios';
import Leftcontainer from './Leftcontainer';



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
        </div>
        <center><Footer /></center>
        </>
    )
}
