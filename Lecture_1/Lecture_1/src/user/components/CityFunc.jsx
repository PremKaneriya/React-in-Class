/* eslint-disable no-unused-vars */
import React from "react";
import { useState } from "react";

function CityFunc() {
  const [changeCity, setchangeCity] = useState('Bengaluru');
  const [changeTimezone, setchangeTimezone] = useState('GMT+5:30');


  const changeEver = () => {
    setchangeCity('Delhi');
    setchangeTimezone('GMT+5:00'); 
  }

  return (
    <>
      <h1 className="text-3xl px-5 py-5 text-slate-900">
        city : {changeCity}
      </h1>
      <h2 className="text-3xl px-5 py-5 text-slate-900">
        timezone : {changeTimezone}
      </h2>
      <button onClick={changeEver} className="bg-slate-500 py-1 px-1 ml-4 mb-5 rounded-lg text-white">Change Info</button>
    </>
  );
}

export default CityFunc;
