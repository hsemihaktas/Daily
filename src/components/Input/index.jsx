import React from 'react';
import classnames from 'classnames';

function input(props) {
  return (
    <>
      <input
        type={props.type}
        placeholder={props.placeholder}
        id={props.id}
        onChange={props.onchange}
        className={classnames('inpt', {
          dangerInpt: props.error,
        })}
      ></input>
      {props.error && <p className="dangerText">{props.error}</p>}
    </>
  );
}

export default input;
