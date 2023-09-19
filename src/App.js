import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";

import Nav from "./Components/Nav";
import Home from "./Components/Home";
import Movies from "./Components/Movies";

function App() {
  return (
    <Router forceRefresh={true}>
      <div className="Navbar">
        <Nav />
        <div className="navCont">
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route exact path="/Movies">
              <Movies />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
