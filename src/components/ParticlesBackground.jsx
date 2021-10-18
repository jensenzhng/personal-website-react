import React from 'react';
import Particles from 'react-particles-js'
import particlesConfig from '../assets/particles.js'

class ParticlesBackground extends React.Component {
    render() {
        return(
            <div style={{ position: 'absolute'}}>
                <Particles height="100vh" params={particlesConfig} />
            </div>
        )
    }
}

export default ParticlesBackground;