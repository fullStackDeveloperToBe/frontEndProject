import React, { Component } from 'react'

export default class Message extends Component {
    constructor(){
        super()
        this.state = {
            message : 'How are you'
        }
    }
    changeMessage()
    {
        this.setState({
            message : 'I am fineeeeeeeeeee'
        })
    }
  render() {
    return (
      <div>
          <h1>{this.state.message}</h1>
          <button onClick={() => this.changeMessage()}>Click on me</button>
      </div>
    )
  }
}
