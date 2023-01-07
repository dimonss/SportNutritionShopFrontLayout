import React from "react";
import "./product_card.scss";
import Rating from "../Rating/Rating";
import strings from "../../../constants/strings";

const ProductCard = ({ data }) => {
  const { title, description, img, rating, price, oldPrice = null } = data;
  console.log("oldPrice");
  console.log(oldPrice);

  return (
    <div className="product-card">
      <div className="product-card__inner">
        <div className="product-card__img">
          <img src={img} alt={title} />
        </div>
        <div className="product-card__title">{title}</div>
        <div className="product-card__description">{description}</div>
        <Rating rating={rating} />
        <div className="product-card__price">
          {oldPrice && (
            <div className="product-card__price__old">{`-${oldPrice}c.-`}</div>
          )}
          <div className="product-card__price__actual">{price + "c."}</div>
        </div>
      </div>
      <div className="product-card__button__container">
        <div className="product-card__button">{strings.add_to_cart}</div>
      </div>
    </div>
  );
};

export default ProductCard;
