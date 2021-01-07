//BROKEN CODE

// let output = document.getElementById("output")

// let input = document.getElementById("input")

// let minus = document.getElementById("minus")

// let plus = document.getElementById("plus")

// function addition() {
//     output.innerText = (input.value + output.value)
//     console.log("u clicked")
// }

// plus.addEventListener("click", addition)


// function subtraction() {
//     output.innerText = (input.value - output.value)
// }

// minus.addEventListener("click", subtraction)

//PSEUDO CODE
// get dom elements by id
    // get display
    const display = document.getElementById("display")
    // get increment button
    const incrementButton = document.getElementById("incrementButton")
    // get inputValue
    const inputValue = document.getElementById("inputValue")
    // get decrement button
    const decrementButton = document.getElementById("decrementButton")
    
    
    // add click event listeners to the buttons
    // incrementButton.addEventListener("click", () => { addToCount() })
    incrementButton.addEventListener("click", addToCount)
    decrementButton.addEventListener("click", subtractFromCount)
    
    // create a variable for running total
    let total = 0


// adds the input value to the output value field
function addToCount() {
    //using variable "fromString" to change the input value from a string to an integer 
    let fromString = parseInt(inputValue.value)
    total = total + fromString
    // console.log(total)
    updateDisplay()
}

// minus input value from the output value field
function subtractFromCount() {
    let fromString = parseInt(inputValue.value)
    total = total - fromString
    updateDisplay()
}


// called to update the count with the updated value
function updateDisplay() {
    // update display with running total
    display.innerText = total
}

