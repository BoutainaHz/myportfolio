
import './App.css';
import Home from './components/home/Home';
import About from './components/about/About';
import "./assets/css/home/home.scss";
import Skills from './components/skills/Skills';

function App() {
  return (
    <div className="App">
      <Home/>
      <About/>
      <Skills/>
    </div>
  );
}

export default App;
