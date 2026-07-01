import { useDispatch, useSelector } from "react-redux";
import { API_OPTIONS, TOP_RATED_API_URL } from "../utils/constants";
import { addTopRatedMovies } from "../utils/moviesSlice";
import { useEffect } from "react";

const useTopRatedMovies = () => {
    const dispatch = useDispatch();
    const topRatedMovies = useSelector(store => store.movies.topRatedMovies);

    const fetchTopRatedMovieList = async () => {
        const data = await fetch(TOP_RATED_API_URL, API_OPTIONS);
        const jsonData = await data.json();
        // console.log("Top Rated movies === ", jsonData?.results);
        dispatch(addTopRatedMovies(jsonData.results));
    }

    useEffect(() => {
        !topRatedMovies && fetchTopRatedMovieList();
    }, [])
}

export default useTopRatedMovies;