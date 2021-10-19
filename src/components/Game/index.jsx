import React, { useState, useEffect } from 'react';
import './index.css'


function returnHome () {
    window.location.href = '/';
}

function hi () {
    console.log('hi')
}

let Game = () => {
    const [playedGame, setPlayedGame] = useState(window.localStorage.getItem('playedGame'));

    useEffect(() => {
        let canvas = document.getElementById('game');
        let context = canvas.getContext('2d');


        // document.getElementById("startButton").onclick = document.getElementById("startButton").innerHTML = 'hi';
    }, [])
    

    return (<div className="bigDiv">
            <h1 className="startButton" id="startButton">hey! let's play a game.<br/>click me and see if you can score 8.</h1>
            <button id="startGame" onClick={hi}>start game</button>
            <button id="home" onClick={returnHome}>return home</button>

            <div className="gameBoardContainer peekaboo" id="gameBoardContainer">

                <h1 id="gameScore">0</h1>

                <canvas width="400" height="400" id="game" className="gameCanvas"></canvas>

            </div>
        </div>)
}

export default Game;
 
