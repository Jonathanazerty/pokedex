import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import Pokedex from './Pokedex';
import Home from './Home';


const App = () => {
  // const [allPokemons, setAllPokemons] = useState('https://pokeapi.co/api/v2/pokemon?limit=100');
  
  // const getAllPokemons = async () => {
  //   const res = await fetch(allPokemons)
  //   const data = await res.json()
  //   console.log(data);
  // }

  // useEffect(() => {
  //   getAllPokemons()
  // }, [])


  return (
    <Router>
        <Link to="/"><button className="btn btn-outline-light col-12 p-2" type="button"> Homepage </button></Link>
        <Link to="/pokedex"><button className="btn btn-outline-light col-12 p-2" type="button"> Pokedex</button></Link>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/pokedex" component={Pokedex}/>
      </Switch>
    </Router>
    
  )
}
export default App;
