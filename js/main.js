    //Modules import
    import {prevObject,nextObject} from "./pokemonSelector.js";
    import {fetchPokemon} from "./fetchPokemon.js";
    import { radioCheck, currentRadio } from "./RadioButton.js";

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
    const currentRadioValue = document.getElementsByName("generation");
    const radioButtons = document.getElementById("radioDiv");

    //Event Listeners
    inputField.addEventListener('keypress', function(e){
        if (e.key === 'Enter'){
            let gen = currentRadio(currentRadioValue)
            console.log(gen);
            fetchPokemon(gen)
        }
    })
    fetchPokemonButton.addEventListener('click',function (e){
        if (inputField.value !== ""){
            let gen = currentRadio(currentRadioValue)
            console.log(gen);
            fetchPokemon(gen)
        }
    });
    prevPokemonButton.addEventListener('click', function (e){
        prevObject()
    });
    nextPokemonButton.addEventListener('click', function (e){
        nextObject()
    });

    radioButtons.addEventListener('change',function(e){
        if(e.target.name === 'generation'){
            radioCheck(e.target.value);
        }
    });