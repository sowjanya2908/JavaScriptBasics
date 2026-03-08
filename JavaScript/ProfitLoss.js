function calculateProfitLoss() {
            debugger;
            var costPrice = parseFloat(document.getElementById("costPrice").value);
            var sellingPrice = parseFloat(document.getElementById("sellingPrice").value);
            var result = "";
        
            if(sellingPrice - costPrice>0){
                document.getElementById("result").innerHTML = "Profit";
            }
            if(sellingPrice - costPrice<0){
                document.getElementById("result").innerHTML = "Loss";
            }
            if(sellingPrice - costPrice ==0){
                document.getElementById("result").innerHTML = "No Profit No Loss";

            }
                
            }