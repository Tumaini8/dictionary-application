import React from "react";
import "./Meaning.css";
import Synonyms from "./Synonyms";

export default function Meaning(props) {
  return (
    <div className="Meaning">
      <section>
        <h5 className="text-uppercase text-center">{props.meaning.partOfSpeech}</h5>
        {props.meaning.definitions.map(function (definition, index) {
          return (
            <div key={index}>
              <p>
                <strong> Definition:</strong> {definition.definition}
                <br />
                <strong> Example:</strong>{" "}
                <em className="text-success"> {definition.example}</em>
              </p>
              <Synonyms synonyms={definition.synonyms} />
            </div>
          );
        })}
      </section>
    </div>
  );
}
