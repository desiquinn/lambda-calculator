import React from "react";

const NumberButton = (number) => {

  return (
    <div>
      <button> { number } </button>
      {/* Display a button element rendering the data being passed down from the parent container on props */}
    </div>
  );
};

export default NumberButton;