function calculateBill() {
    const units = parseFloat(document.getElementById('units').value);
    let amount = 0;

    if (isNaN(units) || units < 0) {
        document.getElementById('result').innerText = 'Please enter a valid number of units.';
        return;
    }

    

    document.getElementById('result').innerText = `Total Amount: $${amount.toFixed(2)}`;
}