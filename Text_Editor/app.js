let inp = document.querySelector("#text");
let p = document.querySelector("p"); // to store in inout in a para above


inp.addEventListener("input", function () { // to track small changes
    console.log(inp.value); // to track small changes
    p.innerText = inp.value; // input ki value para ke mein store ho jaaye
}) 