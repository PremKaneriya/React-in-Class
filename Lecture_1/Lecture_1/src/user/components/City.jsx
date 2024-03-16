// eslint-disable-next-line no-unused-vars
import React, { Component } from 'react'

export default class City extends Component {
    constructor(props) {
        super(props);
        this.state = {
            city: 'Moscow',
            country: 'Russia'
        };
        console.log(props);
    }

    changeCity = () => {
        this.setState({ city: 'Berlin', country: 'Germany' })
    }

  render() {
    return (
  
      // eslint-disable-next-line react/prop-types
      <>
      <h2 className="text-3xl px-5 py-5 text-green-500">Country: {this.props.countryName === 'India' ? 'Delhi' : 'Nevada'}</h2>
        <button onClick={this.changeCity} className="bg-slate-500 py-1 px-1 ml-4 mb-5 rounded-lg text-white">Change Info</button>
      </>
    )
  }
}
