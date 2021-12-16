import React from "react";

const SudokuGrid = ({ rowData }) => {
  
  return (
    <tbody>
      {rowData.rows.map((row, rowIndex) => {
        return (
          <tr>
            {row.cols.map((col, colIndex) => {
              return (
                <input readOnly={col.readOnly} className="sudokuCell" value={col.value}>
                </input>
              );
            })}
          </tr>
        )})}
    </tbody>
  );
};

export default SudokuGrid;
