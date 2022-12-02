/*Counter App*/
const add = document.getElementById("add")
const subtract = document.getElementById("subtract")
const output = document.getElementById("output")

console.log(add, subtract)
add.addEventListener("click", function(){
    result = ++output.innerHTML
    output.innerHTML = result
})
subtract.addEventListener("click", function(){
    result = --output.innerHTML
    output.innerHTML = result
})
