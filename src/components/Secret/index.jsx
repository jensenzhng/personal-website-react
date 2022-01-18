
import React from 'react';
import './index.css'
import ilookdumb from '../../images/ilookdumb.jpeg'
import Footer from '../Footer/'
import { Link } from 'react-router-dom';
import { withRouter } from "react-router-dom";
import Spotify from '../Spotify';

class Secret extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            playedGame: window.localStorage.getItem('playedGame')
        }
        this.goBack = this.goBack.bind(this);
    }

    handlePageLoad = () => {
        window.location.href = '/game';
    }

    goBack(){
        this.props.history.goBack();
    }

    render() {
        if (this.state.playedGame === null) {
            this.handlePageLoad();
            return;
        }
        
        return (
            <>
                <div className="back">
                    { /* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                    <Link to="/about"> <code> &lt; back to about</code> </Link>
                    <Spotify {...{side: 'right', hide: 'true'}}></Spotify>
                </div>
                <div className="secret">
                    <h1>hey... you found my not-so-secret secret page...</h1>
                    <h3> thanks for taking the effort to read through my page and play snake with me. <br/><br/> this section's a work in progress. i'll figure out what to put here later. contact me if you have any suggestions :) <br/><br/> for now, here is a picture of me in my pj's 😀</h3>
                    <img src={ilookdumb} alt=""></img>
                </div>
                <Footer></Footer>
            </>
        );
    }

}
 
export default withRouter(Secret);