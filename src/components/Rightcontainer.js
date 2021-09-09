import React from 'react'

export default function Rightcontainer() {
    return (
        <div>
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
    )
}
