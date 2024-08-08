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
<!--<button onclick="getStats(apiObject);statBar(apiObject)">Fetch Stats v2</button>-->
<button onclick="fetchPokemon();"> fetch Pokemon</button>
<!--<button onclick="updateObject(objectArray);">Current Object</button>-->
<button onclick="prevObject(objectArray);"> Prev Pokemon</button>
<button onclick="nextObject(objectArray);"> Next Pokemon</button>
<!--<button onclick="displayArrayIndex();">Current Array Index</button>-->

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
    <div id="pokemonType1" style="display: inline-block ;text-align: center; width: 100px; height: 20px; border-style: solid; border-width: 1px; margin: 5px">
        <img id="typeImage1" src="Types/Normal.png" alt="no bug yet">
    </div>
    <div id="pokemonType2" style="display: none ;float: right ;text-align: center; width: 100px; height: 20px; border-style: solid; border-width: 1px; margin: 5px">

    </div>
</div>


<script>
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

    }

    var pokemonType1 = document.getElementById("pokemonType1");
    var pokemonType2 = document.getElementById("pokemonType2");
    var typeImage1 = document.getElementById("typeImage1");

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
        console.log(data);
        var type1 = data.types[0].type.name
        pokemonType1.innerText = type1
        console.log(type1);
        if(type1 === "bug"){
            typeImage1.src = 'Types/Bug.png';
            console.log("Bug here");
        }
        if(data.types[1]) {
            var secondType = data.types[1].type.name
            pokemonType2.style.display = "inline-block";
            pokemonType2.innerText = secondType
        }else{
            pokemonType2.style.display = "none";
        }
    }
    //
    // switch{
    //
    // }
</script>

</body>
</html>
