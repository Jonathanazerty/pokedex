import React from 'react';
import pokedex from '../images/pokedex.png';

export default function Header() {
    return (
        <>
        <div>
            <center><p></p></center>
            <div className="header">Jonathan and Dennis's </div>
            <img src ={pokedex} className="img-fluid" alt="Responsive Pokedex letter logo"></img>
        </div>
        </>
    )
}
