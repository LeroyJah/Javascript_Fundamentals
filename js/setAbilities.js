export function setAbilities(data){
    let abilityView = document.getElementById("infoCard")
    const abilities = data.abilities;

    while (abilityView.hasChildNodes()){
        abilityView.removeChild(abilityView.firstChild)
    }

    abilities.forEach(getAbilities)

    function getAbilities(data){
        console.log(data.ability.name)
        const node = document.createElement("li")
        const textnode = document.createTextNode(data.ability.name)

        node.appendChild(textnode);

        abilityView.appendChild(node)
    }
}