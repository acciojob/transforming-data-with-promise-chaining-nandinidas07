//your JS code here. If required.
document.getElementById("btn").addEventListener("click", function () {
    let inputValue = Number(document.getElementById("ip").value);
    let outputDiv = document.getElementById("output");
    outputDiv.innerHTML = ""; // Clear previous results

    // Utility function to create delayed promise
    function delayedPromise(value, delay) {
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve(value);
            }, delay);
        });
    }

    // Initial Promise - 2 seconds
    delayedPromise(inputValue, 2000)
        .then((result) => {
            outputDiv.innerHTML += Result: ${result}<br>;
            return delayedPromise(result * 2, 1000); // multiply by 2 after 1s
        })
        .then((result) => {
            outputDiv.innerHTML += Result: ${result}<br>;
            return delayedPromise(result - 3, 1000); // subtract 3 after 1s
        })
        .then((result) => {
            outputDiv.innerHTML += Result: ${result}<br>;
            return delayedPromise(result / 2, 1000); // divide by 2 after 1s
        })
        .then((result) => {
            outputDiv.innerHTML += Result: ${result}<br>;
            return delayedPromise(result + 10, 1000); // add 10 after 1s
        })
        .then((finalResult) => {
            outputDiv.innerHTML += Final Result: ${finalResult};
        });
});