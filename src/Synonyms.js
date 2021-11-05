import React from "react";
import "./Synonyms.css";

export default function Synonyms(props) {
  return (
    <div className="Synonyms">
      {props.synonyms.map(function (synonym, index) {
        return (
          <ul key={index}>
            <a href="/">
              <li>{synonym}</li>
            </a>
          </ul>
        );
      })}
    </div>
  );
}
