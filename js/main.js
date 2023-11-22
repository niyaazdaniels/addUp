let input = document.querySelector('#input');
let add = document.querySelector("#add");
let btnAddUp = document.querySelector('#addUp').addEventListener('click', addUpValue);
let output = document.querySelector('#output');

// function addUpValue(){
//     output.innerText = "Added Up Value " + eval(input.value + add.value);
// }
function addUpValue(){
    let answer = parseInt(input.value) + parseInt(add.value);
    output.innerText = 'Added Up Value ' + answer;
}