import React from "react";
import "./dropdown.scss";
import { useNavigate } from "react-router-dom";

const Dropdown = ({ navData = [], close }) => {
  const navigate = useNavigate();
  return (
    <ul className="dropdown">
      {navData.map((item, index) => (
        <li key={index} className="dropdown__item">
          <button
            onClick={() => {
              navigate(item.url);
              close();
            }}
          >
            {item.name}
          </button>
        </li>
      ))}
    </ul>
  );
};

export default Dropdown;
