import React from "react";
function Squre({value,onSquareClick}) {

  return (
    <button className="square" onClick={onSquareClick}>
      {value}
    </button>
  );
}
export default Squre;