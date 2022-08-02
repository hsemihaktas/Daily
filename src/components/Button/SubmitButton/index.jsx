import React from "react";

function submitButton(props) {
  return (
    <button className="sbmtButton" onClick={props.sbmtValue}>
      Submit
    </button>
  );
}

export default submitButton;
