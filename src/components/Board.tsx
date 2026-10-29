import React from 'react'
import board from '/chessboard.jpg';


export default function Board() {
  return (
    <div className="flex justify-center">
        <img className="w-2/5 rounded-lg" src={board} alt="board" draggable="false"/>
    </div>
  )
};