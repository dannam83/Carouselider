import React from 'react';

import SearchBar from './components/SearchBar';
import ToggleDisplay from './components/ToggleDisplay';
import Display from './components/Display';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src="images/section4Logo.svg" className="App-logo" alt="logo" />
        <SearchBar />
      </header>
      <div className="App-body">
        <ToggleDisplay />
        <Display />
      </div>
    </div>
  );
}

export default App;
