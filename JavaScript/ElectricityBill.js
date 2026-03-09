function calculateBill() {
    const units = parseFloat(document.getElementById('units').value);
    let amount = 0;

    if (isNaN(units) || units < 0) {
        document.getElementById('result').innerText = 'Please enter a valid number of units.';
        return;
    }

    if (units <= 100) {
        amount = units * 1.5;
    } else if (units <= 200) {
        amount = 100 * 1.5 + (units - 100) * 2.0;
    } else if (units <= 500) {
        amount = 100 * 1.5 + 100 * 2.0 + (units - 200) * 3.0;
    } else if (units <= 1000) {
        amount = 100 * 1.5 + 100 * 2.0 + 300 * 3.0 + (units - 500) * 4.0;
    } else {
        amount = 100 * 1.5 + 100 * 2.0 + 300 * 3.0 + 500 * 4.0 + (units - 1000) * 5.0;
    }

    document.getElementById('result').innerText = `Total Amount: $${amount.toFixed(2)}`;
}