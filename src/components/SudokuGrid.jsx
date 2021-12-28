import React, {useState, useEffect} from "react";
import SudokuCell from "./SudokuCell";

const SudokuGrid = ({ rowData, changeValue, correct }) => {

  const [rowdata, setRow] = useState(rowData);

  useEffect(() => {
    setRow(rowData);
  }, [rowData]);

  return (
    <>
      <tbody>
        {rowdata.rows.map((row, rowIndex) => {
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
