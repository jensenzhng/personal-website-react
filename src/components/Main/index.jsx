import React from 'react';
import ParticlesBackground from '../ParticlesBackground/';
import FrostedPanel from '../FrostedPanel/';
import Notification from '../Notification/';
import BallCursor from '../BallCursor';

class Main extends React.Component {
    render() {
        return (
            <>
                <div className="aJK9fhel">
                    <FrostedPanel />
                    <Notification />
                    <ParticlesBackground />
                </div>
            </>
        )
    }
}

export default Main;