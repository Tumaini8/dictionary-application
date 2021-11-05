import React from "react";

export default function Phonetic(props) {
  console.log(props.phonetic);
  return (
    <div className="Phonetic">
     
        {" "}
        <h6>/{props.phonetic.text}/</h6>
        <span>
        <a href="https://ssl.gstatic.com/dictionary/static/sounds/20200429/word--_gb_1.8.mp3">
          Listen
        </a>
      </span>
    </div>
  );
}
