import React from 'react';

export function ErrorMessage(props) {
  return (
    <div className={props.message ? "error-message" : "hidden-error-message"}>
      {props.message}
    </div>
  );
}
