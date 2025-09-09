    function appendOperation(operation) {
        document.getElementById("resultArea").innerHTML += operation;
    }

    function calculateResult() {
        let container =  document.getElementById("resultArea");
        let result = eval(container.innerHTML);
        container.innerHTML = result;

try{
    let result = eval(container.innerHTML);
    if (result === undefined || result === null || isNaN(result)) {
        throw new Error("Das funktioniert so nicht!");
    }
    container.innerHTML = result;
} catch (e) {
    container.innerHTML = "Das funktioniert so nicht!";
}
    }


    function deleteLast() {
        let container = document.getElementById("resultArea");
        if(container.innerHTML.endsWith(" ")) {
            container.innerHTML = container.innerHTML.slice(0, -3);
        }
        else {
            container.innerHTML = container.innerHTML.slice(0, -1);
        }

    }

    function clearResult() {
        let container = document.getElementById("resultArea");
        container.innerHTML = container.innerHTML.slice(0, 0);
    }

