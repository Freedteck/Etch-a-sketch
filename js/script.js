const container = document.querySelector('.container');
let numberOfSquares = prompt('Enter square dimension');
       
function drawSquare(size) {
    container.style.setProperty('--size', size);
    for (i = 0; i < size * size; i++) {
        const squares = document.createElement('div');
        squares.classList.add('square');
        container.appendChild(squares);
    }
}

drawSquare(numberOfSquares);