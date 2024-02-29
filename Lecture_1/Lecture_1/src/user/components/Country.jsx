// eslint-disable-next-line no-unused-vars
import React, { Component } from 'react'

// state : it is an object that store data/information of particular components.

export default class Country extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "India",
            timezone: "GMT+5:30"
        }
    }
    
    changeCountry = () => {
        this.setState({name:"USA",timezone:"GMT+5:00"})
    }

    render() {
    return (
      <>
        <h1 className="text-3xl px-5 py-5 text-green-500">My Country is: {this.state.name}</h1>
        <h2 className="text-3xl px-5 py-5 text-green-500">Timezone : {this.state.timezone}</h2>
        <button onClick={this.changeCountry} className="bg-slate-500 py-1 px-1 ml-4 mb-5 rounded-lg text-white">Change Info</button>
      </>
    )
  }
}
