export function setAbilities(data){
    let abilityView = document.getElementById("infoCard")
    const abilities = data.abilities;

    while (abilityView.hasChildNodes()){
        abilityView.removeChild(abilityView.firstChild)
    }

    abilities.forEach(getAbilities)

    function getAbilities(data){
        const node = document.createElement("li")
        const textnode = document.createTextNode(data.ability.name)
        const hidden = document.createTextNode(" (hidden)")
        const genIII = document.createTextNode(" genIII")
        const genIV = document.createTextNode(" genIV")
        const genV = document.createTextNode(" genV")

        node.appendChild(textnode);

        if(data.is_hidden === true){
            node.appendChild(hidden)
        }

        fetch(data.ability.url)
            .then(object => object.json())
            .then(function (object) {
                    if(object.generation.name === "generation-iii"){
                        node.appendChild(genIII)
                    }
                    if(object.generation.name === "generation-iv"){
                        node.appendChild(genIV)
                    }
                    if(object.generation.name === "generation-v"){
                        node.appendChild(genV)
                    }
                }
            )

        abilityView.appendChild(node)
    }
}