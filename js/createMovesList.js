export async function setMoveList(data) {
    var moves = data.moves
    var movesArray = [];
    var totalMoves = 0;

    for(let i = 0; i < moves.length; i++){ //loop to go through every move known to said pokemon
        for(let j = 0; j < moves[i].version_group_details.length; j++){//loop to go through every iteration of said move
            // totalMoves = totalMoves + apiObject.moves[i].version_group_details.length
            // console.log(totalMoves)
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

    var moveLevel = 0;
    var moveString = "hi";

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

        movesTable.appendChild(createTableRow)
        createTableRow.appendChild(createTableData)
    }
}