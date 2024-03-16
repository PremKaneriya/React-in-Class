
import { useState } from "react";

// eslint-disable-next-line react/prop-types
function CountryFuncProps({changeCountryProp, changeCityProp}) {
    
    const [changeCity, setchangeCity] = useState(changeCityProp)
    const [changeCountry, setchangeCountry] = useState(changeCountryProp)

    const changeEver = () => {
        setchangeCountry("USA")
        setchangeCity("NewYork")
    }
    
    return (
        <>
            <h1 className="text-3xl mt-5 px-5 py-5 text-slate-500">This is country : {changeCountry}</h1>
            <h1 className="text-3xl mt-5 px-5 py-5 text-slate-500">This is city: {changeCity}</h1>
            <button onClick={changeEver} className="bg-slate-500 py-1 px-1 ml-4 mb-5 rounded-lg text-white">Change Info</button>
        </>
    );
}

export default CountryFuncProps;