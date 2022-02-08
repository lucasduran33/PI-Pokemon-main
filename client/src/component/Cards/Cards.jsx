 import React from 'react';
import {Link} from 'react-router-dom'

 export default function  PokeCard ({name, type, sprites, id}) {
     return ( 
        <div>
            <h3>{name}</h3>
            <img  src={sprites} alt='image not found'/>
            <h5>{type}</h5>
        <Link to={`/pokemons/${id}`}>
            <button>Mas info</button>
            </Link>
        </div>
     )
 }
 