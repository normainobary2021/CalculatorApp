const value_txt = document.getElementById("value");
const keys = document.querySelectorAll(".key");


keys.forEach((key) => {
    key.onclick = function () {
        if (key.dataset.val === "clear") {value_txt.value = ""; console.log("Clear");}
        else if (key.dataset.val === "equal") {value_txt.value = eval(value_txt.value); console.log("Eval");}
        else {value_txt.value += key.dataset.val; console.log("Add");}
    };
});