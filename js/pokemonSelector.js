//might have to change the name of this file to something that's more explanitory like objectArraySelector
import {setSprite} from "./setPokemonSprite.js";
import {setStats} from "./setStatNumbers.js";
import {setTypes} from "./setPokemonType.v2.js";
import {createMovesArray} from "./createMovesList.js";
import {setStatBars} from "./setStatNumbers.js";
import {setAbilities} from "./setAbilities.js";
import {gen} from "./main.js"; 
import { radioCheck2 } from "./RadioButton.js";


export let objectArray = [];
export let currentArrayIndex = 0;
export let currentObject = {};

export function setArrayIndex(){
    let thisArrayIndex = objectArray.length;
    currentArrayIndex = thisArrayIndex - 1;

    return currentArrayIndex;
}
export function prevObject(){
    if(currentArrayIndex > 0) {
        currentArrayIndex = currentArrayIndex - 1;
        setNewObject()
        updateObject(currentObject);

        return currentArrayIndex;
    }
}

export function nextObject(){
    let totalArrayLength = (objectArray.length) - 1;
    if(currentArrayIndex < totalArrayLength) {
        currentArrayIndex = currentArrayIndex + 1;
        setNewObject()
        updateObject(currentObject)

        return currentArrayIndex;
    }
}
function setNewObject(){
    currentObject = objectArray[currentArrayIndex];
}
function updateObject(object) {
    setSprite(object[0]);
    setStats(object[0]);
    setStatBars(object[0]);
    setTypes(object[0]);
    createMovesArray(object[0],object[1]);
    setAbilities(object[0])

    // radioCheck(object)
    radioCheck2(object[1])
}