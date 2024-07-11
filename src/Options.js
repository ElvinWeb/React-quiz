import React from "react";

export default function Options({ question }) {
  return (
    <div className="options">
      {question.options.map((option, index) => (
        <button className="btn btn-option" key={index}>
          {option}
        </button>
      ))}
    </div>
  );
}
