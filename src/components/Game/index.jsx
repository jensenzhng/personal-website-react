import React from 'react';
import './index.css'

class Game extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            playedGame: window.localStorage.getItem('playedGame')
        }
    }

    returnHome = () => {
        window.location.href = '/';
    }

    // componentDidMount = () => {
        
    // }

    

    render() { 
        return <div className="bigDiv">
            <h1 class="startButton" id="startButton">hey! let's play a game.<br/>click me and see if you can score 8.</h1>
            <button id="home" onClick={this.returnHome}>return home</button>

            <div class="gameBoardContainer peekaboo" id="gameBoardContainer">

                <h1 id="gameScore">0</h1>

                <canvas width="400" height="400" id="game" class="gameCanvas"></canvas>

            </div>
        </div>;
    }
}
 
export default Game;