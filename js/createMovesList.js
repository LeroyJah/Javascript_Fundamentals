import {moveTypeSelector} from "./setPokemonType.v2.js";

const tbody = document.getElementById('tbody')

export function createMovesArray(data,gen) {

    var moves = data.moves
    var movesArray = [];
    var generation = ["red-blue","gold-silver","ruby-sapphire","firered-leafgreen","diamond-pearl","black2-white2"];

    for(let i = 0; i < moves.length; i++){ //loop to go through every move known to said pokemon
        for(let j = 0; j < moves[i].version_group_details.length; j++){//loop to go through every iteration of said move
            if(data.moves[i].version_group_details[j].version_group.name == generation[gen]){
                if(data.moves[i].version_group_details[j].level_learned_at > 0){//if-statement for moves learned by level-up only
                    let movesObject = {
                        level: 0,
                        move: "",
                        power:0,
                        type: ""
                    };

                    movesObject.level = data.moves[i].version_group_details[j].level_learned_at
                    movesObject.move = data.moves[i].move.name
                        fetch(data.moves[i].move.url)
                        .then(responseObject => responseObject.json())
                        .then(function (responseObject) {
                            movesObject.type = responseObject.type.name
                            movesObject.power = responseObject.power
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

    for(let i = 0; i < movesArray.length; ++i){
        var moveLevel = `<td>${movesArray[i].level}</td>`;

        var createTableRow =
            document.createElement('tr');
        var createTableData =
            document.createElement('td');
        var createTableData2 =
            document.createElement('td');
        var createTableData3 =
            document.createElement('td');
        var createTableData4 =
            document.createElement('td');
        var createTableImage =
            document.createElement('img');

        createTableRow.innerHTML = moveLevel
        createTableData.innerHTML = movesArray[i].move
        createTableData2.innerHTML = movesArray[i].power
        createTableData3.innerHTML = "-"

        createTableImage.src = moveTypeSelector(movesArray[i].type)
        createTableData4.appendChild(createTableImage)

        tbody.appendChild(createTableRow)
        createTableRow.appendChild(createTableData)
        if(movesArray[i].power !== null){
            createTableRow.appendChild(createTableData2)
        }else{
            createTableRow.appendChild(createTableData3)
        }
        createTableRow.appendChild(createTableData4)
    }
}

function clearMovesList(){
    while (tbody.hasChildNodes()) {
        tbody.removeChild(tbody.firstChild);
    }
}