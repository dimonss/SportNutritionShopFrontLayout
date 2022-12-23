import React from 'react';
import "./Review_card.scss";
import PropTypes from "prop-types";
import defaultPhoto from "../../../images/reviews/mock/dima.png"

const ReviewCard = ({data}) => (
    <div className="review-card">
        <div className="review-card__top">
            <div className="review-card__photo">
                <img src={data?.photo} onError={e => {
                    e.target.src = defaultPhoto;
                }} alt={data.name + "`s photo"}/></div>
            <div className="review-card__info">
                <div className="review-card__info__name">
                    {data?.name}
                </div>
                <div className="review-card__info__position">
                    {data?.position}
                </div>
            </div>
        </div>
        <div className="review-card__bottom">
            <div className="review-card__bottom__description">
                {data?.content}
            </div>
        </div>
    </div>
);

ReviewCard.propTypes = {
    data: PropTypes.object.isRequired,
}

export default ReviewCard;