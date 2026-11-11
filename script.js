let currentPlayer = 1;

function playerTurnSwitch(player){
    if (currentPlayer === 1) {
        player.textContent ="X"
        checkWinner();
        currentPlayer = 2;
    } else {
        player.textContent ="O"
        checkWinner();
        currentPlayer = 1;
    }
}

let board = document.getElementById("board");
let cells = board.children;
let win = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
]
function checkWinner(){
    if(currentPlayer == 1){
        for(let i = 0; i < win.length; i++){
            if(cells[win[i][0]].textContent == "X" && cells[win[i][1]].textContent == "X" && cells[win[i][2]].textContent == "X"){
                alert("Player 1 wins!");
                location.reload();
            }
        }
    }
    if(currentPlayer == 2){
        for(let i = 0; i < win.length; i++){
            if(cells[win[i][0]].textContent == "O" && cells[win[i][1]].textContent == "O" && cells[win[i][2]].textContent == "O"){
                alert("Player 2 wins!");
                location.reload();
            }
        }
    }
}



