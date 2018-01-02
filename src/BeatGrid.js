import React, { Component } from 'react'
import BeatRow from './BeatRow.js';

class BeatGrid extends Component {
  constructor(props) {
    super()

    this.initialState = { currentBeat: 1, beatOfRow: 1, playing: false }
    this.state = this.initialState

    this.divisionMs = 60000 / props.bpm / 4

    this.rows = [
      { id: 1 },
      { id: 2 },
      { id: 3 },
      { id: 4 },
      { id: 5 },
      { id: 6 }
    ]

    this.play = this.play.bind(this)
    this.stop = this.stop.bind(this)
    this.reset = this.reset.bind(this)
  }

  reset() {
    this.stop()
    this.setState(this.initialState)
  }

  play() {
    this.setState({ ...this.state, playing: true})
    this.interval = setInterval(() => { this.tick() }, this.divisionMs);
  }

  stop() {
    this.setState({ ...this.state, playing: true})
    clearInterval(this.interval)
  }

  tick() {
    let currentBeat = this.state.currentBeat + 1
    let beatOfRow = currentBeat % 16
    if (beatOfRow === 0) { beatOfRow = 16 }

    this.setState({ ...this.state,
                    currentBeat: currentBeat,
                    beatOfRow: beatOfRow })
  }

  render() {
    return (
      <div className="BeatGrid">
        <h1>BeatGrid</h1>

        {
          this.rows.map(row => {
            return (
              <BeatRow key={row.id}
                       currentBeat={this.state.beatOfRow} />
            )
          })
        }

        <div className="TransportControls">
          <button onClick={this.play}>Play</button>
          <button onClick={this.stop}>Stop</button>
          <button onClick={this.reset}>Reset</button>
        </div>
      </div>
    )
  }
}

export default BeatGrid
