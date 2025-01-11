

function onReady() {
    console.log('Javascript is working!');
}

function formHandler(event){
    event.preventDefault();
    console.log('form is submitted');

const firstInput = document.getElementById("first");
const lastInput = document.getElementById("last");
const idInput = document.getElementById("id");
const titleInput = document.getElementById("title");
const annualInput = document.getElementById("annual");
const data = document.getElementById('table-data');
console.log(data);

    data.innerHTML += `<tr>
        <td>${firstInput.value}</td>
        <td>${lastInput.value}</td>
        <td>${idInput.value}</td>
        <td>${titleInput.value}</td>
        <td>${annualInput.value}</td>
        <td><button onclick="deleteHandler(event)">Delete</button></td>
        </tr>`;

firstInput.value = "";
lastInput.value = "";
idInput.value = "";
titleInput.value = "";
annualInput.value = "";

function calculateMonthlyCost(){

}
calculateMonthlyCost(data.annualInput.value)
}

function deleteHandler(event){
    console.log("row removed");
    event.target.closest("tr").remove();
} 