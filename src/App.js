import logo from './zhouyiYu.jpeg';
import './App.css';
import Project from './Project.js';
import Introduction from './Introduction.js';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} />
        <p>
         <Introduction />
         <Project /> {/*Display projects*/}
        </p>
        <a
          className="know-Me-More"
          href="https://zhouyi-yu.github.io/#"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn ME!
        </a>
      </header>
    </div>
  );
}

export default App;
