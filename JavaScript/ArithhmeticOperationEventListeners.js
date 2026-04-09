document.getElementById("buttonAdd").addEventListener("click", function () {
        debugger;
        var value1 = parseInt(document.getElementById("txtValue1").value);
        var value2 = parseInt(document.getElementById("txtValue2").value);
        result = value1 + value2;
        document.getElementById("pResult").innerHTML = result
});
document.getElementById("buttonSub").addEventListener("click", function () {
        debugger;
        var value1 = parseInt(document.getElementById("txtValue1").value);
        var value2 = parseInt(document.getElementById("txtValue2").value);
        result = value1 - value2;
        document.getElementById("pResult").innerHTML = result
});
document.getElementById("buttonMultify").addEventListener("click", function () {
        debugger;
        var value1 = parseInt(document.getElementById("txtValue1").value);
        var value2 = parseInt(document.getElementById("txtValue2").value);
        result = value1 * value2;
        document.getElementById("pResult").innerHTML = result

});
document.getElementById("buttonDiv").addEventListener("click", function () {
        debugger;
        var value1 = parseInt(document.getElementById("txtValue1").value);
        var value2 = parseInt(document.getElementById("txtValue2").value);
        result = value1 / value2;
        document.getElementById("pResult").innerHTML = result
});


