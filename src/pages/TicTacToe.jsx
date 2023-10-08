import Cell from "../components/Cell";
import "./TicTacToe.css";

import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRotateRight } from "@fortawesome/free-solid-svg-icons";

const TicTacToe = () => {
  const [cells, setCells] = useState(["", "", "", "", "", "", "", "", ""]);
  const [go, setGo] = useState("circle");
  const [winningMessage, setWinningMessage] = useState(null);

  const message = <p>It&apos;s now <span className={go + "-color"}>{go}</span>&apos;s turn</p>;

  useEffect(() => {
    const checkScore = () => {
      const winningCombos = [
        [0,1,2],[3,4,5],[6,7,8],
        [0,3,6],[1,4,7],[2,5,8],
        [0,4,8],[2,4,6]
      ]

      winningCombos.forEach(array => {
        let circleWins = array.every(cell => cells[cell] === "circle")

        if(circleWins){
          setWinningMessage("Circle Wins!")
          return;
        }
      })

      winningCombos.forEach(array => {
        let crossWins = array.every(cell => cells[cell] === "cross")

        if(crossWins){
          setWinningMessage("Cross Wins!")
          return;
        }
      })

      if(cells.every(cell => cell !== "")){
        setWinningMessage("It's a Draw!")
      }
    };

    checkScore();
  }, [cells]);

  const handleReset = () => {
    // Clear all cells
    const emptyCells = ["", "", "", "", "", "", "", "", ""];
    setCells(emptyCells);
  
    // Clear winning message
    setWinningMessage(null);
  
    // Clear CSS classes from the cells
    const cellElements = document.querySelectorAll('.square');
    cellElements.forEach(cellElement => {
      cellElement.firstChild.classList.remove('circle', 'cross');
    });
  
    // Reset the turn to 'circle'
    setGo("circle");
  };


  return (
    <div className="tic-tac-toe">

      <div className="reset-container">
      <div onClick={handleReset} className="d-flex justify-content-center align-items-center gap-2">
        <p className="h5">Reset</p>
        <FontAwesomeIcon icon={faRotateRight} />
      </div>
      </div>


      <div className="gameboard">
        {cells.map((cell, index) => (
          <Cell
            key={index}
            id={index}
            cell={cell}
            setCells={setCells}
            go={go}
            setGo={setGo}
            cells={cells}
            winningMessage={winningMessage}
          />
        ))}
      </div>
      <p className="display-4">{winningMessage || message}</p>
    </div>
  );
};

export default TicTacToe;
