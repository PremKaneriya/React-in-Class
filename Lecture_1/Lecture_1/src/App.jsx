import Counter from "../src/user/container/Counter/Counter";
import { Provider } from "react-redux";
import { configureStore } from "./redux/Reducer/store";

const App = () => {
  const store = configureStore();
  return (
    <>
      <Provider store={store}>
        <Counter />
      </Provider>
    </>
  );
};

export default App;
