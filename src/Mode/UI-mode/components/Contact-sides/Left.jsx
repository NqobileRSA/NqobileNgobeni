import React from "react";
import "./ContactSides.css";
import { socials } from "../../constants";
import { ScrollRotate } from "react-scroll-rotate";

const Left = () => {
  return (
    <div className="left-side">
      <div className="social-links">
        {socials.map((item) => (
          <a
            href={item.link}
            target="_blank"
            rel="noopener noreferrer"
            key={item.id}>
            <span className="social-icon">
              <ScrollRotate>
                <i className={item.icon}></i>
              </ScrollRotate>
            </span>
          </a>
        ))}
      </div>
      <div className="separator"></div>
    </div>
  );
};

export default Left;
