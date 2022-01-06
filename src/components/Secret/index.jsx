
import React from 'react';
import './index.css'
import ilookdumb from '../../images/ilookdumb.jpeg'
import Footer from '../Footer/'

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
            <>
                <div className="secret">
                    <h1>hey... you found my not-so-secret secret page...</h1>
                    <h3> thanks for taking the effort to read through my page and play snake with me. <br/><br/> this section's a work in progress. i'll figure out what to put here later. contact me if you have any suggestions :) <br/><br/> for now, here is a picture of me in my pj's 😀</h3>
                    <img src={ilookdumb} alt=""></img>
                    <button id="home" onClick={this.returnHome} style={{display: 'block'}}>return home</button>
                </div>
                <Footer></Footer>
            </>
        );
    }

}
 
export default Secret;