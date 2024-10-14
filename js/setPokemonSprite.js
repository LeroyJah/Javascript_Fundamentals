export function setSprite(data){
    var pokeSprite = data.sprites.front_default;
    var imgElement = document.getElementById("pokemonSprite")

    imgElement.src = pokeSprite;
    imgElement.style.display = "block";
}