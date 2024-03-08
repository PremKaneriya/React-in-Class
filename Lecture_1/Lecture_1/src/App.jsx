import { useState } from "react";
import Product from "./user/container/Products/Product";
import Header from "./user/container/Products/Header";
import Footer from "./user/container/Products/Footer";

const App = () => {
  const [searchQuery, setSearchQuery] = useState("");
  return (
    <>

      <Header setSearchQuery={setSearchQuery} />
      
      <Product search={searchQuery} />
      <Footer/>
    </>
  );
};

export default App;
