let btn = document.querySelector("button"); // to access btn
let ul = document.querySelector("ul"); // to access btn
let inp = document.querySelector("input"); // to access btn

btn.addEventListener("click", function () {
    let item = document.createElement("li"); // evrytime create a new li
    item.innerText = inp.value; // inner text set 

    let delbtn = document.createElement("button");
    delbtn.innerText = "completed";
    delbtn.classList.add("delete"); // a class assigned for delete btn
    item.appendChild(delbtn); // item mein hi delete btn daalenge

    ul.appendChild(item); // add bullet in unordered list
    inp.value = ""; // reset value of input as empty string to clear automatically
}) 

ul.addEventListener("click", function (event) { // to access the parent to delete element
    if (event.target.nodeName == "BUTTON"){ // to know which element we are targeting (if it is button only then work)
        let listItem = event.target.parentElement; // perant ko hi delete krwane ke liye
        listItem.remove();
        console.log("task deleted");
    }
});