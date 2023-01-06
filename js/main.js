let counter = -1;
let playerTurn = 'X';
let boardArray = [
    ['', '', ''],
    ['', '', ''],
    ['', '', '']
]
xScore = 0;
oScore = 0;
tieScore = 0;

function checkTurn(){
    if(counter % 2 == 0){
        playerTurn = 'X';
    } else {
        playerTurn = 'O';
    }
}

function addToBoard(num){
    counter++;
    checkTurn();
    console.log(num);
    console.log(playerTurn);
    console.log(counter);

    if(playerTurn === 'X'){
        if(num === 0){
            boardArray[0][0] = 'X';
        } else if(num === 1){
            boardArray[0][1] = 'X';
        } else if(num === 2){
            boardArray[0][2] = 'X';
        } else if(num === 3){
            boardArray[1][0] = 'X';
        } else if(num === 4){
            boardArray[1][1] = 'X';
        } else if(num === 5){
            boardArray[1][2] = 'X';
        } else if(num === 6){
            boardArray[2][0] = 'X';
        } else if(num === 7){
            boardArray[2][1] = 'X';
        } else if(num === 8){
            boardArray[2][2] = 'X';
        }
        console.log(boardArray);
    }

    if(playerTurn === 'O'){
        if(num === 0){
            boardArray[0][0] = 'O';
        } else if(num === 1){
            boardArray[0][1] = 'O';
        } else if(num === 2){
            boardArray[0][2] = 'O';
        } else if(num === 3){
            boardArray[1][0] = 'O';
        } else if(num === 4){
            boardArray[1][1] = 'O';
        } else if(num === 5){
            boardArray[1][2] = 'O';
        } else if(num === 6){
            boardArray[2][0] = 'O';
        } else if(num === 7){
            boardArray[2][1] = 'O';
        } else if(num === 8){
            boardArray[2][2] = 'O';
        }
        console.log(boardArray);
    }

    updateBoard();
}


function restartFunction(){
    console.log('reset board');
    counter = -1;
    playerTurn = 'X';
    boardArray = [
        ['', '', ''],
        ['', '', ''],
        ['', '', '']
    ]
    for(let x = 0; x < 3; x++){
        for(let y = 0; y < 3; y++){
            document.getElementById(`X${x}${y}`).style.visibility = 'hidden';
            document.getElementById(`O${x}${y}`).style.visibility = 'hidden';
        }
    }
    console.log(boardArray);
}

function updateBoard(){
    for(let x = 0; x < 3; x++){
        for(let y = 0; y < 3; y++){
            if(boardArray[x][y] === 'X'){
                document.getElementById(`X${x}${y}`).style.visibility = 'visible';
            }
            if(boardArray[x][y] === 'O'){
                document.getElementById(`O${x}${y}`).style.visibility = 'visible';
            }
        }
    }
    checkWinner();
}

function checkWinner(){

}