import React, { useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import { app } from '@microsoft/teams-js';


function App() {
  useEffect(() => {
    app.initialize().then(() => {
      console.log("Teams SDK initialized");

      app.getContext().then((context) => {
        console.log("Teams context:", context);
      });
    });
  }, []);
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
