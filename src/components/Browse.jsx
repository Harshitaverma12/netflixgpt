import React, { useEffect } from "react";
import Header from "./Header";
import useNowPlayingMovies from "../Hooks/UseNowPlayingMovies";
import MainMovieContainer from "./MainMovieContainer";
import SecondaryMovieComtainer from "./SecondaryMovieComtainer";
import useTrendingMovies from "../Hooks/useTrendingMovies";
import useUpcomingMovies from "../Hooks/useUpcomingMovies copy";

const Browse = () => {
  //calling the custom hook (function )
  useNowPlayingMovies();
  useTrendingMovies();
  useUpcomingMovies();
  return (
    <div>
      <Header />
      <MainMovieContainer />
      <SecondaryMovieComtainer />
    </div>
  );
};

export default Browse;
