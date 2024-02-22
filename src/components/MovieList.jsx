import React from "react";
import MovieCard from "./MovieCard";

function MovieList({ title, movies }) {
  // Check if movies is null or undefined
  if (!movies) {
    return null; // or you can render a loading indicator or an empty state
  }

  return (
    <div className="px-6 ">
      <div className="flex overflow-x-scroll flex-col no-scrollbar">
        <h1 className="py-4 text-2xl text-white">{title}</h1>
        <div className="flex" style={{ width: "150rem" }}>
          {movies.map((movie) => (
            <MovieCard key={movie.id} posterPath={movie.poster_path} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default MovieList;
