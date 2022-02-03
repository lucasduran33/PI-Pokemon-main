const initialState = {
    pokemons: [],
    namePokemon: [],
}

export default function rootReducer (state= initialState, action){
    switch (action.type){
        case 'GET_POKEMONS':
            return {
                ...state,
                pokemons: action.payload,
                

            }
        case 'GET_NAME_POKEMON':
            return {
                ...state,
                namePokemon:action.payload
            }
        default :
        return {
            ...state,
        }
    }
}