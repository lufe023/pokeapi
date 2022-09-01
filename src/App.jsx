import './App.css'
import './styles/Card.css'
import './styles/Footer.css'
import './styles/scroll.css'
import { Route, Routes } from 'react-router-dom'
import Home from './components/Home'
import Pokedex from './components/Pokedex'
import ProtectedRoutes from './components/ProtectedRoutes'
import PokemonDetails from './components/PokemonDetails'




function App() {

  return (

    <div className="App">

     <Routes>

      <Route path='/' element={<Home/>}/>

      <Route element={<ProtectedRoutes/>}>
      <Route path='/pokedex' element={<Pokedex/>}></Route>
      <Route path='/pokedex/:name' element={<PokemonDetails/>}/>
      </Route>
      
     </Routes>
     
    </div>
  )
}

export default App
