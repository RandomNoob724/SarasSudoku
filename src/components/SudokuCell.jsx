import React, { useState, useEffect } from "react";

const SudokuCell = ({ cell, changeValue }) => {
  const [cellValue, setCellValue] = useState(cell);

  useEffect(() => {
    setCellValue(cell);
  }, [cell]);

  const checkAnserHandler = (event) => {
    const newValue = {...cellValue};
    newValue.value = event.target.value ? parseInt(event.target.value) : null;
    changeValue(newValue.row, newValue.col, newValue.value);
  }

  return (
    <td>
      <input
        onChange={checkAnserHandler}
        readOnly={cellValue.readOnly}
        className="sudokuCell"
        value={cell.value != null ? cell.value : ""}
        style={{ backgroundColor: /*cellValue.value !== cellValue.correctValue && cellValue.value ? "red" :*/ cellValue.readOnly ? "lightgray" : "white" }}
      ></input>
    </td>
  );
};

export default SudokuCell;
