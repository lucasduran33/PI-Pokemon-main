import react from 'react'
import {useState, useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux'
import {Link} from 'react-router-dom'
import {getPokemon} from '../../redux/action/index'

export default function NavBar () {
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
        <select>
            <option>Tipo de pokemon</option>
        </select>
                        <option value='todos'>Todos</option>
                        <option value='Api'>Existentes</option>
                        <option value='baseDatos'>Creados</option>
        <select>
            option
        </select>
        </div>
    )
}
    
    
    