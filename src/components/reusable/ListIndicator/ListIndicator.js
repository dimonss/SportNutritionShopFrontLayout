import React from 'react';
import "./list_indicator.scss"
import PropTypes from "prop-types";


const ListIndicator = ({pointAmount = 3, activePoint = 2, setPoint}) => {
    return (
        <div className="indicator">
            <div className="indicator__inner">
                {
                    [...Array(pointAmount).keys()].map(item => (
                        <div key={item}
                             className={`indicator__item ${item === activePoint ? "indicator__item__active" : ""}`}
                             onClick={() => setPoint(item)}></div>
                    ))}
            </div>
        </div>
    );
};

ListIndicator.prototype = {
    pointAmount: PropTypes.number,
    activePoint: PropTypes.number,
    setPoint: PropTypes.func,
}

export default ListIndicator;