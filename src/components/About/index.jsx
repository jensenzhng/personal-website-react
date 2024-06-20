import React from 'react';
import './index.css'
import Projects from '../Projects';
import Tech from '../Tech';
import Spotify from '../Spotify';
import { Link } from 'react-router-dom';

class About extends React.Component {
    render() {
        return (
            <>
                <div className="back">
                    <div className="homepage">
                        <Link to="/"> <code> &lt; back to homepage</code> </Link>
                    </div>
                    <div className="spotify">
                        <Spotify {...{ side: 'right', hide: 'true' }}></Spotify>
                    </div>
                </div>
                <div className="about">
                    <div className="intro-title">
                        <h1>Hey, I'm Jensen 👋</h1>
                    </div>
                    <h3>I'm a ~{((Date.now() - (new Date('1 September 2005 00:07:00 EST')).getTime()) / (1*1000*60*60*24*365)).toPrecision(8)} year old fullstack developer. I am extremely passionate about building cool software that can impact others 😃<br /><br /> Programming combines my passion for helping others and problem solving together, and that's why I love it so much. Outside of programming, I love to listen to music (hence the spotify status at the home page), fiddle with Rubik's cubes, and enjoy boba with friends. Feel free to reach out to me to talk about anything related to technology on my social media above - I'm always down to chat. </h3>
                    <h2>Technology Stack </h2>
                    <div className="technologies">
                        <Tech></Tech>
                    </div>
                    <h2>What have I made?</h2>
                    <h3 className="p3" > Enjoy the highlights of some of the projects I have made 😊</h3>
                    <Projects />
                </div>
            </>
        )
    }
}

export default About;