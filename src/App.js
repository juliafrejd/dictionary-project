import "./App.css";
import Dictionary from "./Dictionary.js";

function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header"></header>
        <main>
          <Dictionary defaultKeyword="sunset" />
        </main>
        <footer className="App-footer">
          Open-sourced code{" "}
          <a
            target="_blank"
            rel="noreferrer"
            href="https://github.com/juliafrejd/dictionary-project"
          >
            GitHub
          </a>{" "}
          by Julia Frejd
        </footer>
      </div>
    </div>
  );
}

export default App;
