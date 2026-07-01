import { useDispatch, useSelector } from "react-redux";
import { API_OPTIONS, UPCOMING_API_URL } from "../utils/constants";
import { addUpcomingMovies } from "../utils/moviesSlice";
import { useEffect } from "react";

const useUpcomingMovies = () => {
    const dispatch = useDispatch();
    const upcomingMovies = useSelector(store => store.movies.upcomingMovies)

    const fetchUpcomingMovieList = async () => {
        const data = await fetch(UPCOMING_API_URL, API_OPTIONS);
        const jsonData = await data.json();
        // console.log("Upcoming movies === ", jsonData?.results);
        dispatch(addUpcomingMovies(jsonData.results));
    }

    useEffect(() => {
        !upcomingMovies && fetchUpcomingMovieList();  // Memoization
    }, [])
}

export default useUpcomingMovies;