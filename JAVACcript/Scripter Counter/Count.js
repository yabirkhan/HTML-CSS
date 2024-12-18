let countValue = document.querySelector("#val");
let incBtn = document.querySelector("#incre");
let decBtn = document.querySelector("#dec");
let resBtn = document.querySelector("#res");
let count = 0;

function Counter() {
    countValue.textContent = count;
}

incBtn.addEventListener("click", () => {
    count++;
    Counter();
});

decBtn.addEventListener("click", () => {
    count--;
    Counter();
});

resBtn.addEventListener("click", () => {

    count = 0;
    Counter();
});