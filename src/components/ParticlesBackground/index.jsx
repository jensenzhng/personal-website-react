import React from 'react';
import Particles from 'react-particles-js'
import particlesConfig from '../../assets/particles.js'
import './index.css'

class ParticlesBackground extends React.Component {
    render() {
        return(
                <Particles className="particles-js"  params={particlesConfig} />
        )
    }
}

export default ParticlesBackground;