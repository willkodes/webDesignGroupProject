let calculation = localStorage.getItem('calculation') || '';

// Display the calculation when the page first loads.
displayCalculation();

function updateCalculation(value) {
    calculation += value;

    // Display the calculation on the page
    // instead of console.log
    displayCalculation();

    localStorage.setItem('calculation', calculation);
}

function displayCalculation() {
    document.querySelector('.js-calculation')
        .innerHTML = calculation;
}

function openCurrencyConverter() {
    let selectedCurrency = document.getElementById('currency-select').value;
    // Extract the result from the calculation
    let result = eval(calculation);

    if (!isNaN(result)) {
        // Perform currency conversion with the result
        let convertedAmount;
        switch (selectedCurrency) {
            case 'USD':
                convertedAmount = result; // No conversion needed for USD
                break;
            case 'EUR':
                convertedAmount = result * 0.85; // Conversion rate for EUR, replace with actual rate
                break;
            case 'CAD':
                convertedAmount = result * 1.25; // Conversion rate for CAD, replace with actual rate
                break;
            case 'VND':
                convertedAmount = result * 23000; // Conversion rate for VND, replace with actual rate
                break;
            case 'JPY':
                convertedAmount = result * 110; // Conversion rate for JPY, replace with actual rate
                break;
            case 'RUB':
                convertedAmount = result * 74; // Conversion rate for RUB, replace with actual rate
                break;
            case 'SGD':
                convertedAmount = result * 1.35; // Conversion rate for SGD, replace with actual rate
                break;
            // Add cases for other currencies as needed
        }
        document.querySelector('.converted-amount').innerHTML = "Converted amount: " + convertedAmount.toFixed(2) + " " + selectedCurrency;
    } else {
        alert("Please perform a valid calculation first.");
    }
}
