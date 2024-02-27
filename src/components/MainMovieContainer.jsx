import React from "react";
import { useSelector } from "react-redux";
import VideoBackground from "./VideoBackground";
import VideoTitle from "./VideoTitle";

function MainMovieContainer() {
  const movie = useSelector((store) => store.movies?.nowPlayingMovies);

  if (!movie) return; //this is know as early return. if no data is preset return from here
  const mainMovie = movie[0];

  const { original_title, overview, id } = mainMovie;
  return (
    <div>
      <VideoTitle title={original_title} overview={overview} />
      <VideoBackground movieId={id} />
    </div>
  );
}

export default MainMovieContainer;
