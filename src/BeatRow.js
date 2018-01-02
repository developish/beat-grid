import React, { Component } from 'react'
import BeatButton from './BeatButton.js';

class BeatRow extends Component {
  constructor(props) {
    super()

    this.beats = [
      { id: 1 },
      { id: 2 },
      { id: 3 },
      { id: 4 },
      { id: 5 },
      { id: 6 },
      { id: 7 },
      { id: 8 },
      { id: 9 },
      { id: 10 },
      { id: 11 },
      { id: 12 },
      { id: 13 },
      { id: 14 },
      { id: 15 },
      { id: 16 }
    ]
  }

  render() {
    let currentBeat = this.props.currentBeat

    return (
      <div className="BeatRow">
        {
          this.beats.map((beat, index) => {
            index = index + 1
            index === currentBeat ? beat.active = true : beat.active = false

            return (
              <BeatButton key={index}
                          activeBeat={beat.active} />
            )
          })
        }
      </div>
    )
  }
}

export default BeatRow
