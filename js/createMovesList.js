const tbody = document.getElementById('tbody')

export function createMovesArray(data) {
    var moves = data.moves
    var movesArray = [];

    for(let i = 0; i < moves.length; i++){ //loop to go through every move known to said pokemon
        for(let j = 0; j < moves[i].version_group_details.length; j++){//loop to go through every iteration of said move
            if(data.moves[i].version_group_details[j].version_group.name == "firered-leafgreen"){
                if(data.moves[i].version_group_details[j].level_learned_at > 0){//if-statement for moves learned by level-up only
                    var movesObject = {
                        level: 0,
                        move: "",
                        type: ""
                    };

                    movesObject.level = data.moves[i].version_group_details[j].level_learned_at
                    movesObject.move = data.moves[i].move.name
                    movesArray.push(movesObject)
                }
            }
        }
    }
    var sortArray = movesArray.sort((a, b) =>
        a.level - b.level
    )
    clearMovesList()
    setMovesTable(movesArray)

    }


function setMovesTable(movesArray){
    var moveLevel = 0;
    var moveString = "";

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

        tbody.appendChild(createTableRow)
        createTableRow.appendChild(createTableData)
    }
}

function clearMovesList(){
    while (tbody.hasChildNodes()) {
        tbody.removeChild(tbody.firstChild);
    }
}

