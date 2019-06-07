import React from 'react';

import GeolocationContainer from './components/compose-all-the-things/container-presentation-pattern/geolocation-container';
import WindowWithInnerWidth from './components/compose-all-the-things/hocs/windowInnerWidth';
import Counter from './components/proper-data-fetching/data-flow/Counter';
import ListWithGists from './components/proper-data-fetching/react-refetch/ListWithGists';
import Uncontrolled from './components/code-for-browser/Uncontrolled';
import Transition from './components/code-for-browser/animations/Transition';
import ReactMotionTransition from './components/code-for-browser/animations/ReactMotionTransition';

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
        <h1>Write code for browser</h1>
        <section>
          <ReactMotionTransition />
        </section>
        <section>
          <Transition />
        </section>
        <section>
          <Uncontrolled />
        </section>
      </article>
      <article>
        <h1>Proper Data Fetching</h1>
        <section>
          <Counter />
        </section>
        <section>
          <ListWithGists username="gaearon" />
        </section>
      </article>
    </div>
  );
}

export default App;
