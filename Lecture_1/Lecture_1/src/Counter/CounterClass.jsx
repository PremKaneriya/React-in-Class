// eslint-disable-next-line no-unused-vars
import React, { Component } from 'react'

export default class CounterClass extends Component {
    constructor (props) {
        super(props)

        this.state = {
            count: 0
        }
    }

    addCount = () => {
        this.setState({
            count: this.state.count + 1
        })
    }

    removeCount = () => {
        this.setState({
            count: this.state.count - 1
        })
    }
    render() {  
    return (
      <>
        <nav>
          <h1 className="text-3xl py-5 bg-slate-950 font-bold font-mono text-white text-center">Counter : {this.state.count}</h1>
        </nav>
        <div className="container">
          <button onClick={this.addCount} disabled={this.state.count === 5} className="bg-slate-950 py-2 px-4 ml-4 mb-5 mt-8 rounded-lg text-white">Add Value</button>
          <button onClick={this.removeCount} disabled={this.state.count === 0} className="bg-slate-950 py-2 px-4 ml-4 mb-5 mt-8 rounded-lg text-white">Remove Value</button>
        </div>
      </>
    )
  }
}
