import React from "react";
import { useState } from "react";
import Squre from "./Squre";
export default function Board() {
    const [xisNext, setxisNext] = useState(true);
    const [squares, setSquares] = useState(Array(9).fill(null));
    function handleClick(i){
      const newSquares = squares.slice();
      if(xisNext){
        newSquares[i] = 'X';
      }
      else{
        newSquares[i] = 'O';
      }
      setSquares(newSquares);
      setxisNext(!xisNext)
    }
    return (
      <>
        <div className="board-row">
          <Squre value={squares[0]} onSquareClick={()=>handleClick(0)} />
          <Squre value={squares[1]} onSquareClick={()=>handleClick(1)}/>
          <Squre value={squares[2]} onSquareClick={()=>handleClick(2)}/>
        </div>
        <div className="board-row">
          <Squre value={squares[3]} onSquareClick={()=>handleClick(3)}/>
          <Squre value={squares[4]} onSquareClick={()=>handleClick(4)}/>
          <Squre value={squares[5]} onSquareClick={()=>handleClick(5)}/>
        </div>
        <div className="board-row">
          <Squre value={squares[6]} onSquareClick={()=>handleClick(6)}/>
          <Squre value={squares[7]} onSquareClick={()=>handleClick(7)}/>
          <Squre value={squares[8]} onSquareClick={()=>handleClick(8)}/>
        </div>
      </>
    );
  }