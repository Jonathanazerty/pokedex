import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer'



export default function Pokedex() {
    return (
        <>
        <center><Header /></center>
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
            <div className ="right-container">
                <div className ="right-container__black">
                    <div className ="right-container__screen">
                        <div class="list-move">move One</div>
                        <div class="list-move">move Two</div>
                        <div class="list-move">move Three</div>
                        <div class="list-move">move Four</div>
                    </div>
                    <div className = "right-container__screen">
                        <div class="list-item"></div>
                        <div class="list-item"></div>
                        <div class="list-item"></div>
                        <div class="list-item"></div>
                        <div class="list-item"></div>
                        <div class="list-item"></div>
                        <div class="list-item"></div>
                        <div class="list-item"></div>
                        <div class="list-item"></div>
                        <div class="list-item"></div>
                        <div class="list-item"></div>
                        <div class="list-item"></div>
                        <div class="list-item"></div>
                        <div class="list-item"></div>
                        <div class="list-item"></div>
                        <div class="list-item"></div>
                        <div class="list-item"></div>
                        <div class="list-item"></div>
                        <div class="list-item"></div>
                        <div class="list-item"></div>
                    </div>
                </div>
                <input type ="text" class = "findPoke" id = "findPoke" name ="f"></input>
                <div className ="right-container__buttons">
                    <div className ="left-button">Prev</div>
                    <div className ="right-button">Next</div>
                </div>
            </div>
        </div>
        <center><Footer /></center>
        </>
    )
}
