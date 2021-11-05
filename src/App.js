import "./App.css";
import Dictionary from "./Dictionary.js";

function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">
          <h1>✨✨✨✨✨✨✨✨✨✨✨✨✨✨</h1>
          <Dictionary />
        </header>
        <footer>
          <p>
            Website code by Tumaini and it is an{" "}
            <a
              className="App-link text-success"
              href="https://reactjs.org"
              target="_blank"
              rel="noopener noreferrer"
            >
              open-source
            </a>
          </p>
        </footer>
      </div>
    </div>
  );
}

export default App;
