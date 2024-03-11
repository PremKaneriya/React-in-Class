import Header from "./components/Header/Header"
import Products from "./components/Products/Products"
import Slider from "./components/Slider/Slider"

function App() {

  return (
    <>
      <Header />
      <Slider images={["https://img4.hkrtcdn.com/32390/bnr_3238903_o.jpg", "https://img2.hkrtcdn.com/32455/bnr_3245401_o.jpg", "https://img4.hkrtcdn.com/32390/bnr_3238903_o.jpg"]} />
      <Products />
    </>
  )
}

export default App
