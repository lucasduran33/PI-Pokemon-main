import react from 'react'
import {useState, useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux'
import {getPokemon} from '../../redux/action/index'
import NavBar from '../NavBar/NavBar'
import Cards from '../Cards/Cards'

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
   <NavBar/>
   {
       allPokemon?.map(el =>{
           return (
            <Cards  name={el.name}   sprites={el.sprites} type={el.type}/>
           )
       } )
   }
   </div>
)
}
  
       