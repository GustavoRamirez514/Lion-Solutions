
import { Provider } from "react-redux";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useLocation,
} from "react-router-dom";
import store from "store";

import RoutesAnimated from "RoutesAnimated";

function App() {
  return (
    <Provider store={store}>
      <Router>
  
        <RoutesAnimated />
        
      </Router>
    </Provider>
  );
}

export default App;
