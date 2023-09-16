let count = 0;
function gameBegin() {
    let gameBox = document.getElementById("game-box");

    gameBox.innerHTML = `
    <h2 id="begin">Let's begin.</h2>
    <table class="tic-tac-toe">
            <tr class="trow">
                <td class="tic-box" onclick="tictactoe(event)"></td>
                <td class="tic-box" onclick="tictactoe(event)"></td>
                <td class="tic-box" onclick="tictactoe(event)"></td>
            </tr>
            <tr class="trow">
                <td class="tic-box" onclick="tictactoe(event)"></td>
                <td class="tic-box" onclick="tictactoe(event)"></td>
                <td class="tic-box" onclick="tictactoe(event)"></td>
            </tr>
            <tr class="trow">
                <td class="tic-box" onclick="tictactoe(event)"></td>
                <td class="tic-box" onclick="tictactoe(event)"></td>
                <td class="tic-box" onclick="tictactoe(event)"></td>
            </tr>
        </table>
    `;
}

function boo() {
    let gameBox = document.getElementById("game-box");

    gameBox.innerHTML = "<h2>Booo, bye.</h2>";
}

function tictactoe(e) {
    if (count % 2 === 0) {
        e.target.innerHTML = `<p>X</p>`
    } else {
        e.target.innerHTML = `<p>O</p>`
    }
    count++;
}