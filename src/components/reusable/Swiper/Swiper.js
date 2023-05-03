import React from "react";
import "swiper.scss";
import PropTypes from "prop-types";

const Swiper = ({ children }) => {
  return (
    <div className="container">
      <div className="content">
        <div className="swiper-container">
          <div className="swiper-wrapper">{children}</div>
          <div className="swiper-pagination"></div>
        </div>
      </div>
    </div>
  );
};

Swiper.propTypes = { children: PropTypes.object.isRequired };

export default Swiper;
