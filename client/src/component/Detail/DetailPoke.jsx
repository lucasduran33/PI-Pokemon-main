import React from 'react';
import  {useEffect} from 'react';
import {getPokeId} from '../../redux/action/index';
import {useDispatch, useSelector } from 'react-redux'
import { useParams, Link } from 'react-router-dom';


export default function DetailPoke(props) {
  
const dispatch = useDispatch();
const pokemonDetail = useSelector((state) => state.detail)

console.log(pokemonDetail)



const {id} = useParams()

console.log(`el id x fuera es ${id}`);


useEffect(()=> {
    dispatch(getPokeId(id))
},[dispatch,id])



return (
    <div>
        
            
            <div>

                 <h2>{pokemonDetail.id}</h2> 
                <h1>{pokemonDetail.name}</h1>
                <img src={pokemonDetail.sprites} alt='img not found'/> 
                 <h4>{
                     pokemonDetail.type ? pokemonDetail.type :  pokemonDetail.types
                
                }</h4>
                <h2>{pokemonDetail.hp}</h2>
                <h2>{pokemonDetail.attack}</h2>
                <h2>{pokemonDetail.defense}</h2>
                <h2>{pokemonDetail.speed}</h2>
                <h2>{pokemonDetail.weight}</h2>
                <h2>{pokemonDetail.height}</h2>
                 
            </div> 

  <Link to ='/home'>
      <button>Volver</button>
  </Link>
    </div>
)

}