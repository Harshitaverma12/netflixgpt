import React from "react";
import { IMG_CDN_URL } from "../utils/Constants";

const MovieCard = ({ posterPath }) => {
  if (!posterPath) return null;
  return (
    <div className="pr-2">
      <img src={IMG_CDN_URL + posterPath} alt="poster" />
    </div>
  );
};

export default MovieCard;
