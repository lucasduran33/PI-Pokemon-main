import react from 'react'
import {Link} from 'react-router-dom'
import  './Landing.css'

export default function landing  () {
    return (
        <div className='background'> 
    <div >
   

    </div>
      <div className='btncontainer'>
      <Link to = '/home'>
             <button className='btnlanding'>Get Pokemons!</button>
         </Link>
  
      </div>
        </div>
    )
}