import React from "react";

const SpecialButton = (special) => {
  return (
    <div>
      <button>{ special }</button>
      {/* Display a button element rendering the data being passed down from the parent container on props */}
    </div>
  );
};

export default SpecialButton;