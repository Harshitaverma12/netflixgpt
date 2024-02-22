import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../utils/Constants";
import { addNowTrendingMovies } from "../utils/MovieSlice";
import { useEffect } from "react";

const useTrendingMovies = () => {
  //fetching the data and update in store
  const dispatch = useDispatch();
  const getTrendingMovies = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/popular?language=en-US&page=1",
      API_OPTIONS
    );

    const json = await data.json();
    console.log(json.results);
    dispatch(addNowTrendingMovies(json.results));
  };

  useEffect(() => {
    getTrendingMovies();
  }, []);
};

export default useTrendingMovies;
