import React from 'react';
import './index.css'
import { Link } from 'react-router-dom';
import Spotify from '../Spotify';
import { SpotifyContext } from '../../contexts/SpotifyContext';
import { FaGithubSquare, FaTwitterSquare } from 'react-icons/fa'

class FrostedPanel extends React.Component {
    static contextType = SpotifyContext;

    constructor(props) {
        super(props);
        this.state = {
            spotifyStatus: 'Getting music history...'
        }
    }

    render() {
        return (
            <><div className="wrapper">
                <div className="intro">
                    <h1>Jensen Zhang</h1>
                    <Spotify {...{ side: 'left', opacity: '0.65', fontSize: '0.77rem' }}></Spotify>
                    {/* <div className="spotify-status" id="spotify-status">
                        <a href="https://open.spotify.com/user/cratigun">
                            <svg className="spotify-svg" style={{ display: "inline-block", verticalAlign: "middle", marginRight: "2px" }} fill="white" strokeWidth="0" role="img" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><title></title><path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z"></path></svg>
                        </a>
                        <h6 style={{ display: "inline-block", paddingLeft: '4px' }}>{this.context.spotifyStatus}</h6>
                    </div> */}
                    <p>👋 Hey! I'm Jensen, a student at the Georgia Institute of Technology.</p>
                    <p> I am most comfortable with <code>NodeJS</code>, but I also can work with <code>Java</code> and <code>Python</code>. Feel free to reach out to me through my email below.</p>
                    <div className="socials">
                        <a href="https://github.com/jensenzhng" className="github-logo" style={{ textDecoration: 'none' }}>
                            <FaGithubSquare size={27} />
                        </a>
                        <a href="https://twitter.com/xdragonlord69" className="twitter-logo" style={{ textDecoration: 'none' }}>
                            <FaTwitterSquare size={27} />
                        </a>

                        <div className="about-link">
                            <Link to="/about"> <code>/about</code> </Link>
                        </div>
                    </div>
                </div>
            </div>
                {/* <Arrow /> */}
            </>
        )
    }
}

export default FrostedPanel;
