import {useState, useEffect} from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";

const Details = () => {
    const [details, setDetails] = useState([])
    const [name, setName] = useState([])
    const [img, setImg] = useState([])
    const [type, setType] = useState([])
    const id = new URLSearchParams(useLocation().search).get('id');
    const pokeName = new URLSearchParams(useLocation().search).get('name');

    useEffect(() => {
        axios.get("https://pokeapi.co/api/v2/pokemon/"+id+"/")
            .then(function (response) {
                setDetails(response.data.abilities)
                setName(pokeName)
                setImg(response.data.sprites.other.dream_world.front_default)
                setType(response.data.types)
            })
            .catch(function (error) {
            })
    }, [id, pokeName])

    return (
        <>
            <div class="card">
                <h1 className="card-header" class="card-header">{name}</h1>
                <div className="card-body">
                <div className="card-img">
                    <img src={img} class="img-fluid" alt="Responsive"/>
                </div>
                <table>
                    <tr>
                        <div className="card-text"><th><u> Abilities:</u></th>
                            {details.map((item, index) => {
                                return <p key={index}><td>{item.ability.name}</td></p>
                            })}
                        </div>
                    </tr>
                    <tr>
                        <div className="card-text2"><th><u>Type:</u></th>
                            {type.map((item, index) => {
                                return <p key={index}><td>{item.type.name}</td></p>
                            })} 
                        </div>
                    </tr>
                </table>
                </div>
            </div>
        </>
    );
}

export {Details};