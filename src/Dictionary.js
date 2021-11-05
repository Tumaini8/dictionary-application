import axios from "axios";
import React, { useState } from "react";
import Outputs from "./Outputs.js";
import Photos from "./Photos.js";
import "./Dictionary.css";

export default function Dictionary() {
  let [word, setWord] = useState("code");
  let [outputs, setOutputs] = useState(null);
  let [loaded, setLoaded] = useState(false);
  let [photos, setPhotos] = useState(null);

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function handleChange(event) {
    event.preventDefault();
    setWord(event.target.value);
  }

  function handleResponse(response) {
    setOutputs(response.data[0]);
  }

  function search() {
    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`;
    axios.get(apiUrl).then(handleResponse);
    let pexelsApiUrl = `https://api.pexels.com/v1/search?query=${word}&per_page=1`;
    let pexelsApiKey =
      "563492ad6f9170000100000100a3e4437429460aafe9dbb6113b9bad";
    axios
      .get(pexelsApiUrl, {
        headers: { Authorization: `Bearer ${pexelsApiKey}` },
      })
      .then(handlePexelsResponse);
  }

  function handlePexelsResponse(response) {
    console.log(response.data.photos);
    setPhotos(response.data.photos);
  }

  function Load() {
    setLoaded(true);
    search();
  }

  if (loaded) {
    return (
      <div className="Dictionary">
        <section>
          <form onSubmit={handleSubmit}>
            <input
              type="Search"
              placeholder="Enter a word"
              onChange={handleChange}
              defaultValue="Code"
            />
          </form>
        </section>
        <Outputs outputs={outputs} />
        <Photos photos={photos} />
      </div>
    );
  } else {
    Load();
    return "Loading.....";
  }
}
