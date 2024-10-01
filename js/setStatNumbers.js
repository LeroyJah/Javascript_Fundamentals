export async function setStats(data){
    const object = await data;
    const stats = object.stats;
    const total = (stats[0].base_stat)+(stats[1].base_stat)+(stats[2].base_stat)+(stats[3].base_stat)+(stats[4].base_stat)+(stats[5].base_stat)

    document.getElementById("hp").innerText = stats[0].base_stat
    document.getElementById("attack").innerText = stats[1].base_stat
    document.getElementById("defense").innerText = stats[2].base_stat
    document.getElementById("s.attack").innerText = stats[3].base_stat
    document.getElementById("s.defense").innerText = stats[4].base_stat
    document.getElementById("speed").innerText = stats[5].base_stat
    document.getElementById("name").innerText = object.name
    document.getElementById("total").innerText = total
}