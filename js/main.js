    //Modules import
    import {setTypes} from "./setPokemonType.js";
    import {setStats} from "./setStatNumbers.js";
    import {setSprite} from "./setPokemonSprite.js";
    import {clearInput} from "./clearInputField.js";
    import {setMoveList} from "./createMovesList.js";
    import {currentArrayIndex, objectArray, prevObject,nextObject, setArrayIndex} from "./pokemonSelector.js";

    //DOM elements
    var pokemonType1 = document.getElementById("pokemonType1");
    var pokemonType2 = document.getElementById("pokemonType2");
    var typeImage1 = document.getElementById("typeImage1");
    var typeImage2 = document.getElementById("typeImage2");
    var moveName = document.getElementById("move");
    var moveLevel = document.getElementById("level");
    var movesTable = document.getElementById("movesTable");
    var movesList = document.getElementsByClassName("movesList");
    var inputField = document.getElementById("pokemonName")
    const fetchPokemonButton = document.getElementById("fetchPokemon")
    const prevPokemonButton = document.getElementById("prevPokemon")
    const nextPokemonButton = document.getElementById("nextPokemon")

    //variables
    var status = false;

    //Event Listeners
    inputField.addEventListener('keypress', function(e){
        if (e.key === 'Enter'){
            fetchPokemon()
        }
    })
    fetchPokemonButton.addEventListener('click',function (e){
        if (inputField.value !== ""){
            fetchPokemon()
        }
    });
    prevPokemonButton.addEventListener('click', function (e){
        prevObject()
    });
    nextPokemonButton.addEventListener('click', function (e){
        nextObject()
    });

    function fetchPokemon(){
    let pokemonName = document.getElementById("pokemonName").value.toLowerCase();
    //i should add a rule so that empty space around the string gets removed

    fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`)

    .then(function(responseObject){
    clearInput(responseObject);
    return responseObject;
})
    .then(responseObject => responseObject.json())
    .then(function(pokeObject) {

    status = true;

    setSprite(pokeObject)
    setStats(pokeObject);
    setStatBars(pokeObject);
    setTypes(pokeObject);
        if(status) {
            objectArray.push(pokeObject);
            console.log(objectArray)
        }
    setArrayIndex();
    setMoveList(pokeObject);
    movesTable.scrollTo(500,0)

    status = false;
})
    .catch(function(error){
    console.error(error)
    status = false;
});
}

    export async function setStatBars(data){
    const object = await data;
    const stats = object.stats;
    var x = window.matchMedia("(max-width: 600px)")

    async function checkWidth(matchMedia){
    if(matchMedia.matches){
    var hp = document.getElementById("hpstat");
    hp.style.width = stats[0].base_stat * 1.5
    var attack = document.getElementById("attackstat");
    attack.style.width = stats[1].base_stat * 1.5
    var defense = document.getElementById("defensestat");
    defense.style.width = stats[2].base_stat * 1.5
    var sattack = document.getElementById("sattackstat");
    sattack.style.width = stats[3].base_stat * 1.5
    var sdefense = document.getElementById("sdefensestat");
    sdefense.style.width = stats[4].base_stat * 1.5
    var speed = document.getElementById("speedstat");
    speed.style.width = stats[5].base_stat * 1.5
}else{
    var hp = document.getElementById("hpstat");
    hp.style.width = stats[0].base_stat * 2.5
    var attack = document.getElementById("attackstat");
    attack.style.width = stats[1].base_stat * 2.5
    var defense = document.getElementById("defensestat");
    defense.style.width = stats[2].base_stat * 2.5
    var sattack = document.getElementById("sattackstat");
    sattack.style.width = stats[3].base_stat * 2.5
    var sdefense = document.getElementById("sdefensestat");
    sdefense.style.width = stats[4].base_stat * 2.5
    var speed = document.getElementById("speedstat");
    speed.style.width = stats[5].base_stat * 2.5
}
}
    checkWidth(x);
}

    function scrollDown(){
    movesTable.scrollTop = movesTable.scrollHeight
}
