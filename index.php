<?php
echo 'Hello World';
echo "<br>";
?>

<!doctype html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Pokedex</title>
    <style>
        .anim {
            height: 10px;
            border-style: solid;
            border-width: 1px;
            width: 0px;
            transition: width 2s;
        }

        /*.anim:active {*/
        /*    width: 200px;*/
        /*}*/
        /*@keyframes mymove {*/
        /*    from {width: 0px;}*/
        /*    to {width: 200px;}*/
        /*}*/
        /*.anim {*/
        /*    width: 100px*/
        /*}*/
    </style>
</head>
<body>

<input type="text" id="pokemonName" placeholder="Enter Pokemon name">
<button onclick="fetchPokemon();"> fetch Pokemon</button>
<button onclick="prevObject(objectArray);"> Prev Pokemon</button>
<button onclick="nextObject(objectArray);"> Next Pokemon</button>
<button onclick="addBug()"> Add Bug</button>

<br>
<div>
    <div style="display: flex; margin-top: 10px">
        <img src="" alt="Pokemon Sprite" id="pokemonSprite" style="display: none">
        <!--    <div style="width: 200px; height: 20px; border-style: solid; border-width: 1px">-->
        <!---->
        <!--    </div>-->
        <div>
            <a href="https://pokemonshowdown.com" target="_blank">Find me on Showdown @GlaiveVG</a>
        </div>
    </div>
    <table>
        <tr>
            <th id="name" colspan="2"></th>
        </tr>
        <tr>
            <td>hp</td>
            <td id="hp"></td>
            <td>
                <div class="anim" id="hpstat"></div>
            </td>
        </tr>
        <tr>
            <td>attack</td>
            <td id="attack"></td>
            <td>
                <div class="anim" id="attackstat" style="height: 10px; width: 0px; border-style: solid; border-width: 1px"></div>
            </td>
        </tr>
        <tr>
            <td>defense</td>
            <td id="defense"></td>
            <td>
                <div class="anim" id="defensestat" style="height: 10px; width: 0px; border-style: solid; border-width: 1px"></div>
            </td>
        </tr>
        <tr>
            <td>S.attack</td>
            <td id="s.attack"></td>
            <td>
                <div class="anim" id="sattackstat" style="height: 10px; width: 0px; border-style: solid; border-width: 1px"></div>
            </td>
        </tr>
        <tr>
            <td>S.defense</td>
            <td id="s.defense"></td>
            <td>
                <div class="anim" id="sdefensestat" style="height: 10px; width: 0px; border-style: solid; border-width: 1px"></div>
            </td>
        </tr>
        <tr>
            <td>speed</td>
            <td id="speed"></td>
            <td>
                <div class="anim" id="speedstat" style="height: 10px; width: 0px; border-style: solid; border-width: 1px"></div>
            </td>
        </tr>
        <tr>
            <td>Total:</td>
            <td>
                <div id="total"></div>
            </td>
        </tr>
    </table>
</div>
<br>
<div style="width: 250px">
    <div id="pokemonType1" style="display: inline-block ;text-align: center; width: 100px; height: 20px; margin: 5px">
        <img id="typeImage1" src="" alt="">
    </div>
    <div id="pokemonType2" style="display: none ;float: right ;text-align: center; width: 100px; height: 20px; margin: 5px">
        <img id="typeImage2" src="" alt="">
    </div>
</div>
<br>
<table id="movesTable" border="1">
    <tr style="border: 1px solid">
        <th id="" colspan="">Level</th>
        <th id="" colspan="">Move</th>
        <th id="moveType" colspan="">Type</th>
    </tr>
    <tr>
        <td id="level"></td>
        <td id="move"></td>
        <td></td>
    </tr>
</table>

<script>
    var pokemonType1 = document.getElementById("pokemonType1");
    var pokemonType2 = document.getElementById("pokemonType2");
    var typeImage1 = document.getElementById("typeImage1");
    var typeImage2 = document.getElementById("typeImage2");
    var moveName = document.getElementById("move");
    var moveLevel = document.getElementById("level");
    var movesTable = document.getElementById("movesTable");

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

        var hp = document.getElementById("hpstat");
        hp.style.width = stats[0].base_stat * 2
        var attack = document.getElementById("attackstat");
        attack.style.width = stats[1].base_stat * 2
        var defense = document.getElementById("defensestat");
        defense.style.width = stats[2].base_stat * 2
        var sattack = document.getElementById("sattackstat");
        sattack.style.width = stats[3].base_stat * 2
        var sdefense = document.getElementById("sdefensestat");
        sdefense.style.width = stats[4].base_stat * 2
        var speed = document.getElementById("speedstat");
        speed.style.width = stats[5].base_stat * 2
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

        var moveString = "";

        for(let i = 0; i < movesArray.length; ++i){
            var singleMove = movesArray[i].move
            moveString += `<tr><td>${singleMove}<td></tr>`;
        }

        movesTable.innerHTML = moveString;

        document.getElementById("level").innerText = movesArray[0].level
        document.getElementById("move").innerText = movesArray[0].move


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

    function addBug(){
        pokemonType2.style.display = "inline-block";
        typeImage2.src = 'Types/Bug.png';
    }
</script>

</body>
</html>
