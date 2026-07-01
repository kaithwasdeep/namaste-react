import { useDispatch, useSelector } from "react-redux";
import { API_OPTIONS, NOW_PLAYING_API_URL } from "../utils/constants";
import { addnowPlayingMovies } from "../utils/moviesSlice";
import { useEffect } from "react";

const useNowPlayingMovies = () => {
    const dispatch = useDispatch();
    const nowPlayingMovie = useSelector(store => store.movies.nowPlayingMovies)

    const fetchNowPlayingMovieList = async () => {
        const data = await fetch(NOW_PLAYING_API_URL, API_OPTIONS);
        const jsonData = await data.json();
        // console.log("now playing movies === ", jsonData?.results);
        dispatch(addnowPlayingMovies(jsonData.results));
    }

    useEffect(() => {
        !nowPlayingMovie && fetchNowPlayingMovieList();
    }, [])
}

export default useNowPlayingMovies;