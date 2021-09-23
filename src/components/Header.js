import React from 'react';
import pokedex from '../images/pokedex.png';

export default function Header() {
    return (
        <>
        <div>
            <div className="header">Jonathan & Dennis's </div>
            <img src ={pokedex} className="img-fluid" alt="Responsive Pokedex letter logo"></img>
        </div>
        </>
    )
}
