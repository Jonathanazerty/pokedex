import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import React from 'react';
import Pokedex from './Pokedex';
import Home from './Home';

function App() {
  return (
    <Router>
        <Link to="/"><button className="btn btn-outline-light col-12 p-2" type="button"> To Do </button></Link>
        <Link to="/pokedex"><button className="btn btn-outline-light col-12 p-2" type="button"> Done</button></Link>
      <Switch>
        <Route path="/" exact component={Home}/>
        <Route path="/pokedex" component={Pokedex}/>
      </Switch>
    </Router>
  )
}

export default App;
