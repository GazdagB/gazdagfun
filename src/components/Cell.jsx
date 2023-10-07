import PropTypes from "prop-types";

const Cell = ({ cells, id, cell, setCells, go, setGo, winningMessage }) => {
  console.log(cell);

  const handleClick = (e) => {
    const taken =
      e.target.firstChild.classList.contains("circle") ||
      e.target.firstChild.classList.contains("cross");

    if (!taken) {
      if (go === "circle") {
        e.target.firstChild.classList.add("circle");
        setGo("cross");
        handleCellChange("circle");
      }

      if (go === "cross") {
        e.target.firstChild.classList.add("cross");
        setGo("circle");
        handleCellChange("cross");
      }
    }
  };

  const handleCellChange = (className) => {
    const nextCells = cells.map((cell, index) => {
      if (index === id) {
        return className;
      } else {
        return cell;
      }
    });
    setCells(nextCells);
  };

  return (
    <div onClick={!winningMessage && handleClick} className="square" id={id}>
      <div></div>
    </div>
  );
};

Cell.propTypes = {
  id: PropTypes.number.isRequired, // Change 'string' to the appropriate data type if needed
  cell: PropTypes.string.isRequired,
  setCells: PropTypes.func.isRequired,
  go: PropTypes.string.isRequired,
  setGo: PropTypes.func.isRequired,
  cells: PropTypes.array.isRequired,
  winningMessage: PropTypes.string.isRequired,
};

export default Cell;
