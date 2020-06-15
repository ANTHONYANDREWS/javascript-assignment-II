const box = document.getElementById('#btn');
const hovered = document.getElementById('#div');

loadEventListeners();

function loadEventListeners(){

    document.addEventListener('click', getSquare);
    document.addEventListener('hover', getRandomColor);
}

function getSquare(){
    var div = document.createElement('div');
    div.className = "square"
    document.body.appendChild(div);
}

function getRandomColor() {
    var letters = "0123456789ABCDEF";
    var color = "#";
    for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
   }
   var newColor = getRandomColor();

