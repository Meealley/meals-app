import React from "react";
import "./Header.css";
import mealsImage from "../../assets/meals.jpeg";
import HeaderCartButton from "./HeaderCartButton";

const Header = (props) => {
  return (
    <div>
      <header className="header">
        <h1>Mujfood</h1>
        {/* <button></button> */}
        <HeaderCartButton onShowCart={props.onShowCart} />
      </header>
      <div className="main-image">
        <img src={mealsImage} alt="A table of food" />
      </div>
    </div>
  );
};

export default Header;
