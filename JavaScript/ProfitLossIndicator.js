 function submitForm(){
                debugger;
                var boxQuantity = parseFloat(document.getElementById("txtBoxQuantity").value);
                var boxPrice = parseFloat(document.getElementById("txtBoxPrice").value);
                var labourCost = parseFloat(document.getElementById("txtLabourCost").value);
                var transferCost = parseFloat(document.getElementById("txtTransferCost").value);
                var storageCost = parseFloat(document.getElementById("txtStorageCost").value);
                var totalCostofBox = boxPrice+labourCost+transferCost+storageCost;
                var totalCostofPerUnit = totalCostofBox/boxQuantity;
                var sellingPricePerUnit = parseFloat(document.getElementById("txtPerUnit").value);

                if (sellingPricePerUnit - totalCostofPerUnit > 0) {
                    document.getElementById("result").innerHTML = "Profit";
                }
                if (sellingPricePerUnit - totalCostofPerUnit < 0) {
                    document.getElementById("result").innerHTML = "Loss";
                }
                if (sellingPricePerUnit - totalCostofPerUnit == 0) {
                    document.getElementById("result").innerHTML = "No Profit No Loss";
                }
            }
                    

