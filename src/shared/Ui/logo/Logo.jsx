import React from "react";
import "./Logo.scss";

function Logo() {
  return (
    <div className="auth__container__logo">
      <div className="logo">
        <div className="logo__box logo__box--yellow">M</div>
        <div className="logo__box logo__box--dark">H</div>
        <div className="logo__text">
          <div className="logo__text--top">MENTOR</div>
          <div className="logo__text--bottom">hub</div>
        </div>
      </div>
    </div>
  );
}

export default Logo;
