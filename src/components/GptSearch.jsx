import React from "react";
import GptSearchBar from "./GptSearchBar";
import GptMovieSuggestions from "./GptMovieSuggestions";
import { bg } from "../utils/Constants";

function GptSearch() {
  return (
    <>
      <div className="w-full -z-10 fixed">
        <img className="w-full h-screen object-cover" src={bg} alt="bg" />
      </div>
      <div className="pt-[30%]">
        <GptSearchBar />
        <GptMovieSuggestions />
      </div>
    </>
  );
}

export default GptSearch;
