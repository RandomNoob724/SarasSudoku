import { useState, useEffect } from "react";
import "./App.css";
import SudokuGrid from "./components/SudokuGrid";
import Confetti from "./components/Confetti";
import { generateSudoku } from "./util/sudoku";

function App() {
  const [puzzle, setPuzzle] = useState(generateSudoku());
  const [isSolved, setIsSolved] = useState(false);

  // Add modal to ask the user if they are sure that they would like to start a new game
  const resetBoard = () => {
    setPuzzle(generateSudoku());
  }

  // When a value is changed the value on that specific place on the board update the board to the new board
  const changeValue = (row, col, value) => {
    const newPuzzle = { ...puzzle };
    newPuzzle.rows[row].cols[col].value = value;
    setPuzzle(newPuzzle);
  };

  // Check if the solution is the correct one
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
    console.log(isCorrect);
    return isCorrect;
  };

  useEffect(() => {
    if (checkSolution()) {
      setIsSolved(true);
    } else {
      setIsSolved(false);
    }
  }, [puzzle]);

  // Display the correct solution
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
        <SudokuGrid rowData={puzzle} changeValue={changeValue} />
        <div className="center">
          <button
            className="btn"
            onClick={solveBoard}
          >
            Show Solution
          </button>
          <button
            className="btn ml-4"
            onClick={resetBoard}
          >
            New Game
          </button>
          <button
            className="btn ml-4"
            onClick={checkSolution}
          >
            Check Solution
          </button>
        </div>
      </header>
    </div>
  );
}

export default App;
