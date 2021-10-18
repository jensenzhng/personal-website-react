import './styles/main.css';
// import Projects from './components/Projects/'
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Main from './components/Main'

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/">
            <Main></Main>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
