// function onClickFindMax() {
//     debugger;
//     var digits = document.getElementById("txtDigits").value;
//     var value1 = Math.pow(10, digits)*Math.random();
//     var value2 = Math.pow(10, digits)*Math.random();
//     var value3 = Math.pow(10, digits)*Math.random();
//     var value4 = Math.pow(10, digits)*Math.random();
//     var value5 = Math.pow(10, digits)* Math.random();
//     var maxValue = Math.max(value1, value2, value3, value4, value5);
//     document.getElementById("result").innerHTML = Math.trunc(maxValue);
;

document.getElementById("btnGenerate").addEventListener("click", function() {;
var sizeNumber = Number(document.getElementById("txtDigits").value);
var maxValue = Math.pow(10, sizeNumber);
document.getElementById("result").innerHTML = Math.trunc(Math.random() * maxValue); 
});

