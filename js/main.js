import {setTypes} from "./setPokemonType.js";
import {setStats} from "./setStatNumbers.js";
import {setSprite} from "./setPokemonSprite.js";
import {clearInput} from "./clearInputField.js";
import {setMoveList} from "./createMovesList.js";

    var pokemonType1 = document.getElementById("pokemonType1");
    var pokemonType2 = document.getElementById("pokemonType2");
    var typeImage1 = document.getElementById("typeImage1");
    var typeImage2 = document.getElementById("typeImage2");
    var moveName = document.getElementById("move");
    var moveLevel = document.getElementById("level");
    var movesTable = document.getElementById("movesTable");
    var movesList = document.getElementsByClassName("movesList");
    var inputField = document.getElementById("pokemonName")

    var objectArray = [];
    var apiObject = {};
    var status = false;
    var arrayIndex = objectArray.length;
    var currentArrayIndex = 0;



    inputField.addEventListener('keypress', function(e){
    if (e.key === 'Enter'){
    fetchPokemon()
}
})
    const fetchPokemonButton = document.getElementById("fetchPokemon")

    fetchPokemonButton.addEventListener('click',fetchPokemon);

    const prevPokemonButton = document.getElementById("prevPokemon")

    // prevPokemonButton.addEventListener('click',prevObject());

    async function setArrayIndex(){
    let thisArrayIndex = await objectArray.length;
    currentArrayIndex = thisArrayIndex - 1;

    return currentArrayIndex;
}

    async function prevIndex(){
    if(currentArrayIndex > 0) {
    currentArrayIndex = await currentArrayIndex - 1;

    var currentObject = await objectArray[currentArrayIndex];

    return currentArrayIndex;
}
}

    async function prevObject(object){
    prevIndex()
        .then(() => {
            updateObject(object);
        })
}

    async function nextIndex(){
    var totalLength = await (objectArray.length) - 1;
    if(currentArrayIndex < totalLength) {
    currentArrayIndex = await currentArrayIndex + 1;

    // console.log(currentArrayIndex)
    return currentArrayIndex;
}
}


    async function nextObject(object){
    nextIndex()
        .then(() => {
            updateObject(object);
        })
}

    function updateObject(object) {
    var currentObject = object[currentArrayIndex];
    setSprite(currentObject);
    setStats(currentObject);
    setStatBar(currentObject);
    setTypes(currentObject);
    setMoveList(currentObject);

}

    function fetchPokemon(){
    const pokemonName = document.getElementById("pokemonName").value.toLowerCase();

    fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`)

    .then(function(pokeObject){
    // console.log(pokeObject);
    clearInput(pokeObject);
    return pokeObject;
})
    .then(pokeObject => pokeObject.json())
    .then(function(pokeObject) {

    apiObject = pokeObject;

    status = true;

    setSprite(pokeObject)
    setStats(pokeObject);
    setStatBar(pokeObject);
    setTypes(pokeObject);
    storeObject(pokeObject);
    setArrayIndex();
    setMoveList(pokeObject);
    movesTable.scrollTo(500,0)

    status = false;
})
    .catch(function(error){
    console.error(error)
    status = false;
    // console.log(status)
});
}

    function storeObject(data){
    if(status) {
    // console.log(status);
    objectArray.push(data);
    console.log(objectArray);
}
    // status = false;
    // else{
    //     console.log(status)
    // }
}
    async function setStatBar(data){
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
