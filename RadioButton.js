const displayRadioText = document.getElementById("radioDisplay");
const selectOption = document.querySelector('input[name="generation"]:checked'); //object of the selected option


export function radioCheck(){
    if(selectOption){
        console.log(selectOption.value);
        displayRadioText.value = selectOption.value
    }
}