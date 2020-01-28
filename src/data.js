function listTypes (pokemons, typeParametro) {
  if (typeParametro !== "none"){
    return pokemons.filter(poke => poke.type.includes(typeParametro));
  }else {
    document.location.reload(true);
  }  
}

function listText(pokemons, text) {
  return pokemons.filter(poke => poke.name.includes(text));
}

function listOrder(pokemons, Orde) {
  if (Orde === "A-Z") {
    return pokemons.sort((a, b) => (a.name > b.name?1:-1));
  }
  else if (Orde === "Z-A") {
    return pokemons.sort((a, b) => (a.name > b.name?-1:1));
  }
  else {
    document.location.reload(true);
  }
}

function listEgg (pokemons, egg) {
  if (egg === "ovos") {
    return pokemons.filter(poke => !poke.egg.includes("Not in Eggs"));
  }
  else if (egg === "2km") {
    return pokemons.filter(poke => poke.egg.includes("2 km"));
  }
  else if (egg === "5km") {
    return pokemons.filter(poke => poke.egg.includes("5 km"));
  }
  else if (egg === "10km") {
    return pokemons.filter(poke => poke.egg.includes("10 km"));
  }
  else {
    document.location.reload(true);
  }
}

function printStatic (data) {
  return ((data.length*100)/151).toFixed(2);
}

app = {
  listTypes,
  listText,
  listOrder,
  listEgg,
  printStatic
};                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        