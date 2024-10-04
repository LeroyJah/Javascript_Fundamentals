import {moveTypeSelector} from "./setPokemonType.js";

const tbody = document.getElementById('tbody')

export function createMovesArray(data) {
    var moves = data.moves
    var movesArray = [];

    for(let i = 0; i < moves.length; i++){ //loop to go through every move known to said pokemon
        for(let j = 0; j < moves[i].version_group_details.length; j++){//loop to go through every iteration of said move
            if(data.moves[i].version_group_details[j].version_group.name == "firered-leafgreen"){
                if(data.moves[i].version_group_details[j].level_learned_at > 0){//if-statement for moves learned by level-up only
                    let movesObject = {
                        level: 0,
                        move: "",
                        power:"",
                        type: ""
                    };

                    movesObject.level = data.moves[i].version_group_details[j].level_learned_at
                    movesObject.move = data.moves[i].move.name
                        fetch(data.moves[i].move.url)
                        .then(responseObject => responseObject.json())
                        .then(function (responseObject) {
                            movesObject.type = responseObject.type.name
                            movesArray.push(movesObject)
                            movesArray.sort((a, b) =>
                                a.level - b.level
                            )
                            clearMovesList()
                            setMovesTable(movesArray)
                        })
                }
            }
        }
    }

    }
function setMovesTable(movesArray){
    var moveLevel = 0;
    var moveString = "";
    let moveType = "";

    for(let i = 0; i < movesArray.length; ++i){
        moveLevel = movesArray[i].level
        moveString = movesArray[i].move
        moveType = movesArray[i].type

        moveLevel = `<td>${moveLevel}</td>`;

        var createTableRow =
            document.createElement('tr');
        var createTableData =
            document.createElement('td');
        var createTableData2 =
            document.createElement('td');
        var createTableImage =
            document.createElement('img');

        createTableRow.innerHTML = moveLevel
        createTableData.innerHTML = moveString
        createTableImage.src = moveTypeSelector(moveType)
        createTableData2.appendChild(createTableImage)

        tbody.appendChild(createTableRow)
        createTableRow.appendChild(createTableData)
        createTableRow.appendChild(createTableData2)
    }
}

function clearMovesList(){
    while (tbody.hasChildNodes()) {
        tbody.removeChild(tbody.firstChild);
    }
}