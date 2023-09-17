let sols = [
  [
    [1, 0, 0],
    [1, 0, 0],
    [1, 0, 0],
  ],
  [
    [0, 1, 0],
    [0, 1, 0],
    [0, 1, 0],
  ],
  [
    [0, 0, 1],
    [0, 0, 1],
    [0, 0, 1],
  ],
  [
    [1, 1, 1],
    [0, 0, 0],
    [0, 0, 0],
  ],
  [
    [0, 0, 0],
    [1, 1, 1],
    [0, 0, 0],
  ],
  [
    [0, 0, 0],
    [0, 0, 0],
    [1, 1, 1],
  ],
  [
    [0, 0, 1],
    [0, 1, 0],
    [1, 0, 0],
  ],
  [
    [1, 0, 0],
    [0, 1, 0],
    [0, 0, 1],
  ],
];

let playingField = [
  [0, 0, 0],
  [0, 0, 0],
  [0, 0, 0],
];

let change = 0;

function gameBegin() {
  let gameBox = document.getElementById('game-box');

  gameBox.innerHTML = `
    <h2 id="begin">Let's begin.</h2>
    <div class="tic-tac-toe"></div>
    <button id="reset-btn">New Game</button>
    `;

  let resetBtn = document.getElementById('reset-btn');

  resetBtn.addEventListener('click', () => {
    gameBegin();
  });

  function init() {
    for (let i = 0; i < playingField.length; i++) {
      for (let j = 0; j < playingField.length; j++) {
        let box = document.createElement('div');
        box.classList = 'tic-box';
        box.column = i;
        box.row = j;
        document.querySelector('.tic-tac-toe').appendChild(box);
      }
      let box = document.createElement('break');
      document.querySelector('.tic-tac-toe').appendChild(box);
    }
  }

  init();

  let ticBois = document.getElementsByClassName('tic-box');

  for (let i = 0; i < ticBois.length; i++) {
    let ticBoi = ticBois[i];
    ticBoi.addEventListener('click', function (e) {
      if (
        !e.currentTarget.classList.contains('circle') &&
        !e.currentTarget.classList.contains('cross')
      ) {
        if (change == 1) {
          playingField[e.currentTarget.column][e.currentTarget.row] = 1;
          e.currentTarget.classList.add('cross');
          e.target.innerHTML = '<span class="boxCont">X</span>';
          change = 0;
          check();
          return 0;
        }
        if (change == 0) {
          playingField[e.currentTarget.column][e.currentTarget.row] = 2;
          e.currentTarget.classList.add('circle');
          e.target.innerHTML = '<span class="boxCont">O</span>';
          change = 1;
          check();
          return 0;
        }
      }
    });
  }

  function check() {
    let x1Count = 0;
    let x2Count = 0;

    for (let i = 0; i < sols.length; i++) {
      for (let j = 0; j < sols[i].length; j++) {
        for (let k = 0; k < sols[j].length; k++) {
          let begin = document.getElementById('begin');
          if (sols[i][j][k] == 1 && playingField[j][k] == 1) {
            x1Count++;
            if (x1Count == 3) {
              x1Count = 0;
              begin.classList.add('winner');
              begin.innerHTML = 'Player X Won!';
              return 0;
            }
          }
          if (sols[i][j][k] == 1 && playingField[j][k] == 2) {
            x2Count++;
            if (x2Count == 3) {
              x2Count = 0;
              begin.classList.add('winner');
              begin.innerHTML = 'Player O Won!';
              return 0;
            }
          }
        }
      }
      x1Count = 0;
      x2Count = 0;
    }
  }
}

function weird() {
  gameBegin();
}

function boo() {
  let gameBox = document.getElementById('game-box');

  gameBox.innerHTML = '<h2>Booo, bye.</h2>';
}
