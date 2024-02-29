/* eslint-disable no-unused-vars */
import React from "react";
import { useState } from "react";

function CityFunc() {
  const [change, setchange] = useState({ city: "Bengaluru" , timezone : "GMT+5:30" });

  const changeCity = () => {
    setchange({ city: "Los Angles" , timezone : "GMT-3:30" })
  }

  return (
    <>
      <h1 className="text-3xl px-5 py-5 text-slate-900">
        city : {change.city}
      </h1>
      <h2 className="text-3xl px-5 py-5 text-slate-900">
        timezone : {change.timezone}
      </h2>
      <button onClick={changeCity} className="bg-slate-500 py-1 px-1 ml-4 mb-5 rounded-lg text-white">Change Info</button>
    </>
  );
}

export default CityFunc;
