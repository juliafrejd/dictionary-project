import React from "react";
import "./ShowResults.css";

export default function ShowResults(props) {
  if (props.showResults) {
    return (
      <div className="ShowResults">
        <h2>{props.showResults.word}</h2>
        <h5>/{props.showResults.phonetic}/</h5>

        {props.showResults.meanings.map(function (meaning, index) {
          return meaning.definition[0];
        })}
      </div>
    );
  } else {
    return null;
  }
}
