import React from 'react';

import SearchBar from './components/SearchBar';
import ToggleDisplay from './components/ToggleDisplay';
import Display from './components/Display';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src="images/carouseliderLogo.png" className="App-logo" alt="logo" />
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
