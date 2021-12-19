import React from "react";
import SudokuCell from "./SudokuCell";

const SudokuGrid = ({ rowData }) => {
  console.log(rowData);
  const checkAnswer = (event) => {
    console.log(event)
    if(event.target.value === 0 ){
      event.target.style.backgroundColor = "white";
    }
  }

  return (
    <>
      <tbody>
        {rowData.rows.map((row, rowIndex) => {
          return (
            <tr key={rowIndex}>
              <SudokuCell col={row} checkAnswer={checkAnswer} />
            </tr>
          );
        })}
      </tbody>
    </>
  );
};

export default SudokuGrid;
