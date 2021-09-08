import React, {useState, useEffect} from 'react';
import './dexStyling.css';
import Header from './components/Header';
import Footer from './components/Footer';
import { Link } from 'react-router-dom'
import axios from 'axios';

const Home = () => {
    
    const [pokemon, setPokemon] = useState([]);
    //Name of Pokemon
    useEffect(()=> {
        axios.get('https://pokeapi.co/api/v2/pokemon?limit=100')
            .then(function (response) {
                setPokemon(response.data.results)
                // console.log(res.data.results)
            })
            .catch(function (error) {
                // handle error
                console.log(error);
            })

    },[]);

    return (
        <div>
            {pokemon.map((item, index) => {
                    return (
                        <>
                            <ol>
                                <li key={index}>
                                    <Link to={"?id="+index+"&name="+item.name} details={item.url} >{item.name}</Link>
                                    <img src={"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/"+ index +".svg"} alt=""></img>
                                </li>
                            </ol>
                        </>
                    ) 
                })}
        <>
        <Header />
        <Footer />
        </>
        </div>
    )
}

export {Home};