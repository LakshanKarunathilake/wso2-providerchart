import React from "react";
import "./ErrorMessage.css";

const ErrorMessage = props => {
  return (
    <div class="error message">
      <h2>Warning</h2>
      <p>{props.message}</p>
    </div>
  );
};

export default ErrorMessage;
