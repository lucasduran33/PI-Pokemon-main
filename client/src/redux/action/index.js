import axios from 'axios'



export function getPokemon (){
    return async function (dispatch){
        let json = await axios.get('http://localhost:3001/pokemons')
        console.log(json)
        return dispatch ({
            type: 'GET_POKEMONS',
            payload: json.data
        })
    }
}

export function getPokeName (name){
    return async function (dispatch){
      try{
          var json= await axios.get('http://localhost:3001/pokemons?name='+ name)
            return dispatch ({
                type: 'GET_NAME_POKEMON',
                payload: json.data
            })
        }catch(error){
            console.log(error)   
        }

    }
}
