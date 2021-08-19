import { Provider } from "react-redux";

import Home from "@views/Home";
import store from "@store/index";

function App() {
  return (
    <Provider store={store}>
      <Home />
    </Provider>
  );
}

export default App;
