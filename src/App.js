import "./assets/css/app.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Homepage from "./pages/HomePage";
import Detail from "./pages/Detail";
import Cart from "./pages/Cart";
import Congratulation from "./pages/Congratulation";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" component={Homepage} />
          <Route path="/categories/:idc" component={Detail} />
          <Route path="/cart" component={Cart} />
          <Route path="/congratulation" component={Congratulation} />
          <Route path="*" component={NotFound} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
