export function setTypes(data) {
    var type1 = data.types[0].type.name
    typeImage1.src = typeSelector(type1);

    if(data.types[1]) {
        pokemonType2.style.display = "inline-block";
        var type2 = data.types[1].type.name
        typeImage2.src = typeSelector(type2)
    }else{
        pokemonType2.style.display = "none";
    }
}

function typeSelector(data) {
    const Type = {
        dragon: './IMG/pokemonTypes/Dragon.png',
        fire: './IMG/pokemonTypes/Fire.png',
        water: './IMG/pokemonTypes/Water.png',
        ground: './IMG/pokemonTypes/Ground.png',
        rock: './IMG/pokemonTypes/Rock.png',
        dark: './IMG/pokemonTypes/Dark.png',
        fairy: './IMG/pokemonTypes/Fairy.png',
        ice: './IMG/pokemonTypes/Ice.png',
        grass: './IMG/pokemonTypes/Grass.png',
        steel: './IMG/pokemonTypes/Steel.png',
        psychic: './IMG/pokemonTypes/Psychic.png',
        poison: './IMG/pokemonTypes/Poison.png',
        ghost: './IMG/pokemonTypes/Ghost.png',
        flying: './IMG/pokemonTypes/Flying.png',
        fighting: './IMG/pokemonTypes/Fighting.png',
        electric: './IMG/pokemonTypes/Electric.png',
        normal: './IMG/pokemonTypes/Normal.png',
        bug: './IMG/pokemonTypes/Bug.png'
    }

    return Type[data];
}

export function moveTypeSelector(data) {

    const moveTypes = {
        dragon: './IMG/moveTypes/Dragon.png',
        fire: './IMG/moveTypes/Fire.png',
        water: './IMG/moveTypes/Water.png',
        ground: './IMG/moveTypes/Ground.png',
        rock: './IMG/moveTypes/Rock.png',
        dark: './IMG/moveTypes/Dark.png',
        fairy: './IMG/moveTypes/Fairy.png',
        ice: './IMG/moveTypes/Ice.png',
        grass: './IMG/moveTypes/Grass.png',
        steel: './IMG/moveTypes/Steel.png',
        psychic: './IMG/moveTypes/Psychic.png',
        poison: './IMG/moveTypes/Poison.png',
        ghost: './IMG/moveTypes/Ghost.png',
        flying: './IMG/moveTypes/Flying.png',
        fighting: './IMG/moveTypes/Fighting.png',
        electric: './IMG/moveTypes/Electric.png',
        normal: './IMG/moveTypes/Normal.png',
        bug: './IMG/moveTypes/Bug.png'
    }

    return moveTypes[data];
}