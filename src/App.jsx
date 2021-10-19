import './styles/main.css';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Main from './components/Main'
import Secret from './components/Secret'

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/" component={Main} />
          <Route path="/secret" component={Secret} />
          <Route component={Main} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
