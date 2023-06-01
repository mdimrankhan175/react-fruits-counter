// Write your code here

import {Component} from 'react'
import './index.css'

class FruitsCounter extends Component {
  state = {mango: 0, banana: 0}

  onIncMango = () => {
    const {mango} = this.state
    this.setState(prevState => ({mango: prevState.mango + 1}))
  }

  onIncBanana = () => {
    const {banana} = this.state
    this.setState(prevState => ({banana: prevState.banana + 1}))
  }

  render() {
    const {mango, banana} = this.state

    return (
      <div className="container">
        <h1 className="heading">
          Bob ate <span className="count"> {mango} </span> mangoes{' '}
          <span className="count"> {banana} </span>bananas
        </h1>
        <div className="images-card">
          <div className="image-card">
            <img
              className="image"
              src="https://assets.ccbp.in/frontend/react-js/mango-img.png"
              alt="mango"
            />
            <button onClick={this.onIncMango} className="button">
              Eat Mango
            </button>
          </div>
          <div className="image-card">
            <img
              className="image"
              src="https://assets.ccbp.in/frontend/react-js/banana-img.png"
              alt="banana"
            />
            <button onClick={this.onIncBanana} className="button">
              Eat Banana
            </button>
          </div>
        </div>
      </div>
    )
  }
}

export default FruitsCounter
