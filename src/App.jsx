import './styles/main.css';
import Projects from './components/Projects.jsx'
import ParticlesBackground from './components/ParticlesBackground.jsx';

function App() {
  return (
    <div className="App">
      <ParticlesBackground />
      <div className="content">
        <Projects></Projects>
      </div>
    </div>
  );
}

export default App;
