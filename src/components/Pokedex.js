import React, {useState, useEffect} from 'react';
import Header from './Header';
import Footer from './Footer'
import axios from 'axios';
import Leftcontainer from './Leftcontainer';
import { Container } from 'react-bootstrap';
import { Row } from 'react-bootstrap';



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

            <center><Header /></center>
            <Container>
                <Row>
                    <div className = "pokedex"><Leftcontainer /></div>
                </Row>
            </Container>
            <center><Footer /></center>

        </>
    )
}
