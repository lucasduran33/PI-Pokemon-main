import React from 'react';
import './Paginado.css'

export default function Paginado ({pokePerPage, allPokemon, paginado, setCurrentPage,currentPage}) { 
const pageNumbers = []
for (let i = 1; i<= Math.ceil(allPokemon/pokePerPage); i++){
    pageNumbers.push(i)
}
function handlePrev(){
    setCurrentPage(currentPage - 1)
}
function handleNext(){
setCurrentPage(currentPage + 1)
}
return (
    <nav className='pagi'>
        <ul className='but' >
        <button className='but'  disabled={currentPage === pageNumbers[0]? true : false} onClick={(e)=> handlePrev(e) }>Previus</button>
     
            {pageNumbers && pageNumbers.map(number=>( 
               
                <button className='but' key={number} onClick={() =>paginado(number)}>{number}</button>
                
            ))}
        <button className='but' disabled={currentPage === pageNumbers[pageNumbers.length -1]? true : false} onClick={(e)=> handleNext(e)}>Next</button>
        </ul>
    </nav>
)
}