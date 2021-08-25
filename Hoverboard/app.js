const container = document.getElementById('container')
const colors = ['#33d65f', '#2596be', '#db1414', '#8b941f', '#78185b']
const SQUARE = 500

for(let i = 0; i<SQUARE; i++){
    const square = document.createElement('div')
    square.classList.add('square')
    square.addEventListener('mouseover', () => setColor(square))


    square.addEventListener('mouseout', () => removeColor(square))

    container.appendChild(square)
}

function setColor(element) {
    const color = getRandomColor()
    element.style.background = color
    element.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`
}

function removeColor(element) {
    element.style.background = '#1d1d1d'
    element.style.boxShadow = '0 0 2px black'
}

function getRandomColor(){
    return colors[Math.floor(Math.random() * colors.length)]
}