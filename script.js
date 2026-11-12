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
function tieGame(){
    for(let i = 0; i < cells.length; i++){
        if(cells[i].textContent == ""){
            return false;
        }
    }
    localStorage.setItem("p1ties", (Number(localStorage.getItem("p1ties")) || 0) + 1);
    localStorage.setItem("p2ties", (Number(localStorage.getItem("p2ties")) || 0) + 1);
    alert("It's a tie!");
    location.reload();
    return true;
}
function updateScore(player, scores){
    let playerElement = document.querySelector(`.player[data-player="${player}"]`);

    playerElement.textContent = `Player ${player} = ${scores[0]} - ${scores[1]} - ${scores[2]}`;
}
function saveScores(){
    let player1Score = [Number(localStorage.getItem("p1wins")) || 0,
        Number(localStorage.getItem("p1losses")) || 0,
        Number(localStorage.getItem("p1ties")) || 0
    ];
    let player2Score = [Number(localStorage.getItem("p2wins")) || 0,
        Number(localStorage.getItem("p2losses")) || 0,
        Number(localStorage.getItem("p2ties")) || 0
    ];

    updateScore(1, player1Score);
    updateScore(2, player2Score);
}
saveScores();

function resetScoreboard(){
    localStorage.setItem("p1wins", 0);
    localStorage.setItem("p2wins", 0);
    localStorage.setItem("p1losses", 0);
    localStorage.setItem("p2losses", 0);
    localStorage.setItem("p1ties", 0);
    localStorage.setItem("p2ties", 0);

    saveScores();
}
function checkWinner(){
    if(currentPlayer == 1){
        for(let i = 0; i < win.length; i++){
            if(cells[win[i][0]].textContent == "X" && cells[win[i][1]].textContent == "X" && cells[win[i][2]].textContent == "X"){
                alert("Player 1 wins!");
                let player1Score = [Number(localStorage.getItem("p1wins")) || 0,
                    Number(localStorage.getItem("p1losses")) || 0,
                    Number(localStorage.getItem("p1ties")) || 0
                ];
                player1Score[0]++;
                localStorage.setItem("p2losses", (Number(localStorage.getItem("p2losses")) || 0) + 1);
                updateScore(1, player1Score);
                localStorage.setItem("p1wins", player1Score[0]);
                location.reload();
                return;
            }
        }
    }
    if(currentPlayer == 2){
        for(let i = 0; i < win.length; i++){
            if(cells[win[i][0]].textContent == "O" && cells[win[i][1]].textContent == "O" && cells[win[i][2]].textContent == "O"){
                alert("Player 2 wins!");
                let player2Score = [Number(localStorage.getItem("p2wins")) || 0,
                    Number(localStorage.getItem("p2losses")) || 0,
                    Number(localStorage.getItem("p2ties")) || 0
                ];
                player2Score[0]++;
                localStorage.setItem("p1losses", (Number(localStorage.getItem("p1losses")) || 0) + 1);
                updateScore(2, player2Score);
                localStorage.setItem("p2wins", player2Score[0]);
                location.reload();
                return;
            }
        }
    }
}


