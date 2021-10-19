import React, { useState } from 'react';
import './index.css'

function Footer() {
    const playedGame = window.localStorage.getItem('playedGame');
    console.log(playedGame);

    return (
        <footer>
            {
                (playedGame === null)
                ? <a id="secret" href="/secret"> hmmm, i wonder what this is... </a>
                : <a id="secret" href="/secret"> what, a secret link? </a>
            }
        </footer>
    )

}
 
export default Footer;