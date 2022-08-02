import React from "react";

function addButton(props) {
  return (
    <button
      className="dltBtn fa-solid fa-trash"
      id={props.id}
      onClick={(event) => props.deletevalue(event.target.id)}
    ></button>
  );
}

export default addButton;
