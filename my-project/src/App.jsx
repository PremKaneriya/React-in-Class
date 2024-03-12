import Header from "./components/Header/Header"
import Products from "./components/Products/Products"
import Slider from "./components/Slider/Slider"
import ProductsTwo from "./components/ProductsTwo/ProductsTwo"
import ValueBox from "./components/ValueBox/ValueBox"
import PriceBox from "./components/PriceBox/PriceBox"
import VideoCompo from "./components/VideoCompo/VideoCompo"
import Insurance from "./components/Insurance/Insurance"
import Footer from "./components/Footer/Footer"

function App() {

  return (
    <>
      <Header />
      <Slider images={["https://img4.hkrtcdn.com/32390/bnr_3238903_o.jpg", "https://img2.hkrtcdn.com/32455/bnr_3245401_o.jpg", "https://img6.hkrtcdn.com/32454/bnr_3245385_o.jpg"]} />
      <Products />
      <ProductsTwo />
      <ValueBox />
      <PriceBox />
      <VideoCompo />
      <Insurance />
      <Footer />
    </>
  )
}

export default App
