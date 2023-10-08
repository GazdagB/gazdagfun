import Cell from "../components/Cell";
import "./TicTacToe.css";

import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRotateRight } from "@fortawesome/free-solid-svg-icons";

const TicTacToe = () => {
  const [cells, setCells] = useState(["", "", "", "", "", "", "", "", ""]);
  const [go, setGo] = useState("circle");
  const [winningMessage, setWinningMessage] = useState("");
  const [celebrate, setCelebrate] = useState(false);
  const [scores, setScores] = useState(() => {
    const savedScores = JSON.parse(localStorage.getItem("scores"));
    return savedScores || { circle: 0, cross: 0 };
  });

  const message = (
    <p>
      It&apos;s now <span className={go + "-color"}>{go}</span>&apos;s turn
    </p>
  );

  useEffect(() => {
    const checkScore = () => {
      const winningCombos = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
      ];

      let circleWins = false;
      let crossWins = false;

      winningCombos.forEach((array) => {
        if (array.every((cell) => cells[cell] === "circle")) {
          circleWins = true;
        } else if (array.every((cell) => cells[cell] === "cross")) {
          crossWins = true;
        }
      });

      if (circleWins) {
        setWinningMessage(<p>🎖️<span className="circle-color">Circle</span> Wins!</p>);
        updateScores("circle");
      } else if (crossWins) {
        setWinningMessage(<p>🎖️<span className="cross-color">Cross</span> Wins!</p>);
        updateScores("cross");
      } else if (cells.every((cell) => cell !== "")) {
        setWinningMessage("It's a Draw!");
      }
    };

    
    checkScore();
  }, [cells]);

  useEffect(() => {
    const handleCelebrate = () => {
      if (winningMessage === "") {
        setCelebrate(false);
      } else if (winningMessage && winningMessage !== "It's a Draw!") {
        setCelebrate(true);
        setTimeout(() => {
          setCelebrate(false);
        }, 3000);
      }
    };

    handleCelebrate();
  }, [winningMessage]);

  const updateScores = (winner) => {
    setScores((prevScores) => {
      const newScores = { ...prevScores, [winner]: prevScores[winner] + 1 };
      // Save scores to local storage
      localStorage.setItem("scores", JSON.stringify(newScores));
      return newScores;
    });
  };

  const handleReset = () => {
    // Clear all cells
    const emptyCells = ["", "", "", "", "", "", "", "", ""];
    setCells(emptyCells);

    // Clear winning message
    setWinningMessage(null);

    // Clear CSS classes from the cells
    const cellElements = document.querySelectorAll(".square");
    cellElements.forEach((cellElement) => {
      cellElement.firstChild.classList.remove("circle", "cross");
    });

    // Reset the turn to 'circle'
    setGo("circle");
  };

  useEffect(() => {
    const handleCelebrate = () => {
      if (winningMessage === "") {
        setCelebrate(false);
      } else if (winningMessage === <p>🎖️<span className="circle-color">Circle</span> Wins!</p> || winningMessage === <p>🎖️<span className="cross-color">Cross</span> Wins!</p>) {
        setCelebrate(true);
        setTimeout(() => {
          setCelebrate(false);
        }, 3000);
      }
    };
    handleCelebrate();
  }, [winningMessage]);

  return (
    <div className="tic-tac-toe">
      {celebrate && (
        <img
          className="confetti"
          style={{
            width: "100vw",
            height: "90vh",
            mixBlendMode: "multiply",
            position: "absolute",
            pointerEvents: "none",
          }}
          src="https://i.pinimg.com/originals/e9/93/d1/e993d191d03335fd09a1987db3f8d39a.gif"
          alt=""
        />
      )}
      <div className="reset-container">
        <div
          onClick={handleReset}
          className="d-flex justify-content-center align-items-center gap-2"
        >
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
      <div className="scoreboard">
        <p className="h5">Circle: {scores.circle}</p>
        <p className="h5">Cross: {scores.cross}</p>
      </div>
    </div>
  );
};

export default TicTacToe;