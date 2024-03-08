import { useDispatch, useSelector } from "react-redux";
import { API_OPTIONS } from "../utils/Constants";
import { addNowTrendingMovies } from "../utils/MovieSlice";
import { useEffect } from "react";

const useTrendingMovies = () => {
  //fetching the data and update in store
  const dispatch = useDispatch();
  const nowTrendingMovies = useSelector(
    (store) => store.movies.nowTrendingMovies
  );
  const getTrendingMovies = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/popular?language=en-US&page=1",
      API_OPTIONS
    );

    const json = await data.json();
    dispatch(addNowTrendingMovies(json.results));
  };

  useEffect(() => {
    !nowTrendingMovies && getTrendingMovies();
  }, []);
};

export default useTrendingMovies;
