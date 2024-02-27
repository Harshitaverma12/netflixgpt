import React, { useEffect } from "react";
import Header from "./Header";
import useNowPlayingMovies from "../Hooks/UseNowPlayingMovies";
import MainMovieContainer from "./MainMovieContainer";
import SecondaryMovieComtainer from "./SecondaryMovieComtainer";
import useTrendingMovies from "../Hooks/useTrendingMovies";
import useUpcomingMovies from "../Hooks/useUpcomingMovies copy";
import GptSearch from "./GptSearch";
import { useSelector } from "react-redux";

const Browse = () => {
  const showGptSearch = useSelector((store) => store.gpt.showGptSearch);

  //calling the custom hook (function )
  useNowPlayingMovies();
  useTrendingMovies();
  useUpcomingMovies();
  return (
    <div>
      <Header />
      {showGptSearch ? (
        <GptSearch />
      ) : (
        <>
          <MainMovieContainer />
          <SecondaryMovieComtainer />
        </>
      )}
    </div>
  );
};

export default Browse;
