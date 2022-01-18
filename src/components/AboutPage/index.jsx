import React from 'react';
import About from '../About/';
import Footer from '../Footer/';
import '../../styles/main.css'
import BallCursor from '../BallCursor';

class AboutPage extends React.Component {
    render() {
        return (
            <><div className="about-page">
                <About />
                <Footer />
            </div></>
        )
    }
}

export default AboutPage;