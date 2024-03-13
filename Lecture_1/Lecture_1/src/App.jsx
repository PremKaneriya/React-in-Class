// import { useState } from "react";
// import Header from "./user/container/Router/Header";
// import Product from "./user/container/Products/Product";
// import Header from "./user/container/Products/Header";
// import Footer from "./user/container/Products/Footer";

import Header from "./HomeWorks/NestedRouting/Header";

// import Home from "./user/components/Home/Home";
// import Contact from "./user/components/Contact/Contact";
import { Route, Routes } from "react-router-dom";
import Home from "./HomeWorks/NestedRouting/Home";
import Faq from "./HomeWorks/NestedRouting/Faq";
import Team from "./HomeWorks/NestedRouting/Team";
import HomeOne from "./HomeWorks/NestedRouting/HomeOne";
import HomeTwo from "./HomeWorks/NestedRouting/HomeTwo";
// import About from "./user/components/About/About";

const App = () => {
  // const [searchQuery, setSearchQuery] = useState("");
  return (
    <>
      {/* <Header setSearchQuery={setSearchQuery} />
      <Product search={searchQuery} />
      <Footer/> */}
      {/* <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
      </Routes> */}
      <Header />
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/faq/:name" element={<Faq />} />
        <Route path="/team" element={<Team />} />
        <Route path="/homeone" element={<HomeOne />} />
        <Route path="/hometwo" element={<HomeTwo />} />
      </Routes>
    </>
  );
};

export default App;
