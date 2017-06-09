
let button = document.getElementById("submit");
let hidden = document.getElementById("hidden");

let showItem = (item) => {
    item.style.visibility = "visible";
};

button.addEventListener("click", () =>{
    showItem(hidden);
});
