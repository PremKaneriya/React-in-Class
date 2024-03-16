import React, { Component } from "react";

class ComponentLifeCycle extends Component {

    constructor(props) {
        super(props);

        this.state = {
            count : 0
        }
        console.log("Constructor Called");
    }

    componentDidMount(){
        console.log("Component Mount(Created)");
    }

    componentDidUpdate(prevProps, prevState){
        console.log("Component Update");
    }

    componentWillUnmount(){
        console.log("Component Will Unmount");
    }

    increment = () => {
        this.setState({count : this.state.count + 1})
    }


  render() {
    console.log("Render Called");
    return (
      <>
        <h1 className="text-3xl px-5 py-5 text-slate-300 bg-slate-900">
          Component Life Cycle
        </h1>

        <h1 className="text-3xl px-5 py-5 w-1/3 text-white bg-slate-900">
          Count : {this.state.count}
        </h1>
        <button onClick={this.increment} className="bg-slate-500 py-3 px-4 text-2xl text-white">Increment</button>
      </>
    );
  }
}

export default ComponentLifeCycle;
