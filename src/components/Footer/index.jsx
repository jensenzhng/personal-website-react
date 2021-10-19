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
                {
                    (this.state.playedGame === null)
                    ? <a id="secret" href="/game"> hmmm, i wonder what this is... </a>
                    : <a id="secret" href="/secret"> what, a secret link? </a>
                }
            </footer>
        )
    }

}
 
export default Footer;