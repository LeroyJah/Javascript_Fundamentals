const radioTextBox = document.getElementById("radioDisplay");
const selectOption = document.querySelector('input[name="generation"]:checked'); //object of the selected option


export function radioCheck(){
    if(selectOption){
        console.log(selectOption);
        radioTextBox.value = selectOption.value
    }
}