import { useEffect , useState} from "react";
import { Link} from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux';
import { postPokemon, getType } from '../../redux/action/index';
   
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
function handleChange(e){ // <- el que va recolectadno la informacion de los input y seteando en un estado local
    setInput({
        ...input,
        [e.target.value]: e.target.value
    })
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
        </div>
        <div>
           <label>Attack</label> 
           <input type='text' value={input.attack} name='attack' onChange={(e) =>handleChange(e)}/>
        </div>
        <div>
           <label>Defense</label> 
           <input type='text' value={input.defense} name='defense' onChange={(e) =>handleChange(e)}/>
        </div>
        <div>
           <label>Speed</label> 
           <input type='text' value={input.speed} name='speed' onChange={(e) =>handleChange(e)}/>
        </div>
        <div>
           <label>Height</label> 
           <input type='text' value={input.height} name='height' onChange={(e) =>handleChange(e)}/>
        </div>
        <div>
           <label>Weight</label> 
           <input type='text' value={input.weight} name='weight' onChange={(e) =>handleChange(e)}/>
        </div>
        <div>
           <label>Health</label> 
           <input type='text' value={input.hp} name='hp' onChange={(e) =>handleChange(e)}/>
        </div>
        <div>
        <label>Moves</label> 
           <input type='text' value={input.moves} name='moves' onChange={(e) =>handleChange(e)}/>
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
