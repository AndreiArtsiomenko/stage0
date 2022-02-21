const mainGrid = document.querySelector('.main__grid');
const mainBoxes = document.querySelectorAll('.main__box');
let playerMove = 0;
let playerWin = '';
const combinations = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
];


mainGrid.addEventListener('click', function(e) {
    if (e.target.className = 'main__box') {
        if (e.target.innerHTML !== '') return;
        playerMove % 2 === 0 ? e.target.innerHTML = 'X' : e.target.innerHTML = 'O';
        playerMove++;
        checkResultValidation()
    };
});

function checkResultValidation() {
    for (let i = 0; i < combinations.length; i++) {
        if (mainBoxes[combinations[i][0]].innerHTML === 'X' && mainBoxes[combinations[i][1]].innerHTML === 'X' && mainBoxes[combinations[i][2]].innerHTML === 'X') {
            playerWin = 'X';
            return showWinner(playerWin);
        }
        if (mainBoxes[combinations[i][0]].innerHTML === 'O' && mainBoxes[combinations[i][1]].innerHTML === 'O' && mainBoxes[combinations[i][2]].innerHTML === 'O') {
            playerWin = 'O';
            showWinner(playerWin);
        }
    }
}

function showWinner(win) {
    console.log(`Winner ${win}`);
    let counter = 0;
    for (let i of mainBoxes) {
        if (i.innerHTML !== '') counter++
    }
    console.log(counter)
};