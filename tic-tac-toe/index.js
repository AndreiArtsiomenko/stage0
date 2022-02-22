const mainGrid = document.querySelector('.main__grid');
const mainBoxes = document.querySelectorAll('.main__box');
const mainModalWindow = document.querySelector('.main__modal-window')
const resultWin = document.querySelector('.result__win');
const resultMoves = document.querySelector('.result__moves');
const windowModalBtn = document.querySelector('.window-modal__btn');
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


mainGrid.addEventListener('click', e => {
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
            showWinner(playerWin);
            break;
        } else if (mainBoxes[combinations[i][0]].innerHTML === 'O' && mainBoxes[combinations[i][1]].innerHTML === 'O' && mainBoxes[combinations[i][2]].innerHTML === 'O') {
            playerWin = 'O';
            showWinner(playerWin);
            break;
        }
    }
    if (playerMove === 9) {
        showDraw()
    }
}

function showWinner(win) {
    let counter = 0;
    for (let i of mainBoxes) {
        if (i.innerHTML !== '') counter++
    }
    resultWin.innerHTML = `Player ${win} has WON`;
    resultMoves.innerHTML = `Moves: ${counter}`
    mainModalWindow.style.display = 'block'
};

function showDraw() {
    resultWin.innerHTML = 'Game ended in a draw';
    resultMoves.innerHTML = '';
    mainModalWindow.style.display = 'block'
};

function closeWindowModal() {
    mainModalWindow.style.display = 'none';
    location.reload();
}

windowModalBtn.addEventListener('click', closeWindowModal)