import ClassBox from "./components/ClassBox/ClassBox";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import ClassBox_2 from "./components/ClassBox_2/ClassBox_2";

const App = () => {
  return (
    <>
    <Header />
    <div className="flex items-center justify-center">
    <ClassBox />
    <ClassBox_2 />
    </div>
    <Footer />    
    </>
  );
};

export default App;
