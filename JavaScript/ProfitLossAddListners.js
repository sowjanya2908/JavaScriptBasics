document.getElementById("btnGenerate").addEventListener("click", function() {;
    var sizeNumber = Number(document.getElementById("txtDigits").value);
    var maxValue = Math.pow(10, sizeNumber);
    document.getElementById("result").innerHTML = Math.trunc(Math.random() * maxValue);
})
;
