const radioTextBox = document.getElementById("radioDisplay");
let generation = ["red-blue","gold-silver","ruby-sapphire","firered-leafgreen","diamond-pearl","black2-white2"]

export function radioCheck(gen){
    radioTextBox.innerHTML = generation[gen-1];
}

export function currentRadio(radios){
    for(let radio of radios){
        if(radio.checked){
            return radio.value;
        }
    }
}