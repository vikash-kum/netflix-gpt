import { IMG_URL_CDN } from "../utils/constants";

const MovieCard = ({ posterPath }) => {
  return (
    <div className="w-48 pr-4">
      <img src={IMG_URL_CDN + posterPath} alt="" />
    </div>
  );
};

export default MovieCard;
