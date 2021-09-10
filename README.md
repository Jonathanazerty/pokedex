# Pokédex in REACT, group-project
 
[DEPLOYED ON NETLIFY :](https://pokedex-dennis-jonathan.netlify.app/)

Well hello there, we present to you proudly, a modern React Pokedex application ! 
This a group project by Jonathan and myself (Dennis), learning the most important principles in React, such as Components, Hooks, States, Effects, Router-DOM etc...

It was very hard to grasp, but holy moly did we have fun. 
We highly suggest to try it yourself ! Below you find an overview on how we approached this project's structure. Enjoy !

## Components & structure used
    - public 
        -- index.html ( First page to load, Bootstrap lives here)
    - src
        -- components
            --- Details.js( logic used when clicking on a certain pokemon)
            --- Footer.js ( sticky Bootstrap footer component)
            --- Header.js ( sticky Bootstrap header component)
            --- Leftcontainer.js (returns the pokedex HTML and logic for fetching data)
            --- Pokedex.js ( will return multiple components as one solid Pokedex page)
        -- images (the pokedex header is an image, please see below for credits. 
                    We do not own this image, nor do we claim to be it's author. )
        -- Index.js ( renders App routing and Links)
        -- Home.js ( The homepage that displays the complete list fetched by the API)
        -- dexStyling.css ( one CSS page to accompany our Bootstrap elements. 8 bit     enough for you :p ? )

## Techniques used and struggles 
    ### Techniques :

    => We used React-router-DOM to switch between pages so you don't have the reload fragment between pages. Overall this creates a nice single page experience, and avoids the page to completely reload all elements.Have a look at Switch, Route and Link.  Very cool and nice  !

    => Axios is imported to use for our API fetch.axios.get() will manage our API calls and manipulation. 

    => We tried to use as many separate Components possible, and export them nicely on one page. This for better readability, cleaner code, and overall an "app" as dynamic as possible. ie. 
    App.JS it's structure, Pokedex.js it's structure.  

    => useState and useEffect are our main tools to gather our data, and display accordingly . God bless JSX, which makes it possible to combine HTML elements inside of Javascript functionalities. 

    ### Struggles :

    => This can be a long segment; so to keep it to the point : 

        - It is easy to mistake datatypes. Make sure to know when you have an array or an object, and decide WHEN and WHY to use it.

        - Each useEffect and useState have an indirect effect on eachother. IE you can change the useState, by calling one parameter of your state inside of a different useEffect. In this project we had two separate axios fetches in two separate useEffects; which caused a lot of errors and internal datatype conflicts. 

        - Learning the scope of functions and datatypes . If you think you can re-use everything after declaring it once, in one component, you misheard a lot of tutorials. Let us speak for ourselves and say that it takes a lot of trial and error to get the scope and impact of variables and functions inside REACT. 

        - Styling : finding an appealing yet vivid colorscheme, without losing its User Experience and cool UI feel. After all, we want you to use this, and enjoy as much as possible :). Even if it's only for educational purposes :D ! 


## Sources / Copyright 
- API used : https://pokeapi.co/ ; (Free limited use, no account needed). 

- IDE used : VS Code https://code.visualstudio.com/ ; ( Free IDE, must-have ! )

- Pokedex header image : 
    https://bulbapedia.bulbagarden.net/wiki/File:Pok%C3%A9dex_logo.png
    Under license : 
    Attribution-NonCommercial-ShareAlike 4.0 International (CC BY-NC-SA 4.0) 

- Pokeball App Logo :
    https://www.pngfind.com/download/wTmRTh_pokeball-clipart-pokemon-symbol-free-pokeball-svg-hd/
    Under license :
    Attribution-NonCommercial-ShareAlike 4.0 International (CC BY-NC-SA 4.0) 