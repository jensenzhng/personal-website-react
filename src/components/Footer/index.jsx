import React from 'react';
import './index.css'

class Footer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            playedGame: window.localStorage.getItem('playedGame')
        }
    }


    render() {
        return (
            <footer>
                <div className="bar"></div>
                <div className="footer-container">
                    <div className="ns">
                        <h1>Jensen Zhang</h1>
                    </div>
                    <h4> Made with ❤️ • {new Date().getFullYear()} </h4>
                    {
                        (this.state.playedGame === null)
                        ? <a id="secret" href="/game"> what is this? </a>
                        : <a id="secret" href="/secret"> a secret link? </a>
                    }
                </div>
            </footer>
        )
    }

}
 
export default Footer;