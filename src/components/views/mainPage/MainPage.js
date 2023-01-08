import React, { useState } from "react";
import "./main_page.scss";
import peanut_butter from "../../../images/mock_images/image 3-2.png";
import peanut_butter_classic from "../../../images/mock_images/image 1-1.png";
import cookie from "../../../images/mock_images/image 14.png";
import cookie_black from "../../../images/mock_images/image 15.png";

import wake_up from "../../../images/mock_images/image 2-1.png";
import peanut_butter_chocolate from "../../../images/mock_images/image 2-2.png";
import peanut_butter_indian from "../../../images/mock_images/image 4.png";
import peanut_butter_creamy from "../../../images/mock_images/image 4-1.png";

import wake_up_red from "../../../images/mock_images/image 3.png";
import peanut_butter_coco from "../../../images/mock_images/image 2.png";
import wake_up_yellow from "../../../images/mock_images/image 1.png";
import peanut_butter_protein from "../../../images/mock_images/image 3-1.png";
import strings from "../../../constants/strings";
import ProductCard from "../../reusable/ProductCard/ProductCard";
import ListIndicator from "../../reusable/ListIndicator/ListIndicator";

const mockBestsellers = [
  {
    title: "PEANUT BUTTER",
    description: "Натуральная арахисовая паста (Классическая)",
    img: peanut_butter_classic,
    rating: 5,
    price: 1200,
  },
  {
    title: "Печенье PRIMEBAR MIX (10 шт*35 гр)",
    description: "Низкокалорийное печень Bombbar",
    img: cookie,
    rating: 4,
    price: 890,
  },
  {
    title: "PEANUT BUTTER",
    description: "Натуральная арахисовая паста (Тропическая)",
    img: peanut_butter,
    rating: 5,
    price: 900,
    oldPrice: 1150,
  },
  {
    title: "Печенье PRIMEBAR MIX (10 шт*35 гр)",
    description: "Низкокалорийное печень Bombbar",
    img: cookie_black,
    rating: 4,
    price: 750,
  },
];
const mockNew = [
  {
    title: "WAKE UP",
    description: "Энергетик без сахара со вкусом  малины (Raspberry mint)",
    img: wake_up,
    rating: 5,
    price: 950,
  },
  {
    title: "WAKE UP",
    description: "Энергетик без сахара и ароматный сочный арбуз (Шоколадная).",
    img: peanut_butter_chocolate,
    rating: 4,
    price: 1200,
  },
  {
    title: "WAKE UP",
    description: "Натуральная арахисовая паста  (Индийская)",
    img: peanut_butter_indian,
    rating: 5,
    price: 1230,
  },
  {
    title: "WAKE UP",
    description: "Натуральная арахисовая паста (Кремовая)",
    img: peanut_butter_creamy,
    rating: 4,
    price: 1950,
  },
];
const mockPromotion = [
  {
    title: "WAKE UP",
    description: "Энергетик без сахара со вкусом ягодного микса (Berry Mix)",
    img: wake_up_red,
    rating: 5,
    price: 890,
    oldPrice: 1000,
  },
  {
    title: "PEANUT BUTTER",
    description:
      "Натуральная арахисовая паста от Fitness Food Factory (Кокосовая)",
    img: peanut_butter_coco,
    rating: 5,
    price: 1150,
    oldPrice: 1240,
  },
  {
    title: "WAKE UP",
    description:
      "Энергетик без сахара со вкусом  игристого напитка (Champagne)",
    img: wake_up_yellow,
    rating: 4,
    price: 920,
    oldPrice: 1000,
  },
  {
    title: "PEANUT BUTTER",
    description:
      "Натуральная арахисовая паста от Fitness Food Factory (Протеиновая)",
    img: peanut_butter_protein,
    rating: 5,
    price: 1050,
    oldPrice: 1190,
  },
];

const commonData = [
  { title: strings.bestsellers, data: mockBestsellers },
  { title: strings.new, data: mockNew },
  { title: strings.products_for_promotion, data: mockPromotion },
];
const MainPage = () => {
  const [page, setPage] = useState(1);
  return (
    <div className="main-page">
      <div className="main-page__inner">
        {commonData.map((item) => (
          <div className="main-page__card">
            <div className="main-page__title">{item.title}</div>
            <div className="main-page__card__inner">
              {item.data.map((item) => (
                <ProductCard data={item} />
              ))}
            </div>
            <div className="main-page__indicator__container">
              <ListIndicator
                pointAmount={3}
                activePoint={page}
                setPoint={setPage}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MainPage;
