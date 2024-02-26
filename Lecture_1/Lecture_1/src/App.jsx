function App() {
  return (
    <>
      <h1 className="text-4xl hover:text-white transition-all font-bold bg-gray-900 text-[#00df9a] py-6 text-center">
        React JS
      </h1>

    <div className="flex flex-wrap">
      <div className="w-1/2 hover:text-white transition-all bg-gray-900 px-3 py-3 mt-3 ml-3 rounded-lg text-[#00df9a]">
        <h1>History of ReactJS</h1>

        <p>
          - React is developed by Jordan Walke Facebook engineer and used for
          News Feed in 2011.
        </p>
        <p>- React published as a open source at JSConf US in May 2013.</p>
        <p>
          - Facebook released first version of React Native for cross platform
          mobile app development in 2015. It is a framework to create an
          application.
        </p>
        <p>
          - Latest version of react is 18.2.0 which has properties like
          scalability, speed and simplicity properties.
        </p>
      </div>
      <div className="w-1/3 bg-gray-900 px-3 py-3 mt-3 hover:text-white transition-all ml-3 rounded-lg text-[#00df9a]">
        <h1>Overview and Features of React-JS :</h1>

        <p>It is a open source JavaScript library for building user interface.
        </p>
        <p>JSX (JavaScript XML, allows to render HTML elements)</p>
        <p>Components Small and isolated pieces of code for developing complex UIs</p>
        <p>
        Virtual DOM React creates a virtual DOM in memory and does all manipulations in it before making changes in the browser DOM
        </p>
      </div>
      </div>
    </>
  );
}

export default App;
