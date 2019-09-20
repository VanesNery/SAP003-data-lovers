//FUNÇOES AQUIIIIII


// function listPokemon (pokemons) { 
//   return pokemons.filter(poke => pokemons.includes());
//   }

function listTypes (pokemons, typeParametro) {
 return pokemons.filter(poke => poke.type.includes(typeParametro));
}

const app = {
  listTypes
};
