export async function setTypes(data) {
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

async function typeSelector1(data){
    switch(data){
        case data = "dragon":
            typeImage1.src = 'Types/Dragon.png';
            break;
        case data = "fire":
            typeImage1.src = 'Types/Fire.png';
            break;
        case data = "water":
            typeImage1.src = 'Types/Water.png';
            break;
        case data = "ground":
            typeImage1.src = 'Types/Ground.png';
            break;
        case data = "rock":
            typeImage1.src = 'Types/Rock.png';
            break;
        case data = "dark":
            typeImage1.src = 'Types/Dark.png';
            break;
        case data = "fairy":
            typeImage1.src = 'Types/Fairy.png';
            break;
        case data = "ice":
            typeImage1.src = 'Types/Ice.png';
            break;
        case data = "grass":
            typeImage1.src = 'Types/Grass.png';
            break;
        case data = "steel":
            typeImage1.src = 'Types/Steel.png';
            break;
        case data = "psychic":
            typeImage1.src = 'Types/Psychic.png';
            break;
        case data = "poison":
            typeImage1.src = 'Types/Poison.png';
            break;
        case data = "ghost":
            typeImage1.src = 'Types/Ghost.png';
            break;
        case data = "flying":
            typeImage1.src = 'Types/Flying.png';
            break;
        case data = "fighting":
            typeImage1.src = 'Types/Fighting.png';
            break;
        case data = "electric":
            typeImage1.src = 'Types/Electric.png';
            break;
        case data = "normal":
            typeImage1.src = 'Types/Normal.png';
            break;
        case data = "bug":
            typeImage1.src = 'Types/Bug.png';
            break;
    }
}

async function typeSelector2(data) {
    switch (data) {
        case data = "dragon":
            typeImage2.src = 'Types/Dragon.png';
            break;
        case data = "fire":
            typeImage2.src = 'Types/Fire.png';
            break;
        case data = "water":
            typeImage2.src = 'Types/Water.png';
            break;
        case data = "ground":
            typeImage2.src = 'Types/Ground.png';
            break;
        case data = "rock":
            typeImage2.src = 'Types/Rock.png';
            break;
        case data = "dark":
            typeImage2.src = 'Types/Dark.png';
            break;
        case data = "fairy":
            typeImage2.src = 'Types/Fairy.png';
            break;
        case data = "ice":
            typeImage2.src = 'Types/Ice.png';
            break;
        case data = "grass":
            typeImage2.src = 'Types/Grass.png';
            break;
        case data = "steel":
            typeImage2.src = 'Types/Steel.png';
            break;
        case data = "psychic":
            typeImage2.src = 'Types/Psychic.png';
            break;
        case data = "poison":
            typeImage2.src = 'Types/Poison.png';
            break;
        case data = "ghost":
            typeImage2.src = 'Types/Ghost.png';
            break;
        case data = "flying":
            typeImage2.src = 'Types/Flying.png';
            break;
        case data = "fighting":
            typeImage2.src = 'Types/Fighting.png';
            break;
        case data = "electric":
            typeImage2.src = 'Types/Electric.png';
            break;
        case data = "normal":
            typeImage2.src = 'Types/Normal.png';
            break;
        case data = "bug":
            typeImage2.src = 'Types/Bug.png';
            break;
    }
}