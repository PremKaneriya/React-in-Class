import Header from "./components/Header/Header"
import Footer from "./components/Footer/Footer"
import { Routes, Route } from "react-router-dom"
import HealthProducts from "./components/Subpages/HealthProducts"
import Home from "./container/Home/Home"

function App() {

  return (
    <>
      <Header />
      <Routes>  
        <Route to='/' element={<Home />} />      
        <Route to='/healthproducts' element={<HealthProducts />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
