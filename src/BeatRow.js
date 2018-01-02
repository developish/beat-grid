import React, { Component } from 'react'
import BeatButton from './BeatButton.js';
import _ from 'lodash'

class BeatRow extends Component {
  constructor(props) {
    super()

    this.beats = _.times(props.beatCount, (i) => ({ id: i }))
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
