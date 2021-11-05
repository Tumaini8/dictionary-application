import React from "react";
import Meaning from "./Meaning.js";
import Phonetic from "./Phonetic.js";

export default function Outputs(props) {
  console.log(props.outputs);
  if (props.outputs) {
    return (
      <div className="Outputs">
      <section>
        <h2 className="text-capitalize mt-4">{props.outputs.word}</h2>
        {props.outputs.phonetics.map(function(phonetic, index){
          return(
            <div key={index}>
              <Phonetic phonetic ={phonetic}/>
              </div>
          );
        })}
        </section>
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
