import {typeSelector1,typeSelector2} from "./showTypes.js";

var pokemonType1 = document.getElementById("pokemonType1");
    var pokemonType2 = document.getElementById("pokemonType2");
    var typeImage1 = document.getElementById("typeImage1");
    var typeImage2 = document.getElementById("typeImage2");
    var moveName = document.getElementById("move");
    var moveLevel = document.getElementById("level");
    var movesTable = document.getElementById("movesTable");
    var movesList = document.getElementsByClassName("movesList");

    var objectArray = [];
    var apiObject = {};
    var status = false;
    var arrayIndex = objectArray.length;
    var currentArrayIndex = 0;

    var inputField = document.getElementById("pokemonName")

    inputField.addEventListener('keypress', function(e){
    if (e.key === 'Enter'){
    fetchPokemon()
}
})
    const fetchPokemonButton = document.getElementById("fetchPokemon")

    fetchPokemonButton.addEventListener('click',fetchPokemon);

    const prevPokemonButton = document.getElementById("prevPokemon")

    // prevPokemonButton.addEventListener('click',prevObject());






    function displayArrayIndex(){
    console.log(currentArrayIndex)
}

    async function setArrayIndex(){
    thisArrayIndex = await objectArray.length;
    currentArrayIndex = thisArrayIndex - 1;

    // console.log(currentArrayIndex)
    return currentArrayIndex;
}

    async function prevIndex(){
    if(currentArrayIndex > 0) {
    currentArrayIndex = await currentArrayIndex - 1;

    // console.log(currentArrayIndex)
    var currentObject = await objectArray[currentArrayIndex];
    // updateObject(currentObject);
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

    async function setStats(data){
    const object = await data;
    const stats = object.stats;
    const total = (stats[0].base_stat)+(stats[1].base_stat)+(stats[2].base_stat)+(stats[3].base_stat)+(stats[4].base_stat)+(stats[5].base_stat)

    document.getElementById("hp").innerText = stats[0].base_stat
    document.getElementById("attack").innerText = stats[1].base_stat
    document.getElementById("defense").innerText = stats[2].base_stat
    document.getElementById("s.attack").innerText = stats[3].base_stat
    document.getElementById("s.defense").innerText = stats[4].base_stat
    document.getElementById("speed").innerText = stats[5].base_stat
    document.getElementById("name").innerText = object.name
    document.getElementById("total").innerText = total
}

    async function clearInput(response){
    const status = await response;
    if(status.ok === true){
    // document.getElementById("name").innerText = ""
    document.getElementById("pokemonName").value = ""
}else {
    document.getElementById("name").innerText = "Could not find Pokemon"
    setTimeout(() => {
    document.getElementById("name").innerText = ""
},3000);
}
}

    async function setSprite(data){
    var pokeSprite = await data.sprites.front_default;
    var imgElement = document.getElementById("pokemonSprite")

    imgElement.src = pokeSprite;
    imgElement.style.display = "block";
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

    async function setTypes(data) {
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

    async function setMoveList(data) {
    var moves = apiObject.moves
    var movesArray = [];
    var totalMoves = 0;

    for(let i = 0; i < moves.length; i++){ //loop to go through every move known to said pokemon
    for(let j = 0; j < moves[i].version_group_details.length; j++){//loop to go through every iteration of said move
    // totalMoves = totalMoves + apiObject.moves[i].version_group_details.length
    // console.log(totalMoves)
    if(apiObject.moves[i].version_group_details[j].version_group.name == "firered-leafgreen"){
    if(apiObject.moves[i].version_group_details[j].level_learned_at > 0){//if-statement for moves learned by level-up only
    var movesObject = {
    level: 0,
    move: "",
    type: ""
};

    movesObject.level = apiObject.moves[i].version_group_details[j].level_learned_at
    movesObject.move = apiObject.moves[i].move.name
    movesArray.push(movesObject)
}
}
}
}
    var sortArray = movesArray.sort((a, b) =>
    a.level - b.level
    )
    console.log(sortArray)

    var moveLevel = 0;
    var moveString = "hi";

    for(let i = 0; i < movesArray.length; ++i){
    moveLevel = movesArray[i].level
    moveString = movesArray[i].move

    moveLevel = `<td>${moveLevel}</td>`;


    var createTableRow =
    document.createElement('tr');
    var createTableData =
    document.createElement('td');

    createTableRow.innerHTML = moveLevel
    createTableData.innerHTML = moveString

    movesTable.appendChild(createTableRow)
    createTableRow.appendChild(createTableData)
}
}

    function scrollDown(){
    movesTable.scrollTop = movesTable.scrollHeight
}


    //
    // function addBug(){
//     pokemonType2.style.display = "inline-block";
//     typeImage2.src = 'Types/Bug.png';
// }
