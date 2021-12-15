import { useState, useEffect } from "react";
import "./App.css";
import generator from "sudoku";
import { fixPuzzle } from "./utils/puzzleHelper";
import SudokuGrid from "./components/SudokuGrid";

const generateSudoku = () => {
  const raw = generator.makepuzzle();
  const result = { rows: [] };

  for(let i = 0; i < 9; i++) {
    const row = { cols: [], index: i };

    for(let j = 0; j < 9; j++) {
      const value = raw[i*9+j];
      const col = {
        row: i,
        col: j,
        value: value,
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

  return (
    <div className="App">
      <header className="App-header">
        <pre>
          {JSON.stringify(puzzle, null, 2)}
        </pre>

        <button
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
          onClick={() => {
            const rated = generator.ratepuzzle(puzzle);
            if (rated) {
              setPuzzle(rated);
            }
          }}
        >
          Rate
        </button>
      </header>
    </div>
  );
}

export default App;
