import React from 'react';
import ParticlesBackground from '../ParticlesBackground/';
import FrostedPanel from '../FrostedPanel/';
import About from '../About/';
import Footer from '../Footer/';
import Notification from '../Notification/';

class Main extends React.Component {

    render() {
        return (
            <div className="aJK9fhel">
                <FrostedPanel />
                <Notification />
                <ParticlesBackground />
                <About />
                <Footer />
            </div>
        )
    }
}

export default Main;