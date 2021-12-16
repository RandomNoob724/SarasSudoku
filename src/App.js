import { useState, useEffect } from "react";
import "./App.css";
import generator from "sudoku";
import SudokuGrid from "./components/SudokuGrid";

const generateSudoku = () => {
  const raw = generator.makepuzzle();
  const result = { rows: [] };

  for (let i = 0; i < 9; i++) {
    const row = { cols: [], index: i };

    for (let j = 0; j < 9; j++) {
      const value = raw[i * 9 + j];
      const col = {
        row: i,
        col: j,
        value: value != null ? value + 1 : null,
        readOnly: value !== null,
      };
      row.cols.push(col);
    }
    result.rows.push(row);
  }
  return result;
};

function App() {
  const [puzzle, setPuzzle] = useState(generateSudoku());
  const [solution, setSolution] = useState([]);
  console.log(puzzle);

  return (
    <div className="App center">
      <header className="App-header">
        <table>
          <SudokuGrid rowData={puzzle} />
        </table>
        <div className="center">
          <button
            className="btn"
            onClick={() => {
              const solved = generator.solvepuzzle(puzzle);
              if (solved) {
                setPuzzle(solved);
              }
            }}
          >
            Solve
          </button>
          <button
            className="btn"
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
