 import React from 'react';


 export default function pokeCard ({name, type, sprites}) {
     return ( 
        <div>
            <h3>{name}</h3>
            <h5>{type}</h5>
            <img  src={sprites} alt='image not found'/>
        </div>
        
     )
 }