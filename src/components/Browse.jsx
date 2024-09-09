import React from "react";
import Header from "./Header";
import { useSelector } from "react-redux";

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
