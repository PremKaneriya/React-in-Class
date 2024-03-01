// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";

// eslint-disable-next-line react/prop-types
const CityFuncProps = ({ changeCityProp, changeStateProp }) => {

  // eslint-disable-next-line no-undef
  const [changeCity, setChangeCity] = useState(changeCityProp);
  // eslint-disable-next-line no-undef
  const [changeState, setchangeState] = useState(changeStateProp);

  const changeEver = () => {
    setChangeCity("Mumbai");
    setchangeState("Maharastra");
  }

  return (
    <>
      <h1 className="text-3xl px-5 py-5 text-slate-900">city : {changeCity}</h1>
      <h2 className="text-3xl px-5 py-5 text-slate-900">
        state : {changeState}
      </h2>
      <button
        onClick={changeEver}
        className="bg-slate-500 py-1 px-1 ml-4 mb-5 rounded-lg text-white"
      >
        Change Info
      </button>
    </>
  );
};

export default CityFuncProps;
