import React, { useState } from 'react';
import { useHistory } from 'react-router-dom'

function Secret() {
    let history = useHistory();
    const [playedGame, setPlayedGame] = useState(window.localStorage.getItem('playedGame'))

    const handlePageLoad = () => {
        history.push('/game');
    }

    if (playedGame === null) {
        handlePageLoad();
    }

    return (
        <div className="secret">
            <h1>hey... you found my not-so-secret secret page...</h1>
            <h3> thanks for taking the effort to read through my page and play snake with me. <br/><br/> this section's a work in progress. i'll figure out what to put here later. contact me if you have any suggestions :) <br/><br/> for now, here is a picture of me in my pj's 😀</h3>
            <img src="images/ilookdumb.jpeg" alt=""></img>
            <button id="home" onclick="window.location.href = '/';">return home</button>
        </div>
    );

}
 
export default Secret;