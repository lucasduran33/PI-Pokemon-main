import react from 'react'
import {useState, useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux'
import {getPokemon} from '../../redux/action/index'



export default function Home () {
const dispatch = useDispatch()
const allPokemon = useSelector((state) => state.pokemons)


useEffect(() => { 
dispatch(getPokemon())
},[dispatch])


function handleClick (e){
    e.preventDefault();
    dispatch(getPokemon())
}

return (
    <div>

    <h1>La pokedex de duran</h1>
    <Link to='/'>  <button>Crear pokemon</button>  </Link>
    <button onClick={(e) => handleClick(e)}>Cargar todos los pokemones</button>
    
    <select>
        <option value='asc'>A-Z</option>
        <option value='des'>Z-A</option>
    </select>
    <select >
                    <option value='puntuacion'>Puntuacion</option>
                    <option value='mayorScore'>Mayor Fuerza</option>
                    <option value='menorScore'>Menor Fuerza</option>
    </select>
    </div>
)
}
  
       