import { useDispatch } from "react-redux";
import { API_OPTIONS, TV, TV_SERIES_LIST } from "../utils/constants";
import { addTvSeries, addUpcomingMovies } from "../utils/moviesSlice";
import { useEffect } from "react";

const useTvSeries = () => {
  const dispatch = useDispatch();

  const getTvSeries = async () => {
    const data = await fetch(TV_SERIES_LIST, API_OPTIONS);
    const json = await data.json();

    dispatch(addTvSeries(json.results));
  };

  useEffect(() => {
    getTvSeries();
  }, []);
};

export default useTvSeries;
