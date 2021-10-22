import React from "react";

const Alert = (props) => {
  return (
    <div class="alert alert-warning alert-dismissible fade show" role="alert">
      <strong>{props.message}</strong> Process is successful!!
      <button
        type="button"
        class="btn-close"
        data-bs-dismiss="alert"
        aria-label="Close"
      ></button>
    </div>
  );
};

export default Alert;
