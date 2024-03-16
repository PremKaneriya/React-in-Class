
// eslint-disable-next-line no-unused-vars
import { useState } from "react";
// eslint-disable-next-line no-unused-vars
import React from 'react';
import CityFunc from "./CityFunc";

function CountryFunc() {
    const [changeCountry, setchangeCountry] = useState("india")
    const [changeTimezone, setchangeTimezone] = useState("GMT+5:30")

    const changeEver = () => {
        setchangeCountry("USA")
        setchangeTimezone("GMT+5:00")
    }
    
    return (
        <>
            <h1 className="text-3xl mt-5 px-5 py-5 text-slate-500">This is country : {changeCountry}</h1>
            <h1 className="text-3xl mt-5 px-5 py-5 text-slate-500">Timezone: {changeTimezone}</h1>
            <button onClick={changeEver} className="bg-slate-500 py-1 px-1 ml-4 mb-5 rounded-lg text-white">Change Info</button>

            <CityFunc countryName={changeCountry} />

        </>
    );
}

export default CountryFunc;