import React from 'react'
import MovieCard from './MovieCard'



const MovieList = ({title, movies}) => {
  
    
  return (
    <div className='p-2 bg-transparent'>
        
        <h1 className='font-semibold text-2xl my-2 text-white'>{title}</h1>
        <div className='flex overflow-x-scroll'>
        <div className='flex gap-4'>
        {
            movies?.map(movie => 
                <MovieCard key={movie.id} movieInfo={movie} posterPath={movie.poster_path}/>
            )}
           
            </div>
        </div>
    </div>
  )
}

export default MovieList