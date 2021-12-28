import React from "react";
import SudokuCell from "./SudokuCell";

const SudokuGrid = ({ rowData, changeValue, correct }) => {

  return (
    <>
      <tbody>
        {rowData.rows.map((row, rowIndex) => {
          return (
            <tr key={rowIndex}>
              {row.cols.map((col, colIndex) => {
                return (
                  <SudokuCell cell={col} changeValue={changeValue} correct={correct} />
                );
              })}
            </tr>
          );
        })}
      </tbody>
    </>
  );
};

export default SudokuGrid;
