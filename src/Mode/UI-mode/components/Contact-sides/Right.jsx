import React from "react";
import "./ContactSides.css";
import { ScrollRotate } from "react-scroll-rotate";

const Right = () => {
  return (
    <div className="right-side">
      <a href="Nqobilengobeni.dev@gmail.com">
        <p className="email-link">
          Nqobilengobeni.dev
          <span>
            <ScrollRotate>
              <i className="bi bi-at" style={{ fontSize: "25px" }} />
            </ScrollRotate>
          </span>
          gmail.com
        </p>
      </a>
      <span className="separator"></span>
    </div>
  );
};

export default Right;
