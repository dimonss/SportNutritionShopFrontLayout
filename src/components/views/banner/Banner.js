import React, { useState, useEffect } from "react";
import "./banner.scss";
import strings from "../../../constants/strings";
import bottles from "../../../images/banner/bottles.png";
import ListIndicator from "../../reusable/ListIndicator/ListIndicator";

const CONTENT_POSITION = [0, -100, -200];
const Banner = () => {
  const [page, setPage] = useState(0);
  const [enableSwipe, setEnableSwipe] = useState(false);
  useEffect(() => {
    if (enableSwipe) {
      const timer = setInterval(() => {
        setPage((currentValue) =>
          currentValue >= CONTENT_POSITION.length - 1 ? 0 : currentValue + 1
        );
      }, 5000);
      return () => clearInterval(timer);
    }
  }, [enableSwipe]);
  useEffect(() => {
    const timer = setTimeout(() => {
      setPage(1);
      setEnableSwipe(true);
    }, 1200);
    return () => clearTimeout(timer);
  }, []);
  return (
    <div className="banner">
      <div className="banner__wrapper">
        <div className="banner__inner">
          <div
            className="banner__inner__container"
            style={{ "margin-left": CONTENT_POSITION[page] + "%" }}
          >
            <div className="banner__item">
              <div className="banner__text__container">
                <div className="banner__text__title">
                  {strings.fitness_food_factory}
                </div>
                <div className="banner__text__subtitle">
                  {strings.banner_description}
                </div>
              </div>
              <img src={bottles} alt={strings.drink} />
            </div>
            <div className="banner__item">
              <div className="banner__text__container">
                <div className="banner__text__title">
                  {strings.fitness_food_factory}
                </div>
                <div className="banner__text__subtitle">
                  {strings.banner_description}
                </div>
              </div>
              <img src={bottles} alt={strings.drink} />
            </div>
            <div className="banner__item">
              <div className="banner__text__container">
                <div className="banner__text__title">
                  {strings.fitness_food_factory}
                </div>
                <div className="banner__text__subtitle">
                  {strings.banner_description}
                </div>
              </div>
              <img src={bottles} alt={strings.drink} />
            </div>
          </div>
        </div>

        <div className="banner__indicator-container">
          <ListIndicator
            pointAmount={3}
            activePoint={page}
            setPoint={setPage}
          />
        </div>
      </div>
    </div>
  );
};
export default Banner;
