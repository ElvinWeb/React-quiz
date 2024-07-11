import React from "react";

export default function NextButton({ dispatch, answer, children }) {
  if (answer === null) return null;

  return (
    <button
      className="btn btn-ui"
      onClick={() => dispatch({ type: "nextQuestion" })}
    >
      {children}
    </button>
  );
}
