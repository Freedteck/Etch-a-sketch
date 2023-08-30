const container = document.querySelector('.container');
const button = document.querySelector('button');
let numberOfSquares = 16;
let squares;
const colors = ['red', 'blue', 'green', 'orange', 'darkcyan', 'black', 'purple', 'pink']

function drawSquare(size) {
    container.style.setProperty('--size', size);
    for (i = 0; i < size * size; i++) {
        squares = document.createElement('div');
        squares.classList.add('square');
        container.appendChild(squares);
    }
    
    let sqr = document.querySelectorAll('.square')
    sqr.forEach(square => {
        square.addEventListener('click', function () {       
        const randomColor = Math.floor(Math.random() * colors.length)
        const bgcolor = colors[randomColor]
        square.style.backgroundColor = bgcolor
    });
    square.addEventListener('mouseover', function () {       
        const randomColor = Math.floor(Math.random() * colors.length)
        const bgcolor = colors[randomColor]
        container.style.setProperty('--bg', bgcolor)
        square.classList.add('hovered')
    })
})
}
drawSquare(numberOfSquares);

function changeSquare(size) {
    size = prompt('Enter the number of squares per side (1-100): ');
    size = Number(size)
    if (!isNaN(size) && size >= 1 && size <= 100) {
        container.innerHTML = ''
        drawSquare(size);        
    }else {
        alert('Please enter a valid number between 1 and 100.')
    }    
}
button.addEventListener('click', changeSquare) 
