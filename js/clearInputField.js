export async function clearInput(response){
    const status = await response;
    if(status.ok === true){
        // document.getElementById("name").innerText = ""
        document.getElementById("pokemonName").value = ""
    }else {
        document.getElementById("name").innerText = "Could not find Pokemon"
        setTimeout(() => {
            document.getElementById("name").innerText = ""
        },3000);
    }
}