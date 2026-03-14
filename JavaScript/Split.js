function onclickSplit() {
    debugger;
    Member=parseInt(document.getElementById("txtMembers").value);
    Amount=parseInt(document.getElementById("txtAmount").value);
average=Amount/Member;
document.getElementById("txtAverage").value=average;
}