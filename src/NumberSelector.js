import React from "react";


function NumberSelector({ selectedNumbers, onNumberClick, onClearNumbers, onRandomNumbers }) {



  return (
   <div className="number-selector">
      {[...Array(20).keys()].map(i => (
        <button
          key={i + 1}
          className={`number-button ${selectedNumbers.includes(i + 1) ? 'selected' : ''}`}
          onClick={() => onNumberClick(i + 1)}
        >
          {i + 1}
        </button>
      ))}
      <button onClick={onClearNumbers}>Clear</button>
      <button onClick={onRandomNumbers}>Random</button>
    </div>

  );
}

export default NumberSelector;