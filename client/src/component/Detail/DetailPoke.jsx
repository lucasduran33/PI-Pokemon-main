import React from 'react';
import  useEffect from 'react';
import {getPokeId} from '../../redux/action/index';
import {useDispatch, useSelector } from 'react-redux'
import { useParams, Link } from 'react-router-dom';


export default function DetailPoke() {
  
const dispatch = useDispatch();
const pokemonDetail = useSelector((state) => state.detail)

console.log(pokemonDetail)



const {id} = useParams()


useEffect(() => {
    console.log('LLEGA A POKEID');
    dispatch(getPokeId(id));
    console.log(`el id es ${id}`);
  
},[dispatch, id])
console.log(`el id es ${id}`);


return (
    <div>
        {
            
            <div>

                {/* <h2>{pokemonDetail[0].id}</h2> */}
                <h1>{pokemonDetail[0].name}</h1>
                {/* <img src={pokemonDetail[0].sprites} alt='img not found'/> */}
                {/* <h4>{

                pokemonDetail[0].type?.map((e) =>{
                    return (
                        <p>{e}</p>
                    )
                })
                
                }</h4>
                <h2>{pokemonDetail[0].hp}</h2>
                <h2>{pokemonDetail[0].attack}</h2>
                <h2>{pokemonDetail[0].defense}</h2>
                <h2>{pokemonDetail[0].speed}</h2>
                <h2>{pokemonDetail[0].weight}</h2>
                <h2>{pokemonDetail[0].height}</h2>
                 */}
            </div> 
}
  <Link to ='/home'>
      <button>Volver</button>
  </Link>
    </div>
)

}