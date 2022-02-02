const express = require('express')
const router = express.Router()


const {getPokemon, BuscarPoke, crearPoke, deletePoke} = require('./Controllers/Pokemon')



router.get('/',getPokemon)

router.get('/:id', BuscarPoke)

router.post('/', crearPoke)

router.delete('/:id', deletePoke)

module.exports= router;