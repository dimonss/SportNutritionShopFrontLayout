import React, { useState } from "react";
import "./header.scss";
import { ReactComponent as MainLogo } from "../../../images/logo/main.svg";
import { ReactComponent as StoreBasket } from "../../../images/icon/store_basket.svg";
import Contacts from "../../reusable/Contacts/Contacts";

const Header = () => {
  const [amountOfGoods, setAmountOfGoods] = useState(0);
  return (
    <header className="header">
      <div className="header__inner">
        <div className="header__logo">
          <MainLogo />
        </div>
        <Contacts />
        <div
          className="header__store-basket"
          onClick={() => {
            setAmountOfGoods(amountOfGoods + 1);
          }}
        >
          <div className="header__store-basket__indicator">{amountOfGoods}</div>
          <StoreBasket />
        </div>
      </div>
    </header>
  );
};

Header.propTypes = {};

export default Header;
