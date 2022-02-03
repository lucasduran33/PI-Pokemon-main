import React from 'react'
import {useState, useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux'
import {Link} from 'react-router-dom'
import {getPokemon, filterByOrder, filterByAttack, getType, filterByType} from '../../redux/action/index'
import SearchBar from '../SearchBar/SearchBar';
export default function NavBar ({setCurrentPage , setOrder}) {
    const dispatch = useDispatch()
   
    const allTypes = useSelector((state) => state.typePokemon)
    
    
    useEffect(() => { 
    dispatch(getPokemon())
    dispatch(getType())
    },[dispatch])
    
    
    function handleClick (e){
        e.preventDefault();
        dispatch(getPokemon())
    }
    function handleOrder(e){
        e.preventDefault();
        dispatch(filterByOrder(e.target.value))
        setCurrentPage(1);
        setOrder(`ordenando ${e.target.value}`)
    }
    function handleAttack(e){
        e.preventDefault();
        dispatch(filterByAttack(e.target.value))
        setCurrentPage(1);
        setOrder(`ordenando ${e.target.value}`)
    }   
    function handleFilterType (e){
        dispatch(filterByType(e.target.value))
     
        
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
        <select onChange={(e) => handleFilterType (e)}>

            <option>Tipos de pokemones</option>
            {
                allTypes?.map(el => {
                    return (
                        <option key={el.id} name={el.name}>{el.name}</option>
                        )
                    })
                }
                </select>
        
        <select>
                        <option>Tipo de pokemon</option>
                        <option value='todos'>Todos</option>
                        <option value='Api'>Existentes</option>
                        <option value='baseDatos'>Creados</option>
            
        </select>
        <select>

        </select>
        </div>
    )
}
    
    
    