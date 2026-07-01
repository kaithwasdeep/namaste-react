import MovieCard from "./MovieCard";

const MovieList = ({title, movies}) => {

    return (
        <div className="pt-5">
            <h1 className="m-3  font-bold text-xl text-white">{title}</h1>
            <div className="ml-3 flex overflow-x-scroll">
                <div className="flex">
                    {
                        movies.map(movie => <MovieCard posterPath={movie.poster_path} title={movie.original_title} key={movie.id} />)
                    }
                </div>
            </div>
        </div>
    )
}

export default MovieList;