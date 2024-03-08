import React, { useRef } from "react";
import lang from "../utils/LanguageConstants";
import { useDispatch, useSelector } from "react-redux";
import openai from "../utils/openAi";
import { API_OPTIONS } from "../utils/Constants";
import { logDOM } from "@testing-library/react";
import { addGptMovieResult } from "../utils/gptSlice";

const GptSearchBar = () => {
  const dispatch = useDispatch();
  const searchText = useRef(null);
  const langKey = useSelector((store) => store.configLang.lang);

  //for each movie will search tmdb api
  const searchMovieTMDB = async (movie) => {
    const data = await fetch(
      "https://api.themoviedb.org/3/search/movie?query=" +
        movie +
        "&include_adult=false&language=en-US&page=1",
      API_OPTIONS
    );
    const json = await data.json();
    return json.results;
  };

  const handleGptSearchClick = async () => {
    console.log(searchText.current.value);

    //MAKE API CALL TO GPT API AND GET MOVIE RESULT

    const gptQuery =
      "Act as a Movie Recommendation System and suggest some movies for the query: " +
      searchText.current.value +
      ". Only give names of 5 movies,comma separated like the example result given ahead. Example Result: Fighter, Gadar, URI, Don, Baby Day Out";
    const gptResults = await openai.chat.completions.create({
      messages: [{ role: "user", content: gptQuery }],
      model: "gpt-3.5-turbo",
    });

    //GPT ERROR HANDLING
    if (!gptResults.choices) {
    }
    const gptMovies = gptResults.choices[0]?.message.content.split(",");
    console.log(gptResults.choices[0]?.message.content);

    const dataArray = gptMovies.map((movie) => searchMovieTMDB(movie));

    //Promise.all() reads all the promise
    const tmdbResults = await Promise.all(dataArray);
    console.log("tmdbresult", tmdbResults);
    dispatch(
      addGptMovieResult({ movieNames: gptMovies, movieResults: tmdbResults })
    );
  };

  return (
    <div className="flex justify-center pt-[10%] ">
      <form
        action=""
        className="bg-black w-1/2 grid grid-cols-12"
        onSubmit={(e) => e.preventDefault()}
      >
        <input
          ref={searchText}
          type="text"
          className="p-4 m-4 col-span-10"
          placeholder={lang[langKey].gptplaceholder}
        />
        <button
          className="py-2 m-4 px-4 col-span-2 bg-red-700 text-white rounded-lg"
          onClick={handleGptSearchClick}
        >
          {lang[langKey].search}
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;
