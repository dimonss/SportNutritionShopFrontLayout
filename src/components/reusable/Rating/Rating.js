import React from "react";
import "./rating.scss";
import { ReactComponent as Star } from "../../../images/icon/star.svg";

const MAX_RATING = 5;
const Rating = ({ rating }) => {
  return (
    <div className="rating">
      <div className="rating__inner">
        {[...Array(MAX_RATING).keys()].map((item) => (
          <div
            key={item}
            className={`rating__star ${
              rating > item + 1 ? "enable" : "disable"
            }`}
          >
            <Star />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Rating;
