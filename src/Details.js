import {useState, useEffect} from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";

const Details = () => {
    const [details, setDetails] = useState([])
    const [name, setName] = useState([])
    const [img, setImg] = useState([])
    const id = new URLSearchParams(useLocation().search).get('id');
    const pokeName = new URLSearchParams(useLocation().search).get('name');

    useEffect(() => {
        console.log(id)
        // console.log(name)
        axios.get("https://pokeapi.co/api/v2/pokemon/"+id+"/")
            .then(function (response) {
                // console.log(response)
                setDetails(response.data.abilities)
                setName(pokeName)
                setImg(response.data.sprites.other.dream_world.front_default)
                // console.log(response.data)
                // setWeight(response.data)
                // // console.log(response.data.abilities)
                // console.log(response.data.weight)
            })
            .catch(function (error) {
                // handle error
                console.log(error);
            })
    }, [id, pokeName])

    // console.log(details)

    return (
        <>
            <div class="card">
                <h1 className="card-header" class="card-header">{name}</h1>
                <div className="card-body">
                <div className="card-text">
                    <img src={img} alt=""/>
                    {details.map((item, index) => {
                        return <p key={index}>{item.ability.name}</p>
                    })} 
                </div>
                </div>
            </div>
        </>
    );
}

export {Details};