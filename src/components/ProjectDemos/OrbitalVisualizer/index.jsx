import React from 'react';
import Footer from '../../Footer';
import { Link } from 'react-router-dom';
import Spotify from '../../Spotify';
import '../../../styles/main.css'
import orbital from '../../../videos/orbital.gif'
import '../index.css'
import { CodeBlock, dracula } from "react-code-blocks";

class OrbitalVisualizer extends React.Component {
    code = `async function getData() {
        let satelliteArr = [];
        const res = await fetch('https://us-central1-stars-5145f.cloudfunctions.net/app/catalog2');
        let orbitalsArr = await res.json();
    
        let length = orbitalsArr.length;
    
        for (let i = 0; i < length - 1; i += 3) {
            const satrec = satellite.twoline2satrec(
                orbitalsArr[i].TLE_LINE1,
                orbitalsArr[i].TLE_LINE2
            );
            satelliteArr.push(satrec)
        }
        return {
            satArr: satelliteArr,
            orbArr: orbitalsArr
        };
    }`

    render() {
        return (
            <>
                <div className="back">
                    <Link to="/about"> <code> &lt; back to about </code> </Link>
                    <Spotify {...{side: 'right', hide: 'true'}}></Spotify>
                </div>
                <div className="description">
                    <div className="aurora">
                        <h1> Orbital Visualizer </h1>
                    </div>
                    <img src={orbital} alt="" />
                    <a href="https://orbitalvisualizer.earth" style={{color: "rgb(120 108 255)", fontSize: '1.3rem'}}  target="_blank" rel="noreferrer">Live Demo</a>
                    <h2>What is Orbital Visualizer?</h2>
                    <p> Along with some friends of mine, Orbital Visualizer was built for the NASA Space Apps Hackathon. 
                        We created an open-source debris and satellite tracking system with projected orbitals 
                        and object coordinates as well as a location and debris filtering function. All this 
                        is done in 3D with an interactive user experience. Our solution provides a method to 
                        find space debris above a certain location, which is beneficial for predicting an optimal 
                        time to launch spacecrafts.
                    </p>
                    <h2> How did we make it? </h2>
                    <p>
                        We used HTML, CSS, and JS. After finding an open-source data that provided us with
                        satellite data, I uploaded that to a database and created a server that returned the satellite 
                        data. Thankfully, the Cesium library viewer took care of the hard work of rendering the Earth
                        as well as the satellite data.
                    </p>
                    <CodeBlock 
                        text={this.code}
                        language={'javascript'}
                        theme={dracula}
                    />
                    <h4>Function to get and parse TLE satellite data</h4>
                    <h2> What challenges did we face? </h2>
                    <p> 
                        I mainly worked on figuring out how to parse data quickly. We had to load over 20,000
                        sattelite objects and render them in a canvas, and we were scared that that would take long.
                        Surprisingly, I found that removing all debugging statements such as logging drastically improved
                        loading times for the page (about 30 seconds -&gt; 10 seconds!).
                    </p>
                </div>
                <Footer />
            </>
        )
    }
}

export default OrbitalVisualizer;