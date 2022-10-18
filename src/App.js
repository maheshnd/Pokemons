import logo from './logo.svg';
import './App.css';
import {BrowserRouter,
  Routes,
  Route} from 'react-router-dom';
import {PokemonList} from './components/PokemonList'
import {PokemonDetails} from './components/PokemonDetails'
import "bootstrap/dist/css/bootstrap.css";
function App() {
  return (
    <BrowserRouter>
    <div className="App">
    <Routes>
    <Route exact path="/" element={<PokemonList />} />
    <Route path="/pokemon/:id" element={<PokemonDetails />} />
    </Routes>
    </div>
   
    </BrowserRouter>
  );
}

export default App;
