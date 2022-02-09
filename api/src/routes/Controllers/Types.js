const { default: axios } = require('axios')
const {Types} = require ('../../db')






const getTypes = async (req, res, next) => {

const typesDb = await Types.findAll()
if(typesDb.length < 1 ){
const total = await axios.get('https://pokeapi.co/api/v2/type');

const TypesA = total.data.results.map(e => {
    return {
        name: e.name
       
    }
})

TypesA.forEach(e =>{
    Types.findOrCreate({
        where:{name: e.name,
        }
    })
})
console.log('se cargaron los types')
}
const allTypes = await Types.findAll();
console.log(allTypes)  
res.send(allTypes)
}


module.exports = {
    getTypes
}