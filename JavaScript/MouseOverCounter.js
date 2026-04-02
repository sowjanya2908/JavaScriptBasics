
var counter=0;
document.getElementById("btnMouseOverCounter").addEventListener("mouseover", function() {
counter=counter+1;
document.getElementById("pResult").innerHTML=counter;

});
document.getElementById("btnResetCounter").addEventListener("click", function() {
    counter = 0;
    document.getElementById("pResult").innerHTML = counter;
});