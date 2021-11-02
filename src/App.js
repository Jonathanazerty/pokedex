import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import Pokedex from './components/Pokedex';
import {Home} from './Home';
import { Details } from '.';


const App = () => {
  return (
    <Router>
        <Link to="/"><button className="btn btn-outline-light col-12" id="button-homepage" type="button"> Homepage </button></Link>
        <Link to="/pokedex"><button className="btn btn-outline-light col-12" id="button-pokedex" type="button"> Pokedex</button></Link>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/Details" component={Details} />
        <Route path="/pokedex" component={Pokedex}/>
      </Switch>
    </Router>
  )
}
export default App;
