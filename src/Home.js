import React from 'react';


export default function Home() {
    return (
        <>
            <label htmlFor="pokemonpic" id="pokemonpic"></label>
            <label htmlFor="addToDo" id="what2do"> Type in a number and find out which Pokémon you will get ! </label>
            <input /*ref={inputRef}*/ type="text" name="search" id="search" placeholder="Find your Pokémon here !" />
            <input /*onClick={clickHandler}*/ type="submit" value="catch" id="submit"/>

            <label htmlFor="pokedetails" id="pokedetails"></label>
        </>
        );

}
