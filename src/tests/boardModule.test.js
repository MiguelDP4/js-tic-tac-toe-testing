import { boardModule } from '../boardModule';

test.only('checks if player won on position 1,2,3 ', () => {
  let boardCells = ['X', 'X', 'X', '', '', '', '', '', ''];
  expect(boardModule.checkWin(boardCells)).toBe(true);
});

test('checks if player won on position 4,5,6 ', () => {
  let boardCells = ['', '', '', 'X', 'X', 'X', '', '', ''];
  expect(boardModule.checkWin(boardCells)).toBe(true);
});

test('checks if player won on position 7,8,9 ', () => {
  let boardCells = ['', '', '', '', '', '', 'X', 'X', 'X'];
  expect(boardModule.checkWin(boardCells)).toBe(true);
});

test('checks if player won on position 0,3,6 ', () => {
  let boardCells = ['X', '', '', 'X', '', '', 'X', '', ''];
  expect(boardModule.checkWin(boardCells)).toBe(true);
});

test('checks if player won on position 1,4,7 ', () => {
  let boardCells = ['', 'X', '', '', 'X', '', '', 'X', ''];
  expect(boardModule.checkWin(boardCells)).toBe(true);
});

test('checks if player won on position 2,5,8 ', () => {
  let boardCells = ['', '', 'X', '', '', 'X', '', '', 'X'];
  expect(boardModule.checkWin(boardCells)).toBe(true);
});

test('checks if player won on position 0,4,8 ', () => {
  let boardCells = ['X', '', '', '', 'X', '', '', '', 'X'];
  expect(boardModule.checkWin(boardCells)).toBe(true);
});

test('checks if player won on position 6,4,2 ', () => {
  let boardCells = ['', '', 'X', '', 'X', '', 'X', '', ''];
  expect(boardModule.checkWin(boardCells)).toBe(true);
});

test('checks if game is a draw', () => {
  let boardCells = ['O', 'X', 'O', 'O', 'X', 'O', 'X', 'X', 'O'];
  expect(boardModule.checkDraw(boardCells)).toBe(true);
});

test('checks if game is a not draw', () => {
  let boardCells = ['', '', 'X', '', 'X', '', 'X', '', ''];
  expect(boardModule.checkDraw(boardCells)).toBe(false);
});

test('return true if position is not taken', () => {
  let boardCells = ['', '', 'X', '', 'X', '', 'X', '', ''];
  expect(boardModule.fillBoardCell(1,boardCells)).toBe(true);
});

test('return false if position is taken', () => {
  let boardCells = ['', '', 'X', '', 'X', '', 'X', '', ''];
  expect(boardModule.fillBoardCell(3,boardCells)).toBe(false);
});