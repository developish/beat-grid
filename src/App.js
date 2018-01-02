import React, { Component } from 'react';
import './App.css';

import BeatGrid from './BeatGrid.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <BeatGrid rows={4} cols={16} bpm={80} />
      </div>
    );
  }
}

export default App;
