import React from 'react';
import "./navbar.scss";
import {ReactComponent as Search} from "../../../images/icon/Icon_Search.svg";
import {ReactComponent as Icon} from "../../../images/icon/Icon_Menu.svg";
import {ReactComponent as Arrow} from "../../../images/icon/Icon_Arrow.svg";
import strings from "../../../constants/strings";

const Navbar = () => {
    return (
        <div className="navbar">
            <div className="navbar__inner">
                <div className="navbar__buttons-container">
                    <div className="navbar__dropdown">
                        <Icon/>
                        <div>{strings.catalog}</div>
                        <Arrow/>
                    </div>
                    <div className="navbar__button">{strings.about_us}</div>
                    <div className="navbar__button">{strings.where_bue}</div>
                    <div className="navbar__button">{strings.contacts}</div>
                </div>
                <div className="navbar__search"><Search/></div>
            </div>
        </div>
    );
};

Navbar.propTypes = {};

export default Navbar;