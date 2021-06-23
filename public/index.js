const countEl = document.getElementById("count-el");
const saveEl = document.getElementById("save-el");

let count = 0;

function increment() {
    count = count + 1
    countEl.textContent = count
}
// same way for write a function like increment
const save = () => {
    let countStr = `${count}  - `;
    saveEl.textContent += countStr;
    countEl.textContent = 0;
    count = 0;
}
