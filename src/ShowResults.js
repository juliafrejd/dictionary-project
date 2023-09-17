import React from "react";
import "./ShowResults.css";
import Meaning from "./Meaning";

export default function ShowResults(props) {
  if (props.showResults) {
    return (
      <div className="ShowResults">
        <h2>{props.showResults.word}</h2>
        <p>/{props.showResults.phonetic}/</p>

        {props.showResults.meanings.map(function (meaning, index) {
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
