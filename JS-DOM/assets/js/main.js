const input = document.querySelector("input");
const inpcolor = document.getElementById("inpcolor");
const list = document.getElementById("list");
let text = [];
function addText() {
    if (input.value.trim() != "") {
        text.push(input.value.trim());
        list.style.color = inpcolor.value;
        input.value = "";
        fillList();
    }
    else {
        alert("Yazi daxil et")
    }
}
function fillList() {
    let result = text.reduce(
        (result, val) => result += `<h2>${val}</h2>`, ''
    );
    list.innerHTML = result;
}
