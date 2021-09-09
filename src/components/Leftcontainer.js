import {useState, useEffect} from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";

export default function Leftcontainer() {
    const [details, setDetails] = useState([])
    const [name, setName] = useState([])
    const [img, setImg] = useState([])
    const id = new URLSearchParams(useLocation().search).get('id');
    const pokeName = new URLSearchParams(useLocation().search).get('name');

    useEffect(() => {
        console.log(id)
        // console.log(name)
        axios.get("https://pokeapi.co/api/v2/pokemon/"+(id+1)+"/")
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
           <div className = "pokedex">
                <div className = "left-container">
                    <div className ="left-container__top-section">
                        <div className ="top-section__blue"></div>
                        <div className ="top-section__small-buttons">
                            <div className ="top-section__red"></div>
                            <div className ="top-section__yellow"></div>
                            <div className ="top-section__green"></div>
                        </div>
                    </div>
                    <div className ="left-container__main-section-container">
                        <div className ="left-container__main-section">
                            <div className ="main-section__white">
                                <div className ="main-section__black">
                                    <div className="card-text">
                                        <img src={img} alt=""/>
                                        {details.map((item, index) => {
                                            return <p key={index}></p>
                                        })} 
                                    </div>
                                    <div className ="main-screen hide">
                                        <div className ="screen__header">
                                            <span className ="poke-name"></span>
                                            <span className ="poke-id"></span>
                                        </div>
                                        <div className ="screen__image">
                                            <img src ="" className = "poke-front-image" alt = "front"></img>
                                            <img src ="" className = "poke-back-image" alt = "back"></img>
                                        </div>
                                        <div class="screen__description">
                                            <div className ="stats__types">
                                                <span className ="poke-type-one"></span>
                                                <span className ="poke-type-two"></span>
                                            </div>
                                            <div className ="screen__stats">
                                                <p className = "stats__weight">
                                                    weight: <span className ="poke-weight"></span>
                                                </p>
                                                <p className = "stats__height">
                                                    height: <span className ="poke-height"></span>
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className = "left-container__controllers">
                                <div className ="controllers__d-pad">
                                    <div className ="d-pad__cell top"></div>
                                    <button className="d-pad__cell left "></button>
                                    <div className="d-pad__cell middle"></div>
                                    <button className="d-pad__cell right"></button>
                                    <div className="d-pad__cell bottom"></div>
                                </div>
                                <div className ="controllers__buttons">
                                    <button id ="bButton" name ="bButton" className ="buttons__button">B</button>
                                    <button id ="aButton" name ="aButton" className ="buttons__button">A</button>
                                </div>
                            </div>
                        </div>
                        <div className ="left-container__right">
                            <div className ="left-container__hinge"></div>
                            <div className ="left-container__hinge"></div>
                        </div>
                    </div>
                </div>
                <div className ="right-container">
                    <div className ="right-container__black">
                        <div className ="right-container__screen">
                            <div className="list-move">move One</div>
                            <div className="list-move">move Two</div>
                            <div className="list-move">move Three</div>
                            <div className="list-move">move Four</div>
                        </div>
                        <div className = "right-container__screen">
                            <div className="list-item"></div>
                            <div className="list-item"></div>
                            <div className="list-item"></div>
                            <div className="list-item"></div>
                            <div className="list-item"></div>
                            <div className="list-item"></div>
                            <div className="list-item"></div>
                            <div className="list-item"></div>
                            <div className="list-item"></div>
                            <div className="list-item"></div>
                        </div>
                    </div>
                    <input type ="text" className = "findPoke" id = "findPoke" name ="f"></input>
                    <div className ="right-container__buttons">
                        <div className ="left-button">Prev</div>
                        <div className ="right-button">Next</div>
                    </div>
                </div>
            </div>
        </>
    );
}

export { Leftcontainer};
/*    
    return (
        <>
            <div>
                <div className = "left-container">
                    <div className ="left-container__top-section">
                        <div className ="top-section__blue"></div>
                        <div className ="top-section__small-buttons">
                            <div className ="top-section__red"></div>
                            <div className ="top-section__yellow"></div>
                            <div className ="top-section__green"></div>
                        </div>
                    </div>
                    <div className ="left-container__main-section-container">
                        <div className ="left-container__main-section">
                            <div className ="main-section__white">
                                <div className ="main-section__black">
                                    <div className="card-text">
                                        <img src={img} alt=""/>
                                        {details.map((item, index) => {
                                            return <p key={index}>{item.ability.name}</p>
                                        })} 
                                    </div>
                                    <div className ="main-screen hide">
                                        <div className ="screen__header">
                                            <span className ="poke-name">
                                            </span>
                                            <span className ="poke-id"></span>
                                        </div>
                                        <div className ="screen__image">
                                        <img src={img} alt=""/>
                                            {details.map((item, index) => {
                                                return <p key={index}>{item.ability.name}</p>
                                            })} 
                                        </div>
                                        <div class="screen__description">
                                            <div className ="stats__types">
                                                <span className ="poke-type-one"></span>
                                                <span className ="poke-type-two"></span>
                                            </div>
                                            <div className ="screen__stats">
                                                <p className = "stats__weight">
                                                    weight: <span className ="poke-weight"></span>
                                                </p>
                                                <p className = "stats__height">
                                                    height: <span className ="poke-height"></span>
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className = "left-container__controllers">
                                <div className ="controllers__d-pad">
                                    <div className ="d-pad__cell top"></div>
                                    <button class="d-pad__cell left "></button>
                                    <div class="d-pad__cell middle"></div>
                                    <button class="d-pad__cell right"></button>
                                    <div class="d-pad__cell bottom"></div>
                                </div>
                                <div className ="controllers__buttons">
                                    <button id ="bButton" name ="bButton" className ="buttons__button">B</button>
                                    <button id ="aButton" name ="aButton" className ="buttons__button">A</button>
                                </div>
                            </div>
                        </div>
                        <div className ="left-container__right">
                            <div className ="left-container__hinge"></div>
                            <div className ="left-container__hinge"></div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}*/
