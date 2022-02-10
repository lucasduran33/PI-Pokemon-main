import React from 'react';
import  {useEffect, useState} from 'react';
import {getPokeId, resetId} from '../../redux/action/index';
import {useDispatch, useSelector } from 'react-redux'
import { useParams, Link } from 'react-router-dom';
import axios from 'axios'


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

function handleReset(e){
    console.log('se ejecuta el reset')
    e.preventDefault(e)
    dispatch(resetId())
}


return (
    <div>
        { 
         pokemon?
            <div>
              <h1>Nombre pokemon:{pokemon.name? pokemon.name :pokemon[0].name}</h1>
              <h1>pokeID: {pokemon.id ? pokemon.id :pokemon[0].id}</h1>
              <img src={pokemon.sprites? pokemon.sprites : pokemon[0].sprites} alt='img not found'/> 
                 
               <h1>Vida:  {pokemon.hp ? pokemon.hp :pokemon[0].hp}hp</h1>
               <h1>Tipo de poke: </h1>
               <h3>
                {     pokemon.type ? pokemon.type.map(el=> el) :  pokemon[0].types.map(el => el + ' ')
}
                   </h3>    
               <h1>Ataque: {pokemon.attack ? pokemon.attack :pokemon[0].attack}</h1>
                 <h1>Defensa:  {pokemon.defense ? pokemon.defense :pokemon[0].defense}</h1>
                 <h1>Velocidad: {pokemon.speed ? pokemon.speed :pokemon[0].speed}</h1>
                 <h1>Altura:  {pokemon.weight ? pokemon.weight :pokemon[0].weight}</h1>
                    <h1>Peso:  {pokemon.height ? pokemon.height :pokemon[0].height}</h1>
            </div>
          : <p>Loading...</p>
}          

  <Link to ='/home'>
      <button>Volver</button>
  </Link>
    </div>
)

}