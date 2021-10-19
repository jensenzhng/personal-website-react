import React, { useState } from 'react';
import './index.css'


function returnHome () {
    window.location.href = '/';
}

let Game = () => {
    const [playedGame, setPlayedGame] = useState(window.localStorage.getItem('playedGame'));

    

    return (<div className="bigDiv">
            <h1 class="startButton" id="startButton">hey! let's play a game.<br/>click me and see if you can score 8.</h1>
            <button id="home" onClick={returnHome}>return home</button>

            <div class="gameBoardContainer peekaboo" id="gameBoardContainer">

                <h1 id="gameScore">0</h1>

                <canvas width="400" height="400" id="game" class="gameCanvas"></canvas>

            </div>
        </div>)
}

export default Game;
 
