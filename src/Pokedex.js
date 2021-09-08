import React from 'react';
import Header from './components/Header';
import Dexstructure from './components/Dexstructure';
import Footer from './components/Footer';



export default function Pokedex() {
    return (
        <>
        <center><Header /></center>
       <Dexstructure />
        <center><Footer /></center>
        </>
    )
}
