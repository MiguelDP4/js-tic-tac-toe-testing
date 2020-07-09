import { boardModule } from '../boardModule';

test('if user does not select a symbol, the default symbol is X', () => {
  expect(boardModule.defaultSymbol('')).toBe('X');
});

test('if user selects a symbol, the symbol will be the one the user selected', () => {
  expect(boardModule.defaultSymbol('X')).toBe('X');
});

test('if user selects a symbol, the symbol will be the one the user selected', () => {
  expect(boardModule.defaultSymbol('O')).toBe('O');
});

test('If the user does not select a name, their name will be player<symbol>', () => {
  expect(boardModule.defaultPlayerName('', 'X')).toBe('playerX');
});

test('If the user does not select a name, their name will be player<symbol>', () => {
  expect(boardModule.defaultPlayerName('', 'O')).toBe('playerO');
});

test('If the user writes their name, their name will be the selected one', () => {
  expect(boardModule.defaultPlayerName('Mike', 'O')).toBe('Mike');
});

test('The second player will have the opposite symbol the first player selected', () => {
  expect(boardModule.selectOppositeSymbol('O')).toBe('X');
});

test('The second player will have the opposite symbol the first player selected', () => {
  expect(boardModule.selectOppositeSymbol('X')).toBe('O');
});

test('checks if player won on position 1,2,3 ', () => {
  const boardCells = ['X', 'X', 'X', '', '', '', '', '', ''];
  expect(boardModule.checkWin(boardCells)).toBe(true);
});

test('checks if player won on position 4,5,6 ', () => {
  const boardCells = ['', '', '', 'X', 'X', 'X', '', '', ''];
  expect(boardModule.checkWin(boardCells)).toBe(true);
});

test('checks if player won on position 7,8,9 ', () => {
  const boardCells = ['', '', '', '', '', '', 'X', 'X', 'X'];
  expect(boardModule.checkWin(boardCells)).toBe(true);
});

test('checks if player won on position 0,3,6 ', () => {
  const boardCells = ['X', '', '', 'X', '', '', 'X', '', ''];
  expect(boardModule.checkWin(boardCells)).toBe(true);
});

test('checks if player won on position 1,4,7 ', () => {
  const boardCells = ['', 'X', '', '', 'X', '', '', 'X', ''];
  expect(boardModule.checkWin(boardCells)).toBe(true);
});

test('checks if player won on position 2,5,8 ', () => {
  const boardCells = ['', '', 'X', '', '', 'X', '', '', 'X'];
  expect(boardModule.checkWin(boardCells)).toBe(true);
});

test('checks if player won on position 0,4,8 ', () => {
  const boardCells = ['X', '', '', '', 'X', '', '', '', 'X'];
  expect(boardModule.checkWin(boardCells)).toBe(true);
});

test('checks if player won on position 6,4,2 ', () => {
  const boardCells = ['', '', 'X', '', 'X', '', 'X', '', ''];
  expect(boardModule.checkWin(boardCells)).toBe(true);
});

test('checks if game is a draw', () => {
  const boardCells = ['O', 'X', 'O', 'O', 'X', 'O', 'X', 'X', 'O'];
  expect(boardModule.checkDraw(boardCells)).toBe(true);
});

test('checks if game is a not draw', () => {
  const boardCells = ['', '', 'X', '', 'X', '', 'X', '', ''];
  expect(boardModule.checkDraw(boardCells)).toBe(false);
});

test('return true if position is not taken', () => {
  const boardCells = ['', '', 'X', '', 'X', '', 'X', '', ''];
  expect(boardModule.fillBoardCell(1, boardCells)).toBe(true);
});

test('return false if position is taken', () => {
  const boardCells = ['', '', 'X', '', 'X', '', 'X', '', ''];
  expect(boardModule.fillBoardCell(3, boardCells)).toBe(false);
});