import axios from 'axios'



export function getPokemon (){
    return async function (dispatch){
        let json = await axios.get('http://localhost:3001/pokemons')
        console.log(`aqui esta el get POKEMON${json}`)
        return dispatch ({
            type: 'GET_POKEMONS',
            payload: json.data
        })
    }
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


export function getPokeId (id) {
    return async function (dispatch){
        try{

            const response = await axios.get ('http://localhost:3001/pokemons/'+ id)
            console.log(`aqui esta el DETAIL ${response}`)
            return dispatch({
                type: 'POKEMON_ID',
                payload: response.data
            })   
       }catch(error){
           console.log('fallo el id')
       }
    }
}

export function getType(){
    return async function (dispatch){
        try{

            const response = await axios.get ('http://localhost:3001/types')
            return dispatch({
                type:'GET_TYPES',
                payload: response.data
            })
        }catch(error){
            console.log('No trajo la id')
        }
        }
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

export function resetId(payload){
    return{
        type:'RESET_ID',
        payload
    }
}