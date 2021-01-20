let button = document.getElementById('button');
let restartIn = document.getElementById('restartIn');
let statA = document.getElementById('statA');
let statB = document.getElementById('statB');
let statC = document.getElementById('statC');
const numbers = [];


button.addEventListener('click', async () => {

    for (let i = 1; i < 4; i++) randomizer(i);

    for (let i = 0; i < 4; i++) numbers.push(randomizer());;


    let min_number = Math.min.apply(Math, numbers);
    numbers.pop(min_number);


    optel = numbers[0] + numbers[1] + numbers[2];
    


    statA.innerHTML = "Numbers: " + optel;
})

function randomizer(range = 6){ 
    return Math.floor((Math.random() * range)) + 1;
}