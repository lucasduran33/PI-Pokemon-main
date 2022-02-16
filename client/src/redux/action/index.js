import axios from 'axios'


export const getPokemon =() => dispatch => {
    return fetch('http://localhost:3001/pokemons')
    .then(r => r.json())
    .then(getpoke => dispatch({
        type: 'GET_POKEMONS',
        payload:getpoke
    }))
}


export function getPokeName (payload){
    return async function (dispatch){
      try{
          var json= await axios.get('http://localhost:3001/pokemons?name='+ payload)
            console.log(`AQUI ESTA EL NAME ${json}`)  
            console.log(json)
          return dispatch ({
                type: 'GET_NAME_POKEMON',
                payload: json.data
            })
        }catch(error){
            console.log(`ERROR DEL POKE NAME ${error}`)   
        }

    }
}


// export const getPokeId = (id)=> dispatch => {
//     return fetch(`http://localhost:3001/pokemons/${id}`)
//     .then(r => r.json())
//     .then(houseId=>dispatch({type:'POKEMON_ID', payload:houseId}))
// };
export const getType = () => dispatch => {
    return fetch(`http://localhost:3001/types`)
    .then( r => r.json())
    .then(typeGet => dispatch ({
        type: 'GET_TYPES',
        payload: typeGet
    }))
}


export function postPokemon (payload){
    return async function (dispatch){
        const response = axios.post('http://localhost:3001/pokemons', payload)
        console.log(response)
        return response;
    }
}
    

export function filterByOrder (payload){
    console.log(payload)
    return {
        type: 'FILTER_BY_ORDER',
        payload
    }
}

export function filterByAttack(payload){
    console.log(payload)
    return {
        type: 'FILTER_BY_ATTACK',
        payload
    }
}
export function filterByType(payload){
    return {
        type:'FILTER_BY_TYPE',
        payload
    }
}
export function filterByDb(created){
    return {
        type: 'FILTER_CREATED',
        payload:created
    };
}



