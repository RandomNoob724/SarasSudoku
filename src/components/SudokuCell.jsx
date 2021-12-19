import React from 'react'

const SudokuCell = ({col, checkAnswer}) => {
  return (
    <>
      {col.cols.map((col, colIndex) => {
        return (
          <input
            onChange={checkAnswer}
            readOnly={col.readOnly}
            className="sudokuCell"
            value={col.value}
            style={{ backgroundColor: col.readOnly && "lightgray" }}
          ></input>
        );
      })}
    </>
  )
}

export default SudokuCell
