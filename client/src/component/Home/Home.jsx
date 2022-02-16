import React from 'react'
import {useState, useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux'
import {Link} from 'react-router-dom'
import {getPokemon} from '../../redux/action/index'
import NavBar from '../NavBar/NavBar'
import Cards from '../Cards/Cards'
import Paginado from '../Paginado/Paginado'
import Loader from '../Loader/Loader'
import './Home.css';



export default function Home () {
const dispatch = useDispatch()

const allPokemon = useSelector((state) => state.pokemons)
const allTypes = useSelector((state) => state.typePokemon)
const [order, setOrder]= useState('')
const [currentPage,setCurrentPage]= useState(1)// pagina actual pagina q sigue
const [pokePerPage, setPokePerPage]= useState(12) //personajes por pagina
const indexOfLastPoke = currentPage * pokePerPage // 12
const indexOfFirstPoke = indexOfLastPoke - pokePerPage
const currentPokemon = allPokemon.slice(indexOfFirstPoke,indexOfLastPoke)                              // slice -> corta un array, divide

const paginado = (pageNumber) => {
    setCurrentPage(pageNumber)
}

useEffect(() => { 
    dispatch(getPokemon())
    console.log('llega el pokemon')
},[dispatch])

const  pokeNull = !currentPokemon.length > 0 ? <Loader/> : null

return (
    <div className='colors' >
<div  className='fixed'>
    
   <NavBar  setCurrentPage={setCurrentPage} setOrder={setOrder}/>
        <Paginado pokePerPage={pokePerPage}  allPokemon={allPokemon.length} paginado={paginado} setCurrentPage={setCurrentPage} currentPage={currentPage}/>
</div>

    {
        pokeNull 
    }

 
     

<div className='Cardpoke'>
   {
           currentPokemon.map(el =>{
               return (
                   <div key={el.id}>
                   
            <Cards  name={el.name } id={el.id}  sprites={el.sprites} type={ el.types.map(el => el + ' ')} key={el.id}/>
                
               </div>

)
})
}
</div>
</div>
)
}
  
      