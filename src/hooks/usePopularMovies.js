import { useDispatch } from "react-redux"
import { API_OPTIONS, POPULAR_MOVIES_LIST,  } from "../utils/constants"
import { addNowPLayingMovies, addPopularMovies } from "../utils/moviesSlice"
import { useEffect } from "react"

 const usePopularMovies = () => {

    const dispatch = useDispatch()

    const getPopularMovies = async () =>{

       
        const data = await fetch(POPULAR_MOVIES_LIST,API_OPTIONS)
        const json = await data.json()
        dispatch(addPopularMovies(json.results))
    }

    useEffect(()=>{
        getPopularMovies();
    },[])

}

export default usePopularMovies