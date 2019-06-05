import React from 'react';

import GeolocationContainer from './components/compose-all-the-things/container-presentation-pattern/geolocation-container';
import WindowWithInnerWidth from './components/compose-all-the-things/hocs/windowInnerWidth';
import Counter from './components/proper-data-fetching/data-flow/Counter';

import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit
          <code>
            src/App.js
          </code>
          and save to reload.
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
      <section>
        <h3>Geolocation location section</h3>
        <GeolocationContainer />
      </section>
      <section>
        <h3>Window Inner Width location section</h3>
        <WindowWithInnerWidth />
      </section>
      <article>
        <h1>Proper Data Fetching</h1>
        <section>
          <Counter />
        </section>
      </article>
    </div>
  );
}

export default App;
