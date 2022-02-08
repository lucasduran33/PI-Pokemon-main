const {Pokemon, Types}= require('../../db')
const axios = require('axios')


  function getPokemonData(pokeinf) {
    return {
      id: pokeinf.data.id,
      name: pokeinf.data.name,
      // hp: pokeinf.data.stats[0].base_stat,
      attack: pokeinf.data.stats[1].base_stat,
      // defense: pokeinf.data.stats[2].base_stat,
      // speed: pokeinf.data.stats[5].base_stat,
      // height: pokeinf.data.height,
      // weight: pokeinf.data.weight,
     
      sprites: pokeinf.data.sprites.other.dream_world.front_default,
      type:pokeinf.data.types.map((e) => e.type.name),
    };
  }

  function getDataID(pokeinf) {
    return {
      id: pokeinf.data.id,
      name: pokeinf.data.name,
      hp:pokeinf.data.stats[0].base_stat,
      attack: pokeinf.data.stats[1].base_stat,
      defense: pokeinf.data.stats[2].base_stat,
      speed: pokeinf.data.stats[5].base_stat,
      height: pokeinf.data.height,
      weight: pokeinf.data.weight,
      moves: pokeinf.data.moves.map((m)=> m.move.name),
      sprites:pokeinf.data.sprites.versions['generation-v']["black-white"].animated.front_default,
      type: pokeinf.data.types.map((e) => e.type.name),
    };
  }

  function getNamesByTypes(pokemon) {
    pokemon = pokemon.types.map((e) => e.dataValues.name);
    return pokemon;
  }

async function getApiInfo() {


    // ---> Traemos a los pokemon desde el API
    const dataAPI = await axios.get('https://pokeapi.co/api/v2/pokemon?limit=40'); //obtenemos pokemons del 1 al 40
    const poke = [...dataAPI.data.results]; // array de resultados que contienen la info para acceder a cada pokemon
    const data = await Promise.all(
        poke.map((pokemon) => axios.get(pokemon.url)) //genero un array de promesas
    ); //paso mi array de promesas para resolverlo
    let arrPokemons = []; // array auxiliar para guardar la info filtrada de cada pokemon
    data.forEach((pokemon) => {
      arrPokemons.push({
        ...getPokemonData(pokemon), //obtenemos la data y la guardamos en el array de pokemons
      });
    });
    return arrPokemons;
  }
  async function getDbInfo() {
    let arrPokemonsDb = [];
    arrPokemonsDb = await Pokemon.findAll({
      include: {
        model: Types,
        atributes: ['name'], //trae la data mediante el nombre(la propiedad del modelo type)
        thorugh: {
          atributes: [], //para comprobación, siempre va
        },
      },
    });
    arrPokemonsDb = arrPokemonsDb.map((e) => {
      return { ...e.dataValues, types: getNamesByTypes(e.dataValues) };
    });
    return arrPokemonsDb.reverse();
  }




  module.exports={getDataID, getPokemonData, getNamesByTypes, getApiInfo, getDbInfo}