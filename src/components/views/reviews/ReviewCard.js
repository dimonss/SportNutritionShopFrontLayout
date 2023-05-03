import React from "react";
import "./Review_card.scss";
import PropTypes from "prop-types";
import defaultPhoto from "../../../images/reviews/mock/dima.png";
import Preloader from "../../reusable/preloader/Preloader";

const ReviewCard = ({ data, isLoading }) => (
  <div className="review-card">
    <div className="review-card__top">
      <div className="review-card__photo">
        {isLoading ? (
          <Preloader size={50} />
        ) : (
          <img
            src={data?.photo}
            onError={(e) => {
              e.target.src = defaultPhoto;
            }}
            alt={data.name + "`s photo"}
          />
        )}
      </div>
      <div className="review-card__info">
        <div className="review-card__info__name">{data?.name}</div>
        <div className="review-card__info__position">{data?.position}</div>
      </div>
    </div>
    <div className="review-card__bottom">
      <div className="review-card__bottom__description">
        {isLoading ? <Preloader size={80} /> : data?.content}
      </div>
    </div>
  </div>
);

ReviewCard.propTypes = {
  data: PropTypes.object.isRequired,
  isLoading: PropTypes.bool,
};

export default ReviewCard;
