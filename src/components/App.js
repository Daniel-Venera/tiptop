import React from 'react'

import Footer from './Footer'
import Navbar from './Navbar'

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      amount: null,
      tip: null
    }
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(event) {
    const { name, value } = event.target
    this.setState({
      [name]: value
    })
    console.log(this.state.amount)
  }

  render() {
    let tipAmount = (this.state.amount * (this.state.tip / 100))
    let total = (parseInt(this.state.amount) + tipAmount).toFixed(2)
    return (
      <div id='main-container'>
        <Navbar />
        <div id='container'>
          <div>
            <div>
              <label>Amount</label>
              <br></br>
              <input name='amount' type='number' value={this.state.amount} onChange={this.handleChange}></input>
            </div>
            <div>
              <label>Tip</label>
              <br></br>
              <input name='tip' type='number' placeholder='ex: 10%' value={this.state.tip} onChange={this.handleChange}></input>
            </div>
          </div>
          <div id='results'>
            <div>Tip : <br></br><br></br><span>{this.state.amount ? tipAmount.toFixed(2) : null} </span></div>
            <div id='total-result'>Total : <br></br><br></br><span id='total'>{this.state.amount ? total : null}</span> </div>
          </div>
        </div>
        <Footer />
      </div>
    )
  }
}

export default App