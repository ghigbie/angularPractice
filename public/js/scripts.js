
let button = document.getElementById("submit");
let welcome = document.getElementById("welcome");

let showItem = (item) => {
    item.style.visibility = "visible";
};

button.addEventListener("click", () =>{
    showItem(welcome);
});
