// import ClassBox from "./components/ClassBox/ClassBox";
// import Footer from "./components/Footer/Footer";
// import Header from "./components/Header/Header";
// import ClassBox_2 from "./components/ClassBox_2/ClassBox_2";

import City from "./user/components/City";
import CityFunc from "./user/components/CityFunc";
import Country from "./user/components/Country"
import CountryFunc from "./user/components/CountryFunc";

const App = () => {
  return (
    <>
      {/* <Header />
      <div className="flex items-center justify-center">
        <ClassBox />
        <ClassBox_2 />
      </div>
      <Footer /> */}
      <Country />
      <City />
      <CountryFunc />
      <CityFunc />
    </>
  );
};

export default App;
