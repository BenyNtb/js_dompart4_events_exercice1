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






// CORRECTION 

// Envents Exercice1

//1
// méthode1
let myH1 = document.querySelector('h1')

// let colorH1 = () => {
//     myH1.style.color = 'blue'
// } 
// myH1.addEventListener('click', colorH1)

// methode2
// myH1.addEventListener('click', () => {
//     myH1.style.color = 'blue'
// })
4
