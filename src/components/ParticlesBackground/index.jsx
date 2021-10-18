import React from 'react';
import Particles from 'react-particles-js'
import particlesConfig from '../../assets/particles.js'
import './index.css'

class ParticlesBackground extends React.Component {
    render() {
        return(
            // <div id="particles-js">
                <Particles className="particles-js"  params={particlesConfig} />
            // </div>
        )
    }
}

export default ParticlesBackground;