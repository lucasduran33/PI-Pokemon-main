import React, {useEffect, useState} from 'react';
import {getPokeId} from '../../redux/action/index';
import {useDispatch, useSelector, } from 'react-redux'
import { useParams, Link } from 'react-router-dom';


export default function DetailPoke() {
  
const dispatch = useDispatch()
const pokemonDetail = useSelector((state) => state.pokeDetail)
const setDetail = useSelector((state) => state.setPokeDetail)
console.log(pokemonDetail)


const [state, setState]=useState('')
const {id} = useParams()
useEffect(()=>{
    dispatch(getPokeId(id))
},[dispatch])
function handleChange (e){
    dispatch()
}

return (
    <div>
        {
            pokemonDetail.length > 0 ?
            <div>
                <h1>Nombre {pokemonDetail[0].name}</h1>
                <img src={pokemonDetail[0].sprites} alt='img not found'/>
                <h4>{pokemonDetail[0].type}</h4>
                <h2>{pokemonDetail[0].hp}</h2>
                <h2>{pokemonDetail[0].attack}</h2>
                <h2>{pokemonDetail[0].defense}</h2>
                <h2>{pokemonDetail[0].speed}</h2>
                <h2>{pokemonDetail[0].weight}</h2>
                <h2>{pokemonDetail[0].height}</h2>
                <h2>{pokemonDetail[0].id}</h2>
            </div>  : <p>Loading...</p>
}
  <Link to ='/home'>
      <button>Volver</button>
  </Link>
    </div>
)

}