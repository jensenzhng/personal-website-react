
import React, { useState } from 'react';
import './index.css'

class Secret extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            playedGame: window.localStorage.getItem('playedGame')
        }
    }

    handlePageLoad = () => {
        window.location.href = '/game';
    }

    returnHome = () => {
        window.location.href = '/';
    }

    render() {
        if (this.state.playedGame === null) {
            this.handlePageLoad();
            return;
        }
        
        return (
            <div className="secret">
                <h1>hey... you found my not-so-secret secret page...</h1>
                <h3> thanks for taking the effort to read through my page and play snake with me. <br/><br/> this section's a work in progress. i'll figure out what to put here later. contact me if you have any suggestions :) <br/><br/> for now, here is a picture of me in my pj's 😀</h3>
                <img src="../images/ilookdumb.jpeg" alt=""></img>
                <button id="home" onClick={this.returnHome}>return home</button>
            </div>
        );
    }

}
 
export default Secret;