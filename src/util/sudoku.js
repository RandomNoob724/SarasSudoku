import generator from 'sudoku';

// Function to generate a new sudoku board
export const generateSudoku = () => {
  const raw = generator.makepuzzle();
  const solution = generator.solvepuzzle(raw);
  const result = { rows: [] };

  for (let i = 0; i < 9; i++) {
    const row = { cols: [], index: i };

    for (let j = 0; j < 9; j++) {
      const value = raw[i * 9 + j];
      const correctValue = solution[i * 9 + j];
      const col = {
        row: i,
        col: j,
        value: value != null ? value+1 : null,
        readOnly: value !== null,
        correctValue: correctValue+1,
      };
      row.cols.push(col);
    }
    result.rows.push(row);
  }
  return result
};