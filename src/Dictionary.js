import axios from "axios";
import React, { useState } from "react";
import Outputs from "./Outputs.js";
import "./Dictionary.css";

export default function Dictionary() {
  let [word, setWord] = useState(" ");
  let [outputs, setOutputs] = useState(null);

  function handleSubmit(event) {
    event.preventDefault();

    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`;
    axios.get(apiUrl).then(handleResponse);
  }
  function handleChange(event) {
    event.preventDefault();
    setWord(event.target.value);
  }
  function handleResponse(response) {
    console.log(response.data);
    setOutputs(response.data[0]);
  }

  return (
    <div className="Dictionary">
      <section>
      <form onSubmit={handleSubmit}>
        <input
          type="Search"
          placeholder="Enter a word"
          onChange={handleChange}
        />
      </form>
      </section>
      <Outputs outputs={outputs} />
    </div>
  );
}
