import React from "react";

export default function Phonetic(props) {
  return (
    <div className="Phonetic">
      {" "}
      <h6>/{props.phonetic.text}/</h6>
      <span>
        <a href={props.phonetic.audio} target="_blank" rel="noreferrer">
          Listen
        </a>
      </span>
    </div>
  );
}
