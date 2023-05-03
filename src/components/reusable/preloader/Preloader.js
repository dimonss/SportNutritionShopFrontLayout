import React from "react";
import "./preloader.scss";
import PropTypes from "prop-types";

const Preloader = ({ size, isStatic }) => (
    <div className="preloader">
        <div className={isStatic ? "pre-container_static" : "pre-container"}>
            <i className="circle-preloader" style={size && { width: `${size}px`, height: `${size}px`, borderWidth: size / 15 }} />
        </div>
    </div>
);

Preloader.propTypes = {
    size: PropTypes.number,
    isStatic: PropTypes.bool,
};

export default Preloader;
