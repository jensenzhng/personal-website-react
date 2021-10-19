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
        <div>Secret</div>
    );

}
 
export default Secret;