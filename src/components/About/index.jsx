import React from 'react';
import './index.css'
import Projects from '../Projects';

class About extends React.Component {
    render() {
        return (
            <div className="about">
                <h1>Who am I?</h1>
                <h3> Hey! As I mentioned above, I'm Jensen. I like to call myself a "fullstack" developer <strike>even though I mostly do backend.</strike> I am extremely passionate about building cool software that can impact others 😃<br/><br/> I started learning how to program a little over a year ago. I had always been interested in software engineering since I was young, but it always looked too hard to me, so I never tried it. Soon after, I quickly picked up <code>Java</code> and many more languages and technologies. Programming combines my passion for helping others and problem solving together, and that's why I love it so much. <br/><br/> Outside of programming, I love to listen to music (hence the spotify status at the top of this page), fiddle with Rubik's cubes, and enjoy boba with friends. Feel free to reach out to me to talk about anything related to technology on my social media above - I'm always down to chat. </h3>
                <h1>Technology Stack</h1>
                <h3>I started off learning <code>Java</code>, but right now, I am most comfortable with <code>JavaScript</code> or <code>NodeJS</code>. I know the following languages: <code>HTML</code>, <code>CSS</code>, <code>JS/NodeJS</code>, <code>Java</code>, <code>Python</code>, and a little bit of <code>Golang</code>. Right now, I am trying to strengthen my frontend skills by learning frameworks such as <code>React.js</code> (update - I ported this whole website to React!), <code>Next.js</code>, and <code>Vue.js</code>. I am also extremely interested in machine learning and artificial intelligence.</h3>
                <h1>What have I made?</h1>
                <h3 className="npb" >Check out some of my projects below ↓</h3>
                <Projects/>
            </div>
        )
    }
}

export default About;