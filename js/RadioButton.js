const radioTextBox = document.getElementById("radioDisplay");

export function radioCheck(gen){
    radioTextBox.innerHTML = gen;
}

export function currentRadio(radios){
    for(let radio of radios){
        if(radio.checked){
            return radio.value;
        }
    }
}