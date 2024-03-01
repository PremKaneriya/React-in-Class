// import City from "./user/components/City";
// import CityFunc from "./user/components/CityFunc";
// import Country from "./user/components/Country"
// import CountryFunc from "./user/components/CountryFunc";
// import CounterFunc from "./Counter/CounterFunc";

import CityFuncProps from "./HomeWorks/CityFuncProps";
import CountryFuncProps from "./HomeWorks/CountryFuncProps";

// import CounterClass from "./Counter/CounterClass";

const App = () => {
  return (
    <>
      {/* <Country />
      <City />
      <CountryFunc />
      <CityFunc />
      <CounterFunc /> */}
      {/* <CounterClass /> */}

      <CountryFuncProps changeCountryProp="India" changeCityProp="Delhi" />
      <CityFuncProps changeCityProp="Nevada" changeStateProp="Las Vegas" />

    </>
  );
};

export default App;
