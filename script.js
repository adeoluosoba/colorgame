var colors = generateRandomColors()
// THIS picks all the div with squares
var squares = document.querySelectorAll('.square');
var pickedColor = pickColor();
var guessColor = document.querySelector('.guess_color');
var message = document.querySelector('.message');
var header = document.querySelector('.header');

guessColor.textContent = pickedColor
// iterate through the shapes
for (var i = 0; i<squares.length; i++){
    squares[i].style.backgroundColor = colors[i];
    squares[i].addEventListener("click", function(){
        var clickedColor = this.style.backgroundColor;

        if (clickedColor === pickedColor){
            message.textContent = "Correct"
            changeColor(clickedColor);
            header.style.backgroundColor = clickedColor;
        }else {
           this.style.backgroundColor = "transparent"
           message.textContent = "try Again"
        }
    })
}


function changeColor(color){
    for (var i=0; i< colors.length; i++){
        squares[i].style.backgroundColor = color
    }
}

function generateRandomColors(){
    var arr = []
    for(var i=0; i<6; i++ ){
        arr.push(randomColor())
    }

    return arr
}

function pickColor(){
    var randomNumbers = Math.floor(Math.random()*5+1);
    return colors[randomNumbers]
}

function randomColor(){
    var r  = Math.floor(Math.random() *256)
    var g  = Math.floor(Math.random() *256)
    var b  = Math.floor(Math.random() *256)

    return "rgb(" + r + ", " + g +", " + b + ")";
}

