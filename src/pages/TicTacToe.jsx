//Components
import Cell from "../components/Cell";
// CSS
import "./TicTacToe.css";

import { useState, useEffect } from "react";

//Icon Imports
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRotateRight } from "@fortawesome/free-solid-svg-icons";
import { faTrophy } from "@fortawesome/free-solid-svg-icons";

const TicTacToe = () => {
  //STATES
  const [cells, setCells] = useState(["", "", "", "", "", "", "", "", ""]);
  const [go, setGo] = useState("circle");
  const [winningMessage, setWinningMessage] = useState("");
  const [celebrate, setCelebrate] = useState(false);
  const [scores, setScores] = useState(() => {
    const savedScores = JSON.parse(localStorage.getItem("scores"));
    return savedScores || { circle: 0, cross: 0 };
  });
  const [isModalOpen, setIsModalOpen] = useState(false);

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
        setWinningMessage(
          <p>
            🎖️<span className="circle-color">Circle</span> Wins!
          </p>
        );
        updateScores("circle");
      } else if (crossWins) {
        setWinningMessage(
          <p>
            🎖️<span className="cross-color">Cross</span> Wins!
          </p>
        );
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
      } else if (
        winningMessage ===
        (
          <p>
            🎖️<span className="circle-color">Circle</span> Wins!
          </p>
        ) ||
        winningMessage ===
        (
          <p>
            🎖️<span className="cross-color">Cross</span> Wins!
          </p>
        )
      ) {
        setCelebrate(true);
        setTimeout(() => {
          setCelebrate(false);
        }, 3000);
      }
    };
    handleCelebrate();
  }, [winningMessage]);

  const resetWins = () => {
    localStorage.removeItem("scores");
    setScores({ circle: 0, cross: 0 });
    setIsModalOpen(false); // Close the modal after resetting wins
  };

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

      <div>
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
        <div className="scoreboard"></div>
      </div>

      <div className="highscore-container">
        <h2>
          {" "}
          <FontAwesomeIcon icon={faTrophy} /> Higscore Wins
        </h2>
        <hr style={{ width: "400px" }} />
        <p className="h5 d-flex align-items-center justify-content-center gap-3 display-5">
          <div className="circle-sm"></div>Circle Wins: {scores.circle}
        </p>
        <p className="h5 d-flex align-items-center justify-content-center gap-4 display-5">
          <div className="cross-sm"></div>Cross Wins: {scores.cross}
        </p>
        <button
          onClick={() => setIsModalOpen(true)}
          className="btn btn-primary mt-3"
        >
          Reset Wins
        </button>
      </div>

      {/* MODAL */}
      {isModalOpen && (
        <div className="modal-overlay">
          <div className="custom-modal">
            <h3>Are you sure you want to reset scores?</h3>
            <div className="modal-buttons">
              <button className="btn btn-danger" onClick={resetWins}>
                Reset
              </button>
              <button
                className="btn btn-secondary"
                onClick={() => setIsModalOpen(false)}
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default TicTacToe;
