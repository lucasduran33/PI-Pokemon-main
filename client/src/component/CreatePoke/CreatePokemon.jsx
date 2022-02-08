import { useEffect , useState} from "react";
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
    let errors = {};
    if(!input.name){
        errors.name = 'Se requiere un nombre'
    }else if (!input.moves){
        errors.move= 'Se requiere un Mov'
    }
    else if (!input.attack  ){
        errors.attack = 'Se requiere un numero'
    } 
    else if (validarNumero(input.attack)== false){
        errors.attack = 'El ataque no puede ser una letra'
    }
    else if (input.attack > 100 ){
        errors.attack = 'El ataque no puede ser superior a 100'
    }else if (input.attack <= 0 ){
        errors.attack = 'El ataque no puede ser menor a 0'
    }else if (!input.defense  ){
        errors.defense = 'Se requiere un numero'
    } 
    else if (validarNumero(input.defense)== false){
        errors.defense = 'La defensa no puede ser una letra'
    } else if (input.defense > 100 ){
        errors.defense = 'La defensa no puede ser superior a 100'
    }
   else if (input.defense <= 0 ){
        errors.defense = 'La defensa no puede ser menor a 0'
    }
    else if (!input.speed  ){
        errors.speed = 'Se requiere un numero'
    } 
    else if (validarNumero(input.speed)== false){
        errors.speed = 'La velocidad no puede ser una letra'
    } else if (input.speed > 100 ){
        errors.speed = 'La velocidad no puede ser superior a 100'
    }
    else if (input.speed <= 0 ){
        errors.speed = 'La velocidad no puede ser menor a 0'
    }
    else if (!input.height  ){
        errors.height = 'Se requiere un numero'
    } 
    else if (validarNumero(input.height)== false){
        errors.height = 'La altura no puede ser una letra'
    } else if (input.height > 100 ){
        errors.height = 'La altura no puede ser superior a 100'
    }
   else if (input.height <= 0 ){
        errors.height = 'La altura no puede ser menor a 0'
    }
    else if (!input.weight  ){
        errors.weight = 'Se requiere un numero'
    } 
    else if (validarNumero(input.weight)== false){
        errors.weight = 'El peso no puede ser una letra'
    } else if (input.weight > 100 ){
        errors.weight = 'El peso no puede ser superior a 100'
    }
   else if (input.weight <= 0 ){
        errors.weight = 'El peso no puede ser menor a 0'
    }
    else if (!input.hp ){ 
        errors.hp = 'Se requiere un numero'
    } 
    else if (validarNumero(input.hp)== false){
        errors.hp = 'La vida no puede ser una letra'
    } else if (input.hp > 100 ){
        errors.hp = 'La vida no puede ser superior a 100'
    }
   else if (input.hp <= 0 ){
        errors.hp = 'La vida no puede ser menor a 0'
    }
    else if (!input.moves)
    
    return errors;
}


export default function PokemonCreate () {
    const dispatch= useDispatch()
   
    const typesState = useSelector((state)=> state.typePokemon)
    const [error, setError] = useState({});
    const [input,setInput] = useState({
        name:"",
        types:[],
        weight:"",
        height:"",
        sprites:"",
        moves:[],
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
    }
    function handleMove(e){
        setInput({
            ...input,
            moves:[...input.moves, e.target.value]
        })
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
        moves:[],
        hp:"",
        attack:"",
        defense:"",
        speed:"",
     })
}

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
        <input type='text' value={input.name} name='name' onChange={(e) =>handleChange(e)}/>
        {
            error.name && (<p>{error.name}</p>)
        }
       
        </div>
        <div>
           <label>Ataque</label> 
           <input type='text' value={input.attack} name='attack' onChange={(e) =>handleChange(e)}/>
            {
                error.attack && (<p>{error.attack}</p>)
            }
        </div>
        <div>
           <label>Defensa</label> 
           <input type='text' value={input.defense} name='defense' onChange={(e) =>handleChange(e)}/>
           {
                error.defense && (<p>{error.defense}</p>)
            }
        </div>
        <div>
           <label>Velocidad</label> 
           <input type='text' value={input.speed} name='speed' onChange={(e) =>handleChange(e)}/>
           {
                error.speed && (<p>{error.speed}</p>)
            }
         
        </div>
        <div>
           <label>Altura</label> 
           <input type='text' value={input.height} name='height' onChange={(e) =>handleChange(e)}/>
       {
           error.height && (<p>{error.height}</p>)
       }
        </div>
        <div>
           <label>Peso</label> 
           <input type='text' value={input.weight} name='weight' onChange={(e) =>handleChange(e)}/>
         {
             error.weight && (<p>{error.weight}</p>)
         }
        </div>
        <div>
           <label>Vida</label> 
          <input type='text' value={input.hp} name='hp' onChange={(e) =>handleChange(e)}/>
                {
                    error.hp && (<p>{error.hp}</p>)
                } 
        
        </div>
        <div>
        <label>Moves</label> 
           <input type='text' value={input.moves} name='moves' onChange={(e) => handleMove(e)}/>
        </div>
              <select  onChange={(e) =>handleSelect(e)}>

        {
            typesState.map((el) => (
                <option value={el.name}>{el.name}</option>
            ))
        }
        </select>
        <ul><li>{input.types.map(el => el + ' ,')}</li></ul> 
       <div>
                <button type='submit' >Crear receta</button>
       </div>


       </form>
    </div>
)






}
