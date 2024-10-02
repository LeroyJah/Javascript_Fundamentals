//might have to change the name of this file to something that's more explanitory like objectArraySelector
export let objectArray = [];
export let currentArrayIndex = 0;

export function setArrayIndex(){
    let thisArrayIndex = objectArray.length;
    currentArrayIndex = thisArrayIndex - 1;
    console.log(currentArrayIndex)

    return currentArrayIndex;
}
// export async function getCurrentObject(objectArray){
//     return objectArray[currentArrayIndex];
// }

export async function prevIndex(){
    if(currentArrayIndex > 0) {
        currentArrayIndex = await currentArrayIndex - 1;

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

        return currentArrayIndex;
    }
}


async function nextObject(object){
    nextIndex()
        .then(() => {
            updateObject(object);
        })
}