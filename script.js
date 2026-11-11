function playerOne(){
    let player1 = document.getElementById("player1");
    document.addEventListener("click", function() {
        player1.textContent ="X"
    });
}
function playerTwo(){
    let player2 = document.getElementById("player2");
    document.addEventListener("click", function() {
        player2.textContent ="O"
    });
}



