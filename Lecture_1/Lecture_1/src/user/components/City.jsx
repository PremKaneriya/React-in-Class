// eslint-disable-next-line no-unused-vars
import React, { Component } from 'react'

export default class City extends Component {
    constructor(props) {
        super(props);
        this.state = {
            city: 'Moscow',
            country: 'Russia'
        };
    }

    changeCity = () => {
        this.setState({ city: 'Berlin', country: 'Germany' })
    }

  render() {
    return (
      <>
        <h1 className="text-3xl px-5  text-green-500">My City is: {this.state.city}</h1>
        <h2 className="text-3xl px-5 py-5 text-green-500">Country : {this.state.country}</h2>
        <button onClick={this.changeCity} className="bg-slate-500 py-1 px-1 ml-4 mb-5 rounded-lg text-white">Change Info</button>
      </>
    )
  }
}
