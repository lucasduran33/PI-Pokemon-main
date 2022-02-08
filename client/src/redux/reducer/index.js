const initialState = {
    pokemons: [],
    allPokemons: [],
    pokeDetail:[],
    setPokeDetai:[],
    typePokemon:[]
}

export default function rootReducer (state= initialState, action){
    switch (action.type){
        case 'GET_POKEMONS':
            return {
                ...state,
                pokemons: action.payload,
                allPokemons:action.payload

            }
        case  'GET_TYPES':
            return{
                ...state,
                typePokemon: action.payload
            }
        case 'GET_NAME_POKEMON':
            return {
                ...state,
                pokemons:action.payload
            }
        case  'POKEMON_DETAIL':
                return {
                    ...state,
                    pokeDetail:action.payload
                }
        case 'RESET_ID':
            return {
                ...state,
                pokeDetail:[]
            }
        
        case 'POST_POKEMON':
            return {
                ...state
            }
        case 'FILTER_BY_TYPE':
            const allFilterPoke = state.allPokemons
            const typeFiltered = action.payload === 'allTypes' ? allFilterPoke : allFilterPoke.filter((el)=> el.type.includes(action.payload))
            return {
                ...state,
                pokemons: typeFiltered
            }    
        case 'FILTER_BY_ORDER':
            let sortName = action.payload ==='asc'?
            state.pokemons.sort(function (a,b){
                if (a.name > b.name){
                    return 1;
                }
                if(b.name > a.name){
                    return -1;
                }
                return 0 ; 
            
            }):
            state.pokemons.sort(function(a,b){
                if(a.name > b.name){
                    return -1;
               
                }
                if (b.name > a.name){
                    return 1;
                }
                return 0
            })
            return {
                ...state,
                pokemons:sortName
                 
            }
        case 'FILTER_BY_ATTACK':
            let sorrtAttack = action.payload === 'mayorAttack' ?
            state.pokemons.sort(function(a,b){
                if(a.attack > b.attack){
                    return 1;
                }
                if (b.attack > a.attack){
                    return -1;
                }
                return 0;
            }) :
            state.pokemons.sort(function (a, b){
                if (a.attack > b.attack){
                    return -1;
                }
                if (b.attack > a.attack){
                    return 1;
                }
                return 0;
            })
            return {
                    ...state,
                    pokemons: sorrtAttack
                }
           
        default :
        return {
            ...state,
        }
    }
}