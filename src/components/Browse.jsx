import React, { useEffect } from "react";
import Header from "./Header";
import useNowPlayingMovies from "../Hooks/UseNowPlayingMovies";
import MainMovieContainer from "./MainMovieContainer";
import SecondaryMovieComtainer from "./SecondaryMovieComtainer";

const Browse = () => {
  //calling the custom hook (function )
  useNowPlayingMovies();
  return (
    <div>
      <Header />
      <MainMovieContainer />
      <SecondaryMovieComtainer />
    </div>
  );
};

export default Browse;
