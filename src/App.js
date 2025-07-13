import logo from './logo.svg';
import './App.css';
import { Link } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <Modal/> */}
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <Link
          className="App-link"
          to="/Jsx"
          rel="noopener noreferrer"
        >
          Learn React Jsx
        </Link>
      </header>
    </div>
  );
}

export default App;
