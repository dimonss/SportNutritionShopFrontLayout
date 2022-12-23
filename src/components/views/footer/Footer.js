import React from 'react';
import strings from "../../../constants/strings";
import {Link} from "react-router-dom";
import "./footer.scss";
import Contacts from "../../reusable/Contacts/Contacts";
import {ReactComponent as Facebook} from "../../../images/icon/Icon/Social/Facebook.svg";
import {ReactComponent as Instagram} from "../../../images/icon/Icon/Social/Instagram.svg";
import {ReactComponent as Vk} from "../../../images/icon/Icon/Social/VK.svg";
import {ReactComponent as Youtube} from "../../../images/icon/Icon/Social/Youtube.svg";

const links = [
    {
        title: strings.services,
        list: [
            {name: strings.about_us, link: "/about"},
            {name: strings.faq, link: "/faq"},
            {name: strings.contacts, link: "/contacts"},
            {name: strings.news, link: "/news"},
            {name: strings.actions_and_special_offers, link: "/actions_and_special_offers"},
            {name: strings.list_of_stores_branches_dealers, link: "/list_of_stores_branches_dealers"},
            {name: strings.documents_and_disclosure, link: "/documents_and_disclosure"},
        ]
    },
    {
        title: strings.product_catalog,
        list: [
            {name: strings.collagen, link: "/collagen"},
            {name: strings.isotonics, link: "/isotonics"},
            {name: strings.creatine, link: "/creatine"},
            {name: strings.protein, link: "/protein"},
            {name: strings.protein_bars, link: "/protein_bars"},
            {name: strings.proteins_jams, link: "/proteins_jams"},
            {name: strings.protein_cookie, link: "/protein_cookie"},
        ]
    }
];

const Footer = () => {
    return (
        <div className="footer">
            <div className="footer__inner">
                {links.map((item, index) => <div key={index} className="footer__links__container">
                    <div className="footer__links__title">{item.title}</div>
                    {item.list.map((item, index) => <Link key={index} className="footer__links__item"
                                                          to={item.link}>{item.name}</Link>)}
                </div>)}
                <div className="footer__social__container">
                    <Contacts/>
                    <div className="footer__icons__container">
                        <Facebook/>
                        <Instagram/>
                        <Vk/>
                        <Youtube/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;