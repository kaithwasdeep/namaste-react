import { useDispatch, useSelector } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import { addMovieTrailer } from "../utils/moviesSlice";
import { useEffect } from "react";

const useMovieTrailer = (movieId) => {
    const dispatch = useDispatch();
    const movieTrailer = useSelector(store => store.movies.movieTrailer)
    const getMovieVideos = async () => {
        const data = await fetch("https://api.themoviedb.org/3/movie/"+movieId+"/videos", API_OPTIONS);
        const jsonData = await data.json();
        // console.log("jsonData === ", jsonData);
        const filterData = jsonData.results.filter(data => data.type === "Trailer");
        const movieTrailer = filterData[0];
        // console.log("filterData === ", filterData)
        // console.log("movieTrailer === ", movieTrailer)
        dispatch(addMovieTrailer(movieTrailer));
    }

    useEffect(() => {
        !movieTrailer && getMovieVideos();   // Memoization
    }, [])
}

export default useMovieTrailer;