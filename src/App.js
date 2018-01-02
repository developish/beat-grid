import React, { Component } from 'react';
import './App.css';

import BeatGrid from './BeatGrid.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <BeatGrid bpm={80} />
      </div>
    );
  }
}

export default App;
