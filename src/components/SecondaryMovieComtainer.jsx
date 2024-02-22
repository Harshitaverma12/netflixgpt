import React from "react";
import MovieList from "./MovieList";
import { useSelector } from "react-redux";

function SecondaryMovieComtainer() {
  const movies = useSelector((store) => store.movies);
  return (
    <div className=" bg-black">
      <div className="-mt-52 pl-4 relative z-20">
        <MovieList title={"Now Playing"} movies={movies.nowPlayingMovies} />
        <MovieList title={"Trending"} movies={movies.nowTrendingMovies} />
        <MovieList
          title={"Upcoming Movies"}
          movies={movies.nowUpcomingMovies}
        />
        {/* <MovieList title={"Horror Movies"} movies={movies.nowPlayingMovies} /> */}
      </div>
    </div>
  );
}

export default SecondaryMovieComtainer;
