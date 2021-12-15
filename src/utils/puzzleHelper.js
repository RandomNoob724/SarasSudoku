export const fixPuzzle = (puzzle) => {
  let row = [];
  let newData = [];
  for (let i = 0; i <= puzzle.length; i++) {
    if (i % 9 === 0) {
      row.length > 0 && newData.push(row);
      row = [];
    }
    if (puzzle[i] !== 0) {
      row.push(puzzle[i]);
    } else {
      row.push(0);
    }
  }
  console.log(newData);
  return newData;
};
