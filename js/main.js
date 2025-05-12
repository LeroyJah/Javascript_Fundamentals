    //Modules import
    import {prevObject,nextObject} from "./pokemonSelector.js";
    import {fetchPokemon} from "./fetchPokemon.js";
    import { radioCheck } from "./RadioButton.js";

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
    // const radioButtons = document.querySelectorAll('input[name="generation"]');
    // const radioButtons = document.getElementsByName("generation");
    const radioButtons = document.getElementById("radioDiv");

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
        console.log(radioButtons)
    });

    radioButtons.addEventListener('change',function(e){
        radioCheck()
    });