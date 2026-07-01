import { useSelector } from "react-redux";
import MovieList from "./MovieList";

const SecondaryContainer = () => {
    const movies = useSelector(store => store.movies);
    // console.log("movies === ", movies)
    if(!movies) return;
    const nowPlayingMovies = movies?.nowPlayingMovies;
    const popularMovies = movies?.popularMovies;
    const topRatedMovies = movies?.topRatedMovies;
    const upcomingMovies = movies?.upcomingMovies;
    if(!nowPlayingMovies || !popularMovies || !topRatedMovies || !upcomingMovies) return;
    // console.log("popularMovies ==== ", popularMovies)
    return (
        <div className="bg-black">
            <div className="-mt-80 z-10 relative">
                <MovieList title="Now Playing" movies={nowPlayingMovies} />
                <MovieList title="Popular" movies={popularMovies} />
                <MovieList title="Top Rated" movies={topRatedMovies} />
                <MovieList title="Upcoming" movies={upcomingMovies} />
            </div>
        </div>
    )
}

export default SecondaryContainer;