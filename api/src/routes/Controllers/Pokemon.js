const axios = require('axios')
const {Pokemon, Types}= require('../../db')
const {getApiInfo,getDbInfo, getDataID,getPokemonData,getNamesByTypes} = require('./AuxFunciones')


const getPokemon = async (req, res) => {
    const {name} = req.query;
    try{
    
        if(!name){
            const pokemonDb = await getDbInfo()
            const pokemonAPI = await getApiInfo()
            return res.send([...pokemonDb, ...pokemonAPI])
        }
        
            else {
                const pokeName = name.trim().toLowerCase();
                let pokeDb = await Pokemon.findOne({
                where:{
                    name: pokeName,
                },
                include: Types
            });
            if(pokeDb){
                pokeDb ={
                    ...pokeDb.dataValues,
                    types: getNamesByTypes(pokeDb)
                };
                return res.send(pokeDb)
            }else {
    
                let pokeAPI = await axios.get(
                    `https://pokeapi.co/api/v2/pokemon/${pokeName}`
                    );
                    pokeAPI= getPokemonData(pokeAPI);
                    return res.send(pokeAPI);
                }
            }
        }catch(error){
            console.log(`Fallo el get ${error}`)
        }
         
     }
    
        
        
        









const BuscarPoke = async (req, res) => {
    const id = req.params.id;
   
     
 try{
     let pokemonDB = await Pokemon.findOne({where: {id}, include:Types})
     pokemonDB = {...pokemonDB.dataValues, types: getNamesByTypes(pokemonDB)}
    }catch(error){
      try{
        let pokemonAPI = await axios.get(
            `https://pokeapi.co/api/v2/pokemon/${id}`
          );

    pokemonAPI = getDataID(pokemonAPI);
    return res.send(pokemonAPI)       

      }catch(error){
          return res.status(404).send(error)
      }
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



















