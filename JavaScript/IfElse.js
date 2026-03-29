function onClickIfElse() {
    debugger;
    var inputNumber = document.getElementById("txtInputNumber").value;
    var result = document.getElementById("pResult");

    if (inputNumber % 3 === 0) {
       document.getElementById("pResult").innerHTML = "The number is divisible by 3.";  
         console.log("The number is divisible by 3.");
    } 
    else {
        document.getElementById("pResult").innerHTML = "The number is not divisible by 3.";
        console.log("The number is not divisible by 3.");
    }
}