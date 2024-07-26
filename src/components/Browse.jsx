import React, { useEffect } from "react";
import Header from "./Header";
import { API_OPTIONS, NOW_PLAYING_LIST } from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { addNowPLayingMovies } from "../utils/moviesSlice";
import useNowPlaying from "../hooks/useNowPlaying";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";
import usePopularMovies from "../hooks/usePopularMovies";
import useTopRatedMovies from "../hooks/useTopRatedMovies";
import useUpcomingMovies from "../hooks/useUpcomingMovies";

import GPTSearch from "./GPTSearch";

const Browse = () => {
  useNowPlaying();
  usePopularMovies();
  useTopRatedMovies();
  useUpcomingMovies();

  const showGPTSearch = useSelector((store) => store.gpt.gptSearchView);

  return (
    <div>
      <Header />
      {showGPTSearch ? (
        <GPTSearch />
      ) : (
        <>
          <MainContainer />
          <SecondaryContainer />
        </>
      )}
    </div>
  );
};

export default Browse;
