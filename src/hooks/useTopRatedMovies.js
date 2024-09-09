import { useDispatch } from "react-redux";
import { API_OPTIONS, TOP_RATED_MOVIES_LIST } from "../utils/constants";
import { addNowPLayingMovies, addTopRatedMovies } from "../utils/moviesSlice";
import { useEffect } from "react";

const useTopRatedMovies = () => {
  const dispatch = useDispatch();

  const getTopRatedMovies = async () => {
    const data = await fetch(TOP_RATED_MOVIES_LIST, API_OPTIONS);
    const json = await data.json();

    dispatch(addTopRatedMovies(json.results));
  };

  useEffect(() => {
    getTopRatedMovies();
  }, []);
};

export default useTopRatedMovies;
