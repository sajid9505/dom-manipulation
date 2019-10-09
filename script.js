/* Task 1 */
var headingText = document.getElementById('heading')
console.log(heading.textContent)

/* Task 2 using plain JavaScript */
//task2a
function addText(event){
var p = document.createElement('p')
p.innerText = "Hello World"
p.style.color = "red"
var div = document.getElementById('task2a')
div.appendChild(p)
}

//task2b

function changebg1(event){
    document.body.style.background = event.target.innerText.toLowerCase(); 
}

// function changebg2(event){
//     document.body.style.background = "green" 
// }

/* Task 4 using jQuery */
