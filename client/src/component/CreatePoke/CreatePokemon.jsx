import React from "react";
import { useEffect , useState, useMemo} from "react";
import { Link} from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux';
import { postPokemon, getType } from '../../redux/action/index';

function validarNumero(parametro){
    if(!/^[0-9]*$/.test(parametro)){
        return false
    }else {
        return true
    }
}

function validate(input){
    let error = {};
    if(!input.name){
        error.name = 'Se requiere un nombre'
  
    } if (!input.sprites){
        error.sprites = 'Campo opcional'
    } 
     if (!input.attack  ){
        error.attack = 'Se requiere un numero'
    } 
     if (validarNumero(input.attack)=== false){
        error.attack = 'El ataque no puede ser una letra'
    }
     if (input.attack > 99 ){
        error.attack = 'El ataque no puede ser superior a 100'
    } if (input.attack <= 0 ){
        error.attack = 'El ataque no puede ser menor a 0'
    } if (!input.defense  ){
        error.defense = 'Se requiere un numero'
    }
     if (validarNumero(input.defense)=== false){
        error.defense = 'La defensa no puede ser una letra'
    }  if (input.defense > 100 ){
        error.defense = 'La defensa no puede ser superior a 100'
    }
    if (input.defense <= 0 ){
        error.defense = 'La defensa no puede ser menor a 0'
   }
     if (!input.speed  ){
        error.speed = 'Se requiere un numero'
    } 
     if (validarNumero(input.speed)=== false){
        error.speed = 'La velocidad no puede ser una letra'
    }  if (input.speed > 100 ){
        error.speed = 'La velocidad no puede ser superior a 100'
    }
     if (input.speed <= 0 ){
        error.speed = 'La velocidad no puede ser menor a 0'
    }
     if (!input.height  ){
        error.height = 'Se requiere un numero'
    } 
     if (validarNumero(input.height)=== false){
        error.height = 'La altura no puede ser una letra'
    }  if (input.height > 100 ){
        error.height = 'La altura no puede ser superior a 100'
    }
    if (input.height <= 0 ){
        error.height = 'La altura no puede ser menor a 0'
    }
     if (!input.weight  ){
        error.weight = 'Se requiere un numero'
    } 
     if (validarNumero(input.weight)=== false){
        error.weight = 'El peso no puede ser una letra'
    }  if (input.weight > 100 ){
        error.weight = 'El peso no puede ser superior a 100'
    }
    if (input.weight <= 0 ){
        error.weight = 'El peso no puede ser menor a 0'
    }
     if (!input.hp ){ 
        error.hp = 'Se requiere un numero'
    } 
     if (validarNumero(input.hp)=== false){
        error.hp = 'La vida no puede ser una letra'
    }  if (input.hp > 100 ){
        error.hp = 'La vida no puede ser superior a 100'
    }
    if (input.hp <= 0 ){
        error.hp = 'La vida no puede ser menor a 0'
    }
     if (!input.moves){
        error.moves = 'Movimiento requerido'
    }
    
    return error;
}


export default function PokemonCreate () {
    const dispatch= useDispatch()
   
    const typesState = useSelector((state)=> state.typePokemon)
    const [error, setError] = useState({});
   
    const [input,setInput] = useState({
        name:"",
        types:[],
        weight:"1",
        height:"1",
        sprites:"",
        hp:"",
        attack:"",
        defense:"",
        speed:"",
        
    })
    useEffect(() => {
        dispatch(getType())
    },[dispatch]);
   
     
    function handleSelect(e){
        setInput({
            ...input,
            types:[...input.types, e.target.value]
        })
        console.log(input.types)
    }
  
function handleChange(e){ // <- el que va recolectadno la informacion de los input y seteando en un estado local
    setInput({
        ...input,
        [e.target.name]: e.target.value
    })
    setError(validate({
        ...input,
        [e.target.name]: e.target.value
    }))
}
function handleSubmit(e) {
     e.preventDefault()
     console.log(input)
     dispatch(postPokemon(input))
     alert('Personaje creado!')
     setInput({
        name:"",
        types:[],
        weight:"",
        height:"",
        sprites:"",
        hp:"",
        attack:"",
        defense:"",
        speed:"",
       
     })
}
const disableSubmit = useMemo(() =>{
    if(
        input.name.length > 0 &&
        input.name.length < 30 &&
        input.weight <= 100 &&
        input.height <= 100 &&
        input.hp <= 100 &&
        input.attack <= 100 &&
        input.defense <= 100 &&
        input.speed <= 100 
       

    ){
       return false;
    }else{
        return true;
    }
},[input]);

return (
    <div>
        <div>
            <Link to='/home'>
                <button>Volver</button>

            </Link>
        </div>
        <form onSubmit={(e)=> handleSubmit(e)}>

       
        <div>
        <label>Nombre</label>
        <input type='text'  value={input.name} name='name' onChange={(e) =>handleChange(e)}/>
        {
            error.name && (<p>{error.name}</p>)
        }
       
        </div>
     
        <div>
           <label>Ataque</label> 
           <input type='number' min="1" max="100" value={input.attack} name='attack' onChange={(e) =>handleChange(e)}/>
            {
                error.attack && (<p>{error.attack}</p>)
            }
        </div>
        <div>
           <label>Defensa</label> 
           <input type='number' min="1" value={input.defense} name='defense' onChange={(e) =>handleChange(e)}/>
           {
                error.defense && (<p>{error.defense}</p>)
            }
        </div>
        <div>
           <label>Velocidad</label> 
           <input type='number' min="1" value={input.speed} name='speed' onChange={(e) =>handleChange(e)}/>
           {
                error.speed && (<p>{error.speed}</p>)
            }
         
        </div>
        <div>
           <label>Altura</label> 
           <input type='number'min="1" value={input.height} name='height' onChange={(e) =>handleChange(e)}/>
       {
           error.height && (<p>{error.height}</p>)
       }
        </div>
        <div>
           <label>Peso</label> 
           <input type='number'min="1" value={input.weight} name='weight' onChange={(e) =>handleChange(e)}/>
         {
             error.weight && (<p>{error.weight}</p>)
         }
        </div>
        <div>
           <label>Vida</label> 
          <input type='number' min="1" value={input.hp} name='hp' onChange={(e) =>handleChange(e)}/>
                {
                    error.hp && (<p>{error.hp}</p>)
                } 
        
        </div>
      
        <div>
            <label>Imagen</label>
            <input type='text' value={input.sprites} name='sprites' onChange={(e) =>handleChange(e)} />
            {
                error.sprites &&  (<p>{error.sprites}</p>)

                   
             
            }
        </div>
              <select defaultValue='Tipo poke' onChange={(e) =>handleSelect(e)}>
                <option disabled value='Tipo poke'>Tipo poke</option>
        {
            typesState.map((el) => (
                <option key={el.id} value={el.name}>{el.name}</option>
            ))
        }
        </select>
        <ul ><li  >{input.types.map(el => el + ' ,')}</li></ul> 

       <div>
                <button type='submit' disabled={disableSubmit}>Crear Pokemon</button>
       </div>


       </form>
    </div>
)






}
