import React from "react";
import MovieList from "./MovieList";
import { useSelector } from "react-redux";

const SecondaryContainer = () => {
  const movies = useSelector((store) => store.movies);
  return (
    <div className="bg-black pb-24">
      <div className="mt-0 lg:-mt-48 pl-2 lg:pl-12 relative z-20">
        <MovieList title={"Now Playing"} movies={movies.nowPlayingMovies} />
        <MovieList title={"Top-Rated"} movies={movies.topRatedMovies} />
        <MovieList title={"Upcoming"} movies={movies.upcomingMovies} />
        <MovieList title={"Popular"} movies={movies.popularMovies} />
        <MovieList title={"TV Series"} movies={movies.tvSeries} />
      </div>
    </div>
  );
};

export default SecondaryContainer;
