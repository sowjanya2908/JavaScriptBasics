
function onclickTemperatureConvertorCtoF() {
    debugger;
    var tempInCelsius = parseFloat(document.getElementById("txtTempInCelsius").value);
    var tempInFahrenheit = (tempInCelsius * 9 / 5) + 32;
    document.getElementById("result").innerHTML = "Temperature in Fahrenheit: " + tempInFahrenheit;
}
