import React, { useState } from "react";
import "./navbar.scss";
import { ReactComponent as Search } from "../../../images/icon/Icon_Search.svg";
import { ReactComponent as Icon } from "../../../images/icon/Icon_Menu.svg";
import { ReactComponent as Arrow } from "../../../images/icon/Icon_Arrow.svg";
import strings from "../../../constants/strings";
import Dropdown from "../header/Dropdown";

const mockUrl = "/test_";

const navData = [
  { name: strings.collagen, url: mockUrl + 1 },
  { name: strings.isotonics, url: mockUrl + 2 },
  { name: strings.creatine, url: mockUrl + 3 },
  { name: strings.protein, url: mockUrl + 4 },
  { name: strings.protein_bars, url: mockUrl + 5 },
  { name: strings.proteins_jams, url: mockUrl + 6 },
  { name: strings.protein_cookie, url: mockUrl + 7 },
];
const Navbar = () => {
  const [open, setOpen] = useState(false);
  return (
    <div className="navbar">
      <div className="navbar__inner">
        <div className="navbar__buttons-container">
          <div
            className={`navbar__dropdown${open ? " open" : ""}`}
            onClick={() => {
              setOpen((prevState) => !prevState);
            }}
          >
            <Icon />
            <div>{strings.catalog}</div>
            <Arrow />
          </div>
          {open && (
            <Dropdown
              navData={navData}
              close={() => {
                setOpen(false);
              }}
            />
          )}
          <div className="navbar__button">{strings.about_us}</div>
          <div className="navbar__button">{strings.where_bue}</div>
          <div className="navbar__button">{strings.contacts}</div>
        </div>
        <div className="navbar__search">
          <Search />
        </div>
      </div>
    </div>
  );
};

Navbar.propTypes = {};

export default Navbar;
