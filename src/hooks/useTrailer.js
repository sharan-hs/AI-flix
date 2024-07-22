import { useDispatch, useSelector } from "react-redux";
import { addTrailerVideos } from "../utils/moviesSlice";
import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constants";

const useTrailer = (movieId) => {
  const dispatch = useDispatch();

  const getMovieVideos = async () => {
    const data = await fetch(
      `https://api.themoviedb.org/3/movie/${movieId}/videos`,
      API_OPTIONS,
    );
    const json = await data.json();

    const filteredVideos = json.results.filter(
      (item) => item.type.toUpperCase() == "TRAILER",
    );
    const trailer = filteredVideos.length ? filteredVideos[0] : json.results[0];
    dispatch(addTrailerVideos(trailer));
  };

  useEffect(() => {
    getMovieVideos();
  }, []);
};

export default useTrailer;
