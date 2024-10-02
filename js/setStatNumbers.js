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

export function setStatBars(data){
    const stats = data.stats;
    var x = window.matchMedia("(max-width: 600px)")

    function checkWidth(matchMedia){
        if(matchMedia.matches){
            var hp = document.getElementById("hpstat");
            hp.style.width = stats[0].base_stat * 1.5
            var attack = document.getElementById("attackstat");
            attack.style.width = stats[1].base_stat * 1.5
            var defense = document.getElementById("defensestat");
            defense.style.width = stats[2].base_stat * 1.5
            var sattack = document.getElementById("sattackstat");
            sattack.style.width = stats[3].base_stat * 1.5
            var sdefense = document.getElementById("sdefensestat");
            sdefense.style.width = stats[4].base_stat * 1.5
            var speed = document.getElementById("speedstat");
            speed.style.width = stats[5].base_stat * 1.5
        }else{
            var hp = document.getElementById("hpstat");
            hp.style.width = stats[0].base_stat * 2.5
            var attack = document.getElementById("attackstat");
            attack.style.width = stats[1].base_stat * 2.5
            var defense = document.getElementById("defensestat");
            defense.style.width = stats[2].base_stat * 2.5
            var sattack = document.getElementById("sattackstat");
            sattack.style.width = stats[3].base_stat * 2.5
            var sdefense = document.getElementById("sdefensestat");
            sdefense.style.width = stats[4].base_stat * 2.5
            var speed = document.getElementById("speedstat");
            speed.style.width = stats[5].base_stat * 2.5
        }
    }
    checkWidth(x);
}