  function onclickAdd() {
                debugger;
                var value1 = parseInt(document.getElementById("txtValue1").value);
                var value2 = parseInt(document.getElementById("txtValue2").value);
                var result = value1 + value2;
                document.getElementById("Presult").innerText = "Result: " + result;
            }
          function onclickSubtract() {
            debugger;
                var value1 = parseInt(document.getElementById("txtValue1").value);
                var value2 = parseInt(document.getElementById("txtValue2").value);
               var result1 = value1 - value2;
               document.getElementById("Presult").innerText = "Result: " + result1;  
            }
            function onclickMultiply(){
                debugger;
                var value1 = parseInt(document.getElementById("txtValue1").value);
                var value2 = parseInt(document.getElementById("txtValue2").value);
                var result2 = value1 * value2;
                document.getElementById("Presult").innerText = "Result: " + result2;

            }
            function onclickDivide(){
                debugger;
                var value1 = parseInt(document.getElementById("txtValue1").value);
                var value2 = parseInt(document.getElementById("txtValue2").value);
                var result3 = value1 / value2;
                document.getElementById("Presult").innerText = "Result: " + result3;
                }