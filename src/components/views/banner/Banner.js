import React, {useState} from 'react';
import "./banner.scss";
import strings from "../../../constants/strings";
import buttle from "../../../images/banner/bottles.png";
import ListIndicator from "../../reusable/ListIndicator/ListIndicator";

const Banner = () => {
  const [page, setPage] = useState(1);
  return (
      <div className="banner">
        <div className="banner__wrapper">
          <div className="banner__inner">
            <div className="banner__text__container">
              <div className="banner__text__title">{strings.fitness_food_factory}</div>
              <div className="banner__text__subtitle">{strings.banner_description}</div>
            </div>
            <img src={buttle} alt={strings.drink}/>
          </div>
          <div className="banner__indicator-container">
            <ListIndicator pointAmount={3} activePoint={page} setPoint={setPage}/>
          </div>
        </div>
      </div>
  );
};

export default Banner;