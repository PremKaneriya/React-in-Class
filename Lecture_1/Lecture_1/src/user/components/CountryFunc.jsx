
// eslint-disable-next-line no-unused-vars
import { useState } from "react";
// eslint-disable-next-line no-unused-vars
import React from 'react';

function CountryFunc() {
    const [change, setchange] = useState({name:"india", timezone : "GMT+5:30"})

    const changeCountry = () => {
        setchange({name:"USA", timezone:"GMT+5:00"})
    }
    
    return (
        <>
            <h1 className="text-3xl mt-5 px-5 py-5 text-slate-500">This is country : {change.name}</h1>
            <h1 className="text-3xl mt-5 px-5 py-5 text-slate-500">Timezone: {change.timezone}</h1>
            <button onClick={changeCountry} className="bg-slate-500 py-1 px-1 ml-4 mb-5 rounded-lg text-white">Change Info</button>
        </>
    );
}

export default CountryFunc;