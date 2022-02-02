const express =require('express')

const router = express.Router()


const {getTypes} =require('./Controllers/Types')

router.get('/', getTypes)


module.exports= router;