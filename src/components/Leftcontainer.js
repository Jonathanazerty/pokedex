import { useState, useEffect } from "react";
import axios from "axios";

const Leftcontainer = () => {

   // const id = new URLSearchParams(useLocation().search).get('id');
    const [details, setDetails] = useState([]);
    const [name, setName] = useState("");
    const [img, setImg] = useState("");
    const [id, setId] = useState(1);

    let url = 'https://pokeapi.co/api/v2/pokemon/';
    // useEffect onPageLoad
    useEffect(() => {
        axios.get(url + id)
            .then(function (response) {
                setDetails(response.data.moves)
                setImg(response.data.sprites.other.dream_world.front_default)
            })
            .catch(function (error) {
                // handle error
                console.log(error);
            })
    }, [url, id]);
    console.log(details)


    const clickHandlerForward = (j) => {
        setId(id+1);
    }

    const clickHandlerBackward = (j) => {
        setId(id-1);
    }

    return (
        <>
            <div className="pokedex">
                <div className="left-container">
                    <div className="left-container__top-section">
                        <div className="top-section__blue"></div>
                        <div className="top-section__small-buttons">
                            <div className="top-section__red"></div>
                            <div className="top-section__yellow"></div>
                            <div className="top-section__green"></div>
                        </div>
                    </div>
                    <div className="left-container__main-section-container">
                        <div className="left-container__main-section">
                            <div className="main-section__white">
                                <div className="main-section__black">
                                    <div className="card-text">
                                       <center><img src={img} class="img-fluid" alt="Responsive" width = "250px" height = "230px" /></center>
                                    </div>
                                    <div className="main-screen hide">
                                        <div className="screen__header">
                                            <span className="poke-name" >{name}</span>
                                            <span className="poke-id"></span>
                                        </div>
                                        <div className="screen__image">
                                            <img src="" className="poke-front-image" alt="front"></img>
                                            <img src="" className="poke-back-image" alt="back"></img>
                                        </div>
                                        <div class="screen__description">
                                            <div className="stats__types">
                                                <span className="poke-type-one"></span>
                                                <span className="poke-type-two"></span>
                                            </div>
                                            <div className="screen__stats">
                                                <p className="stats__weight">
                                                    weight: <span className="poke-weight"></span>
                                                </p>
                                                <p className="stats__height">
                                                    height: <span className="poke-height"></span>
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="left-container__controllers">
                                <div className="controllers__d-pad">
                                    <div className="d-pad__cell top"></div>
                                    <button className="d-pad__cell left " onClick={clickHandlerBackward}></button>
                                    <div className="d-pad__cell middle"></div>
                                    <button className="d-pad__cell right" onClick={clickHandlerForward}></button>
                                    <div className="d-pad__cell bottom"></div>
                                </div>
                                <div className="controllers__buttons">
                                    <button id="bButton" name="bButton" className="buttons__button">B</button>
                                    <button id="aButton" name="aButton" className="buttons__button">A</button>
                                </div>
                            </div>
                        </div>
                        <div className="left-container__right">
                            <div className="left-container__hinge"></div>
                            <div className="left-container__hinge"></div>
                        </div>
                    </div>
                </div>
                <div className="right-container">
                    <div className="right-container__black">
                        <div className="right-container__screen">
                        {details.map((detail, index) => index <= 7 && <div className="list-move" >{detail.move.name}</div>)};
                        </div>
                    </div>
                    <input type="text" className="findPoke" id="findPoke" name="f"></input>
                    <div className="right-container__buttons">
                        <div className="left-button">Prev</div>
                        <div className="right-button">Next</div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Leftcontainer;
