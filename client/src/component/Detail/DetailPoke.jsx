import React from 'react';
import  {useEffect, useState} from 'react';
import {getPokeId} from '../../redux/action/index';
import {useDispatch, useSelector } from 'react-redux'
import { useParams, Link } from 'react-router-dom';
import axios from 'axios'
import LoaderDetail from '../LoaderD/LoaderDetail'
import './Detail.css'

export default function DetailPoke() {
  
const dispatch = useDispatch();
const pokemonDetail = useSelector((state) => state.detail)
const [pokemon, setPokemon] = useState()
console.log(pokemonDetail)



const {id} = useParams()

console.log(`el id x fuera es ${id}`);


useEffect(()=> {
    axios.get(`http://localhost:3001/pokemons/${id}`)
    .then((response)=>{
        setPokemon(response.data)
    })
    .catch(error => console.log(error) )
    console.log(pokemon)
},[id])




return (
    <div className='idpoke'>
       
        { 
         pokemon?
         <div>
            
                <img className='pokeimg' src={pokemon.sprites? pokemon.sprites : pokemon[0].sprites ?pokemon[0].sprites : 'https://i.pinimg.com/564x/7a/89/9a/7a899ae5a7bf99e40fef753983427222.jpg'} alt='img not found'/> 
                
            
         <div   className='detalles'>
              <h1  className='title'>{pokemon.name? pokemon.name :pokemon[0].name}</h1>
            
                 
             

               <h1 className='types'>Vida:  {pokemon.hp ? pokemon.hp :pokemon[0].hp}hp</h1>
               <h1 className='types'>Tipo de poke: </h1>
               <h3 className='types'>
                {  pokemon.types ?  pokemon.types.map(el => el + ' ')  :pokemon[0].types.map(el => el + ' ') }

                   </h3>    
               <h1 className='text'>Ataque: {pokemon.attack ? pokemon.attack :pokemon[0].attack}</h1>
                 <h1 className='text'>Defensa:  {pokemon.defense ? pokemon.defense :pokemon[0].defense}</h1>
                 <h1 className='text'>Velocidad: {pokemon.speed ? pokemon.speed :pokemon[0].speed}</h1>
                 <h1 className='text'>Altura:  {pokemon.weight ? pokemon.weight :pokemon[0].weight}</h1>
                    <h1 className='text'>Peso:  {pokemon.height ? pokemon.height :pokemon[0].height}</h1>
                   
            
             
          
           </div>
           <div  className='btn' >
                    <Link to ='/home'>
                     <button>Volver</button>
                    </Link>               
                     </div>
             
         </div>
          : 
          <div className='loading'> 
              <LoaderDetail/>
              
          </div>
}          
    </div>
  
                        

  
)

}