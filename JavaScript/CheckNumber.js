function onClickCheckNumber(){
    debugger;
    var inputnumber = parseInt(document.getElementById("txtInputNumber").value);
    if(inputnumber > 0){
        document.getElementById("result").innerHTML = "The number is positive.";
        console.log("The number is positive.");
    }
    
    if(inputnumber < 0){
        document.getElementById("result").innerHTML = "The number is negative.";
        console.log("The number is negative.");
    }   
        if(inputnumber == 0){   
        document.getElementById("result").innerHTML = "The number is zero.";
        console.log("The number is zero.");
    }
    if(inputnumber !=0){
        document.getElementById("result").innerHTML = "The number is not zero.";
        console.log("The number is not zero.");
    }
    if(inputnumber == 0){
        document.getElementById("result").innerHTML = "The number is positive or zero.";
        console.log("zero");
    }
    if(inputnumber > 0 && inputnumber % 2 == 0){
        document.getElementById("result").innerHTML = "The number is positive.";
        console.log("The number is positive and even.");
    }
    if(inputnumber < 0 || inputnumber % 2 != 0){
        document.getElementById("result").innerHTML = "The number is negative or zero.";
        console.log("The number is negative or odd.");
    }
}
