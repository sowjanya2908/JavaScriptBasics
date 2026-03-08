  // Examples of JavaScript data types
        let stringExample = "Hello, World!";
        let numberExample = 42;
        let booleanExample = true;
        let undefinedExample;
        let nullExample = null;
        let objectExample = { name: "John", age: 30 };
        let arrayExample = [1, 2, 3, 4, 5];

        function displayDataTypes() {
            let output = "";
            output += "String: " + stringExample + " (type: " + typeof stringExample + ")<br>";
            output += "Number: " + numberExample + " (type: " + typeof numberExample + ")<br>";
            output += "Boolean: " + booleanExample + " (type: " + typeof booleanExample + ")<br>";
            output += "Undefined: " + undefinedExample + " (type: " + typeof undefinedExample + ")<br>";
            output += "Null: " + nullExample + " (type: " + typeof nullExample + ")<br>";
            output += "Object: " + JSON.stringify(objectExample) + " (type: " + typeof objectExample + ")<br>";
            output += "Array: " + arrayExample + " (type: " + typeof arrayExample + ")<br>";
            document.getElementById("dataTypesOutput").innerHTML = output;
        }

        // Call the function when the page loads
        window.onload = displayDataTypes;