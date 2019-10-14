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

//task2C

function redirect(event){
    window.location.href = "https://www.google.com"
}

function redirect2(event){
    window.open("https://www.google.com", "blank") 
}

/* Task 4 using jQuery */
//4a

$('#addText').click(function(event){
    let para = $('<p>').text("Hello World")
    $('#task4a').append(para)

})

// 4b 

$(".bgBtn").click(function(event){
    $('body').css('background-color', event.target.innerText.toLowerCase())

})

//4c

$('#Addition').click(function(event){
    let first = $('#text1').val() 
    let second = $('#text2').val()
    let Sum = Number(first) + Number(second)
    $('#answer').append(Sum) 

})