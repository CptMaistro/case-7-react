// Importing necessary modules and components from React and react-router-dom
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";

import Nav from "./Components/Nav";
import Home from "./Components/Home";
import Movies from "./Components/Movies";
import Search from "./Components/Search";

function App() {
  return (
    // Router is setting up the React Router with BrowserRouter
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
              <Route exact path="/Search">
                <Search />
              </Route>
            </Switch>
          </div>
        </div>
      </Router>
  );
}

export default App;
