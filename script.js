let currentPlayer = 1;

function playerTurnSwitch(player){
    if (currentPlayer === 1) {
        player.textContent ="X"
        currentPlayer = 2;
    } else {
        player.textContent ="O"
        currentPlayer = 1;
    }
}




