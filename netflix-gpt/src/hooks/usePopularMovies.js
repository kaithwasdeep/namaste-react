import { useDispatch, useSelector } from "react-redux";
import { API_OPTIONS, POPULAR_API_URL } from "../utils/constants";
import { addPopularMovies } from "../utils/moviesSlice";
import { useEffect } from "react";

const usePopularMovies = () => {
    const dispatch = useDispatch();
    const popularMovies = useSelector(store => store.movies.popularMovies);

    const fetchPopularMovieList = async () => {
        const data = await fetch(POPULAR_API_URL, API_OPTIONS);
        const jsonData = await data.json();
        // console.log("POPULAR movies === ", jsonData?.results);
        dispatch(addPopularMovies(jsonData.results));
    }

    useEffect(() => {
        !popularMovies && fetchPopularMovieList();
    }, [])
}

export default usePopularMovies;