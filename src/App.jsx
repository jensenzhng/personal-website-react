import './styles/main.css';
// import Projects from './components/Projects/'
import ParticlesBackground from './components/ParticlesBackground/';
import FrostedPanel from './components/FrostedPanel/';

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
