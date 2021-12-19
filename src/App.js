import { useState, useEffect } from "react";
import "./App.css";
import generator from "sudoku";
import SudokuGrid from "./components/SudokuGrid";

const generateSudoku = () => {
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
        value: value ? value+1 : null,
        readOnly: value !== null,
        correctValue: correctValue+1,
      };
      row.cols.push(col);
    }
    result.rows.push(row);
  }
  return result
};


function App() {
  const [puzzle, setPuzzle] = useState(generateSudoku());
  console.log(puzzle);

  const solveBoard = () => {
    const solution = puzzle
    solution.rows.forEach(cols => {
      cols.cols.forEach(cell => {
        cell.value = cell.correctValue
      });
    });
    setPuzzle({...puzzle, solution});
  }


  return (
    <div className="App center">
      <header className="App-header">
        <table>
          <SudokuGrid rowData={puzzle} />
        </table>
        <div className="center">
          <button
            className="btn"
            onClick={solveBoard}
          >
            Solve
          </button>
          <button
            className="btn ml-4"
            onClick={() => {
              const rated = generator.ratepuzzle(puzzle);
              if (rated) {
                setPuzzle(rated);
              }
            }}
          >
            Rate
          </button>
        </div>
      </header>
    </div>
  );
}

export default App;
