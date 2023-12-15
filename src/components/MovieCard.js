import { Link } from "react-router-dom";
import { IMG_URL_CDN } from "../utils/constants";

const MovieCard = ({ movieId, posterPath }) => {
  return (
    <Link to={`/trailer/${movieId}`}>
      <div className="w-48 pr-4 hover:cursor-pointer">
        <img
          className="hover:opacity-60"
          src={IMG_URL_CDN + posterPath}
          alt=""
        />
      </div>
    </Link>
  );
};

export default MovieCard;
