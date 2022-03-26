const DEFAULT_SIZE = 16; 
 
const container = document.querySelector('#container'); 
const control = document.querySelector('#control'); 
let size; 

const clear = document.createElement('button'); 
clear.setAttribute('id', 'clear'); 
clear.textContent = 'Clear'; 
clear.addEventListener('click', () => {
    clearGrid(); 
    getSize(); 
    makeGrid(size); 
}); 
control.appendChild(clear); 

function makeGrid(size) {
    container.style.gridTemplateRow = `repeat(${size}, 1fr)`; 
    container.style.gridTemplateColumns = `repeat(${size}, 1fr)`; 
    
    for (let i = 0; i < size ** 2; i++) {
        let div = document.createElement('div'); 
        div.classList.add('grid-item'); 
        div.addEventListener('mouseover', (e) => {
            if (e.buttons == 1) {
                div.style.backgroundColor = 'black'; 
            };
        }); 
        container.appendChild(div); 
    }; 
}; 

function getSize() {
    do{
        size = Number(prompt('Please enter the size of the board[1-100]')); 
    } while ((size <= 0 || size >= 100) && size); 
}; 

function clearGrid() {
    container.innerHTML = ''; 
}; 

window.onload = () => {
    makeGrid(DEFAULT_SIZE); 
}