//  1

let exo1 = document.querySelector('h1')

// // 2

// let exo2 = document.querySelector('h1').style.color = "blue"

// 3

let color = () => {
    exo1.style.color = 'blue'
}


// 4

color();

// 5

let bonsoir = () => {
    console.log('Ouai Bonsoir');
}
exo1.addEventListener('click', bonsoir)