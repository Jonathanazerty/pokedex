import React, {useState, useEffect} from 'react';
import './dexStyling.css';
import Header from './components/Header';
import Footer from './components/Footer';
import { Link } from 'react-router-dom'
import { useLocation } from "react-router-dom";
import axios from 'axios';

const Home = () => {
    
    const [pokemon, setPokemon] = useState([]);
    const [name, setName] = useState([])
    const pokemonName = new URLSearchParams(useLocation().search).get('name');

    //Name of Pokemon
    useEffect(()=> {
        axios.get('https://pokeapi.co/api/v2/pokemon?limit=100')
            .then(function (response) {
                // console.log(response)
                setPokemon(response.data.results)
                setName(pokemonName)
                // console.log(response.data.results)
            })
            .catch(function (error) {
                // handle error
                console.log(error);
            })

    },[pokemonName]);

    
    return (
        <div class="home">
        <Header />
        <div class="poke-container">
                <ol>
                {pokemon.map((item, index) => {
                        return (
                            <>
                            <div class="card-home">
                                <div className="card-header-home" class="card-header-home">{name}</div>
                                <div className="card-body-home">
                                    <li key={index}> 
                                        <Link className="nameHome" to={"Details?id="+(index+1)+"&name="+item.name} details={item.url} >{item.name}</Link>
                                        <img className="imageHome"src={"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/"+ (index+1) +".svg"} alt=""></img>
                                    </li>
                                </div>
                            </div>
                            </>
                        ) 
                    })}
                </ol>
        </div>
        <>
        <Footer />
        </>
        </div>
    )
}
export {Home};