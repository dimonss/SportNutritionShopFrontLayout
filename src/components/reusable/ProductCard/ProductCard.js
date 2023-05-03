import React, { useEffect, useState } from "react";
import "./product_card.scss";
import Rating from "../Rating/Rating";
import strings from "../../../constants/strings";
import Preloader from "../preloader/Preloader";
import { useNavigate, useParams } from "react-router-dom";
import { PRODUCT_RAW } from "../../../urls";

const ProductCard = ({ data }) => {
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  }, []);
  const { id, title, description, img, rating, price, oldPrice = null } = data;

  const navigate = useNavigate();
  const idParam = useParams("id");
  console.log(idParam);
  return (
    <div
      className="product-card"
      onClick={() => {
        navigate(PRODUCT_RAW + "/" + id);
      }}
    >
      {isLoading ? (
        <Preloader size={40} />
      ) : (
        <>
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
        </>
      )}
    </div>
  );
};

export default ProductCard;
