import './styles/main.css';
import Projects from './components/Projects.jsx'
import ParticlesBackground from './components/ParticlesBackground.jsx';
import FrostedPanel from './components/FrostedPanel.jsx';

function App() {
  return (
    <div className="App">
      <FrostedPanel/>
      <ParticlesBackground />
      {/* <div className="content">
        <Projects></Projects>
      </div> */}
    </div>
  );
}

export default App;
