import React from 'react'
import { useSelector } from 'react-redux'
import MovieList from './MovieList'

const GPTMovieSuggestions = () => {
    const {movieNames, movieResults} = useSelector((store)=> store.gpt)
    if(!movieNames) return null


  return (
    <div className='lg:p-4 lg:m-4 my-4  bg-black opacity-90 text-white'>
      <div>
        {movieNames.map((movieName, index) => (
          <MovieList key={movieName} 
            title={movieName}
            movies={movieResults[index]}
          />
        ))}
      </div>
    </div>
  )
}

export default GPTMovieSuggestions