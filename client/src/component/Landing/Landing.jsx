import react from 'react'
import {Link} from 'react-router-dom'


export default function landing  () {
    return (
        <div> 
            <h1>
                Bienvenidos a la pokedex
            </h1>
         <Link to = '/home'>
             <button>Ir al home</button>
         </Link>
        </div>
    )
}