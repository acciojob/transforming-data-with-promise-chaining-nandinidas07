document.getElementById("btn").addEventListener("click", function () {
  let input = Number(document.getElementById("ip").value);
  let output = document.getElementById("output");
  output.innerText = "";

  function delayedPromise(value, delay) {
    return new Promise((resolve) => {
      setTimeout(() => resolve(value), delay);
    });
  }

  delayedPromise(input, 2000)
    .then((res) => {
      output.innerText = Result: ${res};
      return delayedPromise(res * 2, 1000);
    })
    .then((res) => {
      output.innerText = Result: ${res};
      return delayedPromise(res - 3, 1000);
    })
    .then((res) => {
      output.innerText = Result: ${res};
      return delayedPromise(res / 2, 1000);
    })
    .then((res) => {
      output.innerText = Result: ${res};
      return delayedPromise(res + 10, 1000);
    })
    .then((res) => {
      output.innerText = Final Result: ${res};
    });
});