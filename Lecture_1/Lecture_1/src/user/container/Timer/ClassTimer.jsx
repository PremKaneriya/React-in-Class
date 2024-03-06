import React, { Component } from "react";

export default class ClassTimer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      time: new Date(),
    };
  }

  tick = () => {
    this.setState({
      time: new Date(),
    });
    console.log("Tick");
  };

  componentDidMount() {
    const timerRef = setInterval(this.tick, 1000);
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.time !== this.state.time) {
      console.log("Component Update");
    }
  }

  componentWillUnmount() {
    clearInterval(this.timerRef);
    console.log("Component Will Unmount");
  }

  render() {
    return (
      <>
        <div className="bg-gray-950 px-10 py-10  w-full h-screen">
          <div className="bg-slate-200 w-96 rounded-2xl  drop-shadow-2xl  p-5 ">
            <h1 className="text-3xl  px-9 py-7 font-bold ">Digital Clock</h1>
            <div
              className="flex flex-col items"
            >
              <h1 className="text-3xl px-9 py-2 ">
                Time : {this.state.time.toLocaleTimeString()}
              </h1>
              <h1 className="text-3xl px-9 py-3 ">
                Date : {this.state.time.toLocaleDateString()}
              </h1>
            </div>
          </div>
        </div>
      </>
    );
  }
}
