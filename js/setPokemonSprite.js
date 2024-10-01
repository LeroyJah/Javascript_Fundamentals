export async function setSprite(data){
    var pokeSprite = await data.sprites.front_default;
    var imgElement = document.getElementById("pokemonSprite")

    imgElement.src = pokeSprite;
    imgElement.style.display = "block";
}