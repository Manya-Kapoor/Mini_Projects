let btn = document.querySelector("button")

btn.addEventListener("click", function () { // what change will a click bring on the page
        let h3 = document.querySelector("h3");
        let randomCol = getRandomColour();
        h3.innerText = randomCol;

        let div = document.querySelector("div"); // to access div
        div.style.backgroundColor = randomCol; // div ka bg = random colour

        console.log("Colour updated")
    }
)

function getRandomColour() {
    let red = Math.floor(Math.random()*255);
    let green = Math.floor(Math.random()*255);
    let blue = Math.floor(Math.random()*255);

    let colour = `rgb(${red}, ${green}, ${blue})`;
    return colour;
}