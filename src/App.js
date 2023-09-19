import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';

import Nav from './Components/Nav';
import Home from './Components/Home';
import Movies from './Components/Movies';

function App() {
  return (
    <Router >
      <div className="Navbar">
        <Nav />
        <div className='navCont'>
          <switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path='/Movies'>
              <Movies />
            </Route>
          </switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
