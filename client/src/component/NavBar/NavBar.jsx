import React from 'react'
import {useState, useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux'
import {Link} from 'react-router-dom'
import {getPokemon, filterByOrder, filterByAttack, getType, filterByType, filterByDb, filterByHp, menorHp} from '../../redux/action/index'
import SearchBar from '../SearchBar/SearchBar';
import './NavBar.css'
import logo from '../../img/logo.png'

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
        console.log(e.target.value)
        
    }
    function handleCreated(e){
        dispatch(filterByDb(e.target.value))
    }
    
   
    
        
    return (
       

                
        <div className='flex'>
           
           <img className='img' src={logo} />
            <SearchBar/>
        <Link to='/createPokemon'>  <button>Crear pokemon</button>  </Link>
        <button onClick={(e) => handleClick(e)}>Cargar todos los pokemones</button>
        
        <select onChange={(e) => handleOrder(e)}>
            <option value='asc'>A-Z</option>
            <option value='des'>Z-A</option>
        </select>
        <select defaultValue='Filtro fuerza'   onClick={(e) => handleAttack(e)} >
                        <option disabled >Filtro fuerza</option>
                        <option value='mayorAttack'>Menor Fuerza</option>
                        <option value='menorAttack'>Mayor Fuerza</option>
        </select>
        <select defaultValue='Tipo de pokemones' onChange={(e) => handleFilterType (e)}>
              
            <option disabled >Tipos de pokemones</option>
            {
                allTypes?.map(el => {
                    return (
                        <option key={el.id} name={el.name}>{el.name}</option>
                        )
                    })
                }
                </select>
        
        <select  onChange={(e)=> handleCreated(e)}>
                        <option>Api o createdInDb</option>
                        <option value='api'>Existentes</option>
                        <option value='created'>Creados</option>
                        
            
        </select>
      

            
        </div>
              
    )
}
    
    
    