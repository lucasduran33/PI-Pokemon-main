const { Router } = require('express');

// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const pokeRoutes = require('./PokemonsR')
const pokeTypes = require('./TypesR')

const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
router.use('/pokemons', pokeRoutes)
router.use('/types', pokeTypes)


module.exports = router;
