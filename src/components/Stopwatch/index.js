// Write your code here
import './index.css'
import {Component} from 'react'

class Stopwatch extends Component {
  state = {timeInSec: 0}

  componentWillUnmount() {
    clearInterval(this.timerId)
  }

  tick = () => {
    this.setState(prevState => ({
      timeInSec: prevState.timeInSec + 1,
    }))
  }

  onClickStartBtn = () => {
    this.timerId = setInterval(this.tick, 1000)
  }

  onClickStopBtn = () => {
    clearInterval(this.timerId)
  }

  onClickResetBtn = () => {
    this.setState({
      timeInSec: 0,
    })
    clearInterval(this.timerId)
  }

  renderSeconds = () => {
    const {timeInSec} = this.state
    const seconds = Math.floor(timeInSec % 60)
    return seconds > 9 ? seconds : `0${seconds}`
  }

  renderMinutes = () => {
    const {timeInSec} = this.state
    const minutes = Math.floor(timeInSec / 60)
    return minutes > 9 ? minutes : `0${minutes}`
  }

  render() {
    const displayTimer = `${this.renderMinutes()}:${this.renderSeconds()}`
    return (
      <div className="app-container">
        <h1 className="heading">Stopwatch</h1>
        <div className="clock-card-container">
          <div className="time-img-container">
            <img
              src="https://assets.ccbp.in/frontend/react-js/stopwatch-timer.png"
              alt="stopwatch"
              className="image"
            />
            <p className="timer-para">Timer</p>
          </div>
          <div>
            <h1 className="timer">{displayTimer}</h1>
          </div>
          <div>
            <button
              type="button"
              className="button green-btn"
              onClick={this.onClickStartBtn}
            >
              Start
            </button>
            <button
              type="button"
              className="button red-btn"
              onClick={this.onClickStopBtn}
            >
              Stop
            </button>
            <button
              type="button"
              className="button yellow-btn"
              onClick={this.onClickResetBtn}
            >
              Reset
            </button>
          </div>
        </div>
      </div>
    )
  }
}
export default Stopwatch
