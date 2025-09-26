let url = "http://universities.hipolabs.com/search?name=";
let btn = document.querySelector("button");

btn.addEventListener("click", async () => {// btn click krne pr
  let country = document.querySelector("input").value; // country nikalega input se
  console.log(country); // jaise hi btn ne country nikal li
  let clgArr = await getclgs(country); // waise hi getclgs ko call laga dega
  show(clgArr);
});

function show(clgArr) {
    let list = document.querySelector("#list"); // accessing id = "list"
    list.innerText = ""; // shuruaat mein list khaali krdo taaki puarne clgs ka naam hatt jaaye
    for (clg of clgArr) {
        console.log(clg.name); // takki individual clgs ke names aa jaye for a specific country
        let li = document.createElement("li"); // create a new list item on page to dispay name of clg
        li.innerText = clg.name; // lii ke inner text mein clg ka name daal denge
        list.appendChild(li); // list mein list itme daal denge
    }
}

async function getclgs(country) {
  try {
    let res = await axios.get(url + country); // getclgs hmare api ko call lagayega (url aur country ko concatenate krke single string bnakr pass karenge)
    return res.data; //aur array ka data return ho jaayega
  } catch (error) {
    console.log("error :" + error);
    return []; // erreo aaya toh empty array return hoga
  }
}
