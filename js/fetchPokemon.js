import {clearInput} from "./clearInputField.js";
import {setSprite} from "./setPokemonSprite.js";
import {setStatBars, setStats} from "./setStatNumbers.js";
import {setTypes} from "./setPokemonType.v2.js";
import {objectArray, setArrayIndex} from "./pokemonSelector.js";
import {createMovesArray} from "./createMovesList.js";
import {setAbilities} from "./setAbilities.js";

let status = false;
export function fetchPokemon(){
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
            createMovesArray(pokeObject);
            setAbilities(pokeObject)
            movesTable.scrollTo(500,0)

            status = false;
        })
        .catch(function(error){
            console.error(error)
            status = false;
        });
}