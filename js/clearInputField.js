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
//it needs the Response Object because if it is wrong then i want the input field to remain as is