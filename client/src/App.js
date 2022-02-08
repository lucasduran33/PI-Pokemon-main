import './App.css';
import { Route, Routes, BrowserRouter  } from 'react-router-dom';
import Home from './component/Home/Home'
import Landing from './component/Landing/Landing'
import DetailPoke from './component/Detail/DetailPoke'
import CreatePokemon from './component/CreatePoke/CreatePokemon'  
function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <h1>Henry Pokemon</h1>
    </div>
    <Routes>
      <Route path={'/createPokemon'} element={<CreatePokemon/>}/>
      <Route path={'/'} element={<Landing/>}/>
      <Route path={'/home'} element={<Home/>}/>
      <Route path={'/pokemons/:id'} element={<DetailPoke/>} />
    </Routes>
    </BrowserRouter>
  );
}

export default App;
