import React from "react";

//칸
const Square = (props) => {
  return (
    <button className="square" onClick={props.onSquareClick} key={props.key}>
      {props.value}
    </button>
  );
};

export default Square;
