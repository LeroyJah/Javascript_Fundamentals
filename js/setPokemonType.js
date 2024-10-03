export function setTypes(data) {
    var type1 = data.types[0].type.name
    typeSelector1(type1);

    if(data.types[1]) {
        pokemonType2.style.display = "inline-block";
        var type2 = data.types[1].type.name
        typeSelector2(type2);
    }else{
        pokemonType2.style.display = "none";
    }
}

function typeSelector1(data){
    switch(data){
        case data = "dragon":
            typeImage1.src = './IMG/pokemonTypes/Dragon.png';
            break;
        case data = "fire":
            typeImage1.src = './IMG/pokemonTypes/Fire.png';
            break;
        case data = "water":
            typeImage1.src = './IMG/pokemonTypes/Water.png';
            break;
        case data = "ground":
            typeImage1.src = './IMG/pokemonTypes/Ground.png';
            break;
        case data = "rock":
            typeImage1.src = './IMG/pokemonTypes/Rock.png';
            break;
        case data = "dark":
            typeImage1.src = './IMG/pokemonTypes/Dark.png';
            break;
        case data = "fairy":
            typeImage1.src = './IMG/pokemonTypes/Fairy.png';
            break;
        case data = "ice":
            typeImage1.src = './IMG/pokemonTypes/Ice.png';
            break;
        case data = "grass":
            typeImage1.src = './IMG/pokemonTypes/Grass.png';
            break;
        case data = "steel":
            typeImage1.src = './IMG/pokemonTypes/Steel.png';
            break;
        case data = "psychic":
            typeImage1.src = './IMG/pokemonTypes/Psychic.png';
            break;
        case data = "poison":
            typeImage1.src = './IMG/pokemonTypes/Poison.png';
            break;
        case data = "ghost":
            typeImage1.src = './IMG/pokemonTypes/Ghost.png';
            break;
        case data = "flying":
            typeImage1.src = './IMG/pokemonTypes/Flying.png';
            break;
        case data = "fighting":
            typeImage1.src = './IMG/pokemonTypes/Fighting.png';
            break;
        case data = "electric":
            typeImage1.src = './IMG/pokemonTypes/Electric.png';
            break;
        case data = "normal":
            typeImage1.src = './IMG/pokemonTypes/Normal.png';
            break;
        case data = "bug":
            typeImage1.src = './IMG/pokemonTypes/Bug.png';
            break;
    }
}

function typeSelector2(data) {
    switch (data) {
        case data = "dragon":
            typeImage2.src = './IMG/pokemonTypes/Dragon.png';
            break;
        case data = "fire":
            typeImage2.src = './IMG/pokemonTypes/Fire.png';
            break;
        case data = "water":
            typeImage2.src = './IMG/pokemonTypes/Water.png';
            break;
        case data = "ground":
            typeImage2.src = './IMG/pokemonTypes/Ground.png';
            break;
        case data = "rock":
            typeImage2.src = './IMG/pokemonTypes/Rock.png';
            break;
        case data = "dark":
            typeImage2.src = './IMG/pokemonTypes/Dark.png';
            break;
        case data = "fairy":
            typeImage2.src = './IMG/pokemonTypes/Fairy.png';
            break;
        case data = "ice":
            typeImage2.src = './IMG/pokemonTypes/Ice.png';
            break;
        case data = "grass":
            typeImage2.src = './IMG/pokemonTypes/Grass.png';
            break;
        case data = "steel":
            typeImage2.src = './IMG/pokemonTypes/Steel.png';
            break;
        case data = "psychic":
            typeImage2.src = './IMG/pokemonTypes/Psychic.png';
            break;
        case data = "poison":
            typeImage2.src = './IMG/pokemonTypes/Poison.png';
            break;
        case data = "ghost":
            typeImage2.src = './IMG/pokemonTypes/Ghost.png';
            break;
        case data = "flying":
            typeImage2.src = './IMG/pokemonTypes/Flying.png';
            break;
        case data = "fighting":
            typeImage2.src = './IMG/pokemonTypes/Fighting.png';
            break;
        case data = "electric":
            typeImage2.src = './IMG/pokemonTypes/Electric.png';
            break;
        case data = "normal":
            typeImage2.src = './IMG/pokemonTypes/Normal.png';
            break;
        case data = "bug":
            typeImage2.src = './IMG/pokemonTypes/Bug.png';
            break;
    }
}

export function moveTypeSelector(data) {
    switch (data) {
        case data = "dragon":
            return './IMG/moveTypes/Dragon.png';
        case data = "fire":
            return './IMG/moveTypes/Fire.png';
        case data = "water":
            return './IMG/moveTypes/Water.png';
        case data = "ground":
            return './IMG/moveTypes/Ground.png';
        case data = "rock":
            return './IMG/moveTypes/Rock.png';
        case data = "dark":
            return './IMG/moveTypes/Dark.png';
        case data = "fairy":
            return './IMG/moveTypes/Fairy.png';
        case data = "ice":
            return './IMG/moveTypes/Ice.png';
        case data = "grass":
            return './IMG/moveTypes/Grass.png';
        case data = "steel":
            return './IMG/moveTypes/Steel.png';
        case data = "psychic":
            return './IMG/moveTypes/Psychic.png';
        case data = "poison":
            return './IMG/moveTypes/Poison.png';
        case data = "ghost":
            return './IMG/moveTypes/Ghost.png';
        case data = "flying":
            return './IMG/moveTypes/Flying.png';
        case data = "fighting":
            return './IMG/moveTypes/Fighting.png';
        case data = "electric":
            return './IMG/moveTypes/Electric.png';
        case data = "normal":
            return './IMG/moveTypes/Normal.png';
        case data = "bug":
            return './IMG/moveTypes/Bug.png';
    }
}