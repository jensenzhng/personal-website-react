import React from 'react';
import './index.css'
import { Helmet } from 'react-helmet';

function returnHome () {
    window.location.href = '/';
}



let Game = () => {
    return (
        <><Helmet>
            <script src="./snake.js"></script>
        </Helmet>
            <div className="bigDiv">
                <h1 className="startButton" id="startButton">hey! let's play a quick game.</h1>
                <button id="startGame">start game</button>
                <button id="homeButton" onClick={returnHome}>return home</button>

                <div className="gameBoardContainer peekaboo" id="gameBoardContainer">
                    <h1 id="gameScore" >0/8</h1>

                    <canvas width="400" height="400" id="game" className="gameCanvas"></canvas>

                </div>
            </div></>)
}

export default Game;
 
