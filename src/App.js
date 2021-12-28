import { useState, useEffect } from "react";
import "./App.css";
import generator from "sudoku";
import SudokuGrid from "./components/SudokuGrid";
import Confetti from "./components/Confetti";

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


function App() {
  const [puzzle, setPuzzle] = useState(generateSudoku());
  const [isSolved, setIsSolved] = useState(false);

  const resetBoard = () => {
    setPuzzle(generateSudoku());
  }

  const changeValue = (row, col, value) => {
    const newPuzzle = { ...puzzle };
    newPuzzle.rows[row].cols[col].value = value;
    setPuzzle(newPuzzle);
  };

  const checkSolution = () => {
    const newPuzzle = { ...puzzle };
    let isCorrect = true;
    for (let i = 0; i < 9; i++) {
      for (let j = 0; j < 9; j++) {
        const value = newPuzzle.rows[i].cols[j].value;
        const correctValue = newPuzzle.rows[i].cols[j].correctValue;
        if (value !== correctValue) {
          isCorrect = false;
        }
      }
    }
    return isCorrect;
  };

  useEffect(() => {
    if (checkSolution()) {
      alert("You win!");
      setIsSolved(true);
    }
  }, [puzzle]);

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
      {isSolved && <Confetti />}
      <header className="App-header">
        <table>
          <SudokuGrid rowData={puzzle} changeValue={changeValue} />
        </table>
        <div className="center">
          <button
            className="btn"
            onClick={solveBoard}
          >
            Show Solution
          </button>
          <button
            className="btn ml-4"
            onClick={resetBoard}>
            Reset
          </button>
        </div>
      </header>
    </div>
  );
}

export default App;
