const axios = require('axios')
const {Pokemon, Types}= require('../../db')

const getPokemon = async (req, res, next) => {

const name= req.query.name;
try{
const getApi1 = await axios.get('https://pokeapi.co/api/v2/pokemon')
const getApi2= await axios.get(getApi1.data.next)
const allPoke =  [...getApi1.data.results, ...getApi2.data.results]

 const getDB = await Pokemon.findAll({include:Types})


 const pokeData = []

 for(i = 0; i <allPoke.length; i++){
     console.log('Inicia tu G E T')
     if(!allPoke[i]) return pokeData;
    if(allPoke[i].url){
       await axios.get(allPoke[i].url)
            .then(response => {
                pokemones = response
            })
            .catch(error => {
                console.log('entro al catch')

            })     
            const info = await pokemones.data
            pokeData.push({
                id: info.id,
                name: info.name,
                type: info.types.map((t) => t.type.name),
                moves: info.moves.map((m)=> m.move.name),
                sprites: info.sprites.other.dream_world.front_default,
                weight: info.weight,
                height: info.height,
                hp: info.stats[0].base_stat,
                attack: info.stats[1].base_stat,
                defense: info.stats[2].base_stat,
                speed: info.stats[5].base_stat,
                createdInDB: false
               
              });
    }       
 }
 const totalPokemons = []
if(!getDB){
    res.send(pokeData)
}else {
    totalPokemons.push(...pokeData, ...getDB)
}

if(!name){
    res.status(200).send(totalPokemons)
}else{
    let nameFilter = await totalPokemons.filter(el => el.name.toLowerCase() === (name.toLowerCase()))
    console.log(nameFilter)

    nameFilter.length?
    res.status(200).send(nameFilter):
    res.status(404).send('Pokemon no encontrado')
    
}

} catch(error){
    next(error)
}
}


const BuscarPoke = async (req, res, next) => {
    const id = req.params.id;
    const pokeTotal = await getPokemon();
if (id) {
    let pokeId = await pokeTotal.filter(el => el.id == id);
    pokeId.length?
    res.status(200).json(pokeId):
    res.status(404).send('Pokemon no encontrado')
}
}

const crearPoke = async (req, res, next) => {
    let  {
        name,
        types,
        height,
        weight,
        sprites,
        moves,
        hp,
        attack,
        defense,
        speed,
        createdInDb,
    } = req.body
        

let pokeCreated = await Pokemon.create({
    name,
    weight,
    height,
    sprites,
    moves,
    hp,
    attack,
    defense,
    speed,
    createdInDb,
   
})
let typeDb = await Types.findAll({
    where:{
        name: types
    }
})
pokeCreated.addTypes(typeDb)?
res.status(200).send('Pokemon creado con exito'):
res.status(404).send('Error en cargar receta')
console.log(req.body)
}


const deletePoke = async (req, res, next) => {
const {id} = req.params

Pokemon.destroy({where: {id}})
.then(() => {
    return res.send({deleteStatus: 'Pokemon borrado'})
})
.catch(err => {
    res.send({deleteStatus:err })
    next(err)
})
}

module.exports={
    getPokemon,
    BuscarPoke,
    crearPoke,
    deletePoke
}