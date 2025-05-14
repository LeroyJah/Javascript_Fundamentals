export const radioTextBox = document.getElementById("radioDisplay");
export const radioTextBox2 = document.getElementById("radioDisplay2");

export function radioCheck(gen){
    radioTextBox.innerHTML = gen;
}

export function radioCheck2(gen){
    radioTextBox2.innerHTML = gen;
}

export function currentRadio(radios){
    for(let radio of radios){
        if(radio.checked){
            return radio.value;
        }
    }
}