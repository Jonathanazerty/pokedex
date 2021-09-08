import {useState, useEffect} from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";

const Details = () => {
    const [details, setDetails] = useState([])
    const id = new URLSearchParams(useLocation().search).get('id');

    useEffect(() => {
        console.log(id)
        // console.log(name)
        axios.get("https://pokeapi.co/api/v2/pokemon/"+id+"/")
            .then(function (response) {
                console.log(response)
                setDetails(response.data.abilities)
                // console.log(response.data.abilities)
            })
            .catch(function (error) {
                // handle error
                console.log(error);
            })
    }, [id])

    // console.log(details)

    return (
        <>
            <div>
                {details.map((item, index) => {
                    return <li key={index}>{item.ability.name}</li>
                })}
            </div>
        </>
    );
}

export {Details};