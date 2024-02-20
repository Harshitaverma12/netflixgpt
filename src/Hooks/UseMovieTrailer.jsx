import { useEffect } from "react";
import { API_OPTIONS } from "../utils/Constants";
import { useDispatch } from "react-redux";
import { addTrailerVideo } from "../utils/MovieSlice";

const useMovieTrailer = (movieId) => {
  const dispatch = useDispatch();

  {
    /* fetch trailer video */
  }

  const getMoviesVideos = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/" +
        movieId +
        "/videos?language=en-US",
      API_OPTIONS
    );
    const json = await data.json();
    console.log("movie trailer", json);

    // WHEN THERE IS DATA FOR TYPE
    //const trailer = json.results.filter((video) => video.type === "Trailer");
    //console.log("trailer", trailer);

    //suppose there will be multiple trailer

    // const filtertrailer = json.results.filter((video) => video.type === "Trailer");
    // const trailer = filtertrailer[0];
    // console.log("trailer", trailer);

    // WHEN THERE IS NOT DATA FOR TYPE FILTER
    const filtertrailer = json.results.filter(
      (video) => video.type === "Trailer"
    );
    const trailer = filtertrailer.length ? filtertrailer[0] : json.results[0];
    console.log("trailer", trailer);
    // settrailerId(trailer.key);
    dispatch(addTrailerVideo(trailer));
  };

  useEffect(() => {
    getMoviesVideos();
  }, []);
};

export default useMovieTrailer;
