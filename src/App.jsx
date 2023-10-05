import './styles/main.css';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import Main from './components/Main'
import Secret from './components/Secret'
import Game from './components/Game';
import AboutPage from './components/AboutPage'
import TwitterMonitor from './components/ProjectDemos/TwitterMonitor/index.jsx'
import OrbitalVisualizer from './components/ProjectDemos/OrbitalVisualizer';
import MarkovBot from './components/ProjectDemos/MarkovBot';
import ToysRUS from './components/ProjectDemos/ToysRUS';
import React from 'react'
import { SpotifyContext } from './contexts/SpotifyContext';
import BallCursor from './components/BallCursor';

class App extends React.Component { 
    state = {
      spotifyStatus: 'Getting music history...'
    }

    getSpotifyStatus = async () =>{
      let res = await fetch("https://ws.audioscrobbler.com/2.0/?method=user.getRecentTracks&user=jensenzhng&limit=1&api_key=a2fc7e8497efae9583ecda43732a8d14&format=json", {
        method: 'GET'
      }).catch(err => {
          this.setState({
              spotifyStatus: 'Not playing anything'
          })
      });
      if (res) {
          let statusJSON = await res.json();
      
          if (statusJSON.recenttracks.track[0]['@attr'] && statusJSON.recenttracks.track[0]['@attr'].nowplaying) {
          let status = `Listening to ${statusJSON.recenttracks.track[0].name} - ${statusJSON.recenttracks.track[0].artist['#text']}`;
          this.setState({spotifyStatus: status})
          } else {
              this.setState({
                  spotifyStatus: 'Not playing anything'
              })
          }
      }
    }

    componentDidMount() {
        this.getSpotifyStatus();
        setInterval(this.getSpotifyStatus, 5000);
    }

    render() {
        return (
          <><BallCursor /><Router>
            <SpotifyContext.Provider value={this.state}>
              <Switch>
                <Route exact path="/" component={Main} />
                <Route path="/secret" component={Secret} />
                <Route path="/game" component={Game} />
                <Route path="/about/monitor" component={TwitterMonitor} />
                <Route path="/about/orbital" component={OrbitalVisualizer} />
                <Route path="/about/markov" component={MarkovBot} />
                <Route path="/about/toysrus" component={ToysRUS} />
                <Route path="/about" component={AboutPage} />
                <Redirect to="/" />
              </Switch>
            </SpotifyContext.Provider>
          </Router></>
        )
    }
}


export default App;
