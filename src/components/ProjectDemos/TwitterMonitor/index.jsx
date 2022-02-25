import React from 'react';
import Footer from '../../Footer';
import { Link } from 'react-router-dom';
import Spotify from '../../Spotify';
import '../../../styles/main.css'
import monitor from '../../../videos/monitor.mov'
import '../index.css'
import { CodeBlock, dracula } from "react-code-blocks";

class TwitterMonitor extends React.Component {
    code = `getData() {
    this.T.get('users/lookup', { screen_name: this.usersRequesting, tweet_mode: 'extended' }, (err, data, res) => {
        for (let userNum in data) {
            checkUser(data[userNum]);
        }
    });
}
    
checkUser(user) {
    if (user.status != undefined) {
        if (parseInt(user.status.id_str) > parseInt(this.latestTweetID)) {
            //parse user data here
        }
    }
}

setInterval(() => this.getData(), 500);`

    render() {
        return (
            <>
            <div className="back">
                <Link to="/about"> <code> &lt; back to about </code> </Link>
                <Spotify {...{side: 'right', hide: 'true'}}></Spotify>
            </div>
            <div className="description">
                <div className="aurora">
                    <h1> Twitter Monitor </h1>
                </div>
                <video src={monitor} autoPlay loop="loop" muted></video>
                <h2>What is this?</h2>
                <p>In brief summary, this is a Discord Bot that instantly sends a webhook to a specified channel to let 
                    you know when a user posts a Tweet. You can monitor up to a hundred users on Twitter with 
                    nearly no lag.</p>
                <h2>How does it work?</h2>
                <p>
                    Using Twitter API keys, this bot will fetch the latest metadata for all monitored users. 
                    Tweet IDs are snowflakes, meaning that each one can be converted into a timestamp. I noticed
                    that the greater the TweetID, the later the Tweet was posted. The bot will compare the latest TweetID 
                    with one stored in memory, and if it is greater, that means it has detected a new Tweet.
                </p>
                <CodeBlock
                    text={this.code}
                    language={'javascript'}
                    theme={dracula}
                />
                <h4>Twitter endpoint + determining if new Tweet</h4>
                <p>
                    In the code block above, we use the Twitter endpoint "users/lookup" which returns an array of Twitter 
                    User objects. We then loop through each user and check his/her latest Tweet, and if its newer, we 
                    will process the Tweet's data and send it over to Discord as an embed. We'll look for media such as 
                    videos and gifs, and attempt to OCR images.
                </p>
                <p>Currently, the project is hosted on Heroku and connected to a database to remember who should 
                    currently be monitored. I had lots of fun learning about Node and working with APIs with this 
                    project. Check out the full <a href="https://github.com/jensenzhng/twittermonitor" style={{color: 'rgb(120 108 255)'}}>github</a>.
                </p>
            </div>

            <Footer />
            </>
        )
    }
}

export default TwitterMonitor;