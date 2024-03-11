import { useState } from "react";
import Header from "./user/container/Router/Header";
// import Product from "./user/container/Products/Product";
// import Header from "./user/container/Products/Header";
// import Footer from "./user/container/Products/Footer";

import Home from "./user/components/Home/Home";
import Contact from "./user/components/Contact/Contact";
import { Route, Routes } from "react-router-dom";
import About from "./user/components/About/About";

const App = () => {
  // const [searchQuery, setSearchQuery] = useState("");
  return (
    <>
      {/* <Header setSearchQuery={setSearchQuery} />
      <Product search={searchQuery} />
      <Footer/> */}
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </>
  );
};

export default App;
