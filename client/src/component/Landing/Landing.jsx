import react from 'react'
import {Link} from 'react-router-dom'
import  './Landing.css'
import image from '../../img/thumb-1920-473848.png'
export default function landing  () {
    return (
        <div className='background'> 
    <div >
        <img src={image} alt='not f'/>
    </div>
      <div className='btncontainer'>
      <Link to = '/home'>
             <button className='btnlanding'>Get Pokemons!</button>
         </Link>
  
      </div>
        </div>
    )
}