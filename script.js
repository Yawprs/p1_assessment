let output = document.getElementById("output")

let input = document.getElementById("input")

let minus = document.getElementById("minus")

let plus = document.getElementById("plus")

function addition() {
    output.innerText = (input.value + output.value)
    console.log("u clicked")
}

plus.addEventListener("click", addition)


function subtraction() {
    output.innerText = (input.value - output.value)
}

minus.addEventListener("click", subtraction)