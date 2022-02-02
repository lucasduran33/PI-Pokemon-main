import './App.css';
import { Route, Routes, BrowserRouter  } from 'react-router-dom';
import Home from './component/Home/Home'
import Landing from './component/Landing/Landing'
function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <h1>Henry Pokemon</h1>
    </div>
    <Routes>
      <Route path={'/'} element={<Landing/>}/>
      <Route path={'/home'} element={<Home/>}/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
