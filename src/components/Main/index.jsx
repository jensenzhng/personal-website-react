import React from 'react';
import ParticlesBackground from '../ParticlesBackground/';
import FrostedPanel from '../FrostedPanel/';
import About from '../About/';
import Footer from '../Footer/';

class Main extends React.Component {
    render() {
        return (
            <div className="aJK9fhel">
                <FrostedPanel/>
                <ParticlesBackground />
                <About />
                <Footer />
            </div>
        )
    }
}

export default Main;