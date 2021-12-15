import React from "react";

const SudokuGrid = ({ rowData }) => {
  return (
    <>
      {rowData.foreach((cell, index) => {
        return <td key={index}>{cell ? cell : ""}</td>;
      })}
    </>
  );
};

export default SudokuGrid;
