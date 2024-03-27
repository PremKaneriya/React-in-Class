import React from "react";
import Counter from "./Counter/Counter";
import { Provider } from "react-redux";
import { configureStore } from "./redux/Reducer/store";

function App() {
  const store = configureStore(); 
  return (
    <>
      <Provider store={store}>
        <Counter />
      </Provider>
    </>
  );
}

export default App;
