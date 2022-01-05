import './styles/main.css';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Main from './components/Main'
import Secret from './components/Secret'
import Game from './components/Game';
import AboutPage from './components/AboutPage'

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/game" component={Game} />
          <Route path="/secret" component={Secret} />
          <Route path="/about" component={AboutPage} />
          <Route path="/" component={Main} />
          <Route component={Main} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
