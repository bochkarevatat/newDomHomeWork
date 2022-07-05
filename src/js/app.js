// TODO: write code here
export default class Game {
  constructor(boardEl) {
    this.boardEl = boardEl;
    this.random = 0;
  }

  createBoard() {
    const boardEl = document.getElementById('board');
    for (let i = 1; i < 17; i += 1) {
      const cell = document.createElement('div');
      cell.classList.add('game-cell');
      boardEl.appendChild(cell);
    }
    this.randomImg();
  }

  randomImg() {
    setInterval(() => {
      const boardsCells = [...document.querySelectorAll('.game-cell')];
      boardsCells.forEach((elem) => {
        if (elem.classList.contains('image')) {
          elem.classList.remove('image');
        }
      });
      const random = Math.floor(Math.random() * boardsCells.length);
      return boardsCells[random].classList.add('image');
    }, 1000);
  }
}

const gamesBoard = new Game();
gamesBoard.createBoard();
