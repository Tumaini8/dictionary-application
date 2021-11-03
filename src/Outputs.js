import React from "react";
import Meaning from "./Meaning.js";

export default function Outputs(props) {
  console.log(props.outputs);
  if (props.outputs) {
    return (
      <div className="Outputs">
          <h2 className="text-capitalize mt-4">
              {props.outputs.word}
              </h2>
        {props.outputs.meanings.map(function (meaning, index) {
          return (
            <div key={index}>
              <Meaning meaning={meaning} />
            </div>
          );
        })}
      </div>
    );
  } else {
    return null;
  }
}
