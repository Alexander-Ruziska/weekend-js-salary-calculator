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
    const annualSalary = Number(annualInput.value);

    data.innerHTML += `<tr>
        <td>${firstInput.value}</td>
        <td>${lastInput.value}</td>
        <td>${idInput.value}</td>
        <td>${titleInput.value}</td>
        <td data-annual-salary="${annualSalary}">$${annualSalary.toLocaleString()}</td>
        <td><button onclick="deleteHandler(event)">Delete</button></td>
        </tr>`;

    firstInput.value = "";
    lastInput.value = "";
    idInput.value = "";
    titleInput.value = "";
    annualInput.value = "";

    updateTotal();
}

function updateTotal(){
    const salaryCell = document.querySelectorAll('[data-annual-salary]');
    let totalMonthlyCost = 0;

    salaryCell.forEach(cell => {
        const annualSalary = cell.getAttribute('data-annual-salary');
        if (annualSalary) {
            const monthlySalary = Number(annualSalary) / 12;
            totalMonthlyCost += monthlySalary;
        }
    });

    const paragraph = document.getElementById('total-monthly-cost');
    if (paragraph) {
        paragraph.textContent = `Total Monthly Cost: $${totalMonthlyCost.toLocaleString()}`;
    }
}

function deleteHandler(event){
    console.log("row removed");
    event.target.closest("tr").remove();
    updateTotal();
}