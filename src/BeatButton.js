import React, { Component } from 'react'

class BeatButton extends Component {
  constructor() {
    super()
    this.state = { enabled: 'OFF' }
    this.handleClick = this.handleClick.bind(this)
    this.handleDoubleClick = this.handleDoubleClick.bind(this)
  }

  handleClick() {
    if (this.state.enabled === 'OFF') {
      this.setState({ enabled: 'ON' })
    } else if(this.state.enabled === 'ON') {
      this.setState({ enabled: 'OFF' })
    }  else if(this.state.enabled === 'HARD') {
      this.setState({ enabled: 'OFF' })
    }
  }

  handleDoubleClick() {
    if (this.state.enabled === 'OFF') {
      this.setState({ enabled: 'HARD' })
    } else if(this.state.enabled === 'ON') {
      this.setState({ enabled: 'HARD' })
    } else if(this.state.enabled === 'HARD') {
      this.setState({ enabled: 'OFF' })
    }
  }

  render() {
    return (
      <div className="BeatButton"
           data-button-state={this.state.enabled}
           data-button-active={this.props.activeBeat}
           onClick={this.handleClick}
           onDoubleClick={this.handleDoubleClick}
      />
    )
  }
}

export default BeatButton;
