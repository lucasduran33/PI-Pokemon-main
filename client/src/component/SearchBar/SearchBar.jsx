import React from 'react' ;
import {useState} from 'react'
import {useDispatch} from 'react-redux'
import { getPokeName } from '../../redux/action';

export default function SearchBar (){ 
    const dispatch = useDispatch()
    const [name, setName]= useState("")
    
    function handleSearch(e){
        e.preventDefault()
        setName(e.target.value)
        console.log(name)
    }
        
    function handleSubmit(e){
        e.preventDefault(e)
        
        dispatch(getPokeName(name))
        setName("")
        console.log(`aqui esta el submit ${name}`)
    }


return(
    <div>
        <input type= 'text'
        placecholder= 'Buscar...'
        onChange={(e) => handleSearch(e)}
        />
        <button type='submit'   onClick={(e)=> handleSubmit(e)}>Buscar</button>
    </div>
)
}