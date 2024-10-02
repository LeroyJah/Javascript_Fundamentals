//might have to change the name of this file to something that's more explanitory like objectArraySelector
import {setSprite} from "./setPokemonSprite.js";
import {setStats} from "./setStatNumbers.js";
import {setTypes} from "./setPokemonType.js";
import {createMovesArray} from "./createMovesList.js";
import {setStatBars} from "./setStatNumbers.js";


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
    setSprite(object);
    setStats(object);
    setStatBars(object);
    setTypes(object);
    createMovesArray(object);
}