import { globals } from './globals';
import { Player } from './playerFactory';
import { displayModule } from './displayModule';

export const boardModule = (() => {
  let cells = ['', '', '', '', '', '', '', '', ''];
  const showMessageWinner = () => {
    const winMessage = document.getElementById('win-message');
    if (globals.turn === globals.player1.symbol) {
      winMessage.innerHTML = `${globals.player1.name} wins this round!`;
      globals.player1.increaseScore();
    }
    if (globals.turn === globals.player2.symbol) {
      winMessage.innerHTML = `${globals.player2.name} wins this round!`;
      globals.player2.increaseScore();
    }
  };

  const fillBoardCell = (index, boardCells = cells) => {
    if (boardCells[index - 1] === '') {
      boardCells[index - 1] = globals.turn;
      return true;
    }
    return false;
  };

  const checkWin = (boardCells = cells) => {
    const tempArray = [];
    tempArray.push(globals.turn === boardCells[0]
      && globals.turn === boardCells[1]
      && globals.turn === boardCells[2]);
    tempArray.push(globals.turn === boardCells[3]
      && globals.turn === boardCells[4]
      && globals.turn === boardCells[5]);
    tempArray.push(globals.turn === boardCells[6]
      && globals.turn === boardCells[7]
      && globals.turn === boardCells[8]);
    tempArray.push(globals.turn === boardCells[0]
      && globals.turn === boardCells[3]
      && globals.turn === boardCells[6]);
    tempArray.push(globals.turn === boardCells[1]
      && globals.turn === boardCells[4]
      && globals.turn === boardCells[7]);
    tempArray.push(globals.turn === boardCells[2]
      && globals.turn === boardCells[5]
      && globals.turn === boardCells[8]);
    tempArray.push(globals.turn === boardCells[0]
      && globals.turn === boardCells[4]
      && globals.turn === boardCells[8]);
    tempArray.push(globals.turn === boardCells[6]
      && globals.turn === boardCells[4]
      && globals.turn === boardCells[2]);
    return tempArray.some(x => x === true);
  };

  const checkDraw = (boardCells = cells) => {
    if ((boardCells.every(x => x !== '')) && !checkWin()) return true;
    return false;
  };

  const takeTurn = (cellId, index) => {
    if (globals.continueGame) {
      const cell = document.getElementById(cellId);
      const turnSuccess = fillBoardCell(index);
      if (turnSuccess) {
        displayModule.fadeIn(cell);
        if (checkWin()) {
          displayModule.showElement('win-screen');
          showMessageWinner();
          displayModule.updateScores();
          globals.continueGame = false;
        }
        if (checkDraw()) {
          displayModule.showElement('win-screen');
          displayModule.showMessageDraw();
          globals.continueGame = false;
        }
        cell.innerHTML = `<img class='board-img' src='../img/tictactoe${globals.turn}.svg'>`;
        if (globals.turn === 'X') {
          globals.turn = 'O';
        } else {
          globals.turn = 'X';
        }
      }
    }
  };

  const initializeBoardButtons = () => {
    for (let i = 1; i <= 9; i += 1) {
      document.getElementById(`cell-${i}`).addEventListener('click', () => {
        boardModule.takeTurn(`cell-${i}`, i);
      });
    }
  };

  const resetGame = () => {
    cells = ['', '', '', '', '', '', '', '', ''];
    displayModule.cleanCells();
    globals.continueGame = true;
    displayModule.hideElement('win-screen');
  };

  const newGame = () => {
    displayModule.cleanCells();
    displayModule.hideElement('board');
    displayModule.showElement('players');
    displayModule.cleanForm();
    globals.continueGame = true;
  };

  const defaultSymbol = (symbol) => {
    if (symbol !== 'X' && symbol !== 'O') return 'X';
    return symbol;
  };

  const defaultPlayerName = (namePlayer, symbol) => {
    if (namePlayer === '') {
      return `player${symbol}`;
    }
    return namePlayer;
  };

  const selectOppositeSymbol = (symbol) => {
    if (symbol === 'X') return 'O';
    return 'X';
  };

  const startGame = () => {
    displayModule.showElement('board');
    initializeBoardButtons();
    displayModule.showElement('reset-top-button');
    const namePlayer1 = document.getElementById('PlayerName1');
    const namePlayer2 = document.getElementById('PlayerName2');
    const symbol = document.getElementById('inputSymbolGame');

    const player1Symbol = defaultSymbol(symbol.options[symbol.selectedIndex].text);
    const player2Symbol = selectOppositeSymbol(player1Symbol);

    const player1Name = defaultPlayerName(namePlayer1.value, player1Symbol);
    const player2Name = defaultPlayerName(namePlayer2.value, player2Symbol);

    globals.player1 = Player(player1Name, player1Symbol);
    globals.player2 = Player(player2Name, player2Symbol);

    document.getElementById('show-symbol-player-1').innerHTML = globals.player1.symbol;
    document.getElementById('show-symbol-player-2').innerHTML = globals.player2.symbol;

    document.getElementById('name-player-1').innerHTML = globals.player1.name;
    document.getElementById('name-player-2').innerHTML = globals.player2.name;
    displayModule.updateScores();

    displayModule.hideElement('players');
  };

  return {
    checkWin,
    fillBoardCell,
    checkDraw,
    resetGame,
    newGame,
    startGame,
    showMessageWinner,
    takeTurn,
    defaultSymbol,
    defaultPlayerName,
    selectOppositeSymbol,
    initializeBoardButtons,
  };
})();

export default boardModule;