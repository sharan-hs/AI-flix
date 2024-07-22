import React, { useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { API_OPTIONS, SEARCH_MOVIE_API, SUPPORTED_LANGUAGES } from '../utils/constants'
import lang from '../utils/langConstants'
import genAI from '../utils/gemini'
import { addGPTMovies } from '../utils/gptSlice'

const GPTSearchBar = () => {
    const language = useSelector(store => store.config.lang)
    const searchText = useRef(null)
    const dispatch = useDispatch()

    const fetchIMDBMovies = async(movieName) => {
       
        const movies = await fetch(`https://api.themoviedb.org/3/search/movie?query=${movieName}&include_adult=false&language=en-US&page=1`,API_OPTIONS)
        const json = await movies.json()
        return json.results
    }

    const searchHandler = async() => {
        
        const  searchQuery  = "Act as movie recommendation system and suggest movies for the query: "  + searchText.current.value  +". only give me names of 5 movies, comma separated like the given result ahead. Example Result: Avatar, Sholay, Bahubali, Singham, MS Dhoni";

        const  model  =  genAI.getGenerativeModel({ model:  "gemini-pro" });
        const  result  =  await  model.generateContent(searchQuery);
        const  response  =  await  result.response;
        const  gptMoviesList  =  response.text().split(", ");
        
        
        const promiseArray = gptMoviesList.map(movie => fetchIMDBMovies(movie))
        const tmdbResults = await Promise.all(promiseArray)

        dispatch(addGPTMovies({movieNames: gptMoviesList, movieResults: tmdbResults}))
        
    }
   
  return (
    <div className='pt-[50%] lg:pt-[10%] flex mx-6 lg:mx-0 items-center justify-center'>
        <form onSubmit={(e)=> e.preventDefault()} className='bg-black flex flex-col items-center w-[90%] lg:w-3/5 rounded-lg lg:flex-row'>
            <input ref={searchText} type='text' className='lg:p-4 lg:m-4 lg:w-[75%] w-[90%] p-3 mt-5 mx-4' placeholder={lang[language].gptSearchPlaceholder} />
            <button onClick={searchHandler} className='rounded-lg bg-red-600 text-white lg:w-[20%] lg:p-4 px-4 my-4 mx-20 lg:m-0 py-2 w-[50%]'>{lang[language].search}</button>
        </form>
    </div>
  )
}

export default GPTSearchBar