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
    // Get all elements on the page that have a data-annual-salary attribute
    const salaryCell = document.querySelectorAll('[data-annual-salary]');
    let totalMonthlyCost = 0;

    // Loop through each element that has a data-annual-salary attribute
    salaryCell.forEach(cell => {
        // Get the value of the data-annual-salary attribute for the current element
        const annualSalary = cell.getAttribute('data-annual-salary');

        // Check if the annual salary is not empty or null
        if (annualSalary) {
            // Calculate the monthly salary by dividing the annual salary by 12
            const monthlySalary = Number(annualSalary) / 12;

            // Add the monthly salary to the total monthly cost
            totalMonthlyCost += monthlySalary;
        }
    });

    // Get the paragraph element that will display the total monthly cost
    const inTheRed = document.getElementById('total-monthly-cost');
    if (inTheRed) {
        if (totalMonthlyCost > 20000) {
            inTheRed.style.backgroundColor = '#e84f66';
            alert('Out of budget!');
        } else {
            inTheRed.style.backgroundColor = '';
        }
        inTheRed.textContent = `Total Monthly Cost: $${totalMonthlyCost.toLocaleString()}`;
    }
}

function deleteHandler(event){
    console.log("row removed");
    event.target.closest("tr").remove();
    updateTotal();
}

