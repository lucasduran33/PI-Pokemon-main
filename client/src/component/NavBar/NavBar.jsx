import react from 'react'
import {useState, useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux'
import {Link} from 'react-router-dom'
import {getPokemon, filterByOrder, filterByAttack} from '../../redux/action/index'
import SearchBar from '../SearchBar/SearchBar';
export default function NavBar () {
    const dispatch = useDispatch()
   
    
    
    useEffect(() => { 
    dispatch(getPokemon())
    },[dispatch])
    
    
    function handleClick (e){
        e.preventDefault();
        dispatch(getPokemon())
    }
    function handleOrder(e){
        e.preventDefault();
        dispatch(filterByOrder(e.target.value))
    }
    function handleAttack(e){
        e.preventDefault();
        dispatch(filterByAttack(e.target.value))
    }   
        
    return (
        <div>
            <SearchBar/>
        <Link to='/'>  <button>Crear pokemon</button>  </Link>
        <button onClick={(e) => handleClick(e)}>Cargar todos los pokemones</button>
        
        <select onChange={(e) => handleOrder(e)}>
            <option value='asc'>A-Z</option>
            <option value='des'>Z-A</option>
        </select>
        <select    onClick={(e) => handleAttack(e)} >
                        <option value='puntuacion'>Filtro fuerza</option>
                        <option value='mayorAttack'>Mayor Fuerza</option>
                        <option value='menorAttack'>Menor Fuerza</option>
        </select>
        
        
        <select>
                        <option>Tipo de pokemon</option>
                        <option value='todos'>Todos</option>
                        <option value='Api'>Existentes</option>
                        <option value='baseDatos'>Creados</option>
            
        </select>
        </div>
    )
}
    
    
    