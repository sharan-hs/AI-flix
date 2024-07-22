import { useDispatch } from "react-redux"
import { API_OPTIONS, NOW_PLAYING_LIST } from "../utils/constants"
import { addNowPLayingMovies } from "../utils/moviesSlice"
import { useEffect } from "react"

 const useNowPlaying = () => {

    const dispatch = useDispatch()

    const getMoviesList = async () =>{

       
        const data = await fetch(NOW_PLAYING_LIST,API_OPTIONS)
        const json = await data.json()
        dispatch(addNowPLayingMovies(json.results))
    }

    useEffect(()=>{
        getMoviesList();
    },[])

}

export default useNowPlaying