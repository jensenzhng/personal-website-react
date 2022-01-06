import React from 'react';
import './index.css'
import { Link } from 'react-router-dom';

class Footer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            playedGame: window.localStorage.getItem('playedGame')
        }
    }

    componentDidMount() {
        window.scrollTo(0, 0)
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
                        : <Link to="/secret"> a secret link? </Link>
                    }
                </div>
            </footer>
        )
    }

}
 
export default Footer;