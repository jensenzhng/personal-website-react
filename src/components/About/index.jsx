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
                    <div className="aurora">
                        <h1> Jensen Zhang </h1>
                    </div>
                    <h3> Hey! I'm Jensen, a 16-year-old "fullstack" developer <strike>even though I mostly do backend.</strike> I am extremely passionate about building cool software that can impact others 😃<br /><br /> I started learning how to program a little over a year ago. I had always been interested in software engineering since I was young, but it always looked too hard to me, so I never tried it. Soon after, I quickly picked up <code>Java</code> and many more languages and technologies. Programming combines my passion for helping others and problem solving together, and that's why I love it so much. <br /><br /> Outside of programming, I love to listen to music (hence the spotify status at the home page), fiddle with Rubik's cubes, and enjoy boba with friends. Feel free to reach out to me to talk about anything related to technology on my social media above - I'm always down to chat. </h3>
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