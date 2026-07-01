import { IMAGE_CDN_URL } from "../utils/constants";

const MovieCard = ({posterPath, title}) => {
    return (
        <div className="w-48 mr-8">
            <img src={IMAGE_CDN_URL+posterPath} alt={title} />
        </div>
    )
}

export default MovieCard;