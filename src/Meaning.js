import React from "react";
import "./Meaning.css";

export default function Meaning(props) {
  console.log(props.meaning);
  return (
    <div className="Meaning">
      <h3>{props.meaning.partOfSpeech} </h3>
      {props.meaning.meanings.map(function (meaning, index) {
        return (
          <div key={index}>
            <p>
              {meaning.definition} <br />
              <em>{meaning.example}</em>
            </p>
          </div>
        );
      })}
    </div>
  );
}
