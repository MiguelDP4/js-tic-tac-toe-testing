const boardModule = require('../boardModule');

test('checks if player won', () => {
  let boardCells = ['X', 'X', 'X', 'O', '', 'O', '', 'O', ''];
  expect(boardModule.checkWin(boardCells)).toBe(true);
});