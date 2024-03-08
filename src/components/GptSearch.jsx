import React from "react";
import GptSearchBar from "./GptSearchBar";
import GptMovieSuggestions from "./GptMovieSuggestions";
import { bg } from "../utils/Constants";

function GptSearch() {
  return (
    <div>
      <div className="w-full -z-10 fixed">
        <img className="w-full" src={bg} alt="bg" />
      </div>
      <GptSearchBar />
      <GptMovieSuggestions />
    </div>
  );
}

export default GptSearch;
