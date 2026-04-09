function onClickAndOperation() {
    debugger;
    var inputnumber = parseInt(document.getElementById("txtInputNumber").value);
    if(inputnumber % 3 == 0 && inputnumber % 5 == 0){
        document.getElementById("result").innerHTML = "The number is divisible by 3 and divisible by 5.";
        console.log("The number is divisible by 3 and divisible by 5.");
    }
    if(inputnumber % 7 == 0 || inputnumber % 11 == 0){
        document.getElementById("result").innerHTML = "The number is divisible by 7 or divisible by 11.";
        console.log("The number is divisible by 7 or divisible by 11.");
    }
}
