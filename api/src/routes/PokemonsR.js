const express = require('express')
const router = express.Router()


const {getPokemon, BuscarPoke, crearPoke} = require('./Controllers/Pokemon')



router.get('/',getPokemon)

router.get('/:id', BuscarPoke)

router.post('/', crearPoke)



module.exports= router;