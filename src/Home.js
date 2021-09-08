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
        <div>
        <Header />
            <ol>
            {pokemon.map((item, index) => {
                    return (
                        <>
                                <li key={index}>
                                    <Link className="nameHome" to={"Details?id="+(index+1)+"&name="+item.name} details={item.url} >{item.name}</Link>
                                    <img className="imageHome"src={"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/"+ (index+1) +".svg"} alt=""></img>
                                </li>
                        </>
                    ) 
                })}
            </ol>
        <>
        <Footer />
        </>
        </div>
    )
}

export {Home};