import React, { useState } from "react";
import axios from "axios";
import ShowResults from "./ShowResults";
import "./Dictionary.css";

export default function Dictionary() {
  let [keyword, setKeyword] = useState(" ");
  let [showResults, setShowResults] = useState(null);

  function handleResponse(response) {
    console.log(response.data);
    setShowResults(response.data);
  }

  function search(event) {
    event.preventDefault();
    alert(`Seaching for definition of ${keyword}`);

    let apiKey = "04bf7320b0acbo6987aef70f64cbdt6d";
    let apiUrl = `https://api.shecodes.io/dictionary/v1/define?word=${keyword}&key=${apiKey}`;
    axios.get(apiUrl).then(handleResponse);
  }

  function handleKeywordChange(event) {
    setKeyword(event.target.value);
  }
  return (
    <div className="Dictionary">
      <h1 className="text-center">Dictionary</h1>
      <p className="text-center">What word would you like to look up?</p>
      <form onSubmit={search}>
        <input type="search" onChange={handleKeywordChange} />
      </form>
      <ShowResults showResults={showResults} />
    </div>
  );
}
