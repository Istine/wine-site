import React, { useContext, useState, useMemo } from "react";

import { Link } from "react-router-dom";
import { ToggleContext } from "../../context/MenuContext";

const MobileLayout: React.FC<{}> = ({ children }) => {
  const { status, toggle } = useContext(ToggleContext);

  return (
    <>
      {status === "show" && (
        <div onClick={() => toggle("hide")} className="shadow"></div>
      )}
      <div className={`mobileLayout ${status}`}>
        <ul>
          <span onClick={() => toggle("hide")} className="title">
            X
          </span>
          <Link to="/">
            <li className="title">Winery</li>
          </Link>
          <Link to="/about-us">
            <li>About Us</li>
          </Link>
          <Link to="/our-story">
            <li>Our Picstory</li>
          </Link>
          <Link to="/contact-us">
            <li>Contact Us</li>
          </Link>
        </ul>
      </div>
    </>
  );
};

export default MobileLayout;
