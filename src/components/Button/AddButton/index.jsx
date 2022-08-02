import React from "react";

function addButton(props) {
  return (
    <button className="addBtn" onClick={props.addvalue}>
      +
    </button>
  );
}

export default addButton;
