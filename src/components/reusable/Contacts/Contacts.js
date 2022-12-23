import React from 'react';
import contact from "../../../constants/contacts";
import "./contacts.scss";
import {ReactComponent as TelegramIc} from "../../../images/social_network_Icon/telegram_ic.svg";
import {ReactComponent as WhatsappIc} from "../../../images/social_network_Icon/whatsapp_ic.svg";

const Contacts = () => (
    <div className="contacts__contact">
        <div className="contacts__contact__phone">{contact.phone_number}</div>
        <div className="social__cycle contacts__contact__telegram"><TelegramIc/></div>
        <div className="social__cycle contacts__contact__whatsapp"><WhatsappIc/></div>
    </div>
);

export default Contacts;